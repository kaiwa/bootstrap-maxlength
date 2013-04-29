!function ($) {
  $.fn.maxlength = function() {
    $(this).each(function() {
      var max = $(this).attr('maxlength');
      var val = $(this).attr('value');
      var cur = 0;
      
      if (val) {
          cur = val.length;
      }

      var left = max - cur;

      $(this).parent().addClass('input-append');
      $(this).after("<span class='add-on maxlength'>" + left.toString() + "</span>");

      $(this).bind('input', function(e) {
        var max = $(this).attr('maxlength');
        var val = $(this).attr('value');
        var cur = 0;
        
        if (val) {
          cur = val.length;
        }
        
        var left = max-cur;
        
        $(this).next(".maxlength").text(left.toString());

        return this;
      });
    });
    return this;
  };
}(window.jQuery);
