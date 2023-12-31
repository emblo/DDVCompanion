//Ingredients of various categories in DDV
//Harvestable crops
const crops = [
    {
        name: "Asparagus",
        growTime: "2h 15m",
        yield: 3,
        sellPrice: 133,
        energy: 42,
        seedLocation: "Frosted Heights",
        imgSrc: "https://dreamlightvalleywiki.com/images/4/45/Asparagus.png",
        imgAlt: "A bunch of green asparagus being held together by a rubber band."
    },
    {
        name: "Bell Pepper",
        growTime: "15m",
        yield: 1,
        sellPrice: 33,
        energy: 79,
        seedLocation: "Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e2/Bell_Pepper.png",
        imgAlt: "A red bell pepper with a green top."
    },
    {
        name: "Carrot",
        growTime: "15m",
        yield: 1,
        sellPrice: 44,
        energy: 57,
        seedLocation: "Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c3/Carrot.png",
        imgAlt: "A single carrot with a green top."
    },
    {
        name: "Chili Pepper",
        growTime: "45m",
        yield: 1,
        sellPrice: 78,
        energy: 140,
        seedLocation: "Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ab/Chili_Pepper.png",
        imgAlt: "A plate of several red chili peppers."
    },
    {
        name: "Cucumber",
        growTime: "1h 15m",
        yield: 1,
        sellPrice: 159,
        energy: 145,
        seedLocation: "Frosted Heights",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/59/Cucumber.png",
        imgAlt: "A long green cucumber."
    },
    {
        name: "Eggplant",
        growTime: "3h",
        yield: 1,
        sellPrice: 308,
        energy: 451,
        seedLocation: "Frosted Heights",
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Eggplant.png",
        imgAlt: "A big purple eggplant with a green top."
    },
    {
        name: "Leek",
        growTime: "2h",
        yield: 1,
        sellPrice: 309,
        energy: 228,
        seedLocation: "Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/57/Leek.png",
        imgAlt: "A single leek with a white base and green end."
    },
    {
        name: "Lettuce",
        growTime: "3m",
        yield: 1,
        sellPrice: 8,
        energy: 56,
        seedLocation: "Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/da/Lettuce.png",
        imgAlt: "A big head of green lettuce."
    },
    {
        name: "Okra",
        growTime: "2h",
        yield: 3,
        sellPrice: 114,
        energy: 31,
        seedLocation: "Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e7/Okra.png",
        imgAlt: "A wooden box filled with green okra."
    },
    {
        name: "Onion",
        growTime: "1h 15m",
        yield: 1,
        sellPrice: 170,
        energy: 146,
        seedLocation: "Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/51/Onion.png",
        imgAlt: "A yellow onion with the skin still on."
    },
    {
        name: "Potato",
        growTime: "35m",
        yield: 1,
        sellPrice: 126,
        energy: 113,
        seedLocation: "Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c2/Potato.png",
        imgAlt: "An unpeeled big potato."
    },
    {
        name: "Pumpkin",
        growTime: "4h",
        yield: 1,
        sellPrice: 664,
        energy: 187,
        seedLocation: "Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/64/Pumpkin.png",
        imgAlt: "An orange pumpkin without its leaves but the green stem still intact."
    },
    {
        name: "Spinach",
        growTime: "1h",
        yield: 3,
        sellPrice: 41,
        energy: 60,
        seedLocation: "Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/60/Spinach.png",
        imgAlt: "A bunch of spinach held together with a rubber band."
    },
    {
        name: "Tomato",
        growTime: "25m",
        yield: 3,
        sellPrice: 22,
        energy: 21,
        seedLocation: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9d/Tomato.png",
        imgAlt: "A red tomato with the green top still attached."
    },
    {
        name: "Zucchini",
        growTime: "40m",
        yield: 2,
        sellPrice: 52,
        energy: 48,
        seedLocation: "Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f6/Zucchini.png",
        imgAlt: "A light green zucchini with dark green vertical stripes."
    },
    {
        name: "Canola",
        growTime: "35m",
        yield: 1,
        sellPrice: 109,
        energy: 59,
        seedLocation: "Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/7/79/Canola.png",
        imgAlt: "A single stem of canola with a bunch of yellow flowers attached to it."
    },
    {
        name: "Corn",
        growTime: "12m",
        yield: 2,
        sellPrice: 16,
        energy: 30,
        seedLocation: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f8/Corn.png",
        imgAlt: "An ear of corn with some of the green husk still attached."
    },
    {
        name: "Rice",
        growTime: "50m",
        yield: 2,
        sellPrice: 61,
        energy: 59,
        seedLocation: "Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/da/Rice.png",
        imgAlt: "Two stems of white rice."
    },
    {
        name: "Soya",
        growTime: "1h 30m",
        yield: 3,
        sellPrice: 69,
        energy: 58,
        seedLocation: "Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/0/00/Soya.png",
        imgAlt: "A bunch of soya in a brown bowl."
    },
    {
        name: "Sugarcane",
        growTime: "7m",
        yield: 1,
        sellPrice: 19,
        energy: 46,
        seedLocation: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/0/03/Sugarcane.png",
        imgAlt: "A bunch of sugarcane held together by twine."
    },
    {
        name: "Wheat",
        growTime: "1m",
        yield: 2,
        sellPrice: 2,
        energy: 19,
        seedLocation: "Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e2/Wheat.png",
        imgAlt: "Four pieces of wheat, still attached to their stems."
    }
]

//Fruit from bushes and trees
const fruit = [
    {
        name: "Apple",
        growTime: "20m",
        yield: 3,
        sellPrice: 25,
        energy: 300,
        location: "Plaza, Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7d/Apple.png",
        imgAlt: "A shiny red apple with the steam and a small green leaf."
    },
    {
        name: "Banana",
        growTime: "23m",
        yield: 3,
        sellPrice: 29,
        energy: 350,
        location: "Peaceful Meadow, Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/69/Banana.png",
        imgAlt: "A single yellow banana with a small brown stem at the top."
    },
    {
        name: "Blueberry",
        growTime: "23m",
        yield: 3,
        sellPrice: 29,
        energy: 350,
        location: "Dazzle Beach, Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Blueberry.png",
        imgAlt: "A small cardboard box of blueberries."
    },
    {
        name: "Cherry",
        growTime: "33m",
        yield: 3,
        sellPrice: 42,
        energy: 500,
        location: "Frosted Heights, Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/20/Cherry.png",
        imgAlt: "A bunch of seven red cherries held together by their stems."
    },
    {
        name: "Cocoa Bean",
        growTime: "30m",
        yield: 3,
        sellPrice: 38,
        energy: 450,
        location: "Glade of Trust, Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/24/Cocoa_Bean.png",
        imgAlt: "A big brown unopened cocoa bean."
    },
    {
        name: "Coconut",
        growTime: "33m",
        yield: 3,
        sellPrice: 42,
        energy: 500,
        location: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2f/Coconut.png",
        imgAlt: "A cracked open coconut, showing the brown fibery husk as well as the white inside."
    },
    {
        name: "Coffee Bean",
        growTime: "40m",
        yield: 3,
        sellPrice: 36,
        energy: 425,
        location: "Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/3/33/Coffee_Bean.png",
        imgAlt: "A small paper bag filled with brown coffee beans."
    },
    {
        name: "Dreamlight Fruit",
        growTime: "24h",
        yield: 3,
        sellPrice: 40,
        energy: 500,
        location: "Sunlit Plateau, Glade of Trust, Frosted Heights, Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6a/Dreamlight_Fruit.png",
        imgAlt: "A dragonfruit-like pink fruit with blue tops."
    },
    {
        name: "Gooseberry",
        growTime: "40",
        yield: 3,
        sellPrice: 50,
        energy: 600,
        location: "Frosted Heights, Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d2/Gooseberry.png",
        imgAlt: "A wooden box filled with pink gooseberries."
    },
    {
        name: "Lemon",
        growTime: "27m",
        yield: 3,
        sellPrice: 33,
        energy: 400,
        location: "Forest of Valor, Glade of Trust",
        imgSrc: "https://dreamlightvalleywiki.com/images/3/35/Lemon.png",
        imgAlt: "A single shiny whole lemon."
    },
    {
        name: "Raspberry",
        growTime: "17m",
        yield: 3,
        sellPrice: 21,
        energy: 250,
        location: "Plaza, Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1f/Raspberry.png",
        imgAlt: "A wooden box filled with pink raspberries."
    }
]

//Spices and herbs that can be picked
const spicesAndHerbs = [
    {
        name: "Oregano",
        sellPrice: 20,
        energy: 95,
        location: "Plaza",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e3/Oregano.png",
        imgAlt: "Two sprigs of fresh oregano."
    },
    {
        name: "Basil",
        sellPrice: 25,
        energy: 100,
        location: "Peaceful Meadow",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6e/Basil.png",
        imgAlt: "A sprig of fresh basil."
    }, 
    {
        name: "Mint",
        sellPrice: 80,
        energy: 155,
        location: "Frosted Heights",
        imgSrc: "https://dreamlightvalleywiki.com/images/1/13/Mint.png",
        imgAlt: "A sprig of fresh mint."
    },
    {
        name: "Mushroom",
        sellPrice: 30,
        energy: 105,
        location: "Glade of Trust, also drops when watering Mushroom Patches.",
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8c/Mushroom.png",
        imgAlt: "A blue plastic container filled with white mushrooms."
    },
    {
        name: "Garlic",
        sellPrice: 60,
        energy: 135,
        location: "Forest of Valor",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cc/Garlic.png",
        imgAlt: "Three bulbs of garlic, all unpeeled."
    },
    {
        name: "Ginger",
        sellPrice: 100,
        energy: 175,
        location: "Forgotten Lands",
        imgSrc: "https://dreamlightvalleywiki.com/images/8/85/Ginger.png",
        imgAlt: "A knob of unpeeled ginger."
    },
    {
        name: "Vanilla",
        sellPrice: 60,
        energy: 135,
        location: "Sunlit Plateau",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d5/Vanilla.png",
        imgAlt: "A few vanilla stems held together with twine."
    }
]

//Seafood that is foraged
const seafood = [
    {
        name: "Clam",
        sellPrice: 45,
        energy: 120,
        location: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ed/Clam.png",
        imgAlt: "A closed pink clam with very fine lines on the shell."
    },
    {
        name: "Oyster",
        sellPrice: 250,
        energy: 250,
        location: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/54/Oyster.png",
        imgAlt: "A thick closed oyster, dark blue in color with very fine lines on the shell."
    },
    {
        name: "Scallop",
        sellPrice: 50,
        energy: 125,
        location: "Dazzle Beach",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cf/Scallop.png",
        imgAlt: "A closed bright blue clam with pronounced ridges that are darker in color on the shell."
    }
]

//Ingredients that can be bought from Chez Remy
const remy = [
    {
        name: "Butter",
        sellPrice: 190,
        energy: 285,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f1/Butter.png",
        imgAlt: "A big rectangular piece of butter on a bright blue plate."
    },
    {
        name: "Cheese",
        sellPrice: 180,
        energy: 270,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a5/Cheese.png",
        imgAlt: "A wedge of yellow cheese with holes in it."
    },
    {
        name: "Egg",
        sellPrice: 220,
        energy: 330,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/26/Egg.png",
        imgAlt: "A cardboard carton of ten eggs."
    },
    {
        name: "Milk",
        sellPrice: 230,
        energy: 345,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/92/Milk.png",
        imgAlt: "A white carton of milk with black cow-like spots on it and a cow symbol on the top."
    },
    {
        name: "Peanut",
        sellPrice: 200,
        energy: 300,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f6/Peanut.png",
        imgAlt: "A brown paper bag filled with whole peanuts."
    },
    {
        name: "Slush Ice",
        sellPrice: 150,
        energy: 225,
        location: "Chez Remy",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c0/Slush_Ice.png",
        imgAlt: "Blue shaved ice in a gray paper cone."
    }
]

export {crops,fruit,spicesAndHerbs,seafood,remy};