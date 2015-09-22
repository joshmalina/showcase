'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),
        require('angulartics'),
        require('angulartics-google-analytics'),

        /* Custom */
        require('../signup'),
        require('../login'),
        require('../dashboard')
    ])
    .config(require('./config'))
    .config(require('./route'));
