const { getResult } = require("../src/service/track-service");

describe("getResult", () => {
  it("should throw error for invalid token ", async () => {
    try {
      const response = await getResult(undefined, jest.fn());
    } catch (error) {
      expect(error.message).toEqual("Invalid Token");
    }
  });

  it("should store the result successfully", async () => {
    // To be implented
  });

  it("should retry on token expiry", async () => {
    // To be implented
  });
});
