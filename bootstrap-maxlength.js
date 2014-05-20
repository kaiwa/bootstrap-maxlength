!function ($) {
  $.fn.maxlength = function() {
    $(this).each(function() {
      var max = $(this).attr('maxlength');

      if (max <= 0) {
        return;
      }

      if (!$(this).parent().hasClass('input-group')) {
        $(this).wrap("<div class=\"input-group\"></div>");
      }
      $(this).after("<span class=\"input-group-addon maxlength\"></span>");

      $(this).bind('input', function(e) {
        var max = $(this).attr('maxlength');
        var val = $(this).val();
        var cur = 0;

        if (val) {
          cur = val.length;
        }

        var left = max-cur;

        $(this).next(".maxlength").text(left.toString());

        return this;
      }).trigger('input');
    });
    return this;
  };
}(window.jQuery);
