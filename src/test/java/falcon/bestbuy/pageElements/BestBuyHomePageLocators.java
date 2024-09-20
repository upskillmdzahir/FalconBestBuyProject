package falcon.bestbuy.pageElements;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BestBuyHomePageLocators {

    // Search Text Box
    @FindBy(xpath = "//input[@placeholder='What can we help you find today?']")
    public WebElement txtbxSearch;

    // Search Button
    @FindBy(xpath = "//button[@title='submit search']")
    public WebElement btnSearch;

}
