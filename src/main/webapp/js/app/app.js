var app = Sammy("#main", function() {

   this.use("Mustache", "m");

   this.get("#/", function() {
      var ctx = this;

      /*ns.ajax.load("/rest/test/all", function(data) {
         ns.ajax.load("/template/test.m", function(template) {
            ctx.swap(ctx.m(template, {data: data}));
         });
      });*/

      $.ajax({
         url: "/rest/test/all",
         success: function(allData) {
            $.ajax({
               url: "/js/template/test.m",
               success: function(template) {
                  var templateData = {data: allData};
                  var html = ctx.m(template, templateData);
                  ctx.swap(html);
               }
            });
         }
      });
   });
});
