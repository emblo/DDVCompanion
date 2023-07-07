const crops = [
    {
        name: "Asparagus",
        growTime: "2h 15m",
        yield: 3,
        sellPrice: 133,
        energy: 42,
        seedLocation: "Frosted Heights",
        imgSrc: "https://dreamlightvalleywiki.com/images/4/45/Asparagus.png"
    },
    {
        name: "Bell Pepper",
        growTime: "15m",
        yield: 1,
        sellPrice: 33,
        energy: 79,
        seedLocation: "Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e2/Bell_Pepper.png"
    },
    {
        name: "Carrot",
        growTime: "15m",
        yield: 1,
        sellPrice: 44,
        energy: 57,
        seedLocation: "Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c3/Carrot.png"
    },
    {
        name: "Chili Pepper",
        growTime: "45m",
        yield: 1,
        sellPrice: 78,
        energy: 140,
        seedLocation: "Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ab/Chili_Pepper.png"
    },
    {
        name: "Cucumber",
        growTime: "1h 15m",
        yield: 1,
        sellPrice: 159,
        energy: 145,
        seedLocation: "Frosted Heights",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/59/Cucumber.png"
    },
    {
        name: "Eggplant",
        growTime: "3h",
        yield: 1,
        sellPrice: 308,
        energy: 451,
        seedLocation: "Frosted Heights",
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Eggplant.png"
    },
    {
        name: "Leek",
        growTime: "2h",
        yield: 1,
        sellPrice: 309,
        energy: 228,
        seedLocation: "Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/57/Leek.png"
    },
    {
        name: "Lettuce",
        growTime: "3m",
        yield: 1,
        sellPrice: 8,
        energy: 56,
        seedLocation: "Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/da/Lettuce.png"
    },
    {
        name: "Okra",
        growTime: "2h",
        yield: 3,
        sellPrice: 114,
        energy: 31,
        seedLocation: "Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e7/Okra.png"
    },
    {
        name: "Onion",
        growTime: "1h 15m",
        yield: 1,
        sellPrice: 170,
        energy: 146,
        seedLocation: "Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/51/Onion.png"
    },
    {
        name: "Potato",
        growTime: "35m",
        yield: 1,
        sellPrice: 126,
        energy: 113,
        seedLocation: "Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c2/Potato.png"
    },
    {
        name: "Pumpkin",
        growTime: "4h",
        yield: 1,
        sellPrice: 664,
        energy: 187,
        seedLocation: "Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/64/Pumpkin.png"
    },
    {
        name: "Spinach",
        growTime: "1h",
        yield: 3,
        sellPrice: 41,
        energy: 60,
        seedLocation: "Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/60/Spinach.png"
    },
    {
        name: "Tomato",
        growTime: "25m",
        yield: 3,
        sellPrice: 22,
        energy: 21,
        seedLocation: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9d/Tomato.png"
    },
    {
        name: "Zucchini",
        growTime: "40m",
        yield: 2,
        sellPrice: 52,
        energy: 48,
        seedLocation: "Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f6/Zucchini.png"
    },
    {
        name: "Canola",
        growTime: "35m",
        yield: 1,
        sellPrice: 109,
        energy: 59,
        seedLocation: "Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/7/79/Canola.png"
    },
    {
        name: "Corn",
        growTime: "12m",
        yield: 2,
        sellPrice: 16,
        energy: 30,
        seedLocation: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f8/Corn.png"
    },
    {
        name: "Rice",
        growTime: "50m",
        yield: 2,
        sellPrice: 61,
        energy: 59,
        seedLocation: "Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/da/Rice.png"
    },
    {
        name: "Soya",
        growTime: "1h 30m",
        yield: 3,
        sellPrice: 69,
        energy: 58,
        seedLocation: "Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/0/00/Soya.png"
    },
    {
        name: "Sugarcane",
        growTime: "7m",
        yield: 1,
        sellPrice: 19,
        energy: 46,
        seedLocation: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/0/03/Sugarcane.png"
    },
    {
        name: "Wheat",
        growTime: "1m",
        yield: 2,
        sellPrice: 2,
        energy: 19,
        seedLocation: "Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e2/Wheat.png"
    }
]

const fruit = [
    {
        name: "Apple",
        growTime: "20m",
        yield: 3,
        sellPrice: 25,
        energy: 300,
        location: "Plaza, Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7d/Apple.png"
    },
    {
        name: "Banana",
        growTime: "23m",
        yield: 3,
        sellPrice: 29,
        energy: 350,
        location: "Peaceful Meadow, Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/69/Banana.png"
    },
    {
        name: "Blueberry",
        growTime: "23m",
        yield: 3,
        sellPrice: 29,
        energy: 350,
        location: "Dazzle Beach, Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Blueberry.png"
    },
    {
        name: "Cherry",
        growTime: "33m",
        yield: 3,
        sellPrice: 42,
        energy: 500,
        location: "Frosted Heights, Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/20/Cherry.png"
    },
    {
        name: "Cocoa Bean",
        growTime: "30m",
        yield: 3,
        sellPrice: 38,
        energy: 450,
        location: "Glade of Trust, Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/24/Cocoa_Bean.png"
    },
    {
        name: "Coconut",
        growTime: "33m",
        yield: 3,
        sellPrice: 42,
        energy: 500,
        location: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2f/Coconut.png"
    },
    {
        name: "Coffee Bean",
        growTime: "40m",
        yield: 3,
        sellPrice: 36,
        energy: 425,
        location: "Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/3/33/Coffee_Bean.png"
    },
    {
        name: "Dreamlight Fruit",
        growTime: "24h",
        yield: 3,
        sellPrice: 40,
        energy: 500,
        location: "Sunlit Plateau, Glade of Trust, Frosted Heights, Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6a/Dreamlight_Fruit.png"
    },
    {
        name: "Gooseberry",
        growTime: "40",
        yield: 3,
        sellPrice: 50,
        energy: 600,
        location: "Frosted Heights, Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d2/Gooseberry.png"
    },
    {
        name: "Lemon",
        growTime: "27m",
        yield: 3,
        sellPrice: 33,
        energy: 400,
        location: "Forest of Valor, Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/3/35/Lemon.png"
    },
    {
        name: "Raspberry",
        growTime: "17m",
        yield: 3,
        sellPrice: 21,
        energy: 250,
        location: "Plaza, Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1f/Raspberry.png"
    }
]

const spicesAndHerbs = [
    {
        name: "Oregano",
        sellPrice: 20,
        energy: 95,
        location: "Plaza",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e3/Oregano.png"
    },
    {
        name: "Basil",
        sellPrice: 25,
        energy: 100,
        location: "Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6e/Basil.png"
    }, 
    {
        name: "Mint",
        sellPrice: 80,
        energy: 155,
        location: "Frosted Heights",
        imgSrc: "https://dreamlightvalleywiki.com/images/1/13/Mint.png"
    },
    {
        name: "Mushroom",
        sellPrice: 30,
        energy: 105,
        location: "Glade of Trust, also drops when watering Mushroom Patches.",
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8c/Mushroom.png"
    },
    {
        name: "Garlic",
        sellPrice: 60,
        energy: 135,
        location: "Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cc/Garlic.png"
    },
    {
        name: "Ginger",
        sellPrice: 100,
        energy: 175,
        location: "Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/8/85/Ginger.png"
    },
    {
        name: "Vanilla",
        sellPrice: 60,
        energy: 135,
        location: "Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d5/Vanilla.png"
    }
]

const seafood = [
    {
        name: "Clam",
        sellPrice: 45,
        energy: 120,
        location: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ed/Clam.png"
    },
    {
        name: "Oyster",
        sellPrice: 250,
        energy: 250,
        location: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/54/Oyster.png"
    },
    {
        name: "Scallop",
        sellPrice: 50,
        energy: 125,
        location: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cf/Scallop.png"
    }
]

const remy = [
    {
        name: "Butter",
        sellPrice: 190,
        energy: 285,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f1/Butter.png"
    },
    {
        name: "Cheese",
        sellPrice: 180,
        energy: 270,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a5/Cheese.png"
    },
    {
        name: "Egg",
        sellPrice: 220,
        energy: 330,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/26/Egg.png"
    },
    {
        name: "Milk",
        sellPrice: 230,
        energy: 345,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/92/Milk.png"
    },
    {
        name: "Peanut",
        sellPrice: 200,
        energy: 300,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f6/Peanut.png"
    },
    {
        name: "Slush Ice",
        sellPrice: 150,
        energy: 225,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c0/Slush_Ice.png"
    }
]