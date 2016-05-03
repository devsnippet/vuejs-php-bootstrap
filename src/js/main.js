window.$ = window.jQuery = require('jquery'); // Include jQuery
require('bootstrap'); // Include Bootstrap JS

import Vue from 'vue'
import App from './components/App.vue'

new Vue({
    el: 'body',
    components: { App }
});
