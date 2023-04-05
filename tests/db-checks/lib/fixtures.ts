import { test as base } from '@playwright/test';
import { Select } from '../../../lib/db/select';

interface Fixtures {
  // DbFixtures
  select: Select;
}

export const test = base.extend<Fixtures>({
  // DbFixtures
  select: async({}, use) => {
    const select = new Select();
    await use(select);
  },
});

export { expect } from "@playwright/test";
