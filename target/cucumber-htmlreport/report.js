$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BestBuyProductSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Best Buy Product Search and Filter",
  "description": "",
  "id": "best-buy-product-search-and-filter",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@bestbuy-search"
    },
    {
      "line": 1,
      "name": "@e2e"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Search for a product and apply multiple filters",
  "description": "",
  "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "The user searches for \"\u003cProduct\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user filters by \"\u003cCategory\u003e\", \"\u003cBrand\u003e\", \"\u003cPrice Range\u003e\", and \"\u003cRating\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The product list should display only \"\u003cBrand\u003e\" products in the \"\u003cCategory\u003e\" category",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The products should be within the \"\u003cPrice Range\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The products should have a rating of \"\u003cRating\u003e\" or higher",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;",
  "rows": [
    {
      "cells": [
        "Product",
        "Category",
        "Brand",
        "Price Range",
        "Rating"
      ],
      "line": 18,
      "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;1"
    },
    {
      "cells": [
        "Laptop",
        "All Laptops",
        "Apple",
        "$1000-$1249.99",
        "4 \u0026 Up"
      ],
      "line": 19,
      "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;2"
    },
    {
      "cells": [
        "Smartwatch",
        "Fitness Smartwatches",
        "Samsung",
        "$150-$199.99",
        "3 \u0026 Up"
      ],
      "line": 20,
      "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;3"
    },
    {
      "cells": [
        "Refrigerator",
        "French Door Refrigerators",
        "LG",
        "$1250-$1499.99",
        "4 \u0026 Up"
      ],
      "line": 21,
      "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;4"
    },
    {
      "cells": [
        "TV",
        "All Flat-Screen TVs",
        "Sony",
        "$1500-$1999.99",
        "4 \u0026 Up"
      ],
      "line": 22,
      "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;5"
    },
    {
      "cells": [
        "Camera",
        "Vlogging Cameras",
        "Canon",
        "$500-$749.99",
        "Top-Rated"
      ],
      "line": 23,
      "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14160399600,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Test Case ID: BestBuy-007"
    },
    {
      "line": 5,
      "value": "# Assigned To: Zahir"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The user is on the Best Buy homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestBuyHomePageSteps.the_user_is_on_the_Best_Buy_homepage()"
});
formatter.result({
  "duration": 435441100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search for a product and apply multiple filters",
  "description": "",
  "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@bestbuy-search"
    },
    {
      "line": 1,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The user searches for \"Laptop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user filters by \"All Laptops\", \"Apple\", \"$1000-$1249.99\", and \"4 \u0026 Up\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The product list should display only \"Apple\" products in the \"All Laptops\" category",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The products should be within the \"$1000-$1249.99\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The products should have a rating of \"4 \u0026 Up\" or higher",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 23
    }
  ],
  "location": "BestBuyHomePageSteps.the_user_searches_for(String)"
});
formatter.result({
  "duration": 12582895000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Laptops",
      "offset": 21
    },
    {
      "val": "Apple",
      "offset": 36
    },
    {
      "val": "$1000-$1249.99",
      "offset": 45
    },
    {
      "val": "4 \u0026 Up",
      "offset": 67
    }
  ],
  "location": "BestBuySearchResultSteps.the_user_filters_by(String,String,String,String)"
});
formatter.result({
  "duration": 15369326900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 38
    },
    {
      "val": "All Laptops",
      "offset": 62
    }
  ],
  "location": "BestBuySearchResultSteps.the_product_list_should_display_only_products_in_the_category(String,String)"
});
formatter.result({
  "duration": 167300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1000-$1249.99",
      "offset": 35
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_be_within_the(String)"
});
formatter.result({
  "duration": 88100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 \u0026 Up",
      "offset": 38
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_have_a_rating_of_or_higher(String)"
});
formatter.result({
  "duration": 98900,
  "status": "passed"
});
formatter.after({
  "duration": 1991642200,
  "status": "passed"
});
formatter.before({
  "duration": 8504928000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Test Case ID: BestBuy-007"
    },
    {
      "line": 5,
      "value": "# Assigned To: Zahir"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The user is on the Best Buy homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestBuyHomePageSteps.the_user_is_on_the_Best_Buy_homepage()"
});
formatter.result({
  "duration": 379900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search for a product and apply multiple filters",
  "description": "",
  "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@bestbuy-search"
    },
    {
      "line": 1,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The user searches for \"Smartwatch\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user filters by \"Fitness Smartwatches\", \"Samsung\", \"$150-$199.99\", and \"3 \u0026 Up\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The product list should display only \"Samsung\" products in the \"Fitness Smartwatches\" category",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The products should be within the \"$150-$199.99\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The products should have a rating of \"3 \u0026 Up\" or higher",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Smartwatch",
      "offset": 23
    }
  ],
  "location": "BestBuyHomePageSteps.the_user_searches_for(String)"
});
formatter.result({
  "duration": 8441537700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fitness Smartwatches",
      "offset": 21
    },
    {
      "val": "Samsung",
      "offset": 45
    },
    {
      "val": "$150-$199.99",
      "offset": 56
    },
    {
      "val": "3 \u0026 Up",
      "offset": 76
    }
  ],
  "location": "BestBuySearchResultSteps.the_user_filters_by(String,String,String,String)"
});
formatter.result({
  "duration": 9788773000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 38
    },
    {
      "val": "Fitness Smartwatches",
      "offset": 64
    }
  ],
  "location": "BestBuySearchResultSteps.the_product_list_should_display_only_products_in_the_category(String,String)"
});
formatter.result({
  "duration": 2108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150-$199.99",
      "offset": 35
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_be_within_the(String)"
});
formatter.result({
  "duration": 77500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 \u0026 Up",
      "offset": 38
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_have_a_rating_of_or_higher(String)"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.after({
  "duration": 2666799500,
  "status": "passed"
});
formatter.before({
  "duration": 8780075500,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Test Case ID: BestBuy-007"
    },
    {
      "line": 5,
      "value": "# Assigned To: Zahir"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The user is on the Best Buy homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestBuyHomePageSteps.the_user_is_on_the_Best_Buy_homepage()"
});
formatter.result({
  "duration": 909400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for a product and apply multiple filters",
  "description": "",
  "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@bestbuy-search"
    },
    {
      "line": 1,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The user searches for \"Refrigerator\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user filters by \"French Door Refrigerators\", \"LG\", \"$1250-$1499.99\", and \"4 \u0026 Up\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The product list should display only \"LG\" products in the \"French Door Refrigerators\" category",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The products should be within the \"$1250-$1499.99\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The products should have a rating of \"4 \u0026 Up\" or higher",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Refrigerator",
      "offset": 23
    }
  ],
  "location": "BestBuyHomePageSteps.the_user_searches_for(String)"
});
formatter.result({
  "duration": 17019365300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "French Door Refrigerators",
      "offset": 21
    },
    {
      "val": "LG",
      "offset": 50
    },
    {
      "val": "$1250-$1499.99",
      "offset": 56
    },
    {
      "val": "4 \u0026 Up",
      "offset": 78
    }
  ],
  "location": "BestBuySearchResultSteps.the_user_filters_by(String,String,String,String)"
});
formatter.result({
  "duration": 12552104100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LG",
      "offset": 38
    },
    {
      "val": "French Door Refrigerators",
      "offset": 59
    }
  ],
  "location": "BestBuySearchResultSteps.the_product_list_should_display_only_products_in_the_category(String,String)"
});
formatter.result({
  "duration": 247100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1250-$1499.99",
      "offset": 35
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_be_within_the(String)"
});
formatter.result({
  "duration": 82300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 \u0026 Up",
      "offset": 38
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_have_a_rating_of_or_higher(String)"
});
formatter.result({
  "duration": 271500,
  "status": "passed"
});
formatter.after({
  "duration": 7360868100,
  "status": "passed"
});
formatter.before({
  "duration": 8408920700,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Test Case ID: BestBuy-007"
    },
    {
      "line": 5,
      "value": "# Assigned To: Zahir"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The user is on the Best Buy homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestBuyHomePageSteps.the_user_is_on_the_Best_Buy_homepage()"
});
formatter.result({
  "duration": 205700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search for a product and apply multiple filters",
  "description": "",
  "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@bestbuy-search"
    },
    {
      "line": 1,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The user searches for \"TV\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user filters by \"All Flat-Screen TVs\", \"Sony\", \"$1500-$1999.99\", and \"4 \u0026 Up\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The product list should display only \"Sony\" products in the \"All Flat-Screen TVs\" category",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The products should be within the \"$1500-$1999.99\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The products should have a rating of \"4 \u0026 Up\" or higher",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TV",
      "offset": 23
    }
  ],
  "location": "BestBuyHomePageSteps.the_user_searches_for(String)"
});
formatter.result({
  "duration": 12408076700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Flat-Screen TVs",
      "offset": 21
    },
    {
      "val": "Sony",
      "offset": 44
    },
    {
      "val": "$1500-$1999.99",
      "offset": 52
    },
    {
      "val": "4 \u0026 Up",
      "offset": 74
    }
  ],
  "location": "BestBuySearchResultSteps.the_user_filters_by(String,String,String,String)"
});
formatter.result({
  "duration": 12538205300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //input[@aria-label\u003d\u0027Sony\u0027]\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat falcon.bestbuy.pageActions.BestBuySearchResultActions.applyFilters(BestBuySearchResultActions.java:27)\r\n\tat falcon.bestbuy.stepDef.BestBuySearchResultSteps.the_user_filters_by(BestBuySearchResultSteps.java:13)\r\n\tat ✽.When The user filters by \"All Flat-Screen TVs\", \"Sony\", \"$1500-$1999.99\", and \"4 \u0026 Up\"(BestBuyProductSearch.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@aria-label\u003d\u0027Sony\u0027]\"}\n  (Session info: chrome\u003d128.0.6613.113)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-BULAH5N\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 128.0.6613.113, chrome: {chromedriverVersion: 128.0.6613.137 (fe621c5aa2d..., userDataDir: C:\\Users\\zahir\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:8556}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 27b40546626229690750f92a79ecfa97\n*** Element info: {Using\u003dxpath, value\u003d//input[@aria-label\u003d\u0027Sony\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:686)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:682)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat falcon.bestbuy.pageActions.BestBuySearchResultActions.applyFilters(BestBuySearchResultActions.java:27)\r\n\tat falcon.bestbuy.stepDef.BestBuySearchResultSteps.the_user_filters_by(BestBuySearchResultSteps.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1198)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1123)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sony",
      "offset": 38
    },
    {
      "val": "All Flat-Screen TVs",
      "offset": 61
    }
  ],
  "location": "BestBuySearchResultSteps.the_product_list_should_display_only_products_in_the_category(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$1500-$1999.99",
      "offset": 35
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_be_within_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4 \u0026 Up",
      "offset": 38
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_have_a_rating_of_or_higher(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5106179200,
  "status": "passed"
});
formatter.before({
  "duration": 8408660800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# Test Case ID: BestBuy-007"
    },
    {
      "line": 5,
      "value": "# Assigned To: Zahir"
    }
  ],
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The user is on the Best Buy homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestBuyHomePageSteps.the_user_is_on_the_Best_Buy_homepage()"
});
formatter.result({
  "duration": 420700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search for a product and apply multiple filters",
  "description": "",
  "id": "best-buy-product-search-and-filter;search-for-a-product-and-apply-multiple-filters;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@bestbuy-search"
    },
    {
      "line": 1,
      "name": "@e2e"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The user searches for \"Camera\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user filters by \"Vlogging Cameras\", \"Canon\", \"$500-$749.99\", and \"Top-Rated\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The product list should display only \"Canon\" products in the \"Vlogging Cameras\" category",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The products should be within the \"$500-$749.99\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The products should have a rating of \"Top-Rated\" or higher",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Camera",
      "offset": 23
    }
  ],
  "location": "BestBuyHomePageSteps.the_user_searches_for(String)"
});
formatter.result({
  "duration": 1262000800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vlogging Cameras",
      "offset": 21
    },
    {
      "val": "Canon",
      "offset": 41
    },
    {
      "val": "$500-$749.99",
      "offset": 50
    },
    {
      "val": "Top-Rated",
      "offset": 70
    }
  ],
  "location": "BestBuySearchResultSteps.the_user_filters_by(String,String,String,String)"
});
formatter.result({
  "duration": 24573858700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon",
      "offset": 38
    },
    {
      "val": "Vlogging Cameras",
      "offset": 62
    }
  ],
  "location": "BestBuySearchResultSteps.the_product_list_should_display_only_products_in_the_category(String,String)"
});
formatter.result({
  "duration": 153100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$500-$749.99",
      "offset": 35
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_be_within_the(String)"
});
formatter.result({
  "duration": 50100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Top-Rated",
      "offset": 38
    }
  ],
  "location": "BestBuySearchResultSteps.the_products_should_have_a_rating_of_or_higher(String)"
});
formatter.result({
  "duration": 89100,
  "status": "passed"
});
formatter.after({
  "duration": 2089316200,
  "status": "passed"
});
});