(function () {
    'use strict';

    angular
        .module("RealmStatus")

        .filter('capitalize', function () {
            return function (input) {
                return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
            }
        })
        .filter('realmlist', function () {
            return function (array) {
                var fixed = [];
                array.forEach(function (item) {
                    item = item.replace(/-/g, " ");
                    item = item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
                    fixed.push(item);
                });
                return fixed.join(", ");
            }
        }); 

})();