'use strict';

var Firebase = require('firebase');

module.exports = require('angular')
    .module('bookbottles.showcase.dashboard', [
        require('angular-ui-router'),
        require('angularfire')
    ])
    .config(require('./route'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
    .factory('DataStore', require('./services/DataStore'))
    .name;
