const { config } = require("./wdio.shared.conf");
const path = require("path");

// ====================
// Runner Configuration
// ====================

config.port = 4723;

// ==================
// Specify Test Files
// ==================

config.specs = ["../test/specs/ios/*.js"];

// ============
// Capabilities
// ============

config.capabilities = [
  {
    "appium:platformName": "ios",
    "appium:platformVersion": "14.5",
    "appium:deviceName": "iPhone 12",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/ApiDemos-debug.apk"),
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
