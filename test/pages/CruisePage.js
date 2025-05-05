
const { clickElement } = require('../utils/elementUtils')
const data = require('../data/data.json')
const ItineraryPage = require('./ItineraryPage')

class CruisePage {
  get searchAllCruisesLink() {
    return $(data.buttonSelectors.cruisePageButton)
  }

  async navigateToSearchCruises() {
    await clickElement(this.searchAllCruisesLink)
    return ItineraryPage
  }
}

module.exports = new CruisePage()