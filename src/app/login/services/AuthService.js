'use strict';

module.exports = AuthService;

/**
 * @ngInject
 */
function AuthService() {
    var AuthService = {
        login: login
    };

    return AuthService;

    //////////

    function login() {
    	return 'Thanks for logging in! You will now be redirected to the dashboard.';
    }
}

