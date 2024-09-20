@regression @smoke @bestbuy-search @e2e
Feature: Best Buy Product Search and Filter

  # Test Case ID: BestBuy-007
  # Assigned To: Zahir

  Background:
    Given The user is on the Best Buy homepage

  Scenario Outline: Search for a product and apply multiple filters
    Given The user searches for "<Product>"
    When The user filters by "<Category>", "<Brand>", "<Price Range>", and "<Rating>"
    Then The product list should display only "<Brand>" products in the "<Category>" category
    And The products should be within the "<Price Range>"
    And The products should have a rating of "<Rating>" or higher

  Examples:
    | Product       | Category                     | Brand    | Price Range       | Rating  |
    | Laptop        | All Laptops                  | Apple    | $1000-$1249.99    | 4 & Up  |
    | Smartwatch    | Fitness Smartwatches         | Samsung  | $150-$199.99      | 3 & Up  |
    | Refrigerator  | French Door Refrigerators    | LG       | $1250-$1499.99    | 4 & Up  |
    | TV            | All Flat-Screen TVs          | Sony     | $1500-$1999.99    | 4 & Up  |
    | Camera        | Vlogging Cameras             | Canon    | $500-$749.99      | Top-Rated |
