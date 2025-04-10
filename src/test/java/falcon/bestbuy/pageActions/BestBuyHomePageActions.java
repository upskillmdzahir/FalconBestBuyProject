package falcon.bestbuy.pageActions;
import java.time.Duration;

import java.time.Duration;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import falcon.bestbuy.pageElements.BestBuyHomePageLocators;
import falcon.utilities.SetupDrivers;

public class BestBuyHomePageActions {
    
    BestBuyHomePageLocators BestBuyHomePageLocatorsObj;

    public BestBuyHomePageActions(){
        BestBuyHomePageLocatorsObj = new BestBuyHomePageLocators();
        PageFactory.initElements(SetupDrivers.driver, BestBuyHomePageLocatorsObj);
    }

/*    public void searchProduct(String product){
        //WebDriverWait wait = new WebDriverWait(SetupDrivers.driver, 10);
        //wait.until(ExpectedConditions.elementToBeClickable(BestBuyHomePageLocatorsObj.txtbxSearch));
        BestBuyHomePageLocatorsObj.txtbxSearch.sendKeys(product);
        BestBuyHomePageLocatorsObj.btnSearch.click();
    }*/
    public void searchProduct(String product){
        WebDriverWait wait = new WebDriverWait(SetupDrivers.driver, 15);

        wait.until(ExpectedConditions.visibilityOf(BestBuyHomePageLocatorsObj.txtbxSearch));
        wait.until(ExpectedConditions.elementToBeClickable(BestBuyHomePageLocatorsObj.txtbxSearch));
        BestBuyHomePageLocatorsObj.txtbxSearch.sendKeys(product);

        wait.until(ExpectedConditions.elementToBeClickable(BestBuyHomePageLocatorsObj.btnSearch));
        BestBuyHomePageLocatorsObj.btnSearch.click();
    }



}
