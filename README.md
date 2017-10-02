# A well-composed frontend
This is an example app to show how to build a flexible and modular frontend. The main technologies used are [Vue](https://vuejs.org) together with [Vuex](https://vuex.vuejs.org/en/) and [Nuxt.js](https://nuxtjs.org/) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer).

The two main goals of a well-composed frontend are: a solid user experience and a solid developer experience. The former is achieved by building a fast (instantly) loading site with app like behaviour. The later is solved by building upon a solid framework and using components (custom and ready-made) to keep the code DRY.

To enable (almost) instant loading, server side rendering is utilized to speed up the first view. Vue serves as a very solid framework to build mighty apps upon. Vuex is used to manage the state of the app.

The combination of webpack and node-sass-magic-importer makes it possible to modularize every aspect of the frontend workflow. Frontend developers are using JavaScript modules for quite some time now and with ES6 it got even more comfortable doing so. Although Sass made it much easier to also modularize your CSS code it is still laking an easy way to load styles from third party modules. For this project [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) is used to load styles from [avalanche](https://avalanche.oberlehner.net/) packages.

## Getting started
- `npm install` Install dependencies.
- `npm run dev` Serve with hot reload at localhost:3000.
- `npm run build` Build for production.
- `npm start` Launch server.
- `npm run generate` Generate static project.

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Known issues
Because of the way how [vue-loader](https://github.com/vuejs/vue-loader) handles options, it is currently not possible to specify a custom importer function like node-sass-magic-importer in the [sass-loader](https://github.com/webpack-contrib/sass-loader) options. See https://github.com/vuejs/vue-loader/issues/673 to track the current status of this issue.

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
