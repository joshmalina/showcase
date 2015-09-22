'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl(UserService) {
    var vm = this;

    vm.signUp = function() {

    	// passwords match
    	if(vm.user.password != vm.user.confirmPassword) {
    		vm.messages = "Passwords do not match";
    		return;
    	}

    	vm.messages = UserService.create();

    }
    
}

