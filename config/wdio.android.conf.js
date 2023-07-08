const path = require("path");
const { config } = require("./wdio.shared.conf");

// ====================
// Runner Configuration
// ====================

config.port = 4723;

// ==================
// Specify Test Files
// ==================

config.specs = ["../test/specs/android/*.js"];

// ============
// Capabilities
// ============

config.capabilities = [
  {
    "appium:platformName": "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "Pixel 5",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
