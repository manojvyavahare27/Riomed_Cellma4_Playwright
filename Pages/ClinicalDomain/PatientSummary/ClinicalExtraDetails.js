//Sathyanarayan

const {
  clickElement,
  typeText,
  selectFromDropdown,
} = require("../../../UtilFiles/StaticUtility.js");
const {
  selectFromSearchResults,
} = require("../../../UtilFiles/DynamicUtility.js");

class ClinicalExtraDetails {
  constructor(page) {
    this.page = page;
    //Search Medication fields
    this.clinicalItemCollapsable = page.locator(
      "xpath=//div[@data-testid='CommonCellmaPopup']//button[@aria-label='cellmaAccordionIcon']"
    );

    //Allergy
    this.clinicalItemSubcategory = page.locator("xpath=//input[@id='Sub Category']");
    this.clinicalItemCollapsableAllergy1=page.getByTestId('allergies').getByLabel('cellmaAccordionIcon')
    this.clinicalItemCollapsableAllergy2 =page.getByTestId('episodes[0].id').getByLabel('cellmaAccordionIcon')
    this.clinicalSubcategoryAllergy=page.locator("xpath=//input[@name='subCategory']")
    this.buttonSpecificAllergyName=page.locator("xpath=//button[@aria-label='Specific Allergy Name']")
    this.allergyStartDate=page.locator("xpath=//input[@id='episodes[0].startDate']")
    this.allergyEndDate=page.locator("xpath=//input[@id='episodes[0].endDate']")
    this.allergyReaction=page.locator("xpath=//input[@id='episodes[0].reaction']")
    this.ReactionSeverity=page.locator("xpath=//input[@id='episodes[0].reactionSeverity']")
    this.allergyTextArea=page.locator("xpath=//textarea[@id='episodes[0].allergyNotes']")




    //Diagnosis
    this.onSetDate = page.locator("xpath=//input[@id='Onset Date']");
    this.diagnosedDate = page.locator("xpath=//input[@id='Diagnosed Date']");
    this.diagnosis1stSeenDate = page.locator("xpath=//input[@id='1st Seen Date']");
    this.status = page.locator("xpath=//input[@id='Status']");
    this.severity = page.locator("xpath=//input[@id='Severity']");
    this.activity = page.locator("xpath=//input[@id='Activity']");
    this.countryOfDiagnosis = page.locator("xpath=//input[@id='Country of Diagnosis']");
    this.underlayingCause = page.locator("xpath=//input[@id='Underlying Cause']");
    this.complicationAndDiagnosis = page.locator("xpath=//input[@id='Complications and Other Diagnosis']");
    this.externalCause = page.locator("xpath=//input[@id='External Cause']");
    this.linkToProcedure = page.locator("xpath=//input[@id='Link to Procedure']");

    this.dateOfOutcome = page.locator("xpath=//input[@id='Date of Outcome']");
    this.frequency = page.locator("xpath=//input[@id='Frequency']");
    this.notes = page.locator("xpath=//textarea[@id='Notes']");
    this.private = page.locator("xpath=//label[@aria-label='Private Record']//input[@class='PrivateSwitchBase-input css-1m9pwf3']");
    this.setAsDefault = page.locator("xpath=//label[@aria-label='Set as Default']//input[@class='PrivateSwitchBase-input css-1m9pwf3']");
    this.addToFavourites = page.locator("xpath=//label[@aria-label='Add to Favourites']//input[@class='PrivateSwitchBase-input css-1m9pwf3']");
    this.addToOrderSets = page.locator("xpath=//label[@aria-label='Add to Order Set']//input[@class='PrivateSwitchBase-input css-1m9pwf3']");
    this.save = page.locator("xpath=//button[@aria-label='Save']");
    this.saveCheckList=page.locator("xpath=")
    this.delete = page.locator("xpath=//button[@data-testid='Delete']");
    this.cancelDelete = page.locator("xpath=//button[@data-testid='Cancel']");
    this.confirmDelete = page.locator("xpath=//button[@data-testid='Ok']");
    this.deleteReason = page.locator("xpath=//textarea[@aria-label='Reason']");
    this.saveDeleteReason = page.locator("xpath=//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 css-6td7do']//button[@data-testid='Save']");

    //Recommendations
    this.reviewDate = page.locator("xpath=//input[@id='Review Date']");

    //Interpretation
    this.interpretationOutcome = page.locator("xpath=//input[@id='Interpretation Outcome']");

    //Medication
    this.dose=page.locator("xpath=//input[@id='Dose']")
    this.Route=page.locator("xpath=//input[@id='Route']")
    this.days=page.locator("xpath=//input[@id='Days']")
    this.site=page.locator("xpath=//input[@id='Site']")
    this.prescribeBy=page.locator("xpath=//input[@id='Prescribed By']")
    this.startDate=page.locator("xpath=//input[@id='Start Date']")
    this.reviewDate=page.locator("xpath=//input[@id='Review Date']")
    this.stopDate=page.locator("xpath=//input[@id='Stop Date']")      
        this.sideEffect=page.locator("xpath=//input[@name='sideEffect']")
        this.medicationStatus=page.locator("xpath=//input[@id='Status']")
        this.indication=page.locator("xpath=//input[@id='Indication']")
        this.stopReason=page.locator("xpath=//input[@id='Stopped Reason']")
        this.PGDPSD=page.locator("xpath=//input[@id='PGD/PSD']")
        this.medicationGradeForAdministrator=page.locator("xpath=//input[@id='User grades that can administator medication-MAED']")
        this.maxReffills=page.locator("xpath=//input[@id='Max Reffills']")
        this.quantity=page.locator("xpath=//input[@id='Quantity']")
        this.unit=page.locator("xpath=//input[@aria-label='Unit']")
        this.currentLocation=page.locator("xpath=//input[@id='Current Location']")
        this.linkToDiagnosis=page.locator("xpath=//input[@id='Link to Diagnosis']")
        this.adherent=page.locator("xpath=//input[@id='Adherent']")
        this.endoserment=page.locator("xpath=//input[@id='Endoserment']")
        this.forCondition=page.locator("xpath=//input[@id='For Condition']")
        this.priceCheckQuantity=page.locator("xpath=//input[@id='Price check quantity']")
        this.totalCost=page.locator("xpath=//input[@id='Total Cost']")
        this.notes=page.locator("xpath=//textarea[@aria-label='Notes']")

        //Medication Checkboxes
        this.prescribeAndSupply=page.locator("xpath=//span[@data-testid='Prescription and supply']")
        this.supply=page.locator("xpath=//span[@data-testid='Supply']")
        this.suitableForDelivery=page.locator("xpath=//span[@data-testid='Suitable for Home Delivery']")
        this.addToPrescription=page.locator("xpath=//span[@data-testid='Add to Prescription']")
        this.setAsDefault=page.locator("xpath=//span[@data-testid='Set as Default']")
        this.repeatable=page.locator("xpath=//span[@data-testid='Repeatable']")
        this.addToFavourite=page.locator("xpath=//span[@data-testid='Add to favourites']")
        this.privateRecord=page.locator("xpath=//span[@data-testid='Private Record']")
        this.addToOrderSet=page.locator("xpath=//span[@data-testid='Add to order set']")
  }

  //////////////////////////////////TEXTBOX FILLERS//////////////////////////////////////////

  //Fill Outcome Date
  async enterDateOfOutcome(date) {
    await typeText(this.page, this.dateOfOutcome, date);
  }

  //Fill Ouutome Notes
  async enterClinicalItemNotes(notes) {
    await typeText(this.page, this.notes, notes);
  }

  async enterDeleteReason(reason) {
    await typeText(this.page, this.deleteReason, reason);
  }

  /////////////////////////////////BUTTON CLICKS///////////////////////////////////////////////

  //Click on Collapsable button on Extra Details popup
  async clickOnClincialItemCollapsable() {
    await clickElement(this.page, this.clinicalItemCollapsable);
  }

  async clickOnClincialItemCollapsableAllergy1() {
    await clickElement(this.page, this.clinicalItemCollapsableAllergy1);
  }

  async clickOnClincialItemCollapsableAllergy2() {
    await clickElement(this.page, this.clinicalItemCollapsableAllergy2);
  }

  async clickOnclinicalSubcategoryAllergy()
  {
    await this.clinicalSubcategoryAllergy.click()
    await this.page.getByRole('option', { name: 'Allergy Subsection' }).click()

  }

  async clickOnSpecificAllergyName()
  {
    await clickElement(this.page,this.buttonSpecificAllergyName)
  }

  async enterAllergyStartDate(date)
  {
    await typeText(this.page, this.allergyStartDate,date)
  }

  async enterAllergyEndDate(date)
  {
    await typeText(this.page, this.allergyEndDate,date)
  }
  async selectReaction(eli_text)
  {
    await selectFromDropdown(this.page, this.allergyReaction, eli_text)
  }
  async selectReactionSevirity(alrg_reaction_severity)
  {
    await selectFromDropdown(this.page, this.ReactionSeverity, alrg_reaction_severity)
  }
  async enterallergyTextArea(alrg_notes)
  {
    await typeText(this.page,this.allergyTextArea, alrg_notes)
  }



  //Click on Save Medication button on Extra Details popup
  async clickOnSave() {
    await clickElement(this.page, this.save);
  }

  async clickOnSaveCheckList() {
    await clickElement(this.page, this.save);
  }

  async clickOnDelete() {
    await clickElement(this.page, this.delete);
  }

  async clickOnCancelDelete() {
    await clickElement(this.page, this.cancelDelete);
  }

  async clickOnConfirmDelete() {
    await clickElement(this.page, this.confirmDelete);
  }

  async clickOnSaveDeleteReason() {
    await clickElement(this.page, this.saveDeleteReason);
  }

  ///////////////////////////////CHOOSE STATIC DROPDOWN ITEM//////////////////////////////////

  async selectClinicalItemSubcategory(subcategory) {
    await selectFromDropdown(
      this.page,
      this.clinicalItemSubcategory,
      subcategory
    );
  }

  async selectFrequency(frequency) {
    await selectFromDropdown(this.page, this.frequency, frequency);
  }

  async enterOnSetDate(date) {
    await typeText(this.page, this.onSetDate, date);
  }

  //Medication Extra Details
  async enterOnDose(dose) {
    await this.dose.clear()
    await typeText(this.page, this.dose, dose);
  }

  async selectRoute(Route) {
    await selectFromDropdown(this.page, this.Route, Route);
  }

  async enterDays(days) {
    await typeText(this.page, this.days, days);
  }

  async selectSite(site)
  {
    await selectFromDropdown(this.page, this.site, site);
  }

  async selectPrescribeBy(prescribeBy)
  {
    await selectFromDropdown(this.page, this.prescribeBy, prescribeBy);
  }

  async enterStartDate(startDate)
  {
    await typeText(this.page, this.startDate, startDate);
  }
  async enterReviewDate(reviewDate)
  {
    await typeText(this.page, this.reviewDate, reviewDate);
  }
  
  async enterStopDate(medi_stop_date)
  {
    await typeText(this.page, this.stopDate, medi_stop_date);
  }

  async selectSideEffects(mse_text)
  {
    await selectFromDropdown(this.page, this.sideEffect, mse_text)
  }
  async selectStatus(pacr_status)
  {
    await selectFromDropdown(this.page, this.medicationStatus, pacr_status )
  }
  async  selectIndication(meded_value)
  {
    await selectFromDropdown(this.page, this.indication, meded_value)
  }
  async selectStoppedReason(medi_stopped_reason_eli_text)
  {
    await selectFromDropdown(this.page, this.stopReason, medi_stopped_reason_eli_text)
  }
  async selectPGDPSD(meded_value_PGD)
  {
    await selectFromDropdown(this.page, this.PGDPSD, meded_value_PGD)
  }
  async enterMedicationGradeForAdministrator(medicationGradeForAdministrator)
  {
    await typeText(this.page, this.medicationGradeForAdministrator, medicationGradeForAdministrator)
  }
  async selectMaxReffills(maxReffills)
  {
    await selectFromDropdown(this.page, this.maxReffills, maxReffills)
  }
  async selectQuantity(meded_value_Quantity)
  {
    await this.quantity.clear()
    await typeText(this.page, this.quantity, meded_value_Quantity)
  }
  async enterUnit(unit)
  {
    await typeText(this.page, this.unit, unit)
  }
  async selectCurrentLocation(currentLocation)
  {
    await selectFromDropdown(this.page, this.currentLocation, currentLocation)
  }
  async enterLinkTiDiagnosis(pacr_que_name_Diagnosis)
  {
    await selectFromDropdown(this.page, this.linkToDiagnosis, pacr_que_name_Diagnosis )
  }
  async selectAdherent(meded_value_Adherent)
  {
    await selectFromDropdown(this.page, this.adherent, meded_value_Adherent)
  }
  async selectEndoserment(paprd_endorsement)
  {
    await selectFromDropdown(this.page, this.endoserment, paprd_endorsement)
  }
  async selectForCondition(que_display_text)
  {
    // await this.forCondition.click()
    // await this.forCondition.type(que_display_text)
    // await this.page.getByRole('option', { name: que_display_text }).click()
    await selectFromDropdown(this.page, this.forCondition, que_display_text )



    //await selectFromDropdown(this.page, this.forCondition, que_display_text)
  }
  async enterPriceCheckQuantity(meded_value_Price_check_quantity)
  {
    await typeText(this.page, this.priceCheckQuantity, meded_value_Price_check_quantity)
  }
  async enterNotes(medi_notes)
  {
    await typeText(this.page, this.notes, medi_notes)
  }

  //Methods for Medication Checkboxes
  async clickOnPrescribeAndSupply()
  {
    await this.prescribeAndSupply.click()
  }
  async clickOnSupply()
  {
    await this.supply.click()
  }
  async clickOnSuitableForDelivery()
  {
    await this.suitableForDelivery.click()
  }
  async clickOnAddToPrescribe()
  {
    await this.addToPrescription.click()
  }
  async clickOnSetAsDefault()
  {
    await this.setAsDefault.click()
  }
  async clickOnRepeatable()
  {
    await this.repeatable.click()
  }
  async clickOPrivateRecord()
  {
    await this.privateRecord.click()
  }

  async enterDiagnosedDate(date) {
    await typeText(this.page, this.diagnosedDate, date);
  }
  async enterDiagnosis1stSeenDate(date) {
    await typeText(this.page, this.diagnosis1stSeenDate, date);
  }
  async selectStatus(statusName) {
    await selectFromDropdown(this.page, this.status, statusName);
  }

  async selectSeverity(severityName) {
    await selectFromDropdown(this.page, this.severity, severityName);
  }
  async selectActivity(activityName) {
    await selectFromDropdown(this.page, this.activity, activityName);
  }
  async selectCountryOfDiagnosis(countryName) {
    await selectFromDropdown(this.page, this.countryOfDiagnosis, countryName);
  }

  async searchAndSelectUnderlayingCause(UnderlyingName) {
    await selectFromSearchResults(
      this.page,
      this.underlayingCause,
      UnderlyingName
    );
  }

  async searchAndSelectComplicationsAndDiagnosis(complicationsAndDagnosisName) {
    await selectFromSearchResults(
      this.page,
      this.complicationAndDiagnosis,
      complicationsAndDagnosisName
    );
  }
  async searchAndSelectExternalCause(externalCauseName) {
    await selectFromSearchResults(
      this.page,
      this.externalCause,
      externalCauseName
    );
  }
  async searchAndSelectLinktoProcedure(linkToProcedureName) {
    await selectFromSearchResults(
      this.page,
      this.linkToProcedure,
      linkToProcedureName
    );
  }

  //Recommendations
  async enterReviewDate(date) {
    await typeText(this.page, this.reviewDate, date);
  }

  //Interpretation
  async enterInterpretationOutcome(inte_outcome_eli_text) {
    await selectFromDropdown(
      this.page,
      this.interpretationOutcome,
      inte_outcome_eli_text
    );
  }
}

module.exports = ClinicalExtraDetails;
