xdescribe("Templates", function() {
   it("should merge template with data", function() {
      var tmpl = readTemplate("test.d");
      var html = readTestFile("test.html");
      var data = {data: [{name: "test1"}, {name: "test2"}]};

      var result;

      dust.renderSource(tmpl, data, function(err, out) {
         result = out;
      });

      waitsFor(function() {
         return result;
      }, "result from template render", 100);

      runs(function() {
         expect(result).toBe(html);
      });
   });

   function isRhino() {
      // TODO - there has to be a better way than this?
      return navigator.productSub === "20100215";
   }

   function readTemplate(path) {
      var basePath = isRhino() ? "src" : "src/main/webapp/js";
      jasmine.getFixtures().fixturesPath = basePath + "/template";
      return readFixtures(path);
   }

   function readTestFile(path) {
      var basePath = isRhino() ? "spec" : "src/test/javascript";
      jasmine.getFixtures().fixturesPath = basePath + "/resource";
      return readFixtures(path);
   }
});