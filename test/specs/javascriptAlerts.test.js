const internetPage = require("../../pages/internet.page")


describe('Javascript Alerts', function () {
    it('should get text of alert', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickJavascriptAlertButton(1)
        assert.equal('I am a JS Alert', browser.getAlertText())
    });

    it('should accept alert', () => {
        browser.acceptAlert()
        assert.equal('You successfuly clicked an alert', internetPage.getResultText())
    });

    it('should dismiss alert', () => {
        internetPage.clickJavascriptAlertButton(2)
        browser.dismissAlert()
        assert.equal('You clicked: Cancel', internetPage.getResultText())
    });

    it.skip('should send text to the alert', () => {
        internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.pause(1000)
        browser.acceptAlert()
        browser.pause(1000)
        assert.equal('You entered: This is some text', internetPage.getResultText())
    });
});