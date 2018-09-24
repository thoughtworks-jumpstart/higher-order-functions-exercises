var core = require("./core");

describe("every", function() {
  describe.skip("#allEven", function() {
    it("allEven([2, 4, 10]) should return true", function() {
      var goodInput = [2, 4, 10];
      expect(core.allEven(goodInput)).toEqual(true);
    });

    it("allEven([2, 4, 11]) should return false", () => {
      var badInput = [2, 4, 11];
      expect(core.allEven(badInput)).toEqual(false);
    });
  });

  describe.skip("#isEveryElementPositive", function() {
    it("isEveryElementPositive([[1, 2], [4, 5]]) should return true", function() {
      var goodInput = [[1, 2], [4, 5]];
      expect(core.isEveryElementPositive(goodInput)).toEqual(true);
    });

    it("isEveryElementPositive([[1, -2], [4, 5]]) should return false", function() {
      var badInput = [[1, -2], [4, 5]];
      expect(core.isEveryElementPositive(badInput)).toEqual(false);
    });
  });
});
