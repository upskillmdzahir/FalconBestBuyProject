package falcon.utilities; // Updated package name

import cucumber.api.Scenario;
import cucumber.api.java.After;

public class AfterActions {

	TakeScreenshots TakeScreenshotsObj = new TakeScreenshots();
	
	@After // <@After annotation from Cucumber - runs after each scenario
	public void afterActions(Scenario scenario) throws Exception { // Changed parameter name to 'scenario' for clarity
		
		if (scenario.isFailed()) { // Check if the scenario failed
			TakeScreenshotsObj.takeScreenshot(); // Take screenshot if the scenario fails
		}
		
		SetupDrivers.tearDownDriver(); // Tear down the WebDriver
		System.out.println(" ------Test Complete, Browser Closed ");
	}
}
