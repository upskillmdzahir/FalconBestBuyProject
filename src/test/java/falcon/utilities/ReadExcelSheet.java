package falcon.utilities;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Map;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReadExcelSheet {

    // Method to read data from the Excel sheet and store it in a nested map
    public static Map<String, Map<String, String>> setMapData() throws Exception {
        
        // Path to the Excel file
        String path = System.getProperty("user.dir") + "/src/test/resource/Datasheets/BestBuyDataSheet.xlsx";
        FileInputStream fis = new FileInputStream(path);
        Workbook workbook = new XSSFWorkbook(fis);
        Sheet sheet = workbook.getSheetAt(0);
        int lastRow = sheet.getLastRowNum();

        // Nested map to store data
        Map<String, Map<String, String>> excelFileMap = new HashMap<>();

        // Loop through each row (starting from row 1 to skip the header)
        for (int i = 1; i <= lastRow; i++) {  
            Row row = sheet.getRow(i);
            DataFormatter df = new DataFormatter();  // To format the cell value as string

            // Get the Test Case ID (first column) to use as the key
            String testCaseId = df.formatCellValue(row.getCell(0));

            // Create a map for each test case
            Map<String, String> dataMap = new HashMap<>();
            dataMap.put("Product", df.formatCellValue(row.getCell(1)));        // Product
            dataMap.put("Category", df.formatCellValue(row.getCell(2)));       // Category
            dataMap.put("Brand", df.formatCellValue(row.getCell(3)));          // Brand
            dataMap.put("Price Range", df.formatCellValue(row.getCell(4)));    // Price Range
            dataMap.put("Rating", df.formatCellValue(row.getCell(5)));         // Rating

            // Put the test case data into the main map
            excelFileMap.put(testCaseId, dataMap);
        }
        
        return excelFileMap;     //Returning excelFileMap
    }

    // Method to fetch a specific value from the nested map using Test Case ID and the key (e.g., Product, Brand)
    public static String getMapData(String testCaseId, String key) throws Exception {
        Map<String, String> dataMap = setMapData().get(testCaseId);
        return dataMap.get(key);
    }

    public static void main(String[] args) throws Exception {
        // Example usage
        System.out.println("Product for BestBuy-001: " + getMapData("BestBuy-001", "Product"));
        System.out.println("Category for BestBuy-002: " + getMapData("BestBuy-002", "Category"));
        System.out.println("Brand for BestBuy-003: " + getMapData("BestBuy-003", "Brand"));
        System.out.println("Price Range for BestBuy-004: " + getMapData("BestBuy-004", "Price Range"));
        System.out.println("Rating for BestBuy-005: " + getMapData("BestBuy-005", "Rating"));
    }
}
