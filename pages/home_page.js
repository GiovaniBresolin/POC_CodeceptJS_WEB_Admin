const { I } = inject()

module.exports = {
  // This is the list of the fields on the page.
  fileds: {
    login: { xpath: '//input[contains(@placeholder, "email")]' },
    password: { xpath: '//input[@type="password"]' }
  },

  // This is the list of the buttons on the page.
  button: {
    enter: {
      xpath:
        '//div[@class="application--wrap"]//button/div[contains(string(), "Entrar")]'
    },
    lost_password: { xpath: '//a[contains(string(), "senha")]' }
  },

  // This is the list of the labels on the page.
  labels: {},

  // This is the list of the messages on the page.
  messages: {},

  // This is the list of constructors on the page
  submitLogin(email, password) {
    I.fillField(this.fileds.login, email)
    I.fillField(this.fileds.password, secret(password))
    I.click(this.button.enter)

  }
}
