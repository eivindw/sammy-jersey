describe("Application", function() {
   var stub;

   beforeEach(function() {
      var stubLookup = {
         "/rest/test/all": {name: "test"},
         "/js/template/test.m": "<h2>{{data.name}}</h2>"
      };
      stub = sinon.stub($, "ajax", function() {
         arguments[0].success(stubLookup[arguments[0].url]);
      });
   });

   afterEach(function() {
      stub.restore();
   });

   it("should merge template with rest data to main element", function() {
      var $main = inject({id: "main"});

      app.run("#/");

      expect(stub).toHaveBeenCalledTwice();
      expect($main).toContain("h2");
   });
});