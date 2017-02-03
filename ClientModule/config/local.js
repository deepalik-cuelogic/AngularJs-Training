/**
 * Setting up the web service environment upon environment basis
 */
(function() {

    //Environment related configration
    'use strict';

    angular.module('config', [])
        .provider('configProvider', [configProvider]);

    function configProvider() {
        var environment = {
            'privateAppUrl': 'http://localhost:4000/app/#/',
            'publicAppUrl': 'http://localhost:3000/app/#/',
        };

        this.$get = function() {
            return environment;
        }
    }

})();