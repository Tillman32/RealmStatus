(function () {
    'use strict';

    angular
        .module("RealmStatus")
        .factory("RealmService", RealmService);

    RealmService.$inject = ['$http'];

    function RealmService($http) {
        // Should really be in config somewhere outside factory
        var endpoint = "https://us.api.battle.net/wow/realm/status?";
        var locale = "locale=en_US";
        var apiKey = "&apikey=YOUR KEY HERE";
        var jsonp = "&jsonp=JSON_CALLBACK";

        return {
            // Public API's
            getRealms: _getRealms
        }

        function _getRealms() {
            return $http.jsonp(endpoint + locale + apiKey + jsonp)
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