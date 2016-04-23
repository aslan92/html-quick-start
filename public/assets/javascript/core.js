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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRlZmluZSgnY29yZScsIFtcbiAgICAnY29uZmlnJ1xuXSwgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgbW9kdWxlID0ge307XG5cbiAgICBtb2R1bGUuaW5pdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY29uZmlnLndlYkZvbnRDb25maWcpIHtcbiAgICAgICAgICAgIHJlcXVpcmUoW1xuICAgICAgICAgICAgICAgICd3ZWJmb250bG9hZGVyJ1xuICAgICAgICAgICAgXSwgZnVuY3Rpb24gKHdlYkZvbnRMb2FkZXIpIHtcbiAgICAgICAgICAgICAgICB3ZWJGb250TG9hZGVyLmxvYWQoY29uZmlnLndlYkZvbnRDb25maWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG1vZHVsZTtcbn0pO1xuIl0sImZpbGUiOiJjb3JlLmpzIn0=
