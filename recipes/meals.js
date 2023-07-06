//Array of objects containing DDV recipes
//Appetizers
const appetizers = [
    {
        name: "Arendellian Pickled Herring",
        ingredients: [
            {
                name: "Herring"
            },
            {
                name: "Lemon"
            },
            {
                name: "Onion"
            },
            {
                name: "Garlic"
            },
            {
                name: "Any Spice"
            }
        ],
        stars: 5,
        sellPrice: 556,
        energy: 2102,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c5/Arendellian_Pickled_Herring.png"
    },
    {
        name: "Bell Pepper Puffs",
        ingredients: [
            {
                name: "Bell Pepper"
            },
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 3,
        sellPrice: 606,
        energy: 1272,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/ff/Bell_Pepper_Puffs.png"
    },
    {
        name: "Buñuelos",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Cheese"
            },
            {
                name: "Milk"
            },
            {
                name: "Egg"
            }
        ],
        stars: 4,
        sellPrice: 948,
        energy: 1881,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/66/Bu%C3%B1uelos.png"
    },
    {
        name: "Cheese Platter",
        ingredients: [
            {
                name: "Cheese"
            }
        ],
        stars: 1,
        sellPrice: 216,
        energy: 482,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Cheese_Platter.png"
    },
    {
        name: "Chili Pepper Puffs",
        ingredients: [
            {
                name: "Chili Pepper"
            },
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 3,
        sellPrice: 669,
        energy: 1382,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b5/Chili_Pepper_Puffs.png"
    },
    {
        name: "Coffee",
        ingredients: [
            {
                name: "Coffee Bean"
            }
        ],
        stars: 1,
        sellPrice: 43,
        energy: 730,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e9/Coffee.png"
    },
    {
        name: "Crackers",
        ingredients: [
            {
                name: "Any Grain"
            }
        ],
        stars: 1,
        sellPrice: 2,
        energy: 80,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d4/Crackers.png"
    },
    {
        name: "Creamy Soup",
        ingredients: [
            {
                name: "Any Spice"
            },
            {
                name: "Milk"
            },
            {
                name: "Potato"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 4,
        sellPrice: 576,
        energy: 1138,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/51/Creamy_Soup.png"
    },
    {
        name: "Crudités",
        ingredients: [
            {
                name: "Any Vegetable"
            }
        ],
        stars: 1,
        sellPrice: 26,
        energy: 83,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/26/Crudit%C3%A9s.png"
    },
    {
        name: "Dream Fizz",
        ingredients: [
            {
                name: "Dreamlight Fruit"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Wheat"
            },
            {
                name: "Slush Ice"
            }
        ],
        stars: 4,
        sellPrice: 316,
        energy: 1550,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1a/Dream_Fizz.png"
    },
    {
        name: "Eggplant Puffs",
        ingredients: [
            {
                name: "Eggplant"
            },
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 3,
        sellPrice: 991,
        energy: 1941,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c1/Eggplant_Puffs.png"
    },
    {
        name: "French Fries",
        ingredients: [
            {
                name: "Canola"
            },
            {
                name: "Potato"
            }
        ],
        stars: 2,
        sellPrice: 304,
        energy: 342,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8e/French_Fries.png"
    },
    {
        name: "Gazpacho",
        ingredients: [
            {
                name: "Cucumber"
            },
            {
                name: "Tomato"
            },
            {
                name: "Onion"
            },
            {
                name: "Any Spice"
            }
        ],
        stars: 4,
        sellPrice: 556,
        energy: 821,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0f/Gazpacho.png"
    },
    {
        name: "Green Salad",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Lettuce"
            }
        ],
        stars: 2,
        sellPrice: 20,
        energy: 180,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7a/Green_Salad.png"
    },
    {
        name: "Grilled Vegetables",
        ingredients: [
            {
                name: "Any Vegetable"
            }
        ],
        stars: 1,
        sellPrice: 9,
        energy: 83,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cc/Grilled_Vegetables.png"
    },
    {
        name: "Grilled Veggie Platter",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 3,
        sellPrice: 33,
        energy: 161,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/92/Grilled_Veggie_Platter.png"
    },
    {
        name: "Hard-Boiled Eggs",
        ingredients: [
            {
                name: "Egg"
            }
        ],
        stars: 1,
        sellPrice: 264,
        energy: 578,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Hard-Boiled_Eggs.png"
    },
    {
        name: "Large Seafood Platter",
        ingredients: [
            {
                name: "Any Seafood"
            },
            {
                name: "Any Seafood"
            },
            {
                name: "Any Seafood"
            },
            {
                name: "Any Seafood"
            },
            {
                name: "Lemon"
            }
        ],
        stars: 5,
        sellPrice: 56,
        energy: 1810,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Large_Seafood_Platter.png"
    },
    {
        name: "Latte",
        ingredients: [
            {
                name: "Coffee Bean"
            },
            {
                name: "Milk"
            }
        ],
        stars: 2,
        sellPrice: 345,
        energy: 1358,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2c/Latte.png"
    },
    {
        name: "Marinated Herring",
        ingredients: [
            {
                name: "Herring"
            },
            {
                name: "Onion"
            }
        ],
        stars: 2,
        sellPrice: 305,
        energy: 723,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/67/Marinated_Herring.png"
    },
    {
        name: "Mocha",
        ingredients: [
            {
                name: "Coffee Bean"
            },
            {
                name: "Milk"
            },
            {
                name: "Cocoa Bean"
            }
        ],
        stars: 3,
        sellPrice: 425,
        energy: 2246,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/48/Mocha.png"
    },
    {
        name: "Okra Soup",
        ingredients: [
            {
                name: "Okra"
            }
        ],
        stars: 1,
        sellPrice: 136,
        energy: 99,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8b/Okra_Soup.png"
    }, 
    {
        name: "Onion Puffs",
        ingredients: [
            {
                name: "Onion"
            },
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 3,
        sellPrice: 798,
        energy: 1392,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/66/Onion_Puffs.png"
    },
    {
        name: "Oyster Platter",
        ingredients: [
            {
                name: "Oyster"
            },
            {
                name: "Lemon"
            }
        ],
        stars: 2,
        sellPrice: 367,
        energy: 1155,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e1/Oyster_Platter.png"
    },
    {
        name: "Peppermint Tea",
        ingredients: [
            {
                name: "Lemon"
            },
            {
                name: "Mint"
            }
        ],
        stars: 2,
        sellPrice: 146,
        energy: 993,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/38/Peppermint_Tea.png"
    },
    {
        name: "Pickled Herring",
        ingredients: [
            {
                name: "Herring"
            },
            {
                name: "Lemon"
            },
            {
                name: "Onion"
            },
            {
                name: "Any Spice"
            }
        ],
        stars: 4,
        sellPrice: 431,
        energy: 1742,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/84/Pickled_Herring.png"
    },
    {
        name: "Potato Leek Soup",
        ingredients: [
            {
                name: "Leek"
            },
            {
                name: "Potato"
            },
            {
                name: "Milk"
            },
            {
                name: "Onion"
            },
            {
                name: "Garlic"
            }
        ],
        stars: 5,
        sellPrice: 1431,
        energy: 1984,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fe/Potato_Leek_Soup.png"
    },
    {
        name: "Potato Puffs",
        ingredients: [
            {
                name: "Potato"
            },
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 3,
        sellPrice: 736,
        energy: 1333,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/33/Potato_Puffs.png"
    },
    {
        name: "Pottage",
        ingredients: [
            {
                name: "Potato"
            },
            {
                name: "Any Spice"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 3,
        sellPrice: 215,
        energy: 461,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/65/Pottage.png"
    },
    {
        name: "Pumpkin Puffs",
        ingredients: [
            {
                name: "Pumpkin"
            },
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 3,
        sellPrice: 1489,
        energy: 1466,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0e/Pumpkin_Puffs.png"
    },
    {
        name: "Pumpkin Soup",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Milk"
            },
            {
                name: "Ginger"
            },
            {
                name: "Pumpkin"
            }
        ],
        stars: 4,
        sellPrice: 1498,
        energy: 1431,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/59/Pumpkin_Soup.png"
    },
    {
        name: "Purée",
        ingredients: [
            {
                name: "Potato"
            }
        ],
        stars: 1,
        sellPrice: 151,
        energy: 230,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/de/Pur%C3%A9e.png"
    },
    {
        name: "Roasted Asparagus",
        ingredients: [
            {
                name: "Asparagus"
            },
            {
                name: "Canola"
            }
        ],
        stars: 2,
        sellPrice: 313,
        energy: 221,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/17/Roasted_Asparagus.png"
    },
    {
        name: "Salad",
        ingredients: [
            {
                name: "Lettuce"
            }
        ],
        stars: 1,
        sellPrice: 9,
        energy: 139,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7e/Salad.png"
    },
    {
        name: "Sautéed Mushrooms",
        ingredients: [
            {
                name: "Mushroom"
            },
            {
                name: "Butter"
            }
        ],
        stars: 2,
        sellPrice: 286,
        energy: 712,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ab/Saut%C3%A9ed_Mushrooms.png"
    },
    {
        name: "Seafood Appetizer",
        ingredients: [
            {
                name: "Any Seafood"
            }
        ],
        stars: 1,
        sellPrice: 54,
        energy: 242,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f0/Seafood_Appetizer.png"
    },
    {
        name: "Seafood Platter",
        ingredients: [
            {
                name: "Any Seafood"
            },
            {
                name: "Any Seafood"
            }
        ],
        stars: 2,
        sellPrice: 116,
        energy: 458,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/48/Seafood_Platter.png"
    },
    {
        name: "Soufflé",
        ingredients: [
            {
                name: "Cheese"
            },
            {
                name: "Egg"
            },
            {
                name: "Milk"
            },
            {
                name: "Butter"
            }
        ],
        stars: 4,
        sellPrice: 1230,
        energy: 2386,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e0/Souffl%C3%A9.png"
    },
    {
        name: "Tomato Soup",
        ingredients: [
            {
                name: "Tomato"
            }
        ],
        stars: 1,
        sellPrice: 26,
        energy: 83,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dc/Tomato_Soup.png"
    },
    {
        name: "Vegetable Soup",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 2,
        sellPrice: 20,
        energy: 120,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cd/Vegetable_Soup.png"
    },
    {
        name: "Zucchini Puffs",
        ingredients: [
            {
                name: "Zucchini"
            },
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 3,
        sellPrice: 632,
        energy: 1216,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/61/Zucchini_Puffs.png"
    }
]

//Entrées 
const entrees = [
    {
        "name": "Apple-Cider-Glazed Salmon",
        "ingredientOne" : "Salmon",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Apple",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 271, 
        "energy": 1572,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/3b/Apple-Cider-Glazed_Salmon.png"
    },
    {
        "name": "Baked Carp",
        "ingredientOne" : "Carp",
        "ingredientTwo" : "Butter",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 767, 
        "energy": 1894,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/34/Baked_Carp.png"
    },
    {
        "name": "Basil Omelet",
        "ingredientOne" : "Basil",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "Milk",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 982, 
        "energy": 2035,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/09/Basil_Omelet.png"
    },
    {
        "name": "Bouillabaisse",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "Any seafood",
        "ingredientThree" : "Shrimp",
        "ingredientFour" : "Tomato",
        "ingredientFive" : "Any vegetable",
        "stars" : 5,
        "sellPrice" : 529, 
        "energy": 2114,
        "imgSrc": "https://dreamlightvalleywiki.com/images/9/9d/Bouillabaisse.png"
    },
    {
        "name": "Carp Salad",
        "ingredientOne" : "Carp",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "Lettuce",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 617, 
        "energy": 2310,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/a1/Carp_Salad.png"
    },
    {
        "name": "Cheesy Crispy Baked Cod",
        "ingredientOne" : "Cod",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 303, 
        "energy": 840,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/63/Cheesy_Crispy_Baked_Cod.png"
    },
    {
        "name": "Chowder",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Potato",
        "ingredientFour" : "Any vegetable",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 547, 
        "energy": 1186,
        "imgSrc": "https://dreamlightvalleywiki.com/images/9/95/Chowder.png"
    },
    {
        "name": "Creamy Garlic Scallops",
        "ingredientOne" : "Scallop",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "Butter",
        "ingredientFour" : "Garlic",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 499, 
        "energy": 1844,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/16/Creamy_Garlic_Scallops.png"
    },
    {
        "name": "Crispy Baked Cod",
        "ingredientOne" : "Cod",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 47, 
        "energy": 337,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/1d/Crispy_Baked_Cod.png"
    },
    {
        "name": "Fish Creole",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "Garlic",
        "ingredientFour" : "Rice",
        "ingredientFive" : "Tomato",
        "stars" : 5,
        "sellPrice" : 241, 
        "energy": 822,
        "imgSrc": "https://dreamlightvalleywiki.com/images/c/cc/Fish_Creole.png"
    },
    {
        "name": "Fish 'n' Chips",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Canola",
        "ingredientFour" : "Potato",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 356, 
        "energy": 697,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/4f/Fish_%27n%27_Chips.png"
    },
    {
        "name": "Fish Pasta",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Garlic",
        "ingredientThree" : "Wheat",
        "ingredientFour" : "Milk",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 439, 
        "energy": 1282,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/08/Fish_Pasta.png"
    },
    {
        "name": "Fish Pie",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 269, 
        "energy": 867,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/ec/Fish_Pie.png"
    },
    {
        "name": "Fish Risotto",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Rice",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 352, 
        "energy": 939,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/2b/Fish_Risotto.png"
    },
    {
        "name": "Fish Salad",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "Lettuce",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 58, 
        "energy": 1140,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/8e/Fish_Salad.png"
    },
    {
        "name": "Fish Sandwiches",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 3, 
        "energy": 337,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/53/Fish_Sandwiches.png"
    },
    {
        "name": "Fish Soup",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "Milk",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 334, 
        "energy": 978,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/be/Fish_Soup.png"
    },
    {
        "name": "Fish Steak",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "Basil",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 66, 
        "energy": 537,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/a1/Fish_Steak.png"
    },
    {
        "name": "Fish Tacos",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Corn",
        "ingredientThree" : "Chili Pepper",
        "ingredientFour" : "Cheese",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 412, 
        "energy": 1171,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/af/Fish_Tacos.png"
    },
    {
        "name": "Fugu Sushi",
        "ingredientOne" : "Fugu",
        "ingredientTwo" : "Rice",
        "ingredientThree" : "Seaweed",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 1300, 
        "energy": 3261,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/0e/Fugu_Sushi.png"
    },
    {
        "name": "Ghostly Fish Steak",
        "ingredientOne" : "Here and There Fish",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "Asparagus",
        "ingredientFour" : "Bell Pepper",
        "ingredientFive" : "Oregano",
        "stars" : 5,
        "sellPrice" : 3500, 
        "energy": 3282,
        "imgSrc": "https://dreamlightvalleywiki.com/images/c/c8/Ghostly_Fish_Steak.png"
    },
    {
        "name": "Greek Pizza",
        "ingredientOne" : "Any Spice",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "Onion",
        "ingredientFour" : "Cheese",
        "ingredientFive" : "Wheat",
        "stars" : 5,
        "sellPrice" : 630, 
        "energy": 1152,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/38/Greek_Pizza.png"
    },
    {
        "name": "Grilled Fish",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 1, 
        "energy": 290,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/dd/Grilled_Fish.png"
    },
    {
        "name": "Grilled Fish Entree",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 11, 
        "energy": 340,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/a5/Grilled_Fish_Entree.png"
    },
    {
        "name": "Gumbo",
        "ingredientOne" : "Okra",
        "ingredientTwo" : "Shrimp",
        "ingredientThree" : "Chili Pepper",
        "ingredientFour" : "Tomato",
        "ingredientFive" : "Onion",
        "stars" : 5,
        "sellPrice" : 1000, 
        "energy": 2226,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/10/Gumbo.png"
    },
    {
        "name": "Hearty Salad",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Lettuce",
        "ingredientThree" : "Any vegetable",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 33, 
        "energy": 224,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/1a/Hearty_Salad.png"
    },
    {
        "name": "Hors d'Oeuvres",
        "ingredientOne" : "Any spice",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 24, 
        "energy": 202,
        "imgSrc": "https://dreamlightvalleywiki.com/images/9/92/Hors_d%27Oeuvres.png"
    },
    {
        "name": "Kappa Maki",
        "ingredientOne" : "Seaweed",
        "ingredientTwo" : "Cucumber",
        "ingredientThree" : "Rice",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 335, 
        "energy": 462,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/29/Kappa_Maki.png"
    },
    {
        "name": "Kronk's Spinach Puffs",
        "ingredientOne" : "Spinach",
        "ingredientTwo" : "Cheese",
        "ingredientThree" : "Canola",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 461, 
        "energy": 750,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/e6/Kronk%27s_Spinach_Puffs.png"
    },
    {
        "name": "Lancetfish Paella",
        "ingredientOne" : "Lancetfish",
        "ingredientTwo" : "Shrimp",
        "ingredientThree" : "Any seafood",
        "ingredientFour" : "Tomato",
        "ingredientFive" : "Rice",
        "stars" : 5,
        "sellPrice" : 1600, 
        "energy": 4550,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/80/Lancetfish_Paella.png"
    },
    {
        "name": "Leek Soup",
        "ingredientOne" : "Leek",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 370, 
        "energy": 414,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/39/Leek_Soup.png"
    },
    {
        "name": "Lemon Garlic Swordfish",
        "ingredientOne" : "Swordfish",
        "ingredientTwo" : "Garlic",
        "ingredientThree" : "Lemon",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 1100, 
        "energy": 3713,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/33/Lemon_Garlic_Swordfish.png"
    },
    {
        "name": "Lioness Feast",
        "ingredientOne" : "Mushroom",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "Oregano",
        "ingredientFour" : "Here and There Fish",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 3100, 
        "energy": 2368,
        "imgSrc": "https://dreamlightvalleywiki.com/images/7/79/Lioness_Feast.png"
    },
    {
        "name": "Lobster Roll",
        "ingredientOne" : "Lobster",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Lemon",
        "ingredientFour" : "Butter",
        "ingredientFive" : "Garlic",
        "stars" : 5,
        "sellPrice" : 1900, 
        "energy": 4928,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/63/Lobster_Roll.png"
    },
    {
        "name": "Maguro Sushi",
        "ingredientOne" : "Tuna",
        "ingredientTwo" : "Seaweed",
        "ingredientThree" : "Rice",
        "ingredientFour" : "Ginger",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 413, 
        "energy": 1206,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/2f/Maguro_Sushi.png"
    },
    {
        "name": "Maki",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Seaweed",
        "ingredientThree" : "Rice",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 114, 
        "energy": 471,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/21/Maki.png"
    },
    {
        "name": "Margherita Pizza",
        "ingredientOne" : "Any spice",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "Wheat",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 336, 
        "energy": 818,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/1b/Margherita_Pizza.png"
    },
    {
        "name": "Marvelous Jam",
        "ingredientOne" : "Dreamlight Fruit",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 54, 
        "energy": 932,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/50/Marvelous_Jam.png"
    },
    {
        "name": "Mediterranean Salad",
        "ingredientOne" : "Cucumber",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "Onion",
        "ingredientFour" : "Lettuce",
        "ingredientFive" : "Any spice",
        "stars" : 5,
        "sellPrice" : 605, 
        "energy": 976,
        "imgSrc": "https://dreamlightvalleywiki.com/images/7/73/Mediterranean_Salad.png"
    },
    {
        "name": "Mushroom Pizza",
        "ingredientOne" : "Mushroom",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Tomato",
        "ingredientFour" : "Cheese",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 351, 
        "energy": 837,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/e9/Mushroom_Pizza.png"
    },
    {
        "name": "Mushu's Congee",
        "ingredientOne" : "Rice",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Mushroom",
        "ingredientFour" : "Garlic",
        "ingredientFive" : "Ginger",
        "stars" : 5,
        "sellPrice" : 753, 
        "energy": 1658,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/0d/Mushu%27s_Congee.png"
    },
    {
        "name": "Omelet",
        "ingredientOne" : "Egg",
        "ingredientTwo" : "Cheese",
        "ingredientThree" : "Milk",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 882, 
        "energy": 1751,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/12/Omelet.png"
    },
    {
        "name": "Pan-Fried Angler Fish",
        "ingredientOne" : "Anglerfish",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "Zucchini",
        "ingredientFour" : "Potato",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 2500, 
        "energy": 4194,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/2e/Pan-Fried_Angler_Fish.png"
    },
    {
        "name": "Pan-Seared Bass & Vegetables",
        "ingredientOne" : "Bass",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "Any vegetable",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 57, 
        "energy": 394,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/dc/Pan-Seared_Bass_%26_Vegetables.png"
    },
    {
        "name": "Pan-Seared Tilapia & Vegetables",
        "ingredientOne" : "Tilapia",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "Any vegetable",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 862, 
        "energy": 2194,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/a0/Pan-Seared_Tilapia_%26_Vegetables.png"
    },
    {
        "name": "Pasta",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 30, 
        "energy": 117,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/d8/Pasta.png"
    },
    {
        "name": "Peanut Butter Sandwich",
        "ingredientOne" : "Peanut",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 262, 
        "energy": 592,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/af/Peanut_Butter_Sandwich.png"
    },
    {
        "name": "Pizza",
        "ingredientOne" : "Tomato",
        "ingredientTwo" : "Cheese",
        "ingredientThree" : "Wheat",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 284, 
        "energy": 607,
        "imgSrc": "https://dreamlightvalleywiki.com/images/f/f4/Pizza.png"
    },
    {
        "name": "Poached Basil-Butter Sturgeon",
        "ingredientOne" : "White Sturgeon",
        "ingredientTwo" : "Basil",
        "ingredientThree" : "Lemon",
        "ingredientFour" : "Butter",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 2200, 
        "energy": 4961,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/43/Poached_Basil-Butter_Sturgeon.png"
    },
    {
        "name": "Porridge",
        "ingredientOne" : "Milk",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 301, 
        "energy": 668,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/5d/Porridge.png"
    },
    {
        "name": "Porridge with Fruits",
        "ingredientOne" : "Milk",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Any fruit",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 353, 
        "energy": 1155,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/84/Porridge_with_Fruits.png"
    },
    {
        "name": "Ranch Salad",
        "ingredientOne" : "Lettuce",
        "ingredientTwo" : "Bell Pepper",
        "ingredientThree" : "Corn",
        "ingredientFour" : "Tomato",
        "ingredientFive" : "Onion",
        "stars" : 5,
        "sellPrice" : 396, 
        "energy": 714,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/6c/Ranch_Salad.png"
    },
    {
        "name": "Ratatouille",
        "ingredientOne" : "Tomato",
        "ingredientTwo" : "Eggplant",
        "ingredientThree" : "Zucchini",
        "ingredientFour" : "Onion",
        "ingredientFive" : "Any spice",
        "stars" : 5,
        "sellPrice" : 914, 
        "energy": 1572,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/b0/Ratatouille.png"
    },
    {
        "name": "Sake Maki",
        "ingredientOne" : "Rice",
        "ingredientTwo" : "Seaweed",
        "ingredientThree" : "Salmon",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 323, 
        "energy": 1101,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/1a/Sake_Maki.png"
    },
    {
        "name": "Sake Sushi",
        "ingredientOne" : "Salmon",
        "ingredientTwo" : "Rice",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 274, 
        "energy": 1000,
        "imgSrc": "https://dreamlightvalleywiki.com/images/f/f0/Sake_Sushi.png"
    },
    {
        "name": "Savory Fish",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 43, 
        "energy": 985,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/0e/Savory_Fish.png"
    },
    {
        "name": "Scrambled Egg",
        "ingredientOne" : "Egg",
        "ingredientTwo" : "Cheese",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 520, 
        "energy": 1070,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/8b/Scrambled_Egg.png"
    },
    {
        "name": "Seafood Pasta",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Milk",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 325, 
        "energy": 921,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/1a/Seafood_Pasta.png"
    },
    {
        "name": "Seafood Pie",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 269, 
        "energy": 813,
        "imgSrc": "https://dreamlightvalleywiki.com/images/9/98/Seafood_Pie.png"
    },
    {
        "name": "Seafood Salad",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "Lettuce",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 11, 
        "energy": 349,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/69/Seafood_Salad.png"
    },
    {
        "name": "Seafood Soup",
        "ingredientOne" : "Any seafood",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "Any vegetable",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 23, 
        "energy": 340,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/b3/Seafood_Soup.png"
    },
    {
        "name": "Seared Rainbow Trout",
        "ingredientOne" : "Rainbow Trout",
        "ingredientTwo" : "Tomato",
        "ingredientThree" : "Onion",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 338, 
        "energy": 889,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/20/Seared_Rainbow_Trout.png"
    },
    {
        "name": "Simple Fried Perch",
        "ingredientOne" : "Perch",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 380, 
        "energy": 1317,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/b3/Simple_Fried_Perch.png"
    },
    {
        "name": "Smoked Peanuts and Anglerfish",
        "ingredientOne" : "Anglerfish",
        "ingredientTwo" : "Peanut",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 2200, 
        "energy": 3960,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/e2/Smoked_Peanuts_and_Anglerfish.png"
    },
    {
        "name": "Sole Meunière",
        "ingredientOne" : "Sole",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "Lemon",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 637, 
        "energy": 2337,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/2e/Sole_Meuni%C3%A8re.png"
    },
    {
        "name": "Spaghetti Arrabbiata",
        "ingredientOne" : "Tomato",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Chili Pepper",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 141, 
        "energy": 373,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/4d/Spaghetti_Arrabbiata.png"
    },
    {
        "name": "Spicy Baked Bream",
        "ingredientOne" : "Bream",
        "ingredientTwo" : "Chili Pepper",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 767, 
        "energy": 2075,
        "imgSrc": "https://dreamlightvalleywiki.com/images/f/f6/Spicy_Baked_Bream.png"
    },
    {
        "name": "Steamed Fugu",
        "ingredientOne" : "Fugu",
        "ingredientTwo" : "Ginger",
        "ingredientThree" : "Garlic",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 1400, 
        "energy": 3668,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/bb/Steamed_Fugu.png"
    },
    {
        "name": "Sushi",
        "ingredientOne" : "Any fish",
        "ingredientTwo" : "Rice",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 80, 
        "energy": 405,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/6d/Sushi.png"
    },
    {
        "name": "Sweet & Sour Kingfish Steak",
        "ingredientOne" : "Kingfish",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Lemon",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 702, 
        "energy": 2292,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/bb/Sweet_%26_Sour_Kingfish_Steak.png"
    },
    {
        "name": "Sweet Udon",
        "ingredientOne" : "Dreamlight Fruit",
        "ingredientTwo" : "Rice",
        "ingredientThree" : "Any seafood",
        "ingredientFour" : "Any sweet",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 180, 
        "energy": 1427,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/a6/Sweet_Udon.png"
    },
    {
        "name": "Tamagoyaki",
        "ingredientOne" : "Egg",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 310, 
        "energy": 689,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/22/Tamagoyaki.png"
    },
    {
        "name": "Tasty Salad",
        "ingredientOne" : "Lettuce",
        "ingredientTwo" : "Cucumber",
        "ingredientThree" : "Any vegetable",
        "ingredientFour" : "Any spice",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 292, 
        "energy": 650,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/84/Tasty_Salad.png"
    },
    {
        "name": "Tasty Veggies",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Any spice",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 36, 
        "energy": 246,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/87/Tasty_Veggies.png"
    },
    {
        "name": "Tekka Maki",
        "ingredientOne" : "Tuna",
        "ingredientTwo" : "Soya",
        "ingredientThree" : "Seaweed",
        "ingredientFour" : "Rice",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 366, 
        "energy": 984,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/e6/Tekka_Maki.png"
    },
    {
        "name": "Teriyaki Salmon",
        "ingredientOne" : "Soya",
        "ingredientTwo" : "Salmon",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "Rice",
        "ingredientFive" : "Ginger",
        "stars" : 5,
        "sellPrice" : 637, 
        "energy": 1726,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/61/Teriyaki_Salmon.png"
    },
    {
        "name": "Tuna Burger",
        "ingredientOne" : "Tuna",
        "ingredientTwo" : "Onion",
        "ingredientThree" : "Lemon",
        "ingredientFour" : "Wheat",
        "ingredientFive" : "Any vegetable",
        "stars" : 5,
        "sellPrice" : 491, 
        "energy": 1922,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/00/Tuna_Burger.png"
    },
    {
        "name": "Vegetarian Pizza",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "Tomato",
        "ingredientFour" : "Cheese",
        "ingredientFive" : "Wheat",
        "stars" : 5,
        "sellPrice" : 350, 
        "energy": 754,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/83/Vegetarian_Pizza.png"
    },
    {
        "name": "Vegetarian Stew",
        "ingredientOne" : "Potato",
        "ingredientTwo" : "Carrot",
        "ingredientThree" : "Onion",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 475, 
        "energy": 617,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/36/Vegetarian_Stew.png"
    },
    {
        "name": "Vegetarian Taco",
        "ingredientOne" : "Corn",
        "ingredientTwo" : "Chili Pepper",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "Any vegetable",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 423, 
        "energy": 925,
        "imgSrc": "https://dreamlightvalleywiki.com/images/9/90/Vegetarian_Taco.png"
    },
    {
        "name": "Veggie Casserole",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Any vegetable",
        "ingredientThree" : "Cheese",
        "ingredientFour" : "Any spice",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 324, 
        "energy": 821,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/ad/Veggie_Casserole.png"
    },
    {
        "name": "Veggie Pasta",
        "ingredientOne" : "Tomato",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Any vegetable",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 43, 
        "energy": 158,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/4c/Veggie_Pasta.png"
    },
    {
        "name": "Veggie Pasta",
        "ingredientOne" : "Any vegetable",
        "ingredientTwo" : "Butter",
        "ingredientThree" : "Wheat",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 279, 
        "energy": 634,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/48/Veggie_Pie.png"
    },
    {
        "name": "Veggie Skewers",
        "ingredientOne" : "Mushroom",
        "ingredientTwo" : "Zucchini",
        "ingredientThree" : "Onion",
        "ingredientFour" : "Bell Pepper",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 427, 
        "energy": 767,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/db/Veggie_Skewers.png"
    },
    {
        "name": "Walleye en Papillote",
        "ingredientOne" : "Walleye",
        "ingredientTwo" : "Basil",
        "ingredientThree" : "Oregano",
        "ingredientFour" : "Any vegetable",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 1700, 
        "energy": 3689,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/2a/Walleye_en_Papillote.png"
    },
]

//Desserts
const desserts = [
    {
        "name": "'My Hero' Cookie",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Butter",
        "ingredientThree" : "Any sweet",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 294, 
        "energy": 679,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/05/%22My_Hero%22_Cookie.png"
    },
    {
        "name": "Apple Pie",
        "ingredientOne" : "Apple",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 303, 
        "energy": 1137,
        "imgSrc": "https://dreamlightvalleywiki.com/images/f/fb/Apple_Pie.png"
    },
    {
        "name": "Apple Sorbet",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Apple",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 271, 
        "energy": 1077,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/5b/Apple_Sorbet.png"
    },
    {
        "name": "Aurora's Cake",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Any fruit",
        "ingredientFive" : "Milk",
        "stars" : 5,
        "sellPrice" : 786, 
        "energy": 2030,
        "imgSrc": "https://dreamlightvalleywiki.com/images/f/f5/Aurora%27s_Cake.png"
    },
    {
        "name": "Banana Ice Cream",
        "ingredientOne" : "Ice Slush",
        "ingredientTwo" : "Banana",
        "ingredientThree" : "Milk",
        "ingredientFour" : "Sugarcane",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 641, 
        "energy": 1884,
        "imgSrc": "https://dreamlightvalleywiki.com/images/7/79/Banana_Ice_Cream.png"
    },
    {
        "name": "Banana Pie",
        "ingredientOne" : "Banana",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 308, 
        "energy": 1227,
        "imgSrc": "https://dreamlightvalleywiki.com/images/7/75/Banana_Pie.png"
    },
    {
        "name": "Banana Split",
        "ingredientOne" : "Ice Slush",
        "ingredientTwo" : "Banana",
        "ingredientThree" : "Milk",
        "ingredientFour" : "Sugarcane",
        "ingredientFive" : "Any sweet",
        "stars" : 5,
        "sellPrice" : 714, 
        "energy": 2074,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/bd/Banana_Split.png"
    },
    {
        "name": "Beignets",
        "ingredientOne" : "Canola",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Sugarcane",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 524, 
        "energy": 912,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/4f/Beignets.png"
    },
    {
        "name": "Berry Salad",
        "ingredientOne" : "Raspberry",
        "ingredientTwo" : "Blueberry",
        "ingredientThree" : "Gooseberry",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 139, 
        "energy": 2210,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/8d/Berry_Salad.png"
    },
    {
        "name": "Birthday Cake",
        "ingredientOne" : "Cocoa Bean",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "Egg",
        "ingredientFive" : "Butter",
        "stars" : 5,
        "sellPrice" : 749, 
        "energy": 2310,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/e3/Birthday_Cake.png"
    },
    {
        "name": "Biscuits",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 294, 
        "energy": 679,
        "imgSrc": "https://dreamlightvalleywiki.com/images/f/f5/Biscuits.png"
    },
    {
        "name": "Blueberry Pie",
        "ingredientOne" : "Blueberry",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 308, 
        "energy": 1227,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/32/Blueberry_Pie.png"
    },
    {
        "name": "Boba Tea",
        "ingredientOne" : "Sugarcane",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 323, 
        "energy": 714,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/0a/Boba_Tea.png"
    },
    {
        "name": "Candy",
        "ingredientOne" : "Any sweet",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 22, 
        "energy": 123,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/1c/Candy.png"
    },
    {
        "name": "Caramel Apples",
        "ingredientOne" : "Sugarcane",
        "ingredientTwo" : "Apple",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 56, 
        "energy": 638,
        "imgSrc": "https://dreamlightvalleywiki.com/images/c/c6/Caramel_Apples.png"
    },
    {
        "name": "Carrot Cake",
        "ingredientOne" : "Carrot",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Sugarcane",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 427, 
        "energy": 908,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/dd/Carrot_Cake.png"
    },
    {
        "name": "Cheesecake",
        "ingredientOne" : "Cheese",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "Any fruit",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 332, 
        "energy": 1161,
        "imgSrc": "https://dreamlightvalleywiki.com/images/2/2d/Cheesecake.png"
    },
    {
        "name": "Cherry Pie",
        "ingredientOne" : "Cherry",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 326, 
        "energy": 1497,
        "imgSrc": "https://dreamlightvalleywiki.com/images/7/70/Cherry_Pie.png"
    },
    {
        "name": "Chocolate Chip Cookies",
        "ingredientOne" : "Cocoa Bean",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "Butter",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 373, 
        "energy": 1569,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/6f/Chocolate_Chip_Cookies.png"
    },
    {
        "name": "Chocolate Ice Cream",
        "ingredientOne" : "Cocoa Bean",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Milk ",
        "ingredientFour" : "Slush Ice",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 655, 
        "energy": 2074,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/41/Chocolate_Ice_Cream.png"
    },
    {
        "name": "Chocolate Waffles",
        "ingredientOne" : "Cocoa Bean",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Milk",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 735, 
        "energy": 2223,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/4d/Chocolate_Waffles.png"
    },
    {
        "name": "Coconut Boba Tea",
        "ingredientOne" : "Sugarcane",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Coconut",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 406, 
        "energy": 1653,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/50/Coconut_Boba_Tea.png"
    },
    {
        "name": "Coconut Cake",
        "ingredientOne" : "Coconut",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Sugarcane",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 424, 
        "energy": 1750,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/5c/Coconut_Cake.png"
    },
    {
        "name": "Coconut Ice Cream",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "Coconut",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 661, 
        "energy": 2169,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/d9/Coconut_Ice_Cream.png"
    },
    {
        "name": "Crepe",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Egg",
        "ingredientThree" : "Milk",
        "ingredientFour" : "Vanilla",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 768, 
        "energy": 1624,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/62/Crepe.png"
    },
    {
        "name": "Dream Ice Cream",
        "ingredientOne" : "Dreamlight Fruit",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Slush Ice",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 588, 
        "energy": 1976,
        "imgSrc": "https://dreamlightvalleywiki.com/images/c/c9/Dream_Ice_Cream.png"
    },
    {
        "name": "Fruit Salad",
        "ingredientOne" : "Any fruit",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 25, 
        "energy": 450,
        "imgSrc": "https://dreamlightvalleywiki.com/images/9/9e/Fruit_Salad.png"
    },
    {
        "name": "Fruit Sorbet",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Any fruit",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 222, 
        "energy": 857,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/b9/Fruit_Sorbet.png"
    },
    {
        "name": "Fruitcake",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Any fruit",
        "ingredientThree" : "Any fruit",
        "ingredientFour" : "Any fruit",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 96, 
        "energy": 1511,
        "imgSrc": "https://dreamlightvalleywiki.com/images/9/91/Fruitcake.png"
    },
    {
        "name": "Gingerbread House",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Ginger",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "Vanilla",
        "ingredientFive" : "Egg",
        "stars" : 5,
        "sellPrice" : 641, 
        "energy": 1460,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/1d/Gingerbread_House.png"
    },
    {
        "name": "Gooseberry Boba Tea",
        "ingredientOne" : "Sugarcane",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Gooseberry",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 418, 
        "energy": 1833,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/df/Gooseberry_Boba_Tea.png"
    },
    {
        "name": "Gray Stuff",
        "ingredientOne" : "Any dairy",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Cocoa Bean",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 114, 
        "energy": 1046,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/17/Gray_Stuff.png"
    },
    {
        "name": "Hot Cocoa",
        "ingredientOne" : "Sugarcane",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Cocoa",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 401, 
        "energy": 1563,
        "imgSrc": "https://dreamlightvalleywiki.com/images/7/7c/Hot_Cocoa.png"
    },
    {
        "name": "Ice Cream",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 558, 
        "energy": 1158,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/5d/Ice_Cream.png"
    },
    {
        "name": "Jam Waffles",
        "ingredientOne" : "Any fruit",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Milk",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 709, 
        "energy": 1843,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/53/Jam_Waffles.png"
    },
    {
        "name": "Lemon Sorbet",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 237, 
        "energy": 1112,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/d8/Lemon_Sorbet.png"
    },
    {
        "name": "Meringue Pie",
        "ingredientOne" : "Lemon",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Butter",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 667, 
        "energy": 2014,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/54/Meringue_Pie.png"
    },
    {
        "name": "Minnie's Gingerbread Cookies",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Ginger",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 132, 
        "energy": 379,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/ac/Minnie%27s_Gingerbread_Cookies.png"
    },
    {
        "name": "Mint Boba Tea",
        "ingredientOne" : "Sugarcane",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Mint",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 460, 
        "energy": 1032,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/37/Mint_Boba_Tea.png"
    },
    {
        "name": "Mint Candy",
        "ingredientOne" : "Mint",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 128, 
        "energy": 391,
        "imgSrc": "https://dreamlightvalleywiki.com/images/7/7a/Mint_Candy.png"
    },
    {
        "name": "Mint Chocolate",
        "ingredientOne" : "Mint",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Butter",
        "ingredientFour" : "Cocoa",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 490, 
        "energy": 1827,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/3f/Mint_Chocolate.png"
    },
    {
        "name": "Mint Sorbet",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Mint",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 299, 
        "energy": 695,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/0b/Mint_Sorbet.png"
    },
    {
        "name": "Pastry Cream and Fruits",
        "ingredientOne" : "Any fruit",
        "ingredientTwo" : "Any fruit",
        "ingredientThree" : "Any fruit",
        "ingredientFour" : "Milk",
        "ingredientFive" : "Sugarcane",
        "stars" : 5,
        "sellPrice" : 497, 
        "energy": 2332,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/ef/Pastry_Cream_and_Fruits.png"
    },
    {
        "name": "Pawpsicle",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Any fruit",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 265, 
        "energy": 987,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/de/Pawpsicle.png"
    },
    {
        "name": "Peanut Butter Waffles",
        "ingredientOne" : "Peanut",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Milk",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 978, 
        "energy": 1938,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/ba/Peanut_Butter_Waffles.png"
    },
    {
        "name": "Plain Snow Cones",
        "ingredientOne" : "Any ice",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 180, 
        "energy": 410,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/16/Plain_Snow_Cones.png"
    },
    {
        "name": "Raspberry Boba Tea",
        "ingredientOne" : "Sugarcane",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Raspberry",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 377, 
        "energy": 1203,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/bd/Raspberry_Boba_Tea.png"
    },
    {
        "name": "Red Fruit Pie",
        "ingredientOne" : "Any fruit",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 297, 
        "energy": 1047,
        "imgSrc": "https://dreamlightvalleywiki.com/images/f/fd/Red_Fruit_Pie.png"
    },
    {
        "name": "Red Fruit Sorbet",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Raspberry",
        "ingredientThree" : "Gooseberry",
        "ingredientFour" : "Sugarcane",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 359, 
        "energy": 2179,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/07/Red_Fruit_Sorbet.png"
    },
    {
        "name": "Root Beer",
        "ingredientOne" : "Ginger",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Vanilla",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 250, 
        "energy": 690,
        "imgSrc": "https://dreamlightvalleywiki.com/images/0/01/Root_Beer.png"
    },
    {
        "name": "Shake",
        "ingredientOne" : "Any dairy",
        "ingredientTwo" : "",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 1,
        "sellPrice" : 30, 
        "energy": 142,
        "imgSrc": "https://dreamlightvalleywiki.com/images/7/71/Shake.png"
    },
    {
        "name": "Snow White's Gooseberry Pie",
        "ingredientOne" : "Gooseberry",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 338, 
        "energy": 1677,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/10/Snow_White%27s_Gooseberry_Pie.png"
    },
    {
        "name": "Sour Snow Cones",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Lemon",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 282, 
        "energy": 1257,
        "imgSrc": "https://dreamlightvalleywiki.com/images/b/be/Sour_Snow_Cones.png"
    },
    {
        "name": "Spring Chocolate",
        "ingredientOne" : "Spring V-EGG-etable",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Cocoa Bean",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 254, 
        "energy": 1392,
        "imgSrc": "https://dreamlightvalleywiki.com/images/5/56/Spring_Chocolate.png"
    },
    {
        "name": "Spring Egg Bowl",
        "ingredientOne" : "Egg-cellent Fruit",
        "ingredientTwo" : "Spring V-EGG-etable",
        "ingredientThree" : "Wild Spring Egg",
        "ingredientFour" : "Cocoa Bean",
        "ingredientFive" : "Sugarcane",
        "stars" : 5,
        "sellPrice" : 370, 
        "energy": 1942,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/8a/Spring_Egg_Bowl.png"
    },

    {
        "name": "Spring Mimosa Eggs",
        "ingredientOne" : "Spring V-EGG-etable",
        "ingredientTwo" : "Wild Spring Egg",
        "ingredientThree" : "Egg-cellent Fruit",
        "ingredientFour" : "Basil",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 298, 
        "energy": 1095,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/ec/Spring_Mimosa_Eggs.png"
    },
    {
        "name": "Sweet Slush",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Any sweet",
        "ingredientThree" : "",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 2,
        "sellPrice" : 219, 
        "energy": 510,
        "imgSrc": "https://dreamlightvalleywiki.com/images/a/a4/Sweet_Slush.png"
    },
    {
        "name": "Tropical Pop",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Any fruit",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "Coconut",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 347, 
        "energy": 1989,
        "imgSrc": "https://dreamlightvalleywiki.com/images/8/85/Tropical_Pop.png"
    },
    {
        "name": "Vanilla Ice Cream",
        "ingredientOne" : "Slush Ice",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Sugarcane",
        "ingredientFour" : "Vanilla",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 688, 
        "energy": 1475,
        "imgSrc": "https://dreamlightvalleywiki.com/images/1/15/Vanilla_Ice_Cream.png"
    },
    {
        "name": "Waffles",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Milk",
        "ingredientThree" : "Egg",
        "ingredientFour" : "Any sweet",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 706, 
        "energy": 1455,
        "imgSrc": "https://dreamlightvalleywiki.com/images/e/e8/Waffles.png"
    },
    {
        "name": "Wedding Cake",
        "ingredientOne" : "Butter",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Vanilla",
        "ingredientFour" : "Egg",
        "ingredientFive" : "Wheat",
        "stars" : 5,
        "sellPrice" : 785, 
        "energy": 1680,
        "imgSrc": "https://dreamlightvalleywiki.com/images/6/6f/Wedding_Cake.png"
    },
    {
        "name": "Whimsical Pie",
        "ingredientOne" : "Dreamlight Fruit",
        "ingredientTwo" : "Wheat",
        "ingredientThree" : "Butter",
        "ingredientFour" : "",
        "ingredientFive" : "",
        "stars" : 3,
        "sellPrice" : 324, 
        "energy": 1497,
        "imgSrc": "https://dreamlightvalleywiki.com/images/4/46/Whimsical_Pie.png"
    },
    {
        "name": "Wonderland Cookies",
        "ingredientOne" : "Butter",
        "ingredientTwo" : "Sugarcane",
        "ingredientThree" : "Vanilla",
        "ingredientFour" : "Wheat",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 406, 
        "energy": 970,
        "imgSrc": "https://dreamlightvalleywiki.com/images/3/37/Wonderland_Cookies.png"
    },
    {
        "name": "Yule Log",
        "ingredientOne" : "Wheat",
        "ingredientTwo" : "Cocoa Bean",
        "ingredientThree" : "Vanilla",
        "ingredientFour" : "Cherry",
        "ingredientFive" : "",
        "stars" : 4,
        "sellPrice" : 213, 
        "energy": 2147,
        "imgSrc": "https://dreamlightvalleywiki.com/images/d/dd/Yule_Log.png"
    }
]

/*

{
        name: "",
        ingredients: [
            {
                name: ""
            }
        ],
        stars: 0,
        sellPrice: 0,
        energy: 0,
        imgSrc: ""
    },

*/

//Special cases:
///Crudités (not all veggies)
///Grilled Vegetables (not all veggies)
///Sushi (not salmon)
///Red Fruit Pie (not all fruits)
//Shake (not egg or cheese)