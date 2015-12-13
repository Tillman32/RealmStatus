(function () {
    'use strict';

    angular
        .module("RealmStatus")
        .controller("HomeCtrl", HomeCtrl);

    HomeCtrl.$inject = ['RealmService'];

    function HomeCtrl(RealmService) {
        var vm = this;
        vm.realms;

        // Table sorting defaults
        vm.sortType = 'name';
        vm.sortReverse = false;
        vm.searchRealm = '';

        // Call our realm service factory, to get the data
        RealmService.getRealms()
            .then(function (data) {
                // Assign realms to the data from the webservice
                vm.realms = data.realms;
            });

    };

})();