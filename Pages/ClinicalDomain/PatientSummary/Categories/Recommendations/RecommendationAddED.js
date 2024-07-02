class RecommendationAddED
{
    constructor(page)
    {
        this.page=page
        this.btnexpandsAddedRecommendation=page.getByTestId('dataID').getByLabel('cellmaAccordionIcon')
        //page.locator("xpath=//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-14x3gsq']//*[name()='svg']")
        this.dropdownSubcategory=page.locator("xpath=//input[@id='Sub Category']")
        this.calendarReviewDate=page.locator("xpath=//input[@id='Review Date']")
        this.checkboxPrivateRecord=page.getByRole('checkbox', { name: 'Private Record' })
        this.checkboxSetAsDefault=page.getByRole('checkbox', { name: 'Set As Default' })
        this.checkboxAddToFavourites=page.getByRole('checkbox', { name: 'Add To Favourites' })
        this.checkboxAddToOrderSet=page.getByRole('checkbox', { name: 'Add To Order Set' })
        this.textboxNotes=page.getByTestId('Notes')
        this.buttonsave=page.getByTestId('Save')
    }
    async clickOnExpandRecommendation()
    {
        await this.btnexpandsAddedRecommendation.click()
    }
    async selectSubcategory(pacr_category)
    {
        await this.dropdownSubcategory.click()
        await this.page.getByRole('option', { name: pacr_category }).click()
    }
    async enterReviewDate(recom_review_date)
    {
        await this.calendarReviewDate.fill(recom_review_date)
    }
    async selectCheckboxPrivateRecord()
    {
        await this.checkboxPrivateRecord.click()
    }
    async selectCheckboxSetAsDefault()
    {
        await this.checkboxSetAsDefault.click()
    }
    async enterNotes()
    {
        await this.textboxNotes.fill("Added for testing")
    }
    async clickOnSaveButton()
    {
        await this.buttonsave.click()
    }


}
module.exports=RecommendationAddED