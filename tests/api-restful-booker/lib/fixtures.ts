import { test as base } from "@playwright/test";
import { RestfulBookerApi } from "./api/restful-booker-api";

interface Fixtures {
  // ApiFixtures
  restfulBookerApi: RestfulBookerApi;
}

export const test = base.extend<Fixtures>({
  // ApiFixtures
  restfulBookerApi: async ({}, use) => {
    const restfulBookerApi = new RestfulBookerApi();
    await use(restfulBookerApi);
  },
});

export { expect } from "@playwright/test";
