
/* IMPORT */

import path from 'node:path';
import {defineConfig} from 'vite';
import view from 'view-vite';

/* MAIN */

const config = defineConfig ({
  plugins: [
    view ()
  ],
  resolve: {
    alias: {
      '~': path.resolve ( __dirname, '../../src' ),
      view: process.argv.includes ( 'dev' ) ? path.resolve ( __dirname, '../../packages/view' ) : 'view'
    }
  }
});

/* EXPORT */

export default config;
