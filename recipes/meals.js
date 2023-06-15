//Array of objects containing DDV recipes
//Appetizers
let appetizers = [
    {
        "name": "Arendellian Pickled Herring",
        "ingredientOne" : "Herring",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "Onion",
        "ingredientFour" : "Garlic",
        "ingredientFive" : "Any spice",
        "stars" : 5,
        "sellPrice" : 556, 
        "energy": 2102
    },
    {
        "name": "Bell Pepper Puffs",
        "ingredientOne" : "Bell Pepper",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 606, 
        "energy": 1272
    },
    {
        "name": "Buñuelos",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Cheese",
        "ingredientThree" : "Milk",
        "ingredientFour" : "Egg",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 948, 
        "energy": 1881
    },
    {
        "name": "Cheese Platter",
        "ingredientOne" : "Cheese",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 216, 
        "energy": 482
    },
    {
        "name": "Chili Pepper Puffs",
        "ingredientOne" : "Chili Pepper",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Milk",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 669, 
        "energy": 1382
    },
    {
        "name": "Coffee",
        "ingredientOne" : "Coffee Bean",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 43, 
        "energy": 730
    },
    {
        "name": "Crackers",
        "ingredientOne" : "Any grain",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 2, 
        "energy": 80
    },
    {
        "name": "Creamy Soup",
        "ingredientOne" : "Any spice",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Potato",
        "ingredientFour" : "Any vegetable",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 576, 
        "energy": 1138
    },
    {
        "name": "Crudités",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 26, 
        "energy": 83
    },
    {
        "name": "Dream Fizz",
        "ingredientOne" : "Dreamlight Fruit",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Wheat",
        "ingredientFour" : "Slush Ice",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 316, 
        "energy": 1550
    },
    {
        "name": "Eggplant Puffs",
        "ingredientOne" : "Eggplant",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 991, 
        "energy": 1941
    },
    {
        "name": "French Fries",
        "ingredientOne" : "Canola",
        "ingredientTwo" : "Potato",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 304, 
        "energy": 342
    },
    {
        "name": "Gazpacho",
        "ingredientOne" : "Cucumber",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "Onion",
        "ingredientFour" : "Any spice",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 556, 
        "energy": 821
    },
    {
        "name": "Green Salad",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Lettuce",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 20, 
        "energy": 180
    },
    {
        "name": "Grilled Vegetables",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 9, 
        "energy": 83
    },
    {
        "name": "Grilled Veggie Platter",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "Any vegetable",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 33, 
        "energy": 161
    },
    {
        "name": "Hard-Boiled Eggs",
        "ingredientOne" : "Egg",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 264, 
        "energy": 578
    },
    {
        "name": "Large Seafood Platter",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "Any seafood",
        "ingredientThree" : "Any seafood",
        "ingredientFour" : "Any seafood",
        "ingredientFive" : "Lemon",
        "stars" : 5,
        "sellPrice" : 56, 
        "energy": 1810
    },
    {
        "name": "Latte",
        "ingredientOne" : "Coffee Bean",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 345, 
        "energy": 1358
    },
    {
        "name": "Marinated Herring",
        "ingredientOne" : "Herring",
        "ingredientTwo" : "Onion",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 305, 
        "energy": 723
    },
    {
        "name": "Mocha",
        "ingredientOne" : "Coffee Bean",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Cocoa Bean",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 425, 
        "energy": 2246
    },
    {
        "name": "Okra Soup",
        "ingredientOne" : "Okra",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 136, 
        "energy": 99
    },
    {
        "name": "Onion Puffs",
        "ingredientOne" : "Onion",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 798, 
        "energy": 1392
    },
    {
        "name": "Oyster Platter",
        "ingredientOne" : "Oyster",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 367, 
        "energy": 1155
    },
    {
        "name": "Peppermint Tea",
        "ingredientOne" : "Lemon",
        "ingredientTwo" : "Mint",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 146, 
        "energy": 993
    },
    {
        "name": "Pickled Herring",
        "ingredientOne" : "Herring",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "Onion",
        "ingredientFour" : "Any spice",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 431, 
        "energy": 1742
    },
    {
        "name": "Potato Leek Soup",
        "ingredientOne" : "Leek",
        "ingredientTwo" : "Potato",
        "ingredientThree" : "Milk",
        "ingredientFour" : "Onion",
        "ingredientFive" : "Garlic",
        "stars" : 5,
        "sellPrice" : 1400, 
        "energy": 1984
    },
    {
        "name": "Potato Puffs",
        "ingredientOne" : "Potato",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 736, 
        "energy": 1333
    },
    {
        "name": "Pottage",
        "ingredientOne" : "Potato",
        "ingredientTwo" : "Any spice",
        "ingredientThree" : "Any vegetable",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 215, 
        "energy": 461
    },
    {
        "name": "Pumpkin Puffs",
        "ingredientOne" : "Pumpkin",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 1400, 
        "energy": 1466
    },
    {
        "name": "Pumpkin Soup",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Ginger",
        "ingredientFour" : "Pumpkin",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 1500, 
        "energy": 1431
    },
    {
        "name": "Purée",
        "ingredientOne" : "Potato",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 151, 
        "energy": 230
    },
    {
        "name": "Roasted Asparagus",
        "ingredientOne" : "Asparagus",
        "ingredientTwo" : "Canola",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 313, 
        "energy": 221
    },
    {
        "name": "Salad",
        "ingredientOne" : "Lettuce",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 9, 
        "energy": 139
    },
    {
        "name": "Sautéed Mushrooms",
        "ingredientOne" : "Mushroom",
        "ingredientTwo" : "Butter",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 286, 
        "energy": 712
    },
    {
        "name": "Seafood Appetizer",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 1, 
        "energy": 242
    },
    {
        "name": "Seafood Platter",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "Any seafood",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 2, 
        "energy": 458
    },
    {
        "name": "Soufflé",
        "ingredientOne" : "Cheese",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Milk",
        "ingredientFour" : "Butter",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 1200, 
        "energy": 2386
    },
    {
        "name": "Tomato Soup",
        "ingredientOne" : "Tomato",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 26, 
        "energy": 83
    },
    {
        "name": "Vegetable Soup",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 20, 
        "energy": 120
    },
    {
        "name": "Zucchini Puffs",
        "ingredientOne" : "Zucchini",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 632, 
        "energy": 1216
    }
]


//Special cases:
///Crudités (not all veggies)
///Grilled Vegetables (not all veggies)

/*

{
        "name": "",
        "ingredientOne" : "",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 1, 
        "energy": 1
    },

*/