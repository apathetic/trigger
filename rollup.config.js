import buble from 'rollup-plugin-buble';
// import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/trigger.js',
  moduleName: 'Trigger',
  plugins: [
    buble(),
    // uglify()
  ],

  targets: [
    { dest: 'dist/trigger.cjs.js', format: 'cjs' },
    { dest: 'dist/trigger.es6.js', format: 'es' },
    { dest: 'dist/trigger.browser.js', format: 'iife' }
  ]
};
