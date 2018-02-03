# node-generate-release
Generate a release for a project following semver using nodejs and gitflow

[![Generate Release on Travis CI](https://img.shields.io/travis/mrkmg/node-generate-release/master.svg?style=flat-square)](https://travis-ci.org/mrkmg/node-generate-release/branches)
[![Coverage Status](https://img.shields.io/coveralls/mrkmg/node-generate-release/master.svg?style=flat-square)](https://coveralls.io/github/mrkmg/node-generate-release?branch=master)
[![Generate Release on NPM](https://img.shields.io/npm/v/generate-release.svg?style=flat-square)](https://www.npmjs.com/package/generate-release)
[![Generate Release uses the MIT](https://img.shields.io/npm/l/generate-release.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Current Version: 0.14.0

Requires NodeJS v4.0.0 or greater

![Generate Release Example](https://cloud.githubusercontent.com/assets/399561/16465518/272a62be-3e0d-11e6-8691-44441a3b0629.gif)


Usage
-----

You can either install `generate-release` globally or for a single project

__Globally__

Install package

    npm install -g generate-release

Navigate to your project and execute `generate-release`

__Locally__

    cd your/project
    npm install --save-dev generate-release
    
Then add the following to your `package.json` file:

    {
        "scripts": {
            "release": "generate-release"
        }
    }

Then you can run `npm run-script release` in order to generate a release.

####Important notes for OSX

Git-flow from nvie is broken on OSX, and `generate-release` will not work. Please use the updated and actively 
maintained version from petervanderdoes, 
[https://github.com/petervanderdoes/gitflow-avh](https://github.com/petervanderdoes/gitflow-avh). Please follow the 
[OSX Install Guide](https://github.com/petervanderdoes/gitflow-avh/wiki/Installing-on-Mac-OS-X)

What does it do?
----------------

This is the default process.

1. Verify the working directory is clean
1. Reads git-flow settings from repo config file
1. Reads Current version from package.json file and generates the new version
1. Fetches from `remote`
1. Rebases `remote`/develop into develop
1. Resets master to `remote`/master
1. Starts a git-flow release named the new version number
1. Changes the version number in package.json and any files in `files_to_version`
1. Runs all `pre_commit_commands`
1. Commits the changes to the package.json and any file in `files_to_version` and `files_to_commit`
    1. *This will also commit any file deletions which may have occurred during the `pre_commit_commands`*
1. Runs all `post_commit_commands`
1. Runs the git-flow finish release command
1. Pushes master, develop, and tags to `remote`
1. Runs all the `post_complete_commands`

*If any of the steps aside from the `post_complete_commands` step fail, the entire release is canceled and everything
is reset.*

*All commands are run in either `sh` or `cmd.exe`. If `sh` is available, even on windows, it will use that first.*

Options
--------

**CLI**

run `generate-release --help` to see this as well.

    -p, --package   FILE            Path to package.json file. Default: ./package.json
    -c, --current-version VERSION   Current Version. Default: read from package.json
    -v, --next-version VERSION      Next Version. Default: automatically bumps
    -t, --release-type TYPE         Release Type: patch, minor, major. Ignored when next-version is given. Default: prompt, if next-version is undefined
    -n, --no-confirm                Do not ask for confirmation. Default: prompt for confirmation
    -l, --skip-git-pull             Do not pull from origin and rebase master and dev. Default: Do pull
    -s, --skip-git-push             Do not push to origin when complete. Default: Do push
    -f, --skip-git-flow-finish      Do not finish git-flow release. Default: Do finish
    -d, --release-file FILE         Path to your .release.json file. Default: ./.release.json
    -o, --remote REMOTE             Change the remote. Default: origin
    -q, --quiet                     Less output. Default: Do show output
    -m, release-message [MESSAGE]   Set a release message. If no message given, prompt for one. Will replace
                                    "{version}" with the next version. Default: Release {version}

**Release File**

By default, the following options can be set in a `.release.json` file. The following
is an example with all default options set.

      {
          "package_file_location": "./package.json",
          "no_confirm": false,
          "skip_git_pull": false,
          "skip_git_push": false,
          "skip_git_flow_finish": false,
          "release_message": true,
          "remote": "origin",
          "pre_commit_commands": [],
          "post_commit_commands": [],
          "post_complete_commands": [],
          "files_to_commit": [],
          "files_to_version": ["README.md"]
      }
      
The `files_to_commit` and `files_to_version` use [node-glob](https://github.com/isaacs/node-glob). See the
documentation located there on how to format those options.

If `release_message` is true, then you will be prompted to write a release message via your editor of choice.

**package.json**

If you are using this for an NPM package, you can include all the above options in your package.json instead of 
a dedicated file.

Place all your configuration options in `config : generateRelease`.

    {
        ...
        "config": {
            "generateRelease": {
                "no_confirm": false,
                "remote": "origin"
            }
        },
        ...
    }

**Option Precedence**

Precedence is determined in the following order:

- CLI Argument
- package.json file
- .release.json file

Building Assets, Running Tests, and Publishing Package
--------------------------------

If you wish to build assets, run test, and/or publish your project automatically when the
release is being generated you can use the example `.release.json` file below. The
following assumptions are made:

- You have a script in your package file to build your assets named `build-assets`
- All your built assets are saved to `./build`
- You run your tests via the `npm test` command
- You publish your package via the `npm publish` command

.release.json

    {
        "pre_commit_commands": [
            "npm run-script build-assets"
        ],
        "post_commit_commands": [
            "npm test"
        ],
        "post_complete_commands": [
            "npm publish"
        ],
        "files_to_commit": [
            "./build/**/*"
        ]
    }

Usage on a Non NPM Based Repo
-----------------------------

It's quite simple to use this on a non NPM based repo. The only npm specific aspect baked into Generate Release is the
usage of the package.json file. In fact, you are able to use any json file which maintains a version property. If you
are working on a PHP project which uses [Composer](https://getcomposer.org), the composer.json already has the required
property. Either call generate-release with `-p composer.json` or set the `package_file_location` property of your
`.release.json` file.

If your project does not already contain a json file which maintains a version, you just use the `.release.json` 
file! Just put a version property in the file and set `package_file_location` to ".release.json".


Roadmap
-------

- Write tests **Partial**
- Code coverage for tests **Partial**
- ~~Change remote (not origin)~~
- ~~Allow for custom hook (like running gulp or grunt during release to prepare assets)~~
- ~~Ability to define arbitrary files to replace version in (like source code files, other MD's, etc)~~
- ~~Use and parse a .release file to parse defaults (instead of using cli switches)~~
- ~~Custom release message~~
- ~~Read git-flow configuration from .git folder~~
