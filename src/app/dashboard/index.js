'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.dashboard', [
        require('angular-ui-router')
    ])
    .config(require('./route'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
    .factory('DataStore', require('./services/DataStore'))
    .name;
