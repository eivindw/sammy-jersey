(function (sj, dust) {
   sj.app = Sammy("#main", function() {
      "use strict";

      this.get("#/", function() {
         this.loadDataTemplate("/rest/test/all", "/js/template/test.d");
      });

      this.helpers({
         loadDataTemplate: function(dataPath, templatePath) {
            var ctx = this;
            sj.ajax.loadData(dataPath, function(allData) {
               sj.ajax.loadTemplate(templatePath, function(template) {
                  var templateData = {data: allData};
                  dust.renderSource(template, templateData, function(err, out) {
                     ctx.swap(out);
                  });
               });
            });
         }
      });
   });
}(sj, dust));
