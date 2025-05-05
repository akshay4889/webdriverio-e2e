
async function clickElement(element) {
  await element.waitForDisplayed()
  await element.click()
}

module.exports = { clickElement }