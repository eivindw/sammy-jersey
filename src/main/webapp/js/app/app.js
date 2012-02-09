var app = Sammy("#main", function() {

   this.use("Mustache", "m");

   this.get("#/", function() {
      var ctx = this;
      ctx.load("/rest/test/all", function(allData) {
         var templateData = {data: JSON.parse(allData)};
         ctx.render("/template/test.m", templateData, function(html) {
            ctx.swap(html);
         });
      });
   });
});

$(function() {
   app.run("#/");
});
