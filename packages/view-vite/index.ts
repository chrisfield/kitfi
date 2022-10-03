/* MAIN */

const vite = () => {

  return {
    name: 'view',
    config: () => {

      return {
        esbuild: {
          // jsxInject: `import {h as $$h, Fragment as $$F} from 'view';\n`,
          // jsxFactory: '$$h',
          // jsxFragment: '$$F'
          jsxFactory: 'jsx',
          jsxFragment: 'jsx.Fragment'
        }
      };

    }
  };

};

/* EXPORT */

export default vite;