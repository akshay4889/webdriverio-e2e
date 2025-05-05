
const HollandAmericaPage = require('../pages/HollandAmericaHome')

describe("Holland America", () => {

  it("opens the Holland America homepage", async () => {
    await HollandAmericaPage.openHomePage()
  })

  it("navigates to Cruise page", async () => {
    await HollandAmericaPage.openHomePage()
    const CruisePage = await HollandAmericaPage.navigateToCruise()
  })

  it("continues upto checkout page", async () => {
    await HollandAmericaPage.openHomePage()
    const CruisePage = await HollandAmericaPage.navigateToCruise()
    const ItineraryPage = await CruisePage.navigateToSearchCruises()
    await ItineraryPage.selectAlaskaItinerary()
    await ItineraryPage.continueToNextStep()
  })
})