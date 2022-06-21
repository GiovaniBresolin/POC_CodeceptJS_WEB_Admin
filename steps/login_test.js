const { I, home_page, pin_page } = inject()

Feature('login')

Scenario('Login with success', ({ I }) => {
  var login = 'giovani.bresolin@seedz.ag'
  var password = 'Maio@2022'
  var codePin = '2512'

  I.amOnPage('/')
  pause()

  I.waitForElement(home_page.button.lost_password, 5)
  home_page.submitLogin(login, password)
  I.waitForElement(pin_page.button.continue, 5)
  pin_page.submitPin(codePin)
  I.waitForElement(home_page.button.lost_password, 5)
})
