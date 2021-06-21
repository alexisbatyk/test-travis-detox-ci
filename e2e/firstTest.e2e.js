describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should show hello screen after tap", async () => {
    await element(by.text("Say Hello")).tap();
    await waitFor(element(by.text("Hello!!!")))
      .toBeVisible()
      .withTimeout(5000);
  });

  it("should show world screen after tap", async () => {
    await element(by.id("world_button")).tap();
    await waitFor(element(by.text("World!!!")))
      .toBeVisible()
      .withTimeout(5000);
  });
});
