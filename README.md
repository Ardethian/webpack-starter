# Webpack Starter
A Webpack Starter Kit, bundled with -
- Babel (es2015 preset)
- JavaScript & CSS minification
- CSS Reset
- CSS Hot Loader
- CSS Loader
- Sass Loader

## Installing
1. ```git clone https://github.com/Ardethian/webpack-starter && cd webpack-starter```
2. Simply use ```yarn``` or ```npm install```

## Scripts
* Start DevServer - ```yarn run dev``` or ```npm run dev```
    - Enables JavaScript and CSS Source Maps
    - Disables JS & CSS minification
    - Enables hot reloading

* Build for production - ```yarn run build``` or ```npm run build```
    - Disables Source Maps
    - Enables JS & CSS minification

## Multiple Output and Entry Points
To add more files to your bundle or create extra bundles (for example, vendor bundles), see the Webpack documentation about [Entry Points](https://webpack.js.org/concepts/entry-points/) and [Output](https://webpack.js.org/concepts/output/).

Cheers \m/