define([
    './app'
], function (app) {
    'use strict';

    return app.config(function ($urlRouterProvider, $stateProvider) {
        /**
         *
         * @type {Object}
         */
        var states = {
            'home': {
                url: '/home',
                templateUrl: '/app/views/home/home.html',
                controller: 'homeController'
            }
        };

        for (var i in states) {
            if (states.hasOwnProperty(i))
                $stateProvider.state(i, states[i]);
        }

        $urlRouterProvider.otherwise(states['home'].url);
    });
});
