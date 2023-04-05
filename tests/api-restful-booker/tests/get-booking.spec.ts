import { test, expect } from "../lib/fixtures";

test.describe("GET - booking", () => {
  const endpoint = "booking";

  test("GET booking", async ({ restfulBookerApi }) => {
    const response = await restfulBookerApi.get(endpoint);
    expect(response.status()).toBe(200);

    const json = await response.json();
    
  });
});
