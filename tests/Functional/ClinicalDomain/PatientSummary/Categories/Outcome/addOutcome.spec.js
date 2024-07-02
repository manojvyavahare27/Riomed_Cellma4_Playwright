//Sathyanarayan

const fs = require("fs");
const XLSX = require("xlsx");
const path = "C:/Riomed/Cellma4Automation";
const mysql = require("mysql");
const convertExcelToJson = require("../../../../../../config/global-setupOptimized");

const { test, expect } = require("@playwright/test");
const connectToDatabase = require("../../../../../../manoj").default;
const { executeQuery } = require("../../../../../../databaseWriteFile"); // Update the path accordingly
import compareJsons from "../../../../../../../Cellma4Automation/compareFileOrJson";

import logger from "../../../../../../Pages/BaseClasses/logger";
import LoginPage from "../../../../../../Pages/BaseClasses/LoginPage";
import Homepage from "../../../../../../Pages/BaseClasses/Homepage";
import ConfirmExisting from "../../../../../../Pages/PatientDomain/ConfirmExisting";
import ContactHistory from "../../../../../../Pages/ClinicalDomain/PatientSummary/ContactHistory";
import PatientSearch from "../../../../../../Pages/PatientDomain/PatientSearch";
import Environment from "../../../../../../Pages/BaseClasses/Environment";
import Menu from "../../../../../../Pages/BaseClasses/Menu";
import ClinicalSummary from "../../../../../../Pages/ClinicalDomain/PatientSummary/ClinicalSummary";
import ClinicalExtraDetails from "../../../../../../Pages/ClinicalDomain/PatientSummary/ClinicalExtraDetails";
import PatientSummary from "../../../../../../Pages/ClinicalDomain/PatientSummary/PatientSummary";

import { TIMEOUT } from "dns";
import { error } from "console";
import { before } from "node:test";
import { toggleDivVisibility } from "../../../../../../UtilFiles/DynamicUtility";

// Array to store console logs

const consoleLogs = [];
let jsonData;

test.describe("Excel Conversion Examination Category", () => {
  test("Extract Patient Summary Details", async ({}) => {
    const excelFilePath =
      process.env.EXCEL_FILE_PATH || "./ExcelFiles/PatientSummary.xlsx";
    const jsonFilePath = "./TestDataWithJSON/PatientDomain/PatientSummary.json";

    console.log("excelFilePath:", excelFilePath);
    console.log("jsonFilePath:", jsonFilePath);
    const conversionSuccess = await convertExcelToJson(
      excelFilePath,
      jsonFilePath
    );
    if (conversionSuccess) {
      // jsonData = require("../../../TestDataWithJSON/PatientDomain/PatientDetails.json");
      jsonData = require("../../../../../../TestDataWithJSON/PatientDomain/PatientSummary.json");
      console.log("Excel file has been converted successfully!");
      console.log("jsonData:", jsonData); // Log the loaded JSON data
      console.log("excelFilePath after conversion:", excelFilePath);
      console.log("jsonFilePath after conversion:", jsonFilePath);
    } else {
      throw new Error("Excel to JSON conversion failed.");
    }
  });
});

test.describe("Examination Category", () => {
  test("Add Examination", async ({ page }) => {
    if (!jsonData || !jsonData.PatientDetails) {
      throw new Error("JSON data is missing or invalid.");
    }
    let index = 0;
    for (const data of jsonData.PatientDetails) {
      const loginpage = new LoginPage(page);
      const homepage = new Homepage(page);
      const environment = new Environment(page);
      const confirmexisting = new ConfirmExisting(page);
      const contacthistory = new ContactHistory(page);
      const patientsearch = new PatientSearch(page);
      const outcome = new ClinicalSummary(page);
      const outcomeExtraDetails = new ClinicalExtraDetails(page);
      const patientsummary = new PatientSummary(page);

      const menu = new Menu(page);
      await page.goto(environment.Test);
      await loginpage.enterUsername(jsonData.loginDetails[0].username);
      logger.info("Username enter successfully");
      await loginpage.enter_Password(jsonData.loginDetails[0].password);
      logger.info("Password enter successfully");
      await loginpage.clickOnLogin();
      logger.info("Clicked on Login button successfully");
      await homepage.clickOnPatientIcon();
      logger.info("Clicked on Patient Icon successfully");
      await patientsearch.clickOnSearchButton();
      logger.info("Clicked on Search button successfully");
      await patientsearch.enterGivenName(data.pat_firstname);
      logger.info("Given Name entered successfully");
      //await page.pause()
      await patientsearch.enterFamilyName(data.pat_surname);
      logger.info("Family Name entered successfully");
      await patientsearch.selectSex(data.pat_sex);

      await patientsearch.selectBornDate(jsonData.PatientDetails[index].pat_dob);
      //await patientsearch.selectBornDate(formattedDate);
      await patientsearch.clickOnSearchButton();
      await patientsearch.clickOnSearchPatientLink();
      await page.waitForTimeout(1500);
      await confirmexisting.clickOnConfirmExistingDetails();
     // await page.pause();
      await contacthistory.selectServiceFilter('General Medicine Automation');
      await contacthistory.selectContactReasonFilter('Assessments')
      await contacthistory.enterContactDate('26/04/2024');
      await contacthistory.selectContactReason('Assessments');
      await contacthistory.selectContactLocation('Cardio Location');
      await contacthistory.enterContactWith('Dr Sathya');
      await contacthistory.clickOnAddContact();
      await outcome.clickOnViewContactItemsMenu();
      await outcome.clickOnPinContactItemsMenu();
      await outcome.selectCategoryFromList('Outcomes'); 
      await page.waitForTimeout(2000)

         ////////REVIEW EXISTING ITEM AND DELETE/////
      if(await outcome.checkItemOnHistoryTable(jsonData.AddOutcome[index].pacr_que_name)){
      await outcome.clickOnItemReview(jsonData.AddOutcome[index].pacr_que_name);
      console.log("Item reviewed before deleting");
      await outcome.clickOnItemEdit(jsonData.AddOutcome[index].pacr_que_name);
      await outcomeExtraDetails.clickOnDelete();
      await outcomeExtraDetails.clickOnConfirmDelete();
      await outcomeExtraDetails.enterDeleteReason('Deleted Existing item');
      await outcomeExtraDetails.clickOnSaveDeleteReason();
      console.log('\x1bItem was deleted successfully\x1b[0m');
      }
      await page.waitForTimeout(2000)


      // console.log('\x1b[31mItem was deleted successfully\x1b[0m'); //Red
      // console.log('\x1b[32mItem was deleted successfully\x1b[0m');   // Green
      // console.log('\x1b[90mItem was deleted successfully\x1b[0m');    // Grey
      await page.pause()

      //////Fetch Patient Details/////////
      var sqlQuery =
      "select * from patient_audit where paa_use_username='" + jsonData.loginDetails[0].username + 
      "' and paa_type='selected' order by 1 desc limit 1";
      var sqlFilePath = "SQLResults/PatientDomain/PatientAudit.json";
      var results = await executeQuery(sqlQuery, sqlFilePath);
      console.log("\n Patient Details stored into the database: \n", results);
      const patId = results[0].paa_pat_id;

      console.log("Patient Accessed by User:" + patId);

      

         ////////ADD NEW OUTCOME/////
      await outcome.selectandAddClinicalItem(jsonData.AddOutcome[index].pacr_que_name);//This searches item and clicks on add button
      await page.waitForTimeout(2000)
      await outcomeExtraDetails.clickOnClincialItemCollapsable();
      await page.waitForTimeout(1000)
      await outcomeExtraDetails.selectClinicalItemSubcategory(jsonData.AddOutcome[index].eli_text);
      await outcomeExtraDetails.enterDateOfOutcome(jsonData.AddOutcome[index].outc_date);
      await outcomeExtraDetails.selectFrequency(jsonData.AddOutcome[index].outc_frequency);
      await outcomeExtraDetails.enterClinicalItemNotes(jsonData.AddOutcome[index].outc_notes);
      await outcomeExtraDetails.clickOnSave();
      await page.waitForTimeout(500)
      await expect(page.getByText('Outcome Record Added Successfully')).toHaveText('Outcome Record Added Successfully')
      //await expect(page.getByText(`${clinicaCatergory} Record Added Successfully`)).toHaveText(`${clinicaCatergory} Record Added Successfully`)

     await outcome.toggleSearchSection();//Close the search section 
     await page.waitForTimeout(1000)


     ////// Database comparison- Patient Clinical Records - ADDING NEW OUTCOME/////////
        sqlQuery =
        "select pacr_id, pacr_category, pacr_que_name, pacr_clinic_date, pacr_risk, outc_date ," + 
        "outc_frequency, outc_notes from patient_clinical_records join patient_clinical_records_details"+
        " on pacr_id=pacrd_pacr_id join outcomes on pacr_id=outc_pacr_id where pacr_record_status='approved'"+
        " and pacrd_record_status='approved' and outc_record_status='approved' and pacr_pat_id=" + patId +
        " and pacr_record_status='approved' and pacr_que_name='" + jsonData.AddOutcome[index].pacr_que_name +
        "' and pacr_category='outcome' order by 1 desc limit 1";
             
      sqlFilePath = "SQLResults/ClinicalDomain/patientClinicalRecord.json";
      results = await executeQuery(sqlQuery, sqlFilePath);
      const pacrId = results[0].pacr_id;
      console.log("\n Patient Clinical Records stored into the database: \n", results);
      var match = await compareJsons(sqlFilePath, null, jsonData.AddOutcome[index]);
      if (match) {
        console.log(
          "\n Patient Clinical Records Comparision: Parameters from both JSON files match!\n"
        );
      } else {
        console.log(
          "\n Patient Clinical Records Comparision: Parameters from both JSON files do not match!\n"
        );
      }

      ////////UPDATE THE NEWLY ADDED OUTCOME/////

     if(await outcome.checkItemOnHistoryTable(jsonData.EditOutcome[index].pacr_que_name)){
      await outcome.clickOnItemDiv(jsonData.EditOutcome[index].pacr_que_name)
      if(await outcome.checkItemOnHistoryTable( null, true)){
        console.log("Newly added item is not reviewed before updating the record");
      }
      else{
        console.error("Newly added item is reviewed before updating the record.");
      }
      await outcome.clickOnItemEdit();
      await page.waitForTimeout(2000)
      await outcomeExtraDetails.clickOnClincialItemCollapsable();
      await outcomeExtraDetails.selectClinicalItemSubcategory(jsonData.EditOutcome[index].eli_text);
      await outcomeExtraDetails.enterDateOfOutcome(jsonData.EditOutcome[index].outc_date);
      await outcomeExtraDetails.selectFrequency(jsonData.EditOutcome[index].outc_frequency);
      await outcomeExtraDetails.enterClinicalItemNotes(jsonData.EditOutcome[index].outc_notes);
      await outcomeExtraDetails.clickOnSave();
      await page.waitForTimeout(1000)

      
     ////// Database comparison - Patient Clinical Records - UPDATE OUTCOME/////////
     sqlQuery =
     "select pacr_id, pacr_category, pacr_que_name, pacr_clinic_date, outc_date ," + 
     "outc_frequency, outc_notes from patient_clinical_records join patient_clinical_records_details"+
     " on pacr_id=pacrd_pacr_id join outcomes on pacr_id=outc_pacr_id where pacr_record_status='approved'"+
     " and pacrd_record_status='approved' and outc_record_status='approved' and pacr_id=" + pacrId +
     " and pacr_record_status='approved'";
          
   sqlFilePath = "SQLResults/ClinicalDomain/patientClinicalRecord.json";
   results = await executeQuery(sqlQuery, sqlFilePath);

   console.log("\n Patient Clinical Records stored into the database: \n", results);
   var match = await compareJsons(sqlFilePath, null, jsonData.EditOutcome[index]);
   if (match) {
     console.log(
       "\n Update Patient Clinical Records Comparision: Parameters from both JSON files match!\n"
     );
   } else {
     console.log(
       "\n Update Patient Clinical Records Comparision: Parameters from both JSON files do not match!\n"
     );
   }



      ////////AUTO UPDATE RISK AFTER UPDATING OUTCOME /////
    
      //await expect(page.getByText('Outcome Record Updated Successfully')).toHaveText('Outcome Record Updated Successfully')
      await outcome.clickOnItemHistory();
     await outcome.clickOnHistoryItemDiv();
      await page.waitForTimeout(1000)
      await outcome.closeWindow();
      await page.waitForTimeout(2000)
      if(await outcome.checkItemOnHistoryTable(null, true)){
        console.error('Newly added item has not been reviewed after updating the record.');
        await outcome.clickOnItemReview();
      }
      else{
        console.log('Newly added item has been reviewed after updating the record.');
      }
      await page.waitForTimeout(500)
      await outcome.clickOnItemHighlightNone();
      await page.waitForTimeout(500)
      await outcome.selectLowRiskLevel();
     }
      await page.waitForTimeout(500)
      await outcome.selectModerateRiskLevel();
      await page.waitForTimeout(500)
      await outcome.selectHighRiskLevel();
      await page.waitForTimeout(500)
      await outcome.selectAllRiskLevel();
      await outcome.clickOnLevelTwoExtraDetails();
      await outcome.clickOnLevelThreeExtraDetails();
      await outcome.clickOnLevelOneExtraDetails();

      await page.waitForTimeout(1000)

      ////// Database comparison - Patient Clinical Records - UPDATE OUTCOME RISK/////////
     sqlQuery =
     "select pacr_risk from patient_clinical_records where pacr_id=" + pacr_id;
          
   sqlFilePath = "SQLResults/ClinicalDomain/patientClinicalRecord.json";
   results = await executeQuery(sqlQuery, sqlFilePath);
   if(results[0].pacr_risk == jsonData.EditOutcome[index].pacr_risk){
    console.log(
      "\n Patient Clinical Records Comparision: RISK Updated Successfully! \n"
    );
   } else {
    console.log(
      "\n Patient Clinical Records Comparision: RISK Update Failed! \n"
    );
  }

     ///////// Deleting Item ////////////

      await outcome.clickOnItemEdit();
      await page.waitForTimeout(2000)
      await outcomeExtraDetails.clickOnDelete();
      await outcomeExtraDetails.clickOnCancelDelete();
      await outcomeExtraDetails.clickOnDelete();
      await outcomeExtraDetails.clickOnConfirmDelete();
      await outcomeExtraDetails.enterDeleteReason(jsonData.DeleteOutcome[index].pacr_delete_reason);
      await outcomeExtraDetails.clickOnSaveDeleteReason();
      await page.waitForTimeout(1000)

       ////// Database comparison- Patient Clinical Records - DELETE OUTCOME/////////
       sqlQuery =
       "select pacr_que_name, pacr_delete_reason from patient_clinical_records where pacr_id=" +
       pacrId +
       " and pacr_record_status='wrong'";

     sqlFilePath = "SQLResults/ClinicalDomain/patientClinicalRecord.json";
     results = await executeQuery(sqlQuery, sqlFilePath);
     //  pacrId=results[0].pacr_id;
     console.log("\n Patient Details stored into the database: \n", results);
     var match = await compareJsons(
       sqlFilePath,
       null,
       jsonData.DeleteOutcome[index]
     );
     if (match) {
       console.log(
         "\n  Patient Clinical Records Comparision: Parameters from both JSON files match!\n"
       );
     } else {
       console.log(
         "\n  Patient Clinical Records Comparision: Parameters from both JSON files do not match!\n"
       );
     }
     


      if(!(await outcome.checkItemOnHistoryTable(jsonData.EditOutcome[index].pacr_que_name)) ){
        console.log("Item removed from All Category Section");
      }
      await outcome.clickOnNormalItemsSection();
      await page.waitForTimeout(1000)
      // if((await outcome.checkItemOnHistoryTable('Sleep walking disorder')) ){
      //   console.log("Item Present in Normal Section");
      // }
      await outcome.clickOnMigratedItemsSection();
      // if((await outcome.checkItemOnHistoryTable('Sleep walking disorder')) ){
      //   console.log("Item Present in Migrated Section");
      // }
      await outcome.clickOnDeletedItemsSection();
      await page.waitForTimeout(1000)
      if((await outcome.checkItemOnHistoryTable(jsonData.DeleteOutcome[index].pacr_que_name)) ){
        console.log("Item Present in Deleted Section");
      }
      await page.waitForTimeout(1000);
      // await outcome.clickOnArchivedItemsSection();
      // if((await outcome.checkItemOnHistoryTable('Sleep walking disorder')) ){
      //   console.log("Item Present in Archived Section");
      // }
      await outcome.clickOnAllItemsSection();
      // if((await outcome.checkItemOnHistoryTable('Sleep walking disorder')) ){
      //   console.log("Item Present in All Section");
      // }
      await outcome.toggleHistorySection(); // Close the history section



      //   await examinationhome.expandExaminationHistory()
      //   await examinationhome.expandExaminationHistory()
      //   await examinationhome.clickOnAllLinks();
      //  await examinationhome.clickOnHistoryIcon()
      //  await examinationhome.expandsHistoryofExaminationIcon()
      //  await examinationhome.expandsHistoryofExaminationIcon()
      //  await examinationhome.closeExaminationHistoryPopup()
      //  await page.waitForTimeout(2000)
      //  await examinationhome.clickOnReviewExaminationButton()
      //  await page.waitForTimeout(2000)
      //  await examinationhome.clickOnHighlightedNoneRisk()
      //  await page.waitForTimeout(2000)
      //  await examinationhome.clickOnLowRiskLevel()
      //  await page.waitForTimeout(2000)
      //  await examinationhome.clickOnModerateRiskLevel()
      //  await page.waitForTimeout(2000)
      //  await examinationhome.clickOnHighRiskLevel()
      //  await page.waitForTimeout(2000)
      //  await examinationhome.clickOnAllRiskLevel()
      //  await page.waitForTimeout(1000)
      //  await page.pause()
      //  await examinationhome.checkExtradetailsLevel()

      ////////To be utilized to implement pin functionality/////////////
      //   test('Verify pin functionality', async ({ page }) => {
      //     const contactItems = new ContactItems(page);

      //     // Click on the view menu to open the window
      //     await contactItems.clickOnViewMenu();

      //     // Assert that the viewMenu button is hidden and the closeMenu button is visible
      //     expect(await page.isVisible(contactItems.viewMenu)).toBeFalsy();
      //     expect(await page.isVisible(contactItems.closeMenu)).toBeTruthy();

      //     // Click the pinContactItemsMenu button
      //     await contactItems.clickOnPinContactItemsMenu();

      //     // Assert that the pinContactItemsMenu button is hidden and the closeMenu button is visible again
      //     expect(await page.isVisible(contactItems.pinContactItemsMenu)).toBeFalsy();
      //     expect(await page.isVisible(contactItems.closeMenu)).toBeTruthy();

      //     // Click the pinContactItemsMenu button again to revert the state
      //     await contactItems.clickOnPinContactItemsMenu();

      //     // Assert that the pinContactItemsMenu button is visible and the closeMenu button is hidden
      //     expect(await page.isVisible(contactItems.pinContactItemsMenu)).toBeTruthy();
      //     expect(await page.isVisible(contactItems.closeMenu)).toBeFalsy();
      // });

      await page.pause();
    }
  });
});
