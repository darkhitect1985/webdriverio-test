const internetPage =  require('../../pages/internet.page');

describe('Switch Window', function () {
    it('Should switch to the next window', () => {
        browser.url(`${browser.options.baseUrl}/windows`)
        internetPage.clickHereLink()
        //browser.newWindow(`${browser.options.baseUrl}/windows/new`)
        browser.pause(500)
        browser.switchWindow('http://the-internet.herokuapp.com/windows/new')
        browser.pause(500)
        assert.equal(true, internetPage.h3Header.isExisting())
        assert.equal(true, internetPage.h3Header.isDisplayed())
        assert.equal('New Window', internetPage.h3Header.getText())
    })
})