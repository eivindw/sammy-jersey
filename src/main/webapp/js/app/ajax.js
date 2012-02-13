sj.ajax = sj.ajax || {};

(function (ajax, $) {
   "use strict";

   ajax.load = function(url, callback) {
      $.ajax({
         url: url,
         success: callback
      });
   };
}(sj.ajax, jQuery));