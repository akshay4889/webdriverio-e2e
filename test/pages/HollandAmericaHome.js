
const { clickElement } = require('../utils/elementUtils')
const data = require('../data/data.json')
const CruisePage = require('./CruisePage')

class HollandAmericaPage {
  get bookCruisesLink() {
    return $(data.buttonSelectors.bookCruisesLink)
  }

  get designationsButton() {
    return $(data.buttonSelectors.designationsButton)
  }

  get alaskaButton() {
    return $(data.buttonSelectors.alaskaButton)
  }

  async openHomePage() {
    await browser.url(data.homePageUrl)
  }

  async isBookCruisesButtonPresent() {
    return await this.bookCruisesLink.isExisting();
  }

  async isDesignationsButtonPresent() {
    return await this.designationsButton.isExisting();
  }

  async isAlaskaButtonPresent() {
    return await this.alaskaButton.isExisting();
  }
  
  async navigateToCruise() {
    await clickElement(this.bookCruisesLink)
    return CruisePage
  }
}

module.exports = new HollandAmericaPage()