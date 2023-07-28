//Special cases:
///Crudités (not all veggies)
///Grilled Vegetables (not all veggies)
///Sushi (not salmon)
///Red Fruit Pie (not all fruits)
//Shake (not egg or cheese)
//My Hero Cookie (no sugarcane)
//Waffles (only Sugarcane)

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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c5/Arendellian_Pickled_Herring.png",
        imgAlt: "A glass jar filled with fish pieces. The lid is made of cork and a light blue bow is tied around the top of the jar. The Arendellian green and yellow emblem is on the front of the jar."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/ff/Bell_Pepper_Puffs.png",
        imgAlt: "A bunch of bell pepper puffs on a white plate. The puffs look like little pastry tubes filled with mashed up red bell pepper."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/66/Bu%C3%B1uelos.png",
        imgAlt: "A blue plate with white parchment paper. On top of the paper are a bunch of fried golden dough balls."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Cheese_Platter.png",
        imgAlt: "A wooden cutting board with various types of cheese, grapes, crackers and charcuterie board accompaniments."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b5/Chili_Pepper_Puffs.png",
        imgAlt: "A white plate with chili pepper puffs. The puffs look like little pastry tubes with mashed up chili peppers inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e9/Coffee.png",
        imgAlt: "A gray see-through coffe cup filled with black coffee with foam on top. The cup is on a little white plate with a small spoon placed under the coffee cup's handle."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d4/Crackers.png",
        imgAlt: "Three crackers placed in a spread out pile.They are yellow and white in color with little holes in them."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/51/Creamy_Soup.png",
        imgAlt: "A gray bowl filled with yellow soup, a white swirl and some green garnish can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/26/Crudit%C3%A9s.png",
        imgAlt: "A black plate with cut up yellow and green fruit with a little container with white sauce and green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1a/Dream_Fizz.png",
        imgAlt: "A tall glass with a pink drink and blue shaved ice on top."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c1/Eggplant_Puffs.png",
        imgAlt: "A white plate with eggplant puffs. The puffs look like little pastry tubes with mashed up eggplant inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8e/French_Fries.png",
        imgAlt: "A metal cone with cone shaped parchment paper inside. Inside it are thin fries. On the left, a white container with ketchup can be seen. Both items are placed on a half-moon shaped wooden board."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0f/Gazpacho.png",
        imgAlt: "A white bowl filled with an orange soup. Pieces of vegetables can be seen in the middle of the bowl."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7a/Green_Salad.png",
        imgAlt: "A white square plate holding mixed types of lettuce with cut up cucumbers."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cc/Grilled_Vegetables.png",
        imgAlt: "A black plate with cut up and grilled pieces of zucchini."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/92/Grilled_Veggie_Platter.png",
        imgAlt: "A black plate with four different kinds of grilled vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Hard-Boiled_Eggs.png",
        imgAlt: "A white plate with a cut up hard-boiled egg. "
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Large_Seafood_Platter.png",
        imgAlt: "A three tiered platter of plated seafood. Shrimp, oysters, clams and pieces of lemons can be seen. Holding the plates together is a golden construction."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2c/Latte.png",
        imgAlt: "A tall see-through gray glass with a latte with foam on the top. Leaning on the glass is a tall black little spoon."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/67/Marinated_Herring.png",
        imgAlt: "A glass jar with pieces of fish. The lid is golden."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/48/Mocha.png",
        imgAlt: "A small cup of mocha with golden foam on top. The cup is placed on a little white plate with a tiny black spoon beside it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8b/Okra_Soup.png",
        imgAlt: "A gray bowl with green soup. A white swirl is on top and some green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/66/Onion_Puffs.png",
        imgAlt: "A white plate with onion puffs. The puffs look like little pastry tubes with mashed up onion inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e1/Oyster_Platter.png",
        imgAlt: "A white plate with several opened oysters and a few slices of lemon."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/38/Peppermint_Tea.png",
        imgAlt: "A white cup of yellow tea with mint leaves and a lemon wedged to the side of it. The cup is placed on a small white plate and has a tiny spoon on it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/84/Pickled_Herring.png",
        imgAlt: "A clear glass jar with pieces of fish in it. The lid is a deep gold metallic color."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fe/Potato_Leek_Soup.png",
        imgAlt: "A beige bowl filled with a cream colored soup. In it pieces of vegetables and green garnish can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/33/Potato_Puffs.png",
        imgAlt: "A white plate with potato puffs. The puffs look like little pastry tubes with mashed up potato inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/65/Pottage.png",
        imgAlt: "A beige bowl filled with a cream colored soup. In it pieces of vegetables and green garnish can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0e/Pumpkin_Puffs.png",
        imgAlt: "A white plate with pumpkin puffs. The puffs look like little pastry tubes with mashed up pumpkin inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/59/Pumpkin_Soup.png",
        imgAlt: "A gray bowl filled with bright orange soup. In it a white swirl and green garnish can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/de/Pur%C3%A9e.png",
        imgAlt: "A black bowl filled with potato purée. On top of it a little green garnish can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/17/Roasted_Asparagus.png",
        imgAlt: "A rectangular white plate with grilled pieces of green asparagus."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7e/Salad.png",
        imgAlt: "A white square bowl with pieces of mixed lettuce in it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ab/Saut%C3%A9ed_Mushrooms.png",
        imgAlt: "A round black plate with pieces of cut up and sautéed mushrooms."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f0/Seafood_Appetizer.png",
        imgAlt: "A white plate with peeled shrimp placed in a ring around it. In the middle of it lemon and a container of white sauce can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/48/Seafood_Platter.png",
        imgAlt: "A white plate with various pieces of seafood and some pieces of lemon."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e0/Souffl%C3%A9.png",
        imgAlt: "A white ramekin with a browned golden soufflé in it, puffing out like a cloud."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dc/Tomato_Soup.png",
        imgAlt: "A gray round bowl with bright red soup. In the middle a white swirl and some green garnish can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cd/Vegetable_Soup.png",
        imgAlt: "A gray round bowl with bright orange soup. In the middle a white swirl and some green garnish can be seen, along with some orange vegetable pieces."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/61/Zucchini_Puffs.png",
        imgAlt: "A white plate with zucchini puffs. The puffs look like little pastry tubes with mashed up zucchini inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3b/Apple-Cider-Glazed_Salmon.png",
        imgAlt: "A blue oval plate with four salmon fillets, lemon slices and green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/34/Baked_Carp.png",
        imgAlt: "A round white plate with a blue trim. Small potatoes, a whole carp, lemon slices, and some herb garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/09/Basil_Omelet.png",
        imgAlt: "A yellow omelet filled with green herbs, as well as green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9d/Bouillabaisse.png",
        imgAlt: "A gray bowl of orange soup with pieces of seafood and shrimp visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a1/Carp_Salad.png",
        imgAlt: "A square white bowl of mixed lettuce, a piece of fish, and cut up pieces of cherry tomatoes."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/63/Cheesy_Crispy_Baked_Cod.png",
        imgAlt: "A white round plate with a square piece of crispy baked cod, two lemon wedges, and a few pieces of green asparagus."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/95/Chowder.png",
        imgAlt: "A gray bowl of orange soup with pieces of seafood and shrimp visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/16/Creamy_Garlic_Scallops.png",
        imgAlt: "A white shallow bowl with scallops, a white sauced base, and two lime wedges."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1d/Crispy_Baked_Cod.png",
        imgAlt: "A round blue plate with french fries, a big piece of fried fish, two sauce containers, and a few wedges of lemon."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cc/Fish_Creole.png",
        imgAlt: "A round blue bowl with bright red soup. In it pieces of fish, seafood and vegetables can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Fish_%27n%27_Chips.png",
        imgAlt: "A round blue plate with french fries, a big piece of fried fish, two sauce containers, and a few wedges of lemon."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/08/Fish_Pasta.png",
        imgAlt: "A round white bowl of thin spaghetti in a red sauce. Pieces of fish and vegetables are visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ec/Fish_Pie.png",
        imgAlt: "A round dark gray oven dish with two handles on either side. On top a pie lid that looks like mashed potatoes can be seen with green garnish on top."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Fish_Risotto.png",
        imgAlt: "A square bowl with rounded edges filled with creamy risotto. On top a grilled piece of fish with green garnish can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8e/Fish_Salad.png",
        imgAlt: "A square bowl with mixed lettuce, cut up pieces of cherry tomatoes, cheese, corn and a piece of grilled fish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/53/Fish_Sandwiches.png",
        imgAlt: "A round white plate with a burger bun. Inside is a piece of fish, tomato, and lettuce."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/be/Fish_Soup.png",
        imgAlt: "A round white bowl with orange soup. In it pieces of fish and vegetables can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a1/Fish_Steak.png",
        imgAlt: "A round white plate with a piece of grilled fish. Around it are pieces of grilled vegetables, and some herb garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/af/Fish_Tacos.png",
        imgAlt: "A black round plate with some with specs. On it an open taco in a wheat tortilla can be seen. Inside the taco there is shredded vegetables, a fried piece of fish and a white sauce drizzled over. On the side is a lime wedge."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0e/Fugu_Sushi.png",
        imgAlt: "Three pieces of nigiri sushi, rice with white pieces of fish on top, on a wooden raised up board. On each piece of sushi is some green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c8/Ghostly_Fish_Steak.png",
        imgAlt: "A round light blue plate with vegetables, lemon wedges, and a big piece of pink fish. On top is some green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/38/Greek_Pizza.png",
        imgAlt: "A round pizza with pieces of vegetables on it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Grilled_Fish.png",
        imgAlt: "An oval plate with a whole grilled fish, lettuce, and lemon slices."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a5/Grilled_Fish_Entree.png",
        imgAlt: "An oval plate with a whole grilled fish, lettuce, tomatoes, and lemon slices."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/10/Gumbo.png",
        imgAlt: "A round dark bowl of red soup with pieces of seafood, meat, and vegetables visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1a/Hearty_Salad.png",
        imgAlt: "A square bowl of mixed lettuce, corn, and sliced cucumbers."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/92/Hors_d%27Oeuvres.png",
        imgAlt: "A single square cracker with a jagged edge. The cracker has tiny holes in it and some herb garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/29/Kappa_Maki.png",
        imgAlt: "Four pieces of maki sushi on a raised up wooden board. Rice with a piece of cucumber in the middle is wrapped in seaweed."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e6/Kronk%27s_Spinach_Puffs.png",
        imgAlt: "A round white plate of spinach puffs. The puffs look like pastry tubes with mashed up spinach inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/80/Lancetfish_Paella.png",
        imgAlt: "A round brown bowl with rice, and various types of seafood. Two lemon wedges are visible in the bowl."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/39/Leek_Soup.png",
        imgAlt: "A round white bowl of bright green soup. Inside is a white swirl and some green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/33/Lemon_Garlic_Swordfish.png",
        imgAlt: "A round patterned blue plate with piececs of fish, lemon slices and wedges, and green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/79/Lioness_Feast.png",
        imgAlt: "A round white bowl with a pink soup. Inside pieces of vegetables and fish are visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/63/Lobster_Roll.png",
        imgAlt: "A round white plate with three lime wedges and a hot dog bun filled with lobster meat and some herb garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2f/Maguro_Sushi.png",
        imgAlt: "Three pieces of nigiri sushi on a raised up rectangular wooden cutting board. On each piece of sushi is a red piece of fish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/21/Maki.png",
        imgAlt: "Four pieces of maki sushi on a rectangular wooden board. Rice with a piece of cucumber in the middle is wrapped in seaweed."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/Margherita_Pizza.png",
        imgAlt: "A round pizza with tomato sauce, cheese, and herbs."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/50/Marvelous_Jam.png",
        imgAlt: "A round white plate holding a pink sandwich with a light blue jam inbetween."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/73/Mediterranean_Salad.png",
        imgAlt: "A square bowl with mixed lettuce and various vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e9/Mushroom_Pizza.png",
        imgAlt: "A round pizza with tomato sauce, mushrooms, and cheese."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0d/Mushu%27s_Congee.png",
        imgAlt: "A round bowl with congee, rice porridge, and two sunny side up eggs with a piece of bacon forming a smiling face."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/12/Omelet.png",
        imgAlt: "An oval plate with an omelet topped with green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2e/Pan-Fried_Angler_Fish.png",
        imgAlt: "A round bowl holding a blue sauce, pieces of fish, and vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dc/Pan-Seared_Bass_%26_Vegetables.png",
        imgAlt: "A round plate with a big piece of fish on top of a bed of mixed vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a0/Pan-Seared_Tilapia_%26_Vegetables.png",
        imgAlt: "A round white plate with a piece of fish on top of a bed of mixed vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d8/Pasta.png",
        imgAlt: "A round bowl of pasta in a white sauce with some green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/af/Peanut_Butter_Sandwich.png",
        imgAlt: "A round beige plate with a sandwich on it. Inbetween both pieces of bread is peanut butter."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f4/Pizza.png",
        imgAlt: "A round pizza with tomato sauce and cheese."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/43/Poached_Basil-Butter_Sturgeon.png",
        imgAlt: "A square shallow bowl with rounded corners. Inside is a yellow-ish purée and a piece of fish with a black garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5d/Porridge.png",
        imgAlt: "A round brown bowl of white porridge."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/84/Porridge_with_Fruits.png",
        imgAlt: "A round brown bowl of white porridge with mixed fruits in the center."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6c/Ranch_Salad.png",
        imgAlt: "A square bowl of mixed lettuce and a various mix of vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b0/Ratatouille.png",
        imgAlt: "A round white plate with a golden trim. In the middle is some ratatouille, baked eggplant, tomato, onion, and zucchini, with a swirl of light orange sauce around it, and some green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1a/Sake_Maki.png",
        imgAlt: "Four pieces of maki sushi on a raised up wooden board. Rice with a piece of salmon in the middle wrapped in seaweed."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f0/Sake_Sushi.png",
        imgAlt: "Three pieces of nigiri sushi on a raised up wooden board. Pieces of rice with a piece of raw salmon on top."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0e/Savory_Fish.png",
        imgAlt: "An oval plate with a piece of whole grilled fish on top of lettuce and lemon slices."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8b/Scrambled_Egg.png",
        imgAlt: "A round white plate with scrambled eggs, herbs, and green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1a/Seafood_Pasta.png",
        imgAlt: "A round bowl of spaghetti with shrimp and a green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/98/Seafood_Pie.png",
        imgAlt: "A round black oven dish with two handles on either side. A crimped pie lid with four pieces of shrimp in the middle is on top."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/69/Seafood_Salad.png",
        imgAlt: "A square white bowl with mixed lettuce, seafood, and various pieces of vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b3/Seafood_Soup.png",
        imgAlt: "A round gray bowl with orange soup and pieces of vegetables and seafood."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/20/Seared_Rainbow_Trout.png",
        imgAlt: "A round blue plate with two pieces of fish on top of three slices of lemon, with cut up tomatoes and herbs."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b3/Simple_Fried_Perch.png",
        imgAlt: "An oval red plastic fast food container with a red and white checkered piece of parchment paper. Inside are pieces of battered fried fish with two lemon slices and a container with white sauce."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e2/Smoked_Peanuts_and_Anglerfish.png",
        imgAlt: "An oval white plate with a whole grilled fish on top of lettuce and slices of lemons."
    },
    {
        name: "Sole Meunière",
        ingredients: [
            {
                name: "Sole"
            },
            {
                name: "Wheat"
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2e/Sole_Meuni%C3%A8re.png",
        imgAlt: "A round blue plate with various vegetables, a slice of lemon, potatoes and a piece of fish with a green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4d/Spaghetti_Arrabbiata.png",
        imgAlt: "A round white bowl with spaghetti in a red sauce with meatballs and a green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f6/Spicy_Baked_Bream.png",
        imgAlt: "A round gray plate with a piece of fish, tomatoes, cut up vegetables, butter, and green herbs."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bb/Steamed_Fugu.png",
        imgAlt: "A round blue plate with an orange and pink pattern in the middle. On top is a piece of white fish with scattered herbs and some sliced ginger."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6d/Sushi.png",
        imgAlt: "Three pieces of nigiri sushi on a wooden board. Three pieces of rice with a piece of white fish on top."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bb/Sweet_%26_Sour_Kingfish_Steak.png",
        imgAlt: "A round white plate with a big fish steak in orange sauce on top of vegetables and herbs with two lemon wedges on the side."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a6/Sweet_Udon.png",
        imgAlt: "A round gray bowl with a bright pink soup with a blue swirl. Over the bowl on its side are two dark wooden chopsticks."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Tamagoyaki.png",
        imgAlt: "Three pieces of nigiri sushi a raised up wooden board. The three pieces of rice each have a rectangular piece of egg on it that's held in place with a thin piece of seaweed."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/84/Tasty_Salad.png",
        imgAlt: "A square white bowl with mixed lettuce and various vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/87/Tasty_Veggies.png",
        imgAlt: "A round black plate with grilled slices of zucchini and some spinach."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e6/Tekka_Maki.png",
        imgAlt: "Four pieces of maki sushi on a raised up wooden board. Rice with a piece of tuna in the middle wrapped in seaweed."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/61/Teriyaki_Salmon.png",
        imgAlt: "A rectangular white plate with a piece of salmon on top of a green purée. On the side are some mixed vegetables in a little pile."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/00/Tuna_Burger.png",
        imgAlt: "A round white plate with a burger bun. Inside the bun is vegetables, and a fish burger patty."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/83/Vegetarian_Pizza.png",
        imgAlt: "A round pizza with tomato sauce, cheese, and various vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/36/Vegetarian_Stew.png",
        imgAlt: "A round black dish with two handles on either side. Inside in an orange liquid pieces of potato, carrot, and peas can be seen."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/90/Vegetarian_Taco.png",
        imgAlt: "A round black plate with white specs. On top is an open wheat tortilla with vegetables and a drizzle of a red sauce. On the edge of it is a lime wedge."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ad/Veggie_Casserole.png",
        imgAlt: "A white rectangular oven dish with two handles. In it is a veggie casserole with visible pieces of vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4c/Veggie_Pasta.png",
        imgAlt: "A round white bowl with spaghetti in a red sauce. Pieces of vegetables and a green garnish is visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/48/Veggie_Pie.png",
        imgAlt: "A round gray oven dish with two handles on either side. On top is a crimped pie lid with a green garnish."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/db/Veggie_Skewers.png",
        imgAlt: "A rectangular plate with three metal skewers. On each skewer is various vegetables."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2a/Walleye_en_Papillote.png",
        imgAlt: "A round white plate with a piece of fish in parchment paper, with pieces of tomato, lemon slices and wedges, and herbs."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/05/%22My_Hero%22_Cookie.png",
        imgAlt: "A heart shaped cookie with blue icing and pink writing, sprinkles on the edges. Attached to the cookie is a purple ribbon."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fb/Apple_Pie.png",
        imgAlt: "A round golden brown pie with a lattice pie print as a lid."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5b/Apple_Sorbet.png",
        imgAlt: "A dessert glass with a mint green sorbet and sliced apples. A small spoon is sticking out of the sorbet."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f5/Aurora%27s_Cake.png",
        imgAlt: "A round blue plate with a tall white topsy turvy cake with blue frosting. On the top of the cake are twelve pink candles."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/79/Banana_Ice_Cream.png",
        imgAlt: "A small ice cream cone with yellow soft serve ice cream and pieces of banana."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/75/Banana_Pie.png",
        imgAlt: "A round white plate with a small pie. On top is a yellow custard wth white icing sugar around it. On the side of the pie are three slices of banana. On the plate is a fork with a brown handle."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bd/Banana_Split.png",
        imgAlt: "An oval bowl with two handles on the top and bottom. Inside are two pink scoops of ice cream with chocolate sauces and half a sliced banana on either side of it. On top is a big piece of wipped cream, topped with a bright red cherry."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Beignets.png",
        imgAlt: "A round white plate with square beignets topped with powdered sugar."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8d/Berry_Salad.png",
        imgAlt: "A dessert glass filled with blueberries, raspberries and square berries."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e3/Birthday_Cake.png",
        imgAlt: "A square white plate with a square cake. The cake has pink magenta, and purple frosting with star sprinkles and seven red and white striped candles."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f5/Biscuits.png",
        imgAlt: "A round teal plate with bulbous biscuits topped with white icing and a red dot."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/32/Blueberry_Pie.png",
        imgAlt: "A round white plate with a round pie with blueberries in the middle surrounded by powdered sugar. On the sied of it are some blueberries and a fork with a brown handle."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0a/Boba_Tea.png",
        imgAlt: "A tall plastic cup of boba. The tapioca pearls are black and the lid is white with a purple center that has white sparkles on it. A pink straw is inserted into the lid and cup."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1c/Candy.png",
        imgAlt: "Several pieces of wrapped candy. The wrappers are in purple, blue, and red."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c6/Caramel_Apples.png",
        imgAlt: "A rectangular plate with three candied apples. Each apple is covered in caramel with a plastic stick sticking out of them."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Carrot_Cake.png",
        imgAlt: "A round white plate with a slice of carrot cake. The cake has white frosting and a small carrot on the top of it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2d/Cheesecake.png",
        imgAlt: "A round blue plate with a gold trim. On it is a slice of cheesecake with a pink sauce."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/70/Cherry_Pie.png",
        imgAlt: "A round white plate with a round pie. In the middle of it are cherries surrounded by powdered sugar. On the side are some cherries and a fork with a brown handle."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6f/Chocolate_Chip_Cookies.png",
        imgAlt: "A round yellow plate with four chocolate chip cookies."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/41/Chocolate_Ice_Cream.png",
        imgAlt: "A small ice cream cone with brown soft serve ice cream. In it are bits of chocolate."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4d/Chocolate_Waffles.png",
        imgAlt: "A round white plate with a red trim. On it is a Mickey Mouse shaped waffle with a happy face, and some chocolate sauce."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/50/Coconut_Boba_Tea.png",
        imgAlt: "A tall plastic cup of purple boba. The tapioca pearls are black and the lid is white with a purple center that has white sparkles on it. A purple straw is inserted into the lid and cup."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5c/Coconut_Cake.png",
        imgAlt: "A slice of toasted coconut cake with white frosting on a round white plate."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d9/Coconut_Ice_Cream.png",
        imgAlt: "A halved coconut with white ice cream inside, a brown spoon sticking out of it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/62/Crepe.png",
        imgAlt: "A round white plate with two folded crepes covered in chocolate sauce."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c9/Dream_Ice_Cream.png",
        imgAlt: "A small ice cream cone with pink and white soft serve ice cream. The ice cream cone is placed on top of a few purple napkins with glowing sparkles."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Fruit_Salad.png",
        imgAlt: "A dessert glass with cut up pieces of fruit."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/Fruit_Sorbet.png",
        imgAlt: "A white cup filled with a yellow fruit sorbet, two slices of citrus fruits sticking out of it. The cup is placed on top of purple napkins."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/91/Fruitcake.png",
        imgAlt: "A rectangular white plate with a whole fruit cake. On top of it are some multi-colored pieces of fruit."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1d/Gingerbread_House.png",
        imgAlt: "A round white plate with a gingerbread house. The house has two windows, a door, and a chimney. On it are various pieces of candy, and the roof is covered in white icing."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/df/Gooseberry_Boba_Tea.png",
        imgAlt: "A tall plastic cup of pink boba. The tapioca pearls are black and the lid is white with a purple center that has white sparkles on it. A purple straw is inserted into the lid and cup."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/17/Gray_Stuff.png",
        imgAlt: "Three pieces of gray stuff on paper plates. The gray stuff is a chocolate-looking swirl. The top left one is a cupcake with a brown wrapper."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7c/Hot_Cocoa.png",
        imgAlt: "A brown wooden mug with a handle. In the middle of the bug and at the base the wood is lighter. The contents in the mug are a chocolate liquid and three pieces of floating marshmallows."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5d/Ice_Cream.png",
        imgAlt: "A small ice cream cone with white vanilla soft serve ice cream."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/53/Jam_Waffles.png",
        imgAlt: "A round white plate with a red trim. On the plate is a Mickey Mouse shaped waffle with a red sauce drizzled over."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d8/Lemon_Sorbet.png",
        imgAlt: "A green popsicle on a gray popsicle stick."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/54/Meringue_Pie.png",
        imgAlt: "A round pie with torched meringue on top."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ac/Minnie%27s_Gingerbread_Cookies.png",
        imgAlt: "A round white plate with Mickey Mouse shaped gingerbread cookies with icing. Some of it make up a smiling face on each cookie."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Mint_Boba_Tea.png",
        imgAlt: "A tall cup of green boba with black tapioca pearls. The lid is white with a purple circle. On top are white sparkles, and a purple straw is going through the lid into the cup."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7a/Mint_Candy.png",
        imgAlt: "Three pieces of round white and red candy with a red dot in the center."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3f/Mint_Chocolate.png",
        imgAlt: "A rectangular piece of chocolate with a turqouise wrapped with some visible foil. On it is a heart, and a mint sprig."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0b/Mint_Sorbet.png",
        imgAlt: "A dessert glass with green sorbet and two mint leaves. A small spoon is sticking out of the sorbet."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ef/Pastry_Cream_and_Fruits.png",
        imgAlt: "A white dessert glass with mixed berries and a dollop of pastry cream, topped with a red cherry."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/de/Pawpsicle.png",
        imgAlt: "A blue cooler with ice, black wheels, and a white inside on the lid. In the ice, three paw print shaped pink popssicles stick out."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/ba/Peanut_Butter_Waffles.png",
        imgAlt: "A round white plate with a red trim. A Mickey Mouse shaped waffle with a smiling face is on it, drizzled in peanut butter."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/16/Plain_Snow_Cones.png",
        imgAlt: "A black stand with six white cones, filled with yellow shaved ice."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bd/Raspberry_Boba_Tea.png",
        imgAlt: "A tall cup of pink boba with black tapioca pearls. The lid is white with a purple circle. On top are white sparkles, and a purple straw is going through the lid into the cup."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fd/Red_Fruit_Pie.png",
        imgAlt: "A round pie with a lattice pie top. Puréed red fruit is seen through the lattice."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/07/Red_Fruit_Sorbet.png",
        imgAlt: "A dessert glass filled with pink sorbet. Three pieces of berries are on the edge of the glass with a spoon sticking out of it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/01/Root_Beer.png",
        imgAlt: "A tall brown glass mug with a handle, inside is a brown liquid and a thick layer of foam. Sticking out of it is a red and white striped straw."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/71/Shake.png",
        imgAlt: "A magenta shaker with a purple lid with gray details. On the front of it is white sparkles on a purple circular background."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/10/Snow_White%27s_Gooseberry_Pie.png",
        imgAlt: "A red oven dish with handles on either side of it. Inside is a crimped pie lid with a cut out pattern in the center, slightly resembling a sun."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/be/Sour_Snow_Cones.png",
        imgAlt: "A black stand with six white cones filled with yellow shaved ice."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/56/Spring_Chocolate.png",
        imgAlt: "A big chocolate egg with smaller pink eggs around it. It sits on top of some magenta napkins."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8a/Spring_Egg_Bowl.png",
        imgAlt: "A white bowl filled with pink eggs."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ec/Spring_Mimosa_Eggs.png",
        imgAlt: "A rectangular plate with multi-colored egg halves in the colors yellow, pink and blue."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a4/Sweet_Slush.png",
        imgAlt: "A white cup filled with blue shaved ice. "
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/85/Tropical_Pop.png",
        imgAlt: "An orange popsicle with a brown popsicle stick sticking into it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/15/Vanilla_Ice_Cream.png",
        imgAlt: "A small ice cream cone with white vanilla soft serve."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e8/Waffles.png",
        imgAlt: "A round white plate with a red trim. On it is a Mickey Mouse shaped waffle with a smiling face."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6f/Wedding_Cake.png",
        imgAlt: "A multi-tiered white wedding cake with pink frosting and a pink heart topper."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/46/Whimsical_Pie.png",
        imgAlt: "A round pie with a lattice pie lid. Inside is a glowing pink filling."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Wonderland_Cookies.png",
        imgAlt: "A glass cup of cookies in various shapes. On them are multi-colored icing with different messages."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Yule_Log.png",
        imgAlt: "A cylinder shaped chocolate dessert that looks like a log when cut into, showing its white frsoting. On it are some red berries as decoration."
    }
]

export {appetizers,entrees,desserts};