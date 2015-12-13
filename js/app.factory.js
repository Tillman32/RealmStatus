(function () {
    'use strict';

    angular
        .module("RealmStatus")
        .factory("RealmService", RealmService);

    RealmService.$inject = ['$http'];

    function RealmService($http) {
        var endpoint = "https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=pxhga3cypr56rfw34b2ckrhv8y9pstet&jsonp=JSON_CALLBACK";
        var locale = "en_US";
        var apiKey = "pxhga3cypr56rfw34b2ckrhv8y9pstet"

        return {
            getRealms: getRealms
        }

        function getRealms() {
            return $http.jsonp(endpoint)
                .then(getRealmsComplete)
                .catch(getRealmsFailed);

            function getRealmsComplete(response) {
                return response.data;
            };

            function getRealmsFailed(error) {
                console.log(error)
            };
        };
    }; 

})();