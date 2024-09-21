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
  "duration": 9760580000,
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
  "duration": 349050800,
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
  "duration": 12159247300,
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
  "duration": 8842409200,
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
  "duration": 177000,
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
  "duration": 208500,
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
  "duration": 152000,
  "status": "passed"
});
formatter.after({
  "duration": 1846231000,
  "status": "passed"
});
formatter.before({
  "duration": 7296922100,
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
  "duration": 183700,
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
  "duration": 8647952300,
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
  "duration": 5149463400,
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
  "duration": 172600,
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
  "duration": 88000,
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
  "duration": 79300,
  "status": "passed"
});
formatter.after({
  "duration": 1679484700,
  "status": "passed"
});
formatter.before({
  "duration": 7127524700,
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
  "duration": 193300,
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
  "duration": 8401380000,
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
  "duration": 8187935300,
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
  "duration": 158100,
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
  "duration": 93300,
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
  "duration": 82600,
  "status": "passed"
});
formatter.after({
  "duration": 1574505600,
  "status": "passed"
});
formatter.before({
  "duration": 7681215600,
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
  "duration": 178600,
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
  "duration": 7988227700,
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
  "duration": 6198276200,
  "status": "passed"
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
  "duration": 127400,
  "status": "passed"
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
  "duration": 82800,
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
  "duration": 99700,
  "status": "passed"
});
formatter.after({
  "duration": 1631452600,
  "status": "passed"
});
formatter.before({
  "duration": 8903549900,
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
  "duration": 358300,
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
  "duration": 9206113500,
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
  "duration": 6313168000,
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
  "duration": 91100,
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
  "duration": 35300,
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
  "duration": 28400,
  "status": "passed"
});
formatter.after({
  "duration": 1713601200,
  "status": "passed"
});
});