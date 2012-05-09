(function (sj, dust) {
   sj.app = Sammy("#main", function() {
      "use strict";

      this.get("#/", function() {
         this.loadDataTemplate("/rest/test/all", "test");
      });

      this.helpers({
         loadDataTemplate: function(dataPath, templateName) {
            var ctx = this;
            sj.ajax.loadData(dataPath, function(allData) {
               var templateData = {data: allData};
               dust.render(templateName, templateData, function(err, out) {
                  ctx.swap(out);
               });
            });
         }
      });
   });
}(sj, dust));
