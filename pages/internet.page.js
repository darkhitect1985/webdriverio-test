class Internet {
    get pageHeader() { return $('h1.heading')};
    get subHeading() { return $('h2')};
    get h3Header() { return $('h3')};
    get pageFooter() { return $('#page-footer')};
    get parent() { return $('ul')};
    get childElements() { return this.parent.$$('li')};
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`)};


    get firstLink() { return $('ul li:nth-child(1) a') };
    link(index) { return $(`ul li:nth-child(${index}) a`) };



    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText());
        });
    };

    getSpecificElementText(index) {
        this.specificChildElement(index).waitForDisplayed();
        return this.specificChildElement(index).getText();
    };

    clickOnLink() {
        if (this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        browser.pause(5000);
        this.h3Header.waitForDisplayed()
    };

};

module.exports = new Internet();