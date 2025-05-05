
const { clickElement } = require('../utils/elementUtils')
const data = require('../data/data.json')

class ItineraryPage {
  get alaskaItineraryButton() {
    return $(data.buttonSelectors.alaskaItineraryButton)
  }

  get nextStepButton() {
    return $(data.buttonSelectors.nextStepButton)
  }

  async selectAlaskaItinerary() {
    await clickElement(this.alaskaItineraryButton)
  }

  async continueToNextStep() {
    await clickElement(this.nextStepButton)
  }
}

module.exports = new ItineraryPage()