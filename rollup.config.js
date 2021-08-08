import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
    },
    external: ['path', 'fs'],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },
];
