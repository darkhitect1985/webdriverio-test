const internetPage =  require('../../pages/internet.page');

describe('Switch to Iframe', function () {
    it('Should switch to iframe', () => {
        browser.url(`${browser.options.baseUrl}iframe`)
        //browser.pause(1000);
        //internetPage.h3Header.waitForDisplayed()
        internetPage.iframe.waitForDisplayed()
        //browser.pause(1000);
        browser.switchToFrame(internetPage.iframe)
        //browser.pause(1000);
        internetPage.iframeBody.clearValue();
        internetPage.sendTextToBody('This is the text in the iframe body')
        //browser.pause(3000);
        assert.equal('Your content goes here.This is the text in the iframe body', internetPage.iframeBody.getText())
    })
})