const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://adm.dev-5.seedz.ag',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0'
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    pin_page: './pages/PIN_page.js'
  },
  bootstrap: null, //'./server/server.js',
  teardown: null, //'./server/server.js',
  mocha: {},
  name: 'POC_CodeceptJS_WEB_Admin',
  plugins: {
    /*   allure: {
      enabled: true
    },
    mocha: {
      reporterOptions: {}
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    } */
  }
}
