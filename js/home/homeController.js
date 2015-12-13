(function () {
    'use strict';

    angular
        .module("RealmStatus")
        .controller("HomeCtrl", HomeCtrl);

    HomeCtrl.$inject = ['RealmService', '$sce'];

    function HomeCtrl(RealmService, $sce) {
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

        vm.connectedRealms = function (realm) {
            for (var i = 0; i < realm.connected_realms.length; i++) {
                console.log(realm.connected_realms[i]);
            }

            return $sce.trustAsHtml(realm.connected_realms.toString());
        };

    };

})();