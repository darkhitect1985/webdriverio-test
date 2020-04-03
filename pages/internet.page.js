class Internet {
    get pageHeader() { return $('h1.heading')};
    get subHeading() { return $('h2')};
    get h3Header() { return $('h3')};
    get pageFooter() { return $('#page-footer')};
    get parent() { return $('ul')};
    get childElements() { return this.parent.$$('li')};
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`)};


    get firstLink() { return $('ul li:nth-child(1) a')};
    link(index) { return $(`ul li:nth-child(${index}) a`)};

    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`)};


    get username() { return $('#username')};
    get password() { return $('#password')};

    figures(index) { return $(`.example .figure:nth-child(${index}) img`)};
    figureDetails(index) { return $(`.example .figure:nth-child(${index}) .figcaption h5`)};

    get target() { return $('.example #target')};
    get result() { return $('.example #result')};



    get hereLink() { return $('.example a')};


    get iframeBody() { return $('#tinymce')};
    get iframe() { return $('#mceu_27 #mce_0_ifr')};


    get columnA() { return $('#column-a')};
    get columnB() { return $('#column-b')};

    get columnAHeader() { return $('#column-a header')};
    get columnBHeader() { return $('#column-b header')};

    get draggable() { return $('#draggable')};
    get droppable() { return $('#droppable')};
    get droppableParagraph() { return $('#droppable p')};

    get dropdownMenu() { return $('#dropdown')};
    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)')};
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)')};

    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`)};

    get exampleButton() { return $('.example button')};
    deleteButton(index) { return $(`#elements button:nth-child(${index})`)};

    get pageButton() { return $('#checkbox-example button')};

    get enableButton() { return $('#input-example button')};
    get inputEnabledField() { return $('#input-example input')};


    clickEnableButton() {
        this.enableButton.waitForDisplayed()
        this.enableButton.click()
    };


    clickPageButton() {
        this.pageButton.waitForDisplayed()
        this.pageButton.click()
    };


    clickExampleButton() {
        this.exampleButton.waitForDisplayed()
        this.exampleButton.click()
    };

    clickDeleteButton(index) {
        this.deleteButton(index).waitForDisplayed()
        this.deleteButton(index).click()
    };


    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    };


    clickDropdownMenu() {
        this.dropdownMenu.waitForDisplayed()
        this.dropdownMenu.click()
    };

    clickDropdownMenuOption1() {
        this.dropdownMenuOption1.waitForDisplayed()
        this.dropdownMenuOption1.click()
    };

    clickDropdownMenuOption2() {
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    };


    dragDraggableToDroppable() {
        this.draggable.waitForDisplayed()
        this.draggable.dragAndDrop(this.droppable)
    };

  
    dragColumnAToColumnB() {
        this.columnA.waitForDisplayed()
        this.columnA.dragAndDrop(this.columnB)
    };



    sendTextToBody(text) {
        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.keys(text)
    };



    clickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    };


    scrollToPageFooter() {
        this.pageFooter.moveTo(1,1);
    };
    


    clickTarget() {
        this.target.waitForDisplayed()
        this.target.click()
    };


    sendKeysToTarget(text) {
        this.target.waitForDisplayed()
        this.target.keys(text)
    };

    getResultText() {
        this.result.waitForDisplayed()
        return this.result.getText()
    };

    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1, 1)
    };

    getFigureDetailsText(index) {
        this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    };


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
        //browser.pause(5000);
        this.h3Header.waitForDisplayed()
    };

    clickLink(index) {
        this.link(index).waitForDisplayed()
        this.link(index).click()
    };

    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    };


    enterUsername(text) {
        this.username.waitForDisplayed()
        this.username.setValue(text)
    };

    enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    };

};

module.exports = new Internet();