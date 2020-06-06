import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';

export default [
  {
    input: 'lib/index.js',
    output: {
      name: 'jsrmvi',
      file: 'dist/jsrmvi.min.js',
      format: 'iife',
    },
    plugins: [resolve(), commonjs(), minify({ comments: false })],
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'jsrmvi',
      file: 'dist/jsrmvi.js',
      format: 'iife',
    },
    plugins: [resolve(), commonjs()],
  },
];
