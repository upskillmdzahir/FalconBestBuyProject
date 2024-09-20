package falcon.bestbuy.pageActions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import falcon.bestbuy.pageElements.BestBuySearchResultLocators;
import falcon.utilities.SetupDrivers;

public class BestBuySearchResultActions {

	BestBuySearchResultLocators BestBuySearchResultLocatorsObj;

    public BestBuySearchResultActions(){
    	BestBuySearchResultLocatorsObj = new BestBuySearchResultLocators();
        PageFactory.initElements(SetupDrivers.driver, BestBuySearchResultLocatorsObj);
    }
    
    // Method to apply filters
    public void applyFilters(String category, String brand, String priceRange, String rating){
        WebDriverWait wait = new WebDriverWait(SetupDrivers.driver, 10);

        // Apply Category Filter
        BestBuySearchResultLocatorsObj.getCategoryFilter(category).click();

        // Apply Brand Filter
        wait.until(ExpectedConditions.elementToBeClickable(BestBuySearchResultLocatorsObj.getBrandFilter(brand)));
        BestBuySearchResultLocatorsObj.getBrandFilter(brand).click();

        // Apply Price Range Filter
        wait.until(ExpectedConditions.elementToBeClickable(BestBuySearchResultLocatorsObj.getPriceRangeFilter(priceRange)));
        BestBuySearchResultLocatorsObj.getPriceRangeFilter(priceRange).click();

        // Apply Rating Filter
        wait.until(ExpectedConditions.elementToBeClickable(BestBuySearchResultLocatorsObj.getRatingFilter(rating)));
        BestBuySearchResultLocatorsObj.getRatingFilter(rating).click();
    }
	
	public void verifyProductsByBrandAndCategory(String brand, String category) {
		// TODO Auto-generated method stub
		
	}

	public void verifyProductsWithinPriceRange(String priceRange) {
		// TODO Auto-generated method stub
		
	}

	public void verifyProductsRating(String rating) {
		// TODO Auto-generated method stub
		
	}

	public void verifySearchResultsPage(String expectedText) {
		// TODO Auto-generated method stub
		
	}
}
