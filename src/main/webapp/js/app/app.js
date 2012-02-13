(function (sj) {
   sj.app = Sammy("#main", function() {
      "use strict";

      this.use("Mustache", "m");

      this.get("#/", function() {
         var ctx = this;

         sj.ajax.load("/rest/test/all", function(allData) {
            sj.ajax.load("/js/template/test.m", function(template) {
               var templateData = {data: allData};
               var html = ctx.m(template, templateData);
               ctx.swap(html);
            });
         });
      });
   });
}(sj));
