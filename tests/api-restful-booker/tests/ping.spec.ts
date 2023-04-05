import { RestfulBookerApi } from "../lib/api/restful-booker-api";
import { test, expect } from "../lib/fixtures";
import { RestfulBooker } from "../lib/helpers/restful-booker";

test.describe("ping", () => {
  test("ping", async ({ restfulBookerApi }) => {
    const response = await restfulBookerApi.get("ping");
    expect(response.status()).toBe(201);
  });

  test("ping with diff", async ({ restfulBookerApi }) => {
    await restfulBookerApi.updateAuth("newUsername", "newPassword");

    const response = await restfulBookerApi.get("ping");
    expect(response.status()).toBe(201);
  });
});
