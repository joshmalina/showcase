'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl(DataStore) {
    var vm = this;

    vm.content = DataStore.getSomething();
    
}

