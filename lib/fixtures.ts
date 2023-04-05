import { test as base } from "@playwright/test";
import * as MyPages from './pages/pages.ts';
import { MyApi } from './api/my-api.ts';

interface Fixtures = {
  // PageFixtures
  myPage: MyPages.MyPage;

  // ApiFixtures
  myApi: MyApi;
}

export const test = base.extend<Fixtures>({
  // PageFixtures
  myPage: async ({ page }, use) => {
    const myPage = new MyPages.MyPage(page);
    await use(myPage);
  },

  // ApiFixtures
  myApi: async ({}, use) => {
    const myApi = new MyApi();
    await use(myApi)
  }
});

export { expect } from '@playwright/test';
