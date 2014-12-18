/*
 * FlowText
 * jQuery plugin for responsive font-size
 * @author Libéo <http://www.libeo.com>
 *
 * Usage: $('.element').flowtext();
 */

(function($) {
    $.fn.flowtext = function(options) {

        var $window = $(window),

            settings = $.extend({
                minFontSize: 16,
                maxFontSize: 18,
                minScreenWidth: 768,
                maxScreenWidth: 1024
            }, options),

            resize = function(el) {
                var $el = $(el),
                    windowWidth = $window.width();

                if (windowWidth < settings.minScreenWidth) {
                    $el.css('font-size', settings.minFontSize);
                } else if (windowWidth > settings.maxScreenWidth) {
                    $el.css('font-size', settings.maxFontSize);
                } else {
                    var ratio = (windowWidth - settings.minScreenWidth) / (settings.maxScreenWidth - settings.minScreenWidth),
                        fontsize = settings.minFontSize + ((settings.maxFontSize - settings.minFontSize) * ratio);
                    $el.css('font-size', fontsize);
                }
            };

        return this.each(function() {
            var self = this;
            $window.resize(function() {
                resize(self);
            });
            resize(this);
        });
    };
}(jQuery));
