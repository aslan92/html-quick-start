require.config({
    baseUrl: 'assets',
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'twbs': 'bower_components/bootstrap/dist/js/bootstrap.min',
        'angular': 'bower_components/angular/angular.min',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'webfontloader': 'bower_components/webfontloader/webfontloader'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'twbs': {
            deps: ['jquery']
        }
    }
});
