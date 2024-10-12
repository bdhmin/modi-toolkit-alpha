import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',  // Main entry point
  output: {
    file: 'dist/index.js',
    format: 'cjs',        // CommonJS format for NPM packages
    sourcemap: true,      // Enable sourcemaps for debugging
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
  ],
  external: ['react', 'react-dom'], // Don't bundle React to avoid conflicts
};
