const HollandAmericaPage = require('../pages/HollandAmericaHome')

describe('Home page Buttons Test', () => {
    it('Verify if "Book Cruises" button is present on homepage', async () => {
        await HollandAmericaPage.openHomePage()
        const isPresent = await HollandAmericaPage.isBookCruisesButtonPresent()
        expect(isPresent).toBe(true)
    })

    it('Verify if "Destinations" button is present on homepage', async () => {
        await HollandAmericaPage.openHomePage()
        const isPresent = await HollandAmericaPage.isDesignationsButtonPresent()
        expect(isPresent).toBe(true)

    })

    it('Failed test for "Alaska" button not present on homepage', async () => {
        await HollandAmericaPage.openHomePage()
        const isPresent = await HollandAmericaPage.isAlaskaButtonPresent()
        expect(isPresent).toBe(false)

    })
})