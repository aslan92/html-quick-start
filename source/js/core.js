define('core', [
    'config'
], function (config) {
    /**
     *
     * @type {Object}
     */
    var module = {};

    module.init = function (callback) {
        if (config.webFontConfig) {
            require([
                'webfontloader'
            ], function (webFontLoader) {
                webFontLoader.load(config.webFontConfig);
            });
        }

        if (callback && typeof callback === 'function')
            callback();
    };

    return module;
});
