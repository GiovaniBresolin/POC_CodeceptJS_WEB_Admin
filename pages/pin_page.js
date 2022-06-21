const { I } = inject()

module.exports = {
  // This is the list of the fields on the page.
  fileds: {
    pincode: { xpath: '//input[contains(@placeholder, "pincode")]' }
  },

  // This is the list of the buttons on the page.
  button: {
    continue: { xpath: '//button/div[contains(string(), "Continuar")]' },
    lost_password: { xpath: '//a[contains(string(), "senha")]' }
  },

  // This is the list of the labels on the page.
  labels: {},

  // This is the list of the messages on the page.
  messages: {},

  // This is the list of constructors on the page

  submitPin(codePin) {
    I.fillField(this.fileds.pincode, codePin)
    I.click(this.button.continue)
   
  }
}
