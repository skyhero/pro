(function($) {
    $.fn.extend({
        lSelect: function(options) {
            var settings = {
                choose: "请选择...",
            };
            $.extend(settings, options);

            return this.each(function() {
                $(this).click(function () {
                    alert(1);
                })
            });

        }
    });
})(jQuery);