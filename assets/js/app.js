// assets/js/app.js
'use strict';
import Vue from 'vue';
import Frontend from './components/Frontend';
import router from './router';
/**
    * Create a fresh Vue Application instance
*/
new Vue({
  el: '#app',
  router,
  render: h1 => h1(Frontend)
});   
