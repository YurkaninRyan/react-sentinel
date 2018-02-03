'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var builtins = _interopDefault(require('builtin-modules'));
var resolveId = _interopDefault(require('resolve'));
var isModule = _interopDefault(require('is-module'));
var fs = _interopDefault(require('fs'));

var ES6_BROWSER_EMPTY = path.resolve( __dirname, '../src/empty.js' );
var CONSOLE_WARN = function () {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	return console.warn.apply( console, args );
}; // eslint-disable-line no-console

function nodeResolve ( options ) {
	if ( options === void 0 ) options = {};

	var useModule = options.module !== false;
	var useMain = options.main !== false;
	var useJsnext = options.jsnext === true;
	var isPreferBuiltinsSet = options.preferBuiltins === true || options.preferBuiltins === false;
	var preferBuiltins = isPreferBuiltinsSet ? options.preferBuiltins : true;
	var customResolveOptions = options.customResolveOptions || {};
	var jail = options.jail;
	var browserMapCache = {};

	var onwarn = options.onwarn || CONSOLE_WARN;

	if ( options.skip ) {
		throw new Error( 'options.skip is no longer supported — you should use the main Rollup `external` option instead' );
	}

	if ( !useModule && !useMain && !useJsnext ) {
		throw new Error( "At least one of options.module, options.main or options.jsnext must be true" );
	}

	return {
		name: 'node-resolve',

		resolveId: function resolveId$1 ( importee, importer ) {
			if ( /\0/.test( importee ) ) { return null; } // ignore IDs with null character, these belong to other plugins

			// disregard entry module
			if ( !importer ) { return null; }

			if (options.browser && browserMapCache[importer]) {
				var browser = browserMapCache[importer];
				if (browser[importee]) {
					importee = browser[importee];
				}
				if (browser[importee] === false) {
					return ES6_BROWSER_EMPTY;
				}
			}


			var parts = importee.split( /[\/\\]/ );
			var id = parts.shift();

			if ( id[0] === '@' && parts.length ) {
				// scoped packages
				id += "/" + (parts.shift());
			} else if ( id[0] === '.' ) {
				// an import relative to the parent dir of the importer
				id = path.resolve( importer, '..', importee );
			}

			return new Promise( function ( fulfil, reject ) {
				var disregardResult = false;
				var packageBrowserField = false;

				resolveId(
					importee,
					Object.assign({
						basedir: path.dirname( importer ),
						packageFilter: function packageFilter ( pkg ) {
							if (options.browser && typeof pkg[ 'browser' ] === 'object') {
								packageBrowserField = Object.keys(pkg[ 'browser' ]).reduce(function (browser, key) {
									browser[ key ] = pkg[ 'browser' ][key];
									if (key[0] === '.' && !path.extname(key)) { browser[ key + '.js'] = browser[ key + '.json' ] = browser[ key ]; }
									return browser;
								}, {});
							}

							if (options.browser && typeof pkg[ 'browser' ] === 'string') {
								pkg[ 'main' ] = pkg[ 'browser' ];
							} else if (options.browser && typeof pkg[ 'browser' ] === 'object' && pkg[ 'browser' ][ pkg[ 'main' ] ]) {
								pkg[ 'main' ] = pkg[ 'browser' ][ pkg[ 'main' ] ];
							} else if ( useModule && pkg[ 'module' ] ) {
								pkg[ 'main' ] = pkg[ 'module' ];
							} else if ( useJsnext && pkg[ 'jsnext:main' ] ) {
								pkg[ 'main' ] = pkg[ 'jsnext:main' ];
							} else if ( ( useJsnext || useModule ) && !useMain ) {
								disregardResult = true;
							}
							return pkg;
						},
						extensions: options.extensions
					}, customResolveOptions ),
					function ( err, resolved ) {
						if (options.browser && packageBrowserField) { browserMapCache[resolved] = packageBrowserField; }

						if ( !disregardResult && !err ) {
							if ( resolved && fs.existsSync( resolved ) ) {
								resolved = fs.realpathSync( resolved );
							}

							if ( ~builtins.indexOf( resolved ) ) {
								fulfil( null );
							} else if ( ~builtins.indexOf( importee ) && preferBuiltins ) {
								if ( !isPreferBuiltinsSet ) {
									onwarn(
										"preferring built-in module '" + importee + "' over local alternative " +
										"at '" + resolved + "', pass 'preferBuiltins: false' to disable this " +
										"behavior or 'preferBuiltins: true' to disable this warning"
									);
								}
								fulfil( null );
							} else if ( jail && resolved.indexOf( path.normalize( jail.trim( path.sep ) ) ) !== 0 ) {
								fulfil( null );
							}
						}

						if ( resolved && options.modulesOnly ) {
							fs.readFile( resolved, 'utf-8', function ( err, code ) {
								if ( err ) {
									reject( err );
								} else {
									var valid = isModule( code );
									fulfil( valid ? resolved : null );
								}
							});
						} else {
							fulfil( resolved );
						}
					}
				);
			});
		}
	};
}

module.exports = nodeResolve;
