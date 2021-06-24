import { Page } from "../pages/page";

export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
  }

  public static get gridContainer() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]' );
  }

  public static get colName() {
    return $$('[ref="eCenterContainer"] [col-id="name"]');
  }

  public static get colDecember() {
    return $$('[ref="eCenterContainer"] [col-id="dec"]');
  }

  public static get columnHeader() {
    return $$('[aria-rowindex="1"] > [role="columnheader"]');
  }

  public static get primaryHeaders() {
    return $$('//span[@ref="agLabel"][1]');
  }

  public static get columnSidebar() {
    return $('//span[contains (text(),"Columns")]');
  }

  public static get columnSidebarOption() {
    return $$('//div[contains(@class,"ag-column-select-column-group")]/span[@ref="eLabel"]');
  }

  public static get secondaryColumnOption() {
    return $$("//span[@ref='eText'][1]");
  }

  public static get sideBarColumnOption() {
    return $$('//div[@class="ag-column-select-column ag-column-select-add-group-indent ag-column-select-indent-1"]/span[@class="ag-column-select-column-label"]');
  }

  public static get sideBarColumn() {
    return $('//span[contains(text(),"Columns")]');
  }

  public static get nameFilterInput() {
    return $('//input[@class="ag-floating-filter-input"]');
  }

  public static get nameCellValue() {
    return $$('//span[@class="ag-cell-value"]');
  }

  public static get columnDataOct() {
    return $$('//div[contains(@class,"currencyCell") and contains(@col-id,"oct")]');
  }

  public static get scrollHorizontalElement() {
    return $('//div[contains(@class,"ag-body-horizontal-scroll-viewport")]');
  }
}