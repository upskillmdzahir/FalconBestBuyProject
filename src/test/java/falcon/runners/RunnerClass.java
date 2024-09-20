package falcon.runners; // Updated package name

import java.io.File;

import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "src/test/resources/FeatureFiles" }, // Path to your feature files
                glue = { "falcon.bestbuy.stepDef", "falcon.utilities" }, // Updated glue code packages
                tags = {"@regression", "@smoke"}, // Tags used in your feature files
                plugin = { "pretty", "html:target/cucumber-htmlreport", 
                           "json:target/cucumber-report.json",
                           "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports.html" }, // Reporting plugins
                monochrome = true) // Makes console output more readable

public class RunnerClass extends AbstractTestNGCucumberTests {

    @AfterClass // @AfterClass annotation from TestNG
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/config.xml")); // Path to your Extent report configuration file
    }

}
