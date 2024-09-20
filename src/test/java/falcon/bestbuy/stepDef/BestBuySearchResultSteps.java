package falcon.bestbuy.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import falcon.bestbuy.pageActions.BestBuySearchResultActions;

public class BestBuySearchResultSteps {

    private BestBuySearchResultActions BestBuySearchResultActionsObj = new BestBuySearchResultActions();

    @When("^The user filters by \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", and \"([^\"]*)\"$")
    public void the_user_filters_by(String category, String brand, String priceRange, String rating) throws Throwable {
    	BestBuySearchResultActionsObj.applyFilters(category, brand, priceRange, rating);
    }

    @Then("^The product list should display only \"([^\"]*)\" products in the \"([^\"]*)\" category$")
    public void the_product_list_should_display_only_products_in_the_category(String brand, String category) throws Throwable {
    	BestBuySearchResultActionsObj.verifyProductsByBrandAndCategory(brand, category);
    }
    
    @Then("^The products should be within the \"([^\"]*)\"$")
    public void the_products_should_be_within_the(String priceRange) throws Throwable {
    	BestBuySearchResultActionsObj.verifyProductsWithinPriceRange(priceRange);
    }

    @Then("^The products should have a rating of \"([^\"]*)\" or higher$")
    public void the_products_should_have_a_rating_of_or_higher(String rating) throws Throwable {
    	BestBuySearchResultActionsObj.verifyProductsRating(rating);
    }

    @Then("^The search results page should display products related to \"([^\"]*)\"$")
    public void the_search_results_page_should_display_products_related_to(String expectedText) throws Throwable {
    	BestBuySearchResultActionsObj.verifySearchResultsPage(expectedText);
    }
}
