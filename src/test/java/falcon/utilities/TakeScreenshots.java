package falcon.utilities; // Updated package name

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class TakeScreenshots { // Updated class name
	
	public void takeScreenshot() throws Exception { // Renamed method for clarity
		
		String filename = "BestBuy "; // Updated filename prefix for the new project
		
		DateFormat dateFormat = new SimpleDateFormat("MM-dd-yyyy_HH-mm-ss"); // Updated date format for clarity
		Date date = new Date();
		
		File screenshot = ((TakesScreenshot) SetupDrivers.getDriver()).getScreenshotAs(OutputType.FILE); // Use updated method to get driver
		
		FileUtils.copyFile(screenshot, new File(System.getProperty("user.dir") + "/screenshots/" + filename + dateFormat.format(date) + ".png"));
		
		System.out.println(">>>>>>>> Screenshot Taken >>>>>>>>");
	}
}
