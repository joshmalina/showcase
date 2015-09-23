'use strict';

module.exports = format;

function format() {	

	return {
		restrict: 'AE',		
		template: '<ul><li ng-repeat="(key, val) in vm.content">{{val.$id}} are {{val.$value}}</li></ul>',
	}
}