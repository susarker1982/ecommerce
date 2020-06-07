// assets/js/app.js
'use strict';
import Vue from 'vue';
import Frontend from './components/Frontend';
/**
    * Create a fresh Vue Application instance
*/
new Vue({
  el: '#app',
  render: h1 => h1(Frontend)
});   
