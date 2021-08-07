import node_resolve from 'rollup-plugin-node-resolve';
// rollup: deprecated format
// export default {
//   entry: 'lib/es6/overbots.js',
//   format: 'iife',
//   dest: '/release/overbots-bundled.js'
// };
// rollup: new format
export default {
  input: './lib/es6/src/overbots.js',
  output: {
    format: 'iife',
    file: './release/overbots-bundled.js',
    name: 'overbots'
  },
  plugins: [
    node_resolve({ module: true, browser: true })
  ]
};
