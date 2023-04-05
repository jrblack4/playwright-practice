import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";

config();

export default defineConfig({
  globalSetup: require.resolve('./lib/global-setup'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  testDir: "./tests",
  reporter: [
    ["html"],
  ],

  projects: [
    {
      name: "api-restful-booker",
      testDir: "tests/api-restful-booker/tests",
      use: {
        trace: "on",
      },
    },
  ],

  outputDir: "reports/",
});
