import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";
import {getBabelOutputPlugin} from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import importMap from '@eik/rollup-plugin-import-map';

import conf from './package.json';

export default [{
  input: 'src/js/main.js',
  context: 'window',
  preserveEntrySignatures: false,
  output: [
    {
      dir: 'dist/js',
      format: 'es',
      sourcemap: false,
      compact: true,
      entryFileNames: '[name].js',
      chunkFileNames: '[name].[hash].js'
    }
  ],
  plugins: [
    importMap({
      maps: [{
        imports: conf.imports
      }],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser(),
    serve('')
  ]
},
{
  input: 'src/js/main.es5.js',
  context: 'window',
  preserveEntrySignatures: false,
  output: {
    dir: 'dist/js',
    format: 'esm',
    entryFileNames: '[name].js',
    chunkFileNames: '[name].es5.[hash].js',
    plugins: [
      getBabelOutputPlugin({
        presets: [['@babel/env', { modules: 'amd',
          targets: {
            "ie": "11"
          },
          useBuiltIns: 'entry',
          corejs: "3.8"
        }]]
      }),
    ],
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // terser()
  ]
},
{
  input: 'src/js/main.legacy.js',
  context: 'window',
  preserveEntrySignatures: false,
  output: {
    dir: 'dist/js',
    entryFileNames: '[name].js'
  }
}];
