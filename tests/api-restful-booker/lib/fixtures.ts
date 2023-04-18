import { test as base } from "@playwright/test";
import { RestfulBookerApi } from "./api/restful-booker-api";
import { DataFactory } from '../lib/db/data-factory';

interface Fixtures {
  // ApiFixtures
  restfulBookerApi: RestfulBookerApi;

  // DataFixtures
  dataFactory: DataFactory;
}

export const test = base.extend<Fixtures>({
  // ApiFixtures
  restfulBookerApi: async ({}, use) => {
    const restfulBookerApi = new RestfulBookerApi();
    await use(restfulBookerApi);
  },

  // DataFixtures
  dataFactory: async ({}, use) => {
    const dataFactory = new DataFactory();
    await use(dataFactory);
  },
});

export { expect } from "@playwright/test";
