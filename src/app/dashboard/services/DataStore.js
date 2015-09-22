'use strict';

module.exports = DataStore;
/**
 * @ngInject
 */
function DataStore($firebaseArray) {

    var DataStore = {
        getSomething: getSomething
    };

    return DataStore;

    //////////

    function getSomething() {

    	var ref = new Firebase('https://bookbottles.firebaseio.com/');

    	var obj = $firebaseArray(ref.child('favorites'));

    	return obj;
    }
}

