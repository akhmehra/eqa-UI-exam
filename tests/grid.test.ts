import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

const headerText=[];
const secondaryColumnOptions=[];
const sideBarColumnOptions= [];
const namesToFilter = ["Gil", "Tony", "Isabella", "Poppy"];

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  });

  it("Validate Primary Headers", () => {
    //Clicking the sidebar Column to hide
    GridPage.sideBarColumn.click();
    browser.pause(2000);

    //Used For Loop to get all the Primary Header and save it to an array for which text is not empty
    for(let i=0;i<GridPage.primaryHeaders.length;i++){
      if(GridPage.primaryHeaders[i].getText()!=null || GridPage.primaryHeaders[i].getText()!=""){
        headerText.push(GridPage.primaryHeaders[i].getText());
      }
    }

    //Validating whether fetched data in array consist expected data
    expect(headerText.includes("Game of Choice")).to.be.true;
    expect(headerText.includes("Participant")).to.be.true;
    expect(headerText.includes("Performance")).to.be.true;
  });

  it("Validate Primary Headers are available in the Columns Sidebar options", () => {
    //Clicking the sidebar Column to hide
    GridPage.sideBarColumn.click();
    browser.pause(2000);

    /*
    * Used For Loop to get all the Primary Header of sidebar column and save it to an array and 
    * validate the same with headerText Saved in Previous it block 
    **/
    for(let i=0;i<GridPage.columnSidebarOption.length;i++){
      expect(headerText.includes(GridPage.columnSidebarOption[i].getText())).to.be.true;
    }

    //Clicking the sidebar Column to unhide
    GridPage.sideBarColumn.click();
    browser.pause(2000);
  });

  it("Validate Secondary Headers are available in the Columns Sidebar options", () => {
    //Clicked Side Bar to hide
    GridPage.sideBarColumn.click();
    browser.pause(2000);

    //Used For Loop to get all the Secondary Header of sidebar column and save it to an array 
    for(let i=0;i<GridPage.secondaryColumnOption.length;i++){
      if(GridPage.secondaryColumnOption[i].getText()!=null || GridPage.secondaryColumnOption[i].getText()!=""){
        secondaryColumnOptions.push(GridPage.secondaryColumnOption[i].getText());
      }
    }

    //Clicked Side Bar to unhide
    GridPage.sideBarColumn.click();
    browser.pause(2000);

    //Used For Loop to get all the Secondary Header in sidebar column option and save it to an array
    for(let j=0;j<GridPage.sideBarColumnOption.length;j++){
      if(GridPage.sideBarColumnOption[j].getText()!=null || GridPage.sideBarColumnOption[j].getText()!=""){
        sideBarColumnOptions.push(GridPage.sideBarColumnOption[j].getText());
      }
    }
    
  });

  it("Validate Filtering Name will return result", () => {
    // For Loop used to set value as per the input name array and validate the same hence two loop used
    for(let i=0;i<namesToFilter.length;i++){
      GridPage.nameFilterInput.setValue(namesToFilter[i]);
      browser.pause(2000);

      for(let j=0;j<GridPage.nameCellValue.length;j++){
        expect(GridPage.nameCellValue[j].getText().includes(namesToFilter[i])).to.be.true;
      }
    }

    GridPage.nameFilterInput.click();
    browser.pause(2000);

    //For Loop user to Clear Field
    for(let k=0;k<5;k++){
      browser.keys("Backspace");
    }
  });

  it("Validate Winnings in October is less than 5000", () => {
    GridPage.scrollHorizontalElement.click();
    browser.pause(8000);
    
    //For Loop used to validate winning value and validate the same
    for(let i=0;i<GridPage.columnDataOct.length;i++){
      var text=GridPage.columnDataOct[i].getText().replace("$", "");
      text= GridPage.columnDataOct[i].getText().replace(",", "");
      
      expect(parseInt(GridPage.columnDataOct[i].getText())).to.be.below(5000);
    }
  });

});
