# Vue Toast Component

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-toast-package.svg)](http://npm-stats.com/~packages/vue-toast-package)
[![npm-version](https://img.shields.io/npm/v/vue-toast-package.svg)](https://www.npmjs.com/package/vue-toast-package)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-toast-package.svg?maxAge=1800)](https://github.com/ankurk91/vue-toast-package/)
[![license](https://img.shields.io/github/license/ankurk91/vue-toast-package.svg?maxAge=1800)](https://yarnpkg.com/en/package/vue-toast-package)

Yet another Vue.js Toast plugin.

:warning: This package has not been released yet. Package name and API is subject to change.

## Demo on [JSFiddle](https://jsfiddle.net)

## Installation
```bash
# npm
npm install vue-toast-package --save

# Yarn
yarn add vue-toast-package
```

## Usage
```js
import Vue from 'vue';
import VueToast from 'vue-toast-package';
import 'vue-toast-package/dist/vue-toast.css';

Vue.use(VueToast);
Vue.$toast.open('message text');
Vue.$toast.open({/* options */});
```

## Available options
The API methods accepts these options:

| Attribute        | Type                | Default              | Description      |
| :---             | :---:               | :---:                | :---             |
|  message         | String              | --                   |  Message text (required)   |
|  type            | String              | `success`            |  One of `success`, `info`, `warning`, `error`, `default`  |
|  position        | String              | `bottom-right`       |  One of `top`, `bottom`, `top-right`, `bottom-right`, `top-left`, `bottom-left`  |
|  duration        | Number              | `3000`               |  Visibility duration in milliseconds    |
         
## API methods

## Install in non-module environments (without webpack)
```html
<!-- Vue js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-toast-package@1"></script>
<link href="https://cdn.jsdelivr.net/npm/vue-toast-package@1/dist/vue-toast.css" rel="stylesheet">
<!-- Init the plugin -->
<script>
Vue.use(VueToast);
</script>
```

### Browser support
* [Modern](http://browserl.ist/?q=defaults%2C+not+ie+%3E+0%2Cnot+ie_mob+%3E+0) browsers only

## Run examples on your localhost
* Clone this repo
* Make sure you have node-js `>=6.10` and [yarn](https://yarnpkg.com) `>=1.x` pre-installed
* Install dependencies - `yarn install`
* Run webpack dev server - `yarn start`
* This should open the demo page at `http://localhost:9000` in your default web browser 

## Credits
* Buefy [Toast](https://buefy.github.io/documentation/toast) component

## License
[MIT](LICENSE.txt) License
