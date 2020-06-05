// Copyright [2015] [Banana.ch SA - Lugano Switzerland]
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//


// @id = ch.banana.addon.vatreportef1q2018.test
// @api = 1.0
// @pubdate = 2017-10-14
// @publisher = Banana.ch SA
// @description = <TEST vatreport_ef1q2018.js>
// @task = app.command
// @doctype = *.*
// @docproperties = 
// @outputformat = none
// @inputdataform = none
// @includejs = ../vatreport_ef1q2018.js
// @timeout = -1


/* 
    SUMMARY
    -------
    Javascript test
    1. Open the .ac2 file
    2. Execute the .js script
    3. Save the report
**/

// Register test case to be executed
Test.registerTestCase(new ReportEF1Q2018Test());

function ReportEF1Q2018Test() { // Here we define the class, the name of the class is not important

}

// This method will be called at the beginning of the test case
ReportEF1Q2018Test.prototype.initTestCase = function() {

}

// This method will be called at the end of the test case
ReportEF1Q2018Test.prototype.cleanupTestCase = function() {

}

// This method will be called before every test method is executed
ReportEF1Q2018Test.prototype.init = function() {


}

// This method will be called after every test method is executed
ReportEF1Q2018Test.prototype.cleanup = function() {

}

// All methods starting wiht 'test' will be executed
ReportEF1Q2018Test.prototype.test1 = function() {


   Test.logger.addKeyValue("key1", "test1");
}

ReportEF1Q2018Test.prototype.test2 = function() {
   Test.logger.addKeyValue("key1", "test2");
}

ReportEF1Q2018Test.prototype.testReport = function() {
   Banana.Test.logger.addComment("Test comment");
   var report = Banana.Report.newReport("Test report");
   var fileAC2 = "../testfiles/resocontoivach2018/Codici_V77_V80.ac2"
   var banDoc = Banana.application.openDocument(fileAC2);
   if (!banDoc) {return;}

   var lan = banDoc.info("Base","Language");
   report.addParagraph(lan, "");
   report.addParagraph(fileAC2, "");

   //Add styles and print the report
   var stylesheet = createStyleSheet();
   Banana.Report.preview(report, stylesheet);
}

function createStyleSheet() {
    var stylesheet = Banana.Report.newStyleSheet();
    var pageStyle = stylesheet.addStyle("@page");
    pageStyle.setAttribute("margin", "10mm 20mm 10mm 20mm");
    return stylesheet;
}


