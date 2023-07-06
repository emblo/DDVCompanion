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
        name: "Apple-Cider-Glazed Salmon",
        ingredients: [
            {
                name: "Salmon"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Apple"
            }
        ],
        stars: 3,
        sellPrice: 271,
        energy: 1572,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3b/Apple-Cider-Glazed_Salmon.png"
    },
    {
        name: "Baked Carp",
        ingredients: [
            {
                name: "Carp"
            },
            {
                name: "Butter"
            }
        ],
        stars: 2,
        sellPrice: 767,
        energy: 1894,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/34/Baked_Carp.png"
    },
    {
        name: "Basil Omelet",
        ingredients: [
            {
                name: "Basil"
            },
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            },
            {
                name: "Milk"
            }
        ],
        stars: 4,
        sellPrice: 982,
        energy: 2035,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/09/Basil_Omelet.png"
    },
    {
        name: "Bouillabaisse",
        ingredients: [
            {
                name: "Any Seafood"
            },
            {
                name: "Any Seafood"
            },
            {
                name: "Shrimp"
            },
            {
                name: "Tomato"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 5,
        sellPrice: 529,
        energy: 2114,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9d/Bouillabaisse.png"
    },
    {
        name: "Carp Salad",
        ingredients: [
            {
                name: "Carp"
            },
            {
                name: "Lemon"
            },
            {
                name: "Lettuce"
            }
        ],
        stars: 3,
        sellPrice: 617,
        energy: 2310,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a1/Carp_Salad.png"
    },
    {
        name: "Cheesy Crispy Baked Cod",
        ingredients: [
            {
                name: "Cod"
            },
            {
                name: "Wheat"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 3,
        sellPrice: 303,
        energy: 840,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/63/Cheesy_Crispy_Baked_Cod.png"
    },
    {
        name: "Chowder",
        ingredients: [
            {
                name: "Any Seafood"
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
        sellPrice: 547,
        energy: 1186,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/95/Chowder.png"
    },
    {
        name: "Creamy Garlic Scallops",
        ingredients: [
            {
                name: "Scallop"
            },
            {
                name: "Lemon"
            },
            {
                name: "Butter"
            },
            {
                name: "Garlic"
            }
        ],
        stars: 4,
        sellPrice: 499,
        energy: 1844,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/16/Creamy_Garlic_Scallops.png"
    },
    {
        name: "Crispy Baked Cod",
        ingredients: [
            {
                name: "Cod"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 2,
        sellPrice: 47,
        energy: 337,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1d/Crispy_Baked_Cod.png"
    },
    {
        name: "Fish Creole",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Garlic"
            },
            {
                name: "Rice"
            },
            {
                name: "Tomato"
            }
        ],
        stars: 5,
        sellPrice: 241,
        energy: 822,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cc/Fish_Creole.png"
    },
    {
        name: "Fish 'n' Chips",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Wheat"
            },
            {
                name: "Canola"
            },
            {
                name: "Potato"
            }
        ],
        stars: 4,
        sellPrice: 356,
        energy: 697,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Fish_%27n%27_Chips.png"
    },
    {
        name: "Fish Pasta",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Garlic"
            },
            {
                name: "Wheat"
            },
            {
                name: "Milk"
            }
        ],
        stars: 4,
        sellPrice: 439,
        energy: 1282,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/08/Fish_Pasta.png"
    },
    {
        name: "Fish Pie",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 269,
        energy: 867,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ec/Fish_Pie.png"
    },
    {
        name: "Fish Risotto",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Rice"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 352,
        energy: 939,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Fish_Risotto.png"
    },
    {
        name: "Fish Salad",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Lemon"
            },
            {
                name: "Lettuce"
            }
        ],
        stars: 3,
        sellPrice: 58,
        energy: 1140,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8e/Fish_Salad.png"
    },
    {
        name: "Fish Sandwiches",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 2,
        sellPrice: 3,
        energy: 337,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/53/Fish_Sandwiches.png"
    },
    {
        name: "Fish Soup",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Milk"
            }
        ],
        stars: 3,
        sellPrice: 334,
        energy: 978,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/be/Fish_Soup.png"
    },
    {
        name: "Fish Steak",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Tomato"
            },
            {
                name: "Basil"
            }
        ],
        stars: 3,
        sellPrice: 66,
        energy: 537,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a1/Fish_Steak.png"
    },
    {
        name: "Fish Tacos",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Corn"
            },
            {
                name: "Chili Pepper"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 4,
        sellPrice: 412,
        energy: 1171,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/af/Fish_Tacos.png"
    },
    {
        name: "Fugu Sushi",
        ingredients: [
            {
                name: "Fugu"
            },
            {
                name: "Rice"
            },
            {
                name: "Seaweed"
            }
        ],
        stars: 3,
        sellPrice: 1373,
        energy: 3261,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0e/Fugu_Sushi.png"
    },
    {
        name: "Ghostly Fish Steak",
        ingredients: [
            {
                name: "Here and There Fish"
            },
            {
                name: "Lemon"
            },
            {
                name: "Asparagus"
            },
            {
                name: "Bell Pepper"
            },
            {
                name: "Oregano"
            }
        ],
        stars: 5,
        sellPrice: 3548,
        energy: 3282,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c8/Ghostly_Fish_Steak.png"
    },
    {
        name: "Greek Pizza",
        ingredients: [
            {
                name: "Any Spice"
            },
            {
                name: "Tomato"
            },
            {
                name: "Onion"
            },
            {
                name: "Cheese"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 5,
        sellPrice: 630,
        energy: 1152,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/38/Greek_Pizza.png"
    },
    {
        name: "Grilled Fish",
        ingredients: [
            {
                name: "Any Fish"
            }
        ],
        stars: 1,
        sellPrice: 1,
        energy: 290,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Grilled_Fish.png"
    },
    {
        name: "Grilled Fish Entree",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 2,
        sellPrice: 11,
        energy: 340,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a5/Grilled_Fish_Entree.png"
    },
    {
        name: "Gumbo",
        ingredients: [
            {
                name: "Okra"
            },
            {
                name: "Shrimp"
            },
            {
                name: "Chili Pepper"
            },
            {
                name: "Tomato"
            },
            {
                name: "Onion"
            }
        ],
        stars: 5,
        sellPrice: 1093,
        energy: 2226,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/10/Gumbo.png"
    },
    {
        name: "Hearty Salad",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Lettuce"
            }
        ],
        stars: 3,
        sellPrice: 33,
        energy: 224,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1a/Hearty_Salad.png"
    },
    {
        name: "Hors d'Oeuvres",
        ingredients: [
            {
                name: "Any Spice"
            }
        ],
        stars: 1,
        sellPrice: 24,
        energy: 202,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/92/Hors_d%27Oeuvres.png"
    },
    {
        name: "Kappa Maki",
        ingredients: [
            {
                name: "Seaweed"
            },
            {
                name: "Cucumber"
            },
            {
                name: "Rice"
            }
        ],
        stars: 3,
        sellPrice: 335,
        energy: 462,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/29/Kappa_Maki.png"
    },
    {
        name: "Kronk's Spinach Puffs",
        ingredients: [
            {
                name: "Spinach"
            },
            {
                name: "Cheese"
            },
            {
                name: "Canola"
            }
        ],
        stars: 3,
        sellPrice: 461,
        energy: 750,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e6/Kronk%27s_Spinach_Puffs.png"
    },
    {
        name: "Lancetfish Paella",
        ingredients: [
            {
                name: "Lancetfish"
            },
            {
                name: "Shrimp"
            },
            {
                name: "Any Seafood"
            },
            {
                name: "Tomato"
            },
            {
                name: "Rice"
            }
        ],
        stars: 5,
        sellPrice: 1653,
        energy: 4550,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/80/Lancetfish_Paella.png"
    },
    {
        name: "Leek Soup",
        ingredients: [
            {
                name: "Leek"
            }
        ],
        stars: 1,
        sellPrice: 370,
        energy: 414,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/39/Leek_Soup.png"
    },
    {
        name: "Lemon Garlic Swordfish",
        ingredients: [
            {
                name: "Swordfish"
            },
            {
                name: "Garlic"
            },
            {
                name: "Lemon"
            }
        ],
        stars: 3,
        sellPrice: 1110,
        energy: 3713,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/33/Lemon_Garlic_Swordfish.png"
    },
    {
        name: "Lioness Feast",
        ingredients: [
            {
                name: "Mushroom"
            },
            {
                name: "Tomato"
            },
            {
                name: "Oregano"
            },
            {
                name: "Here and There Fish"
            }
        ],
        stars: 4,
        sellPrice: 3108,
        energy: 2368,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/79/Lioness_Feast.png"
    },
    {
        name: "Lobster Roll",
        ingredients: [
            {
                name: "Lobster"
            },
            {
                name: "Wheat"
            },
            {
                name: "Lemon"
            },
            {
                name: "Butter"
            },
            {
                name: "Garlic"
            }
        ],
        stars: 5,
        sellPrice: 1975,
        energy: 4928,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/63/Lobster_Roll.png"
    },
    {
        name: "Maguro Sushi",
        ingredients: [
            {
                name: "Tuna"
            },
            {
                name: "Seaweed"
            },
            {
                name: "Rice"
            },
            {
                name: "Ginger"
            }
        ],
        stars: 4,
        sellPrice: 413,
        energy: 1206,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2f/Maguro_Sushi.png"
    },
    {
        name: "Maki",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Seaweed"
            },
            {
                name: "Rice"
            }
        ],
        stars: 3,
        sellPrice: 114,
        energy: 471,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/21/Maki.png"
    },
    {
        name: "Margherita Pizza",
        ingredients: [
            {
                name: "Any Spice"
            },
            {
                name: "Tomato"
            },
            {
                name: "Cheese"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 4,
        sellPrice: 336,
        energy: 818,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/Margherita_Pizza.png"
    },
    {
        name: "Marvelous Jam",
        ingredients: [
            {
                name: "Dreamlight Fruit"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 2,
        sellPrice: 54,
        energy: 932,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/50/Marvelous_Jam.png"
    },
    {
        name: "Mediterranean Salad",
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
                name: "Lettuce"
            },
            {
                name: "Any Spice"
            }
        ],
        stars: 5,
        sellPrice: 605,
        energy: 976,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/73/Mediterranean_Salad.png"
    },
    {
        name: "Mushroom Pizza",
        ingredients: [
            {
                name: "Mushroom"
            },
            {
                name: "Wheat"
            },
            {
                name: "Tomato"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 4,
        sellPrice: 351,
        energy: 837,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e9/Mushroom_Pizza.png"
    },
    {
        name: "Mushu's Congee",
        ingredients: [
            {
                name: "Rice"
            },
            {
                name: "Egg"
            },
            {
                name: "Mushroom"
            },
            {
                name: "Garlic"
            },
            {
                name: "Ginger"
            }
        ],
        stars: 5,
        sellPrice: 753,
        energy: 1658,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0d/Mushu%27s_Congee.png"
    },
    {
        name: "Omelet",
        ingredients: [
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            },
            {
                name: "Milk"
            }
        ],
        stars: 3,
        sellPrice: 882,
        energy: 1751,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/12/Omelet.png"
    },
    {
        name: "Pan-Fried Angler Fish",
        ingredients: [
            {
                name: "Anglerfish"
            },
            {
                name: "Tomato"
            },
            {
                name: "Zucchini"
            },
            {
                name: "Potato"
            }
        ],
        stars: 4,
        sellPrice: 2550,
        energy: 4194,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2e/Pan-Fried_Angler_Fish.png"
    },
    {
        name: "Pan-Seared Bass & Vegetables",
        ingredients: [
            {
                name: "Bass"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 3,
        sellPrice: 57,
        energy: 394,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dc/Pan-Seared_Bass_%26_Vegetables.png"
    },
    {
        name: "Pan-Seared Tilapia & Vegetables",
        ingredients: [
            {
                name: "Tilapia"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 3,
        sellPrice: 862,
        energy: 2194,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a0/Pan-Seared_Tilapia_%26_Vegetables.png"
    },
    {
        name: "Pasta",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Tomato"
            }
        ],
        stars: 2,
        sellPrice: 30,
        energy: 117,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d8/Pasta.png"
    },
    {
        name: "Peanut Butter Sandwich",
        ingredients: [
            {
                name: "Peanut"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 2,
        sellPrice: 262,
        energy: 592,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/af/Peanut_Butter_Sandwich.png"
    },
    {
        name: "Pizza",
        ingredients: [
            {
                name: "Tomato"
            },
            {
                name: "Cheese"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 3,
        sellPrice: 284,
        energy: 607,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f4/Pizza.png"
    },
    {
        name: "Poached Basil-Butter Sturgeon",
        ingredients: [
            {
                name: "White Sturgeon"
            },
            {
                name: "Basil"
            },
            {
                name: "Lemon"
            },
            {
                name: "Butter"
            }
        ],
        stars: 4,
        sellPrice: 2246,
        energy: 4961,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/43/Poached_Basil-Butter_Sturgeon.png"
    },
    {
        name: "Porridge",
        ingredients: [
            {
                name: "Milk"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 2,
        sellPrice: 301,
        energy: 668,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5d/Porridge.png"
    },
    {
        name: "Porridge with Fruits",
        ingredients: [
            {
                name: "Milk"
            },
            {
                name: "Wheat"
            },
            {
                name: "Any Fruit"
            }
        ],
        stars: 3,
        sellPrice: 353,
        energy: 1155,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/84/Porridge_with_Fruits.png"
    },
    {
        name: "Ranch Salad",
        ingredients: [
            {
                name: "Lettuce"
            },
            {
                name: "Bell Pepper"
            },
            {
                name: "Corn"
            },
            {
                name: "Tomato"
            },
            {
                name: "Onion"
            }
        ],
        stars: 5,
        sellPrice: 396,
        energy: 714,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6c/Ranch_Salad.png"
    },
    {
        name: "Ratatouille",
        ingredients: [
            {
                name: "Tomato"
            },
            {
                name: "Eggplant"
            },
            {
                name: "Onion"
            },
            {
                name: "Zucchini"
            },
            {
                name: "Any Spice"
            }
        ],
        stars: 5,
        sellPrice: 914,
        energy: 572,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b0/Ratatouille.png"
    },
    {
        name: "Sake Maki",
        ingredients: [
            {
                name: "Rice"
            },
            {
                name: "Seaweed"
            },
            {
                name: "Salmon"
            }
        ],
        stars: 3,
        sellPrice: 323,
        energy: 1101,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1a/Sake_Maki.png"
    },
    {
        name: "Sake Sushi",
        ingredients: [
            {
                name: "Salmon"
            },
            {
                name: "Rice"
            }
        ],
        stars: 2,
        sellPrice: 274,
        energy: 1000,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f0/Sake_Sushi.png"
    },
    {
        name: "Savory Fish",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Lemon"
            }
        ],
        stars: 2,
        sellPrice: 43,
        energy: 985,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0e/Savory_Fish.png"
    },
    {
        name: "Scrambled Egg",
        ingredients: [
            {
                name: "Egg"
            },
            {
                name: "Cheese"
            }
        ],
        stars: 2,
        sellPrice: 520,
        energy: 1070,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8b/Scrambled_Egg.png"
    },
    {
        name: "Seafood Pasta",
        ingredients: [
            {
                name: "Any Seafood"
            },
            {
                name: "Wheat"
            },
            {
                name: "Milk"
            }
        ],
        stars: 3,
        sellPrice: 325,
        energy: 921,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1a/Seafood_Pasta.png"
    },
    {
        name: "Seafood Pie",
        ingredients: [
            {
                name: "Any Seafood"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 269,
        energy: 813,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/98/Seafood_Pie.png"
    },
    {
        name: "Seafood Salad",
        ingredients: [
            {
                name: "Any Seafood"
            },
            {
                name: "Lettuce"
            }
        ],
        stars: 2,
        sellPrice: 68,
        energy: 349,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/69/Seafood_Salad.png"
    },
    {
        name: "Seafood Soup",
        ingredients: [
            {
                name: "Any Seafood"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 3,
        sellPrice: 85,
        energy: 340,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b3/Seafood_Soup.png"
    },
    {
        name: "Seared Rainbow Trout",
        ingredients: [
            {
                name: "Rainbow Trout"
            },
            {
                name: "Tomato"
            },
            {
                name: "Onion"
            }
        ],
        stars: 3,
        sellPrice: 338,
        energy: 889,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/20/Seared_Rainbow_Trout.png"
    },
    {
        name: "Simple Fried Perch",
        ingredients: [
            {
                name: "Perch"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 380,
        energy: 1317,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b3/Simple_Fried_Perch.png"
    },
    {
        name: "Smoked Peanuts and Anglerfish",
        ingredients: [
            {
                name: "Anglerfish"
            },
            {
                name: "Peanut"
            }
        ],
        stars: 2,
        sellPrice: 2210,
        energy: 3960,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e2/Smoked_Peanuts_and_Anglerfish.png"
    },
    {
        name: "Sole Meunière",
        ingredients: [
            {
                name: "Sole"
            },
            {
                name: "WHeat"
            },
            {
                name: "Butter"
            },
            {
                name: "Lemon"
            }
        ],
        stars: 4,
        sellPrice: 637,
        energy: 2337,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2e/Sole_Meuni%C3%A8re.png"
    },
    {
        name: "Spaghetti Arrabbiata",
        ingredients: [
            {
                name: "Tomato"
            },
            {
                name: "Wheat"
            },
            {
                name: "Chili Pepper"
            }
        ],
        stars: 3,
        sellPrice: 141,
        energy: 373,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4d/Spaghetti_Arrabbiata.png"
    },
    {
        name: "Spicy Baked Bream",
        ingredients: [
            {
                name: "Bream"
            },
            {
                name: "Chili Pepper"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 767,
        energy: 2075,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f6/Spicy_Baked_Bream.png"
    },
    {
        name: "Steamed Fugu",
        ingredients: [
            {
                name: "Fugu"
            },
            {
                name: "Ginger"
            },
            {
                name: "Garlic"
            }
        ],
        stars: 3,
        sellPrice: 1484,
        energy: 3668,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bb/Steamed_Fugu.png"
    },
    {
        name: "Sushi",
        ingredients: [
            {
                name: "Any Fish"
            },
            {
                name: "Rice"
            }
        ],
        stars: 2,
        sellPrice: 80,
        energy: 405,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6d/Sushi.png"
    },
    {
        name: "Sweet & Sour Kingfish Steak",
        ingredients: [
            {
                name: "Kingfish"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Lemon"
            }
        ],
        stars: 3,
        sellPrice: 702,
        energy: 2292,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bb/Sweet_%26_Sour_Kingfish_Steak.png"
    },
    {
        name: "Sweet Udon",
        ingredients: [
            {
                name: "Dreamlight Fruit"
            },
            {
                name: "Rice"
            },
            {
                name: "Any Seafood"
            },
            {
                name: "Any Sweet"
            }
        ],
        stars: 4,
        sellPrice: 180,
        energy: 1427,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a6/Sweet_Udon.png"
    },
    {
        name: "Tamagoyaki",
        ingredients: [
            {
                name: "Egg"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 2,
        sellPrice: 310,
        energy: 689,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Tamagoyaki.png"
    },
    {
        name: "Tasty Salad",
        ingredients: [
            {
                name: "Lettuce"
            },
            {
                name: "Cucumber"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Spice"
            }
        ],
        stars: 4,
        sellPrice: 292,
        energy: 650,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/84/Tasty_Salad.png"
    },
    {
        name: "Tasty Veggies",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Spice"
            }
        ],
        stars: 2,
        sellPrice: 36,
        energy: 246,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/87/Tasty_Veggies.png"
    },
    {
        name: "Tekka Maki",
        ingredients: [
            {
                name: "Tuna"
            },
            {
                name: "Soya"
            },
            {
                name: "Seaweed"
            },
            {
                name: "Rice"
            }
        ],
        stars: 4,
        sellPrice: 366,
        energy: 984,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e6/Tekka_Maki.png"
    },
    {
        name: "Teriyaki Salmon",
        ingredients: [
            {
                name: "Soya"
            },
            {
                name: "Salmon"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Rice"
            },
            {
                name: "Ginger"
            }
        ],
        stars: 5,
        sellPrice: 637,
        energy: 1726,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/61/Teriyaki_Salmon.png"
    },
    {
        name: "Tuna Burger",
        ingredients: [
            {
                name: "Tuna"
            },
            {
                name: "Onion"
            },
            {
                name: "Lemon"
            },
            {
                name: "Wheat"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 5,
        sellPrice: 491,
        energy: 1922,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/00/Tuna_Burger.png"
    },
    {
        name: "Vegetarian Pizza",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Tomato"
            },
            {
                name: "Cheese"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 5,
        sellPrice: 350,
        energy: 754,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/83/Vegetarian_Pizza.png"
    },
    {
        name: "Vegetarian Stew",
        ingredients: [
            {
                name: "Potato"
            },
            {
                name: "Carrot"
            },
            {
                name: "Onion"
            }
        ],
        stars: 3,
        sellPrice: 475,
        energy: 617,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/36/Vegetarian_Stew.png"
    },
    {
        name: "Vegetarian Taco",
        ingredients: [
            {
                name: "Corn"
            },
            {
                name: "Chili Pepper"
            },
            {
                name: "Cheese"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 4,
        sellPrice: 423,
        energy: 925,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/90/Vegetarian_Taco.png"
    },
    {
        name: "Veggie Casserole",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Any Vegetable"
            },
            {
                name: "Cheese"
            },
            {
                name: "Any Spice"
            }
        ],
        stars: 4,
        sellPrice: 324,
        energy: 821,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ad/Veggie_Casserole.png"
    },
    {
        name: "Veggie Pasta",
        ingredients: [
            {
                name: "Tomato"
            },
            {
                name: "Wheat"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 3,
        sellPrice: 43,
        energy: 158,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4c/Veggie_Pasta.png"
    },
    {
        name: "Veggie Pie",
        ingredients: [
            {
                name: "Any Vegetable"
            },
            {
                name: "Butter"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 3,
        sellPrice: 279,
        energy: 634,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/48/Veggie_Pie.png"
    },
    {
        name: "Veggie Skewers",
        ingredients: [
            {
                name: "Mushroom"
            },
            {
                name: "Zucchini"
            },
            {
                name: "Onion"
            },
            {
                name: "Bell Pepper"
            }
        ],
        stars: 4,
        sellPrice: 427,
        energy: 767,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/db/Veggie_Skewers.png"
    },
    {
        name: "Walleye en Papillote",
        ingredients: [
            {
                name: "Walleye"
            },
            {
                name: "Basil"
            },
            {
                name: "Oregano"
            },
            {
                name: "Any Vegetable"
            }
        ],
        stars: 4,
        sellPrice: 1729,
        energy: 3689,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2a/Walleye_en_Papillote.png"
    }
]

//Desserts
const desserts = [
    {
        name: "'My Hero' Cookie",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            },
            {
                name: "Any Sweet"
            }
        ],
        stars: 3,
        sellPrice: 294,
        energy: 679,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/05/%22My_Hero%22_Cookie.png"
    },
    {
        name: "Apple Pie",
        ingredients: [
            {
                name: "Apple"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 303,
        energy: 1137,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fb/Apple_Pie.png"
    },
    {
        name: "Apple Sorbet",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Apple"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 3,
        sellPrice: 271,
        energy: 1077,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5b/Apple_Sorbet.png"
    },
    {
        name: "Aurora's Cake",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Egg"
            },
            {
                name: "Any Fruit"
            },
            {
                name: "Milk"
            }
        ],
        stars: 5,
        sellPrice: 786,
        energy: 2030,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f5/Aurora%27s_Cake.png"
    },
    {
        name: "Banana Ice Cream",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Banana"
            },
            {
                name: "Milk"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 4,
        sellPrice: 641,
        energy: 1884,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/79/Banana_Ice_Cream.png"
    },
    {
        name: "Banana Pie",
        ingredients: [
            {
                name: "Banana"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 308,
        energy: 1227,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/75/Banana_Pie.png"
    },
    {
        name: "Banana Split",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Banana"
            },
            {
                name: "Milk"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Any Sweet"
            }
        ],
        stars: 5,
        sellPrice: 714,
        energy: 2074,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bd/Banana_Split.png"
    },
    {
        name: "Beignets",
        ingredients: [
            {
                name: "Canola"
            },
            {
                name: "Wheat"
            },
            {
                name: "Egg"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 4,
        sellPrice: 524,
        energy: 912,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Beignets.png"
    },
    {
        name: "Berry Salad",
        ingredients: [
            {
                name: "Raspberry"
            },
            {
                name: "Blueberry"
            },
            {
                name: "Gooseberry"
            }
        ],
        stars: 3,
        sellPrice: 139,
        energy: 2210,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8d/Berry_Salad.png"
    },
    {
        name: "Birthday Cake",
        ingredients: [
            {
                name: "Cocoa Bean"
            },
            {
                name: "Wheat"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Egg"
            },
            {
                name: "Butter"
            }
        ],
        stars: 5,
        sellPrice: 749,
        energy: 2310,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e3/Birthday_Cake.png"
    },
    {
        name: "Biscuits",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 294,
        energy: 679,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f5/Biscuits.png"
    },
    {
        name: "Blueberry Pie",
        ingredients: [
            {
                name: "Blueberry"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 308,
        energy: 1227,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/32/Blueberry_Pie.png"
    },
    {
        name: "Boba Tea",
        ingredients: [
            {
                name: "Sugarcane"
            },
            {
                name: "Milk"
            }
        ],
        stars: 2,
        sellPrice: 323,
        energy: 714,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0a/Boba_Tea.png"
    },
    {
        name: "Candy",
        ingredients: [
            {
                name: "Any Sweet"
            }
        ],
        stars: 1,
        sellPrice: 22,
        energy: 123,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1c/Candy.png"
    },
    {
        name: "Caramel Apples",
        ingredients: [
            {
                name: "Sugarcane"
            },
            {
                name: "Apple"
            }
        ],
        stars: 2,
        sellPrice: 56,
        energy: 638,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c6/Caramel_Apples.png"
    },
    {
        name: "Carrot Cake",
        ingredients: [
            {
                name: "Carrot"
            },
            {
                name: "Wheat"
            },
            {
                name: "Egg"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 4,
        sellPrice: 427,
        energy: 908,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Carrot_Cake.png"
    },
    {
        name: "Cheesecake",
        ingredients: [
            {
                name: "Cheese"
            },
            {
                name: "Wheat"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Any Fruit"
            }
        ],
        stars: 4,
        sellPrice: 332,
        energy: 1161,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2d/Cheesecake.png"
    },
    {
        name: "Cherry Pie",
        ingredients: [
            {
                name: "Cherry"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 326,
        energy: 1497,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/70/Cherry_Pie.png"
    },
    {
        name: "Chocolate Chip Cookies",
        ingredients: [
            {
                name: "Cocoa Bean"
            },
            {
                name: "Wheat"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Butter"
            }
        ],
        stars: 4,
        sellPrice: 373,
        energy: 1569,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6f/Chocolate_Chip_Cookies.png"
    },
    {
        name: "Chocolate Ice Cream",
        ingredients: [
            {
                name: "Cocoa Bean"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Milk"
            },
            {
                name: "Slush Ice"
            }
        ],
        stars: 4,
        sellPrice: 655,
        energy: 2074,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/41/Chocolate_Ice_Cream.png"
    },
    {
        name: "Chocolate Waffles",
        ingredients: [
            {
                name: "Cocoa Bean"
            },
            {
                name: "Wheat"
            },
            {
                name: "Egg"
            },
            {
                name: "Milk"
            }
        ],
        stars: 4,
        sellPrice: 735,
        energy: 2223,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4d/Chocolate_Waffles.png"
    },
    {
        name: "Coconut Boba Tea",
        ingredients: [
            {
                name: "Sugarcane"
            },
            {
                name: "Milk"
            },
            {
                name: "Coconut"
            }
        ],
        stars: 3,
        sellPrice: 406,
        energy: 1653,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/50/Coconut_Boba_Tea.png"
    },
    {
        name: "Coconut Cake",
        ingredients: [
            {
                name: "Coconut"
            },
            {
                name: "Wheat"
            },
            {
                name: "Egg"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 4,
        sellPrice: 424,
        energy: 1750,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5c/Coconut_Cake.png"
    },
    {
        name: "Coconut Ice Cream",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Milk"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Coconut"
            }
        ],
        stars: 4,
        sellPrice: 661,
        energy: 2169,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d9/Coconut_Ice_Cream.png"
    },
    {
        name: "Crepe",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Egg"
            },
            {
                name: "Milk"
            },
            {
                name: "Vanilla"
            }
        ],
        stars: 4,
        sellPrice: 768,
        energy: 1624,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/62/Crepe.png"
    },
    {
        name: "Dream Ice Cream",
        ingredients: [
            {
                name: "Dreamlight Fruit"
            },
            {
                name: "Milk"
            },
            {
                name: "Slush Ice"
            }
        ],
        stars: 3,
        sellPrice: 588,
        energy: 1976,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c9/Dream_Ice_Cream.png"
    },
    {
        name: "Fruit Salad",
        ingredients: [
            {
                name: "Any Fruit"
            }
        ],
        stars: 1,
        sellPrice: 25,
        energy: 450,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Fruit_Salad.png"
    },
    {
        name: "Fruit Sorbet",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Any Fruit"
            }
        ],
        stars: 2,
        sellPrice: 222,
        energy: 857,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/Fruit_Sorbet.png"
    },
    {
        name: "Fruitcake",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Any Fruit"
            },
            {
                name: "Any Fruit"
            },
            {
                name: "Any Fruit"
            }
        ],
        stars: 4,
        sellPrice: 96,
        energy: 1511,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/91/Fruitcake.png"
    },
    {
        name: "Gingerbread House",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Ginger"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Vanilla"
            },
            {
                name: "Egg"
            }
        ],
        stars: 5,
        sellPrice: 641,
        energy: 1460,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1d/Gingerbread_House.png"
    },
    {
        name: "Gooseberry Boba Tea",
        ingredients: [
            {
                name: "Sugarcane"
            },
            {
                name: "Milk"
            },
            {
                name: "Gooseberry"
            }
        ],
        stars: 3,
        sellPrice: 418,
        energy: 1833,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/df/Gooseberry_Boba_Tea.png"
    },
    {
        name: "Gray Stuff",
        ingredients: [
            {
                name: "Any Dairy or Oil"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Cocoa Bean"
            }
        ],
        stars: 3,
        sellPrice: 114,
        energy: 1046,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/17/Gray_Stuff.png"
    },
    {
        name: "Hot Cocoa",
        ingredients: [
            {
                name: "Sugarcane"
            },
            {
                name: "Milk"
            },
            {
                name: "Cocoa Bean"
            }
        ],
        stars: 3,
        sellPrice: 401,
        energy: 1563,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7c/Hot_Cocoa.png"
    },
    {
        name: "Ice Cream",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Milk"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 3,
        sellPrice: 558,
        energy: 1158,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5d/Ice_Cream.png"
    },
    {
        name: "Jam Waffles",
        ingredients: [
            {
                name: "Any Fruit"
            },
            {
                name: "Wheat"
            },
            {
                name: "Egg"
            },
            {
                name: "Milk"
            }
        ],
        stars: 4,
        sellPrice: 709,
        energy: 1843,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/53/Jam_Waffles.png"
    },
    {
        name: "Lemon Sorbet",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Lemon"
            }
        ],
        stars: 2,
        sellPrice: 237,
        energy: 1112,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d8/Lemon_Sorbet.png"
    },
    {
        name: "Meringue Pie",
        ingredients: [
            {
                name: "Lemon"
            },
            {
                name: "Wheat"
            },
            {
                name: "Egg"
            },
            {
                name: "Butter"
            }
        ],
        stars: 4,
        sellPrice: 667,
        energy: 2014,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/54/Meringue_Pie.png"
    },
    {
        name: "Minnie's Gingerbread Cookies",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Ginger"
            }
        ],
        stars: 2,
        sellPrice: 132,
        energy: 379,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ac/Minnie%27s_Gingerbread_Cookies.png"
    },
    {
        name: "Mint Boba Tea",
        ingredients: [
            {
                name: "Sugarcane"
            },
            {
                name: "Milk"
            },
            {
                name: "Mint"
            }
        ],
        stars: 3,
        sellPrice: 460,
        energy: 1032,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Mint_Boba_Tea.png"
    },
    {
        name: "Mint Candy",
        ingredients: [
            {
                name: "Mint"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 2,
        sellPrice: 128,
        energy: 391,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7a/Mint_Candy.png"
    },
    {
        name: "Mint Chocolate",
        ingredients: [
            {
                name: "Mint"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Butter"
            },
            {
                name: "Cocoa Bean"
            }
        ],
        stars: 4,
        sellPrice: 490,
        energy: 1827,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3f/Mint_Chocolate.png"
    },
    {
        name: "Mint Sorbet",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Mint"
            }
        ],
        stars: 2,
        sellPrice: 299,
        energy: 695,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0b/Mint_Sorbet.png"
    },
    {
        name: "Pastry Cream and Fruits",
        ingredients: [
            {
                name: "Any Fruit"
            },
            {
                name: "Any Fruit"
            },
            {
                name: "Any Fruit"
            },
            {
                name: "Milk"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 5,
        sellPrice: 497,
        energy: 2332,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ef/Pastry_Cream_and_Fruits.png"
    },
    {
        name: "Pawpsicle",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Any Fruit"
            }
        ],
        stars: 3,
        sellPrice: 265,
        energy: 987,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/de/Pawpsicle.png"
    },
    {
        name: "Peanut Butter Waffles",
        ingredients: [
            {
                name: "Peanut"
            },
            {
                name: "Wheat"
            },
            {
                name: "Egg"
            },
            {
                name: "Milk"
            }
        ],
        stars: 4,
        sellPrice: 978,
        energy: 1938,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/ba/Peanut_Butter_Waffles.png"
    },
    {
        name: "Plain Snow Cones",
        ingredients: [
            {
                name: "Any Ice"
            }
        ],
        stars: 1,
        sellPrice: 180,
        energy: 410,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/16/Plain_Snow_Cones.png"
    },
    {
        name: "Raspberry Boba Tea",
        ingredients: [
            {
                name: "Sugarcane"
            },
            {
                name: "Milk"
            },
            {
                name: "Raspberry"
            }
        ],
        stars: 3,
        sellPrice: 377,
        energy: 1203,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bd/Raspberry_Boba_Tea.png"
    },
    {
        name: "Red Fruit Pie",
        ingredients: [
            {
                name: "Any Fruit"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 297,
        energy: 1047,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fd/Red_Fruit_Pie.png"
    },
    {
        name: "Red Fruit Sorbet",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Raspberry"
            },
            {
                name: "Gooseberry"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 4,
        sellPrice: 359,
        energy: 2179,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/07/Red_Fruit_Sorbet.png"
    },
    {
        name: "Root Beer",
        ingredients: [
            {
                name: "Ginger"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Vanilla"
            }
        ],
        stars: 3,
        sellPrice: 250,
        energy: 690,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/01/Root_Beer.png"
    },
    {
        name: "Shake",
        ingredients: [
            {
                name: "Any Dairy or Oil"
            }
        ],
        stars: 1,
        sellPrice: 30,
        energy: 142,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/71/Shake.png"
    },
    {
        name: "Snow White's Gooseberry Pie",
        ingredients: [
            {
                name: "Gooseberry"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 338,
        energy: 1677,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/10/Snow_White%27s_Gooseberry_Pie.png"
    },
    {
        name: "Sour Snow Cones",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Lemon"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 3,
        sellPrice: 282,
        energy: 1257,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/be/Sour_Snow_Cones.png"
    },
    {
        name: "Spring Chocolate",
        ingredients: [
            {
                name: "Spring V-EGG-etable"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Cocoa Bean"
            }
        ],
        stars: 3,
        sellPrice: 254,
        energy: 1392,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/56/Spring_Chocolate.png"
    },
    {
        name: "Spring Egg Bowl",
        ingredients: [
            {
                name: "Egg-cellent Fruit"
            },
            {
                name: "Spring V-EGG-etable"
            },
            {
                name: "Wild Spring Egg"
            },
            {
                name: "Cocoa Bean"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 5,
        sellPrice: 370,
        energy: 1942,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8a/Spring_Egg_Bowl.png"
    },
    {
        name: "Spring Mimosa Eggs",
        ingredients: [
            {
                name: "Spring V-EGG-etable"
            },
            {
                name: "Wild Spring Egg"
            },
            {
                name: "Egg-cellent Fruit"
            },
            {
                name: "Basil"
            }
        ],
        stars: 4,
        sellPrice: 298,
        energy: 1095,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ec/Spring_Mimosa_Eggs.png"
    },
    {
        name: "Sweet Slush",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Any Sweet"
            }
        ],
        stars: 2,
        sellPrice: 219,
        energy: 510,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a4/Sweet_Slush.png"
    },
    {
        name: "Tropical Pop",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Any Fruit"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Coconut"
            }
        ],
        stars: 4,
        sellPrice: 347,
        energy: 1989,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/85/Tropical_Pop.png"
    },
    {
        name: "Vanilla Ice Cream",
        ingredients: [
            {
                name: "Slush Ice"
            },
            {
                name: "Milk"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Vanilla"
            }
        ],
        stars: 4,
        sellPrice: 688,
        energy: 1475,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/15/Vanilla_Ice_Cream.png"
    },
    {
        name: "Waffles",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Milk"
            },
            {
                name: "Egg"
            },
            {
                name: "Sugarcane"
            }
        ],
        stars: 4,
        sellPrice: 706,
        energy: 1455,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e8/Waffles.png"
    },
    {
        name: "Wedding Cake",
        ingredients: [
            {
                name: "Butter"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Vanilla"
            },
            {
                name: "Egg"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 5,
        sellPrice: 785,
        energy: 1680,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6f/Wedding_Cake.png"
    },
    {
        name: "Whimsical Pie",
        ingredients: [
            {
                name: "Dreamlight Fruit"
            },
            {
                name: "Wheat"
            },
            {
                name: "Butter"
            }
        ],
        stars: 3,
        sellPrice: 324,
        energy: 1497,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/46/Whimsical_Pie.png"
    },
    {
        name: "Wonderland Cookies",
        ingredients: [
            {
                name: "Butter"
            },
            {
                name: "Sugarcane"
            },
            {
                name: "Vanilla"
            },
            {
                name: "Wheat"
            }
        ],
        stars: 4,
        sellPrice: 406,
        energy: 970,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Wonderland_Cookies.png"
    },
    {
        name: "Yule Log",
        ingredients: [
            {
                name: "Wheat"
            },
            {
                name: "Cocoa Bean"
            },
            {
                name: "Vanilla"
            },
            {
                name: "Cherry"
            }
        ],
        stars: 4,
        sellPrice: 213,
        energy: 2147,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Yule_Log.png"
    }
]

//Special cases:
///Crudités (not all veggies)
///Grilled Vegetables (not all veggies)
///Sushi (not salmon)
///Red Fruit Pie (not all fruits)
//Shake (not egg or cheese)
//My Hero Cookie (no sugarcane)
//Waffles (only Sugarcane)