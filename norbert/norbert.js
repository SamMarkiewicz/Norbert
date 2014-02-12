// @plugin     : Norbert
// @version    : 1.0
// @author     : Sam Markiewicz
// @authorURL  : http://sammarkiewi.cz
// @projectURL : https://github.com/SamMarkiewicz/Norbert

(function($) {

  $.fn.extend({

    norbert: function(options) {

      var defaults = {
        elementsSelector: 'input[type="text"], input[type="email"], input[type="phone"], input[type="password"]',
        tipPosition: 'left'
      };

      var options = $.extend(defaults, options);
      var norbertElements = $(this).find(options.elementsSelector);

      return this.each(function() {
        norbertElements.each(function() {
          var input = $(this)
          var placeholder = input.attr('placeholder')
          var tooltip = $('<span></span>')

          //Tooltip content and basic setting
          tooltip.insertAfter(input).addClass('norbert');
          tooltip.addClass('norbert-' + options.tipPosition);
          tooltip.prepend(placeholder);
          tooltip.hide();

          // Save current value of input content
          input.data('oldVal', input.val());

          //Create function for fading the tooltip
          input.tooltip_hide = function() {
            tooltip.fadeOut();
          }

          //Create function to make appear the tooltip
          input.tooltip_show = function() {
            tooltip.fadeIn();
          }

          // Tooltip appears if input value change (multiple cases included)
          input.bind("propertychange keyup input paste", function(event) {
            // If value has changed...
            if(input.data('oldVal') != input.val()) {
              // Updated stored value
              input.data('oldVal', input.val());
              input.tooltip_show();
            }
            if(input.data('oldVal') == 0) {
              input.tooltip_hide();
            }
          });

          //Tooltip disappears on blur...
          input.on('blur', function() {
            input.tooltip_hide();
          });

          //...and reappears if you come back on the field
          input.on('focus', function() {
            if(input.val() != '') input.tooltip_show();
          });
        });
      });
    }
  });
})(jQuery);
