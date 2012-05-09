(function (sj) {
   sj.app = Sammy("#main", function() {
      "use strict";

      this.use("Mustache", "m");

      this.get("#/", function() {
         this.loadDataTemplate("/rest/test/all", "/js/template/test.m");
      });

      this.helpers({
         loadDataTemplate: function(dataPath, templatePath) {
            var ctx = this;
            sj.ajax.load(dataPath, function(allData) {
               sj.ajax.load(templatePath, function(template) {
                  var templateData = {data: allData};
                  var html = ctx.m(template, templateData);
                  ctx.swap(html);
               });
            });
         }
      });
   });
}(sj));
