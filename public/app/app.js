define([
    'angular',
    'angular-ui-router',
    './controllers/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ui.router',
        'app.controllers'
    ]).run(function () {
        require([
            'core'
        ], function (core) {
            core.init(function () {
                console.log('Core init callback');
            });
        })
    });
});
