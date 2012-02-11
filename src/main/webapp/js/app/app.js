var app = Sammy("#main", function() {

   this.use("Mustache", "m");

   this.get("#/", function() {
      var ctx = this;
      $.ajax({
         url: "/rest/test/all",
         success: function(allData) {
            var templateData = {data: allData};
            $.ajax({
               url: "/template/test.m",
               success: function(template) {
                  var html = ctx.m(template, templateData);
                  ctx.swap(html);
               }
            });
         }
      });
   });
});
