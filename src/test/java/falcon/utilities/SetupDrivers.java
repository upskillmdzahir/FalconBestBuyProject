package falcon.utilities; // Updated package name

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SetupDrivers {

    public static WebDriver driver; // initializing driver

    public static void setupDriver() {
     
        WebDriverManager.chromedriver().setup(); // setting up ChromeDriver

        ChromeOptions options = new ChromeOptions(); // initializing Chrome options
        options.addArguments("--start-maximized"); // maximize browser window
        options.addArguments("--disable-notifications"); // disable browser notifications
        // options.addArguments("--headless"); // uncomment for headless execution
        driver = new ChromeDriver(options); // initializing ChromeDriver
        driver.get("https://www.bestbuy.com"); // loading Best Buy homepage
    }

    public static WebDriver getDriver() {
        return driver; // return driver instance
    }

    public static void tearDownDriver() {
        if (driver != null) {
            driver.close(); // close current browser window
            driver.quit(); // close all browser windows and end session
        }
    }
}
