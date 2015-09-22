'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService() {
    var UserService = {
        create: create
    };

    return UserService;

    //////////

    function create() {
    	return 'Thanks for signing up! You will now be redirected to the dashboard.';
    }
}

