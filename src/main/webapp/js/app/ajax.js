sj.ajax = sj.ajax || {};

(function (ajax, $) {
   "use strict";

   function load(options) {
      $.ajax({
         url: options.url,
         dataType: options.dataType,
         success: options.callback
      });
   }

   ajax.loadData = function(url, callback) {
      load({
         url: url,
         dataType: "json",
         callback: callback
      });
   };

   ajax.loadTemplate = function(url, callback) {
      load({
         url: url,
         dataType: "html",
         callback: callback
      });
   };
}(sj.ajax, jQuery));