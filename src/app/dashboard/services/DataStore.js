'use strict';

module.exports = DataStore;
/**
 * @ngInject
 */
function DataStore($firebaseArray) {

    var DataStore = {
        getFavorites: getFavorites
    };

    return DataStore;

    //////////

    function getFavorites() {

    	var ref = new Firebase('https://bookbottles.firebaseio.com/favorites');    

    	var array = $firebaseArray(ref);

    	return array;
    }
}

