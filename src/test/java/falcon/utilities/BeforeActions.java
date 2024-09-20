package falcon.utilities; // Updated package name

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class BeforeActions {
	
	@Before // <@Before annotation from Cucumber - runs before each scenario
	public void beforeActions(Scenario scen) { // Method executed before each scenario
		System.out.println("--->>>> Initializing Driver...."); // Logging driver initialization
		SetupDrivers.setupDriver(); // Calling setupDriver method to initialize the WebDriver
		System.out.println("Test Scenario Name : " + scen.getName()); // Logging the name of the current scenario
	}
}
