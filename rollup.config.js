import { defineConfig } from 'rollup';

// 官方plugin
import commonjs from '@rollup/plugin-commonjs';
// rollup 没法直接引入第三方包到 bundle
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';

// 自定义plugin
import bundleReplace from './plugins/rollup-plugin-replace-bundle.js';

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: './lib/index.esm.js',
      format: 'es',
    },
    {
      file: './lib/index.cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    del({ targets: 'lib/*' }),
    resolve(),
    typescript(),
    commonjs(),
    bundleReplace(),
  ],
});
