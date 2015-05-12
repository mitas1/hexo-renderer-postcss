var postcss = require('postcss');

var renderPostCSS = function (data, options) {
    var plugins = Object.keys(hexo.config.postcss.plugins)
        .map(function (pluginName) {
            return require(pluginName)
                (hexo.config.postcss.plugins.pluginName || undefined);
        });

    return postcss(plugins)
        .process(data.text)
        .then(function (result) {
            return result.css;
        });
};

// associate the Sass renderer with .scss AND .sass extensions
hexo.extend.renderer.register('css', 'css', renderPostCSS);
