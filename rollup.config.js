import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import url from "rollup-plugin-url";


export default {
  input: 'src/index.ts',
  output: [
		{ format: 'es', file: './lib/joykit.esm.js' }
  ],
  sourcemap: true,
  treeshake: true,
  
  name: 'joykit',
  external: [
    'react',
    'react-dom',
    'glamor',
    'velocity-react',
    'rxjs',
    'moment',
    'react-portal',
    'react-router-dom'
  ],
  globals: {
    react: 'react'
  },
  plugins:[ 
    typescript(),
    resolve({
      preferBuiltins: false
    }),
    commonjs(),
    url({
      limit: 100 * 1024,
      include: [
        "**/*.svg",
        "**/*.png",
        "**/*.jpg"
      ]
    })
  ]
};
