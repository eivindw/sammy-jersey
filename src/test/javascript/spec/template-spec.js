describe("Templates", function() {
   it("should load templates from file system", function() {
      var tmpl = readTemplate("test.m");
      var html = readTestFile("test.html");
      var data = {data: [{name: "test1"}, {name: "test2"}]};

      var rendered = Mustache.to_html(tmpl, data);

      expect(rendered).toBe(html);
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