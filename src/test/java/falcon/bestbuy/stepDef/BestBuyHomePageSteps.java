package falcon.bestbuy.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import falcon.bestbuy.pageActions.BestBuyHomePageActions;

public class BestBuyHomePageSteps {

    BestBuyHomePageActions BestBuyHomePageActionsObj = new BestBuyHomePageActions();

    @Given("^The user is on the Best Buy homepage$")
    public void the_user_is_on_the_Best_Buy_homepage() throws Throwable {
       
    }

    @Given("^The user searches for \"([^\"]*)\"$")
    public void the_user_searches_for(String product) throws Throwable {
        BestBuyHomePageActionsObj.searchProduct (product);
    }

}
