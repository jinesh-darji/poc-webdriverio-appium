import permissionScreen from "../../screenObject/android/permission.screen";
import firstScreen from "../../data/testData.json";

describe("Perform the onboarding flow", () => {
  it("Test the onboarding flow for new user", async () => {
    permissionScreen.saveMethod();
    permissionScreen.skipbtn(firstScreen.valid.username);

    await driver.pause(3000);
  });
});
