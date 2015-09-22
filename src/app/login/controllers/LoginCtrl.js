'use strict';

module.exports = LoginUpCtrl;

/**
 * @ngInject
 */
function LoginUpCtrl(AuthService) {
    var vm = this;

    vm.login = function() {

    	if(vm.user.username != 'bookbottles' || vm.user.password != 'showcase') {
    		vm.messages = 'Either the username or password is incorrect. Please try again.';
    		return;
    	}    	

    	vm.messages = AuthService.login();

    }
    
}

