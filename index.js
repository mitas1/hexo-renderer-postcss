var postcss = require('postcss');

var renderPostCSS = function (data, options) {
    var plugins = Object.keys(hexo.config.postcss.plugins)
        .map(function (pluginName) {
            return require(pluginName)
                (hexo.config.postcss.plugins[pluginName] || undefined);
        });

    return postcss(plugins)
        .process(data)
        .then(function (result) {
            return result.css;
        });
};

hexo.extend.filter.register('after_render:css', renderPostCSS);
