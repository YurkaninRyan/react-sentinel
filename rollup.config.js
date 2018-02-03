import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'react-sentinel',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      babel({
        presets: [
          'react',
          [
            'env', {
              targets: {
                browsers: ['last 2 versions', 'safari >= 7'],
              },
              modules: false,
            },
          ],
        ],
        plugins: [
          'external-helpers',
          'transform-object-rest-spread',
          'transform-class-properties',
        ],
        babelrc: false,
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react/index.js': ['Children', 'PureComponent', 'PropTypes', 'createElement'],
          'node_modules/react-dom/index.js': ['render'],
        },
      }),
    ],
  },
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'prop-types'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      babel({
        presets: [
          'react',
          [
            'env', {
              targets: {
                browsers: ['last 2 versions', 'safari >= 7'],
              },
              modules: false,
            },
          ],
        ],
        plugins: [
          'external-helpers',
          'transform-object-rest-spread',
          'transform-class-properties',
        ],
        babelrc: false,
        exclude: 'node_modules/**',
      }),
    ],
  },
];
