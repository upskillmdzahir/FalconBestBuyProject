package falcon.bestbuy.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BestBuySearchResultLocators {

    // Category filter WebElements
    @FindBy(xpath = "(//a[@class='facet-category'])[1]")
    public WebElement filterMacBooks;

    @FindBy(xpath = "(//a[@class='facet-category'])[3]")
    public WebElement filterWatch;

    @FindBy(xpath = "(//a[@class='facet-category'])[4]")
    public WebElement filterRefrigerator;

    @FindBy(xpath = "(//a[@class='facet-category'])[1]") 
    public WebElement filterTv;

    @FindBy(xpath = "(//a[@class='facet-category'])[2]")
    public WebElement filterCamera;

    // Brand filter WebElements
    @FindBy(xpath = "//input[@aria-label='Apple']")
    public WebElement filterBrandApple;

    @FindBy(xpath = "//input[@aria-label='Samsung']")
    public WebElement filterBrandSamsung;

    @FindBy(xpath = "//input[@aria-label='LG']")
    public WebElement filterBrandLg;

    @FindBy(xpath = "//input[@aria-label='Sony']")
    public WebElement filterBrandSony;

    @FindBy(xpath = "//input[@aria-label='Canon']")
    public WebElement filterBrandCanon;

    // Price filter WebElements
    @FindBy(xpath = "//input[@id='currentprice_facet-$1000-$1249.99-6']")
    public WebElement filterLaptopPrice;

    @FindBy(xpath = "//input[@id='currentprice_facet-$150-$199.99-0']")
    public WebElement filterWatchPrice;

    @FindBy(xpath = "//input[@id='currentprice_facet-$1250-$1499.99-0']")
    public WebElement filterRefrigeratorPrice;

    @FindBy(xpath = "//input[@id='currentprice_facet-$1500-$1999.99-5']")
    public WebElement filterTvPrice;

    @FindBy(xpath = "//input[@id='currentprice_facet-$500-$749.99-1']")
    public WebElement filterCameraPrice;

    // Rating filter WebElements
    @FindBy(xpath = "//input[@aria-label='Rating 4 & Up out of 5 stars']")
    public WebElement filterLaptopRating;

    @FindBy(xpath = "//input[@aria-label='Rating 3 & Up out of 5 stars']")
    public WebElement filterWatchRating;

    @FindBy(xpath = "//input[@aria-label='Rating 4 & Up out of 5 stars']")
    public WebElement filterRefrigeratorRating;

    @FindBy(xpath = "//input[@aria-label='Rating 4 & Up out of 5 stars']")
    public WebElement filterTvRating;

    @FindBy(xpath = "//input[@aria-label='Top-Rated']")
    public WebElement filterCameraRating;

    // Methods to return WebElements based on criteria
    public WebElement getCategoryFilter(String category) {
        switch (category) {
            case "All Laptops":
                return filterMacBooks;
            case "Fitness Smartwatches":
                return filterWatch;
            case "French Door Refrigerators":
                return filterRefrigerator;
            case "All Flat-Screen TVs":
                return filterTv;
            case "Vlogging Cameras":
                return filterCamera;
            default:
                throw new IllegalArgumentException("Invalid category: " + category);
        }
    }

    public WebElement getBrandFilter(String brand) {
        switch (brand) {
            case "Apple":
                return filterBrandApple;
            case "Samsung":
                return filterBrandSamsung;
            case "LG":
                return filterBrandLg;
            case "Sony":
                return filterBrandSony;
            case "Canon":
                return filterBrandCanon;
            default:
                throw new IllegalArgumentException("Invalid brand: " + brand);
        }
    }

    public WebElement getPriceRangeFilter(String priceRange) {
        switch (priceRange) {
            case "$1000-$1249.99":
                return filterLaptopPrice;
            case "$150-$199.99":
                return filterWatchPrice;
            case "$1250-$1499.99":
                return filterRefrigeratorPrice;
            case "$1500-$1999.99":
                return filterTvPrice;
            case "$500-$749.99":
                return filterCameraPrice;
            default:
                throw new IllegalArgumentException("Invalid price range: " + priceRange);
        }
    }

    public WebElement getRatingFilter(String rating) {
        switch (rating) {
            case "4 & Up":
                return filterLaptopRating; 
            case "3 & Up":
                return filterWatchRating;
            case "Top-Rated":
                return filterCameraRating;
            default:
                throw new IllegalArgumentException("Invalid rating: " + rating);
        }
    }
}
