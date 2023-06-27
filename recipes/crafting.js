//Array of objects holding information for crafting recipes
//Refined materials
let refinedMaterials = [
    {
        name: "Brick",
        materials: [
            {
                name: "Clay",
                amount: 5,
            },
            {
                name: "Coal Ore",
                amount: 1
            }
        ],
        sellPrice: 130,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/58/Brick.png"
    },
    {
        name: "Empty Vial",
        materials: [
            {
                name: "Glass",
                amount: 3,
            }
        ],
        sellPrice: 180,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Empty_Vial.png"
    },
    {
        name: "Fabric",
        materials: [
            {
                name: "Cotton",
                amount: 5,
            }
        ],
        sellPrice: 220,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Fabric.png"
    },
    {
        name: "Fiber",
        materials: [
            {
                name: "Seaweed",
                amount: 1,
            }
        ],
        sellPrice: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/45/Fiber.png"
    },
    {
        name: "Glass",
        materials: [
            {
                name: "Sand",
                amount: 5,
            },
            {
                name: "Coal Ore",
                amount: 1
            }
        ],
        sellPrice: 50,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/15/Glass.png"
    },
    {
        name: "Gold Ingot",
        materials: [
            {
                name: "Gold Nugget",
                amount: 5,
            },
            {
                name: "Coal Ore",
                amount: 1
            }
        ],
        sellPrice: 130,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Gold_Ingot.png"
    },
    {
        name: "Iron Ingot",
        materials: [
            {
                name: "Iron Ore",
                amount: 5,
            },
            {
                name: "Coal Ore",
                amount: 1
            }
        ],
        sellPrice: 70,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0a/Iron_Ingot.png"
    },
    {
        name: "Night Shard",
        materials: [
            {
                name: "Onyx",
                amount: 1,
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ef/Night_Shard.png"
    },
    {
        name: "Rope",
        materials: [
            {
                name: "Fiber",
                amount: 8,
            }
        ],
        sellPrice: 60,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b4/Rope.png"
    },
    {
        name: "Seaweed",
        materials: [
            {
                name: "Red Algae",
                amount: 1,
            }
        ],
        sellPrice: 20,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/13/Seaweed.png"
    },
    {
        name: "Soil",
        materials: [
            {
                name: "Rich Soil",
                amount: 1,
            }
        ],
        sellPrice: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/42/Soil.png"
    },
    {
        name: "Tinkering parts",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2,
            }
        ],
        sellPrice: 170,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fe/Tinkering_Parts.png"
    },
]

let enchantments = [
    {
        name: "Digging Training Manual",
        materials: [
            {
                name: "Dreamlight",
                amount: 5000,
            },
            {
                name: "Pebbles",
                amount: 20
            },
            {
                name: "Sand",
                amount: 20
            },
            {
                name: "Soil",
                amount: 30
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/58/Digging_Training_Manual.png"
    },
    {
        name: "Even More Miraculous Fishing Bait",
        materials: [
            {
                name: "Vitalys Crystal",
                amount: 20,
            },
            {
                name: "Red Algae",
                amount: 10
            },
            {
                name: "Dreamlight",
                amount: 1000
            }
        ],
        sellPrice: 3500,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bf/Even_More_Miraculous_Fishing_Bait.png"
    },
    {
        name: "Even More Miraculous Growth Elixir",
        materials: [
            {
                name: "Vitalys Crystal",
                amount: 20,
            },
            {
                name: "Rich Soil",
                amount: 20
            },
            {
                name: "Dreamlight",
                amount: 1000
            }
        ],
        sellPrice: 1300,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/90/Even_More_Miraculous_Growth_Elixir.png"
    },
    {
        name: "Even More Miraculous Pickaxe Polish",
        materials: [
            {
                name: "Vitalys Crystal",
                amount: 20,
            },
            {
                name: "Onyx",
                amount: 10
            },
            {
                name: "Dreamlight",
                amount: 1000
            }
        ],
        sellPrice: 5700,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Even_More_Miraculous_Pickaxe_Polish.png"
    },
    {
        name: "Even More Miraculous Shovel Varnish",
        materials: [
            {
                name: "Vitalys Crystal",
                amount: 20,
            },
            {
                name: "Dry Wood",
                amount: 20
            },
            {
                name: "Dreamlight",
                amount: 1000
            }
        ],
        sellPrice: 2900,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1f/Even_More_Miraculous_Shovel_Varnish.png"
    },
    {
        name: "Fishing Training Manual",
        materials: [
            {
                name: "Dreamlight",
                amount: 5000,
            },
            {
                name: "Swordfish",
                amount: 2
            },
            {
                name: "Bream",
                amount: 5
            },
            {
                name: "Herring",
                amount: 10
            }

        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ea/Fishing_Training_Manual.png"
    },
    {
        name: "Foraging Training Manual",
        materials: [
            {
                name: "Dreamlight",
                amount: 5000,
            },
            {
                name: "Banana",
                amount: 30
            },
            {
                name: "Blueberry",
                amount: 20
            },
            {
                name: "Basil",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/87/Foraging_Training_Manual.png"
    },
    {
        name: "Gardening Training Manual",
        materials: [
            {
                name: "Dreamlight",
                amount: 5000,
            },
            {
                name: "Corn",
                amount: 40
            },
            {
                name: "Tomato",
                amount: 60
            },
            {
                name: "Carrot",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Gardening_Training_Manual.png"
    },
    {
        name: "Mining Training Manual",
        materials: [
            {
                name: "Dreamlight",
                amount: 5000,
            },
            {
                name: "Topaz",
                amount: 2
            },
            {
                name: "Aquamarine",
                amount: 2
            },
            {
                name: "Peridot",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Mining_Training_Manual.png"
    },
    {
        name: "Miracle Fishing Bait",
        materials: [
            {
                name: "Vitalys Crystal",
                amount: 10,
            },
            {
                name: "Red Algae",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 500
            }
        ],
        sellPrice: 1400,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7a/Miracle_Fishing_Bait.png"
    },
    {
        name: "Miracle Growth Elixir",
        materials: [
            {
                name: "Vitalys Crystal",
                amount: 10,
            },
            {
                name: "Rich Soil",
                amount: 10
            },
            {
                name: "Dreamlight",
                amount: 500
            }
        ],
        sellPrice: 500,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/28/Miracle_Growth_Elixir.png"
    },
    {
        name: "Miracle Pickaxe Polish",
        materials: [
            {
                name: "Vitalys Crystal",
                amount: 10,
            },
            {
                name: "Onyx",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 500
            }
        ],
        sellPrice: 2300,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Miracle_Pickaxe_Polish.png"
    },
    {
        name: "Miracle Shovel Varnish",
        materials: [
            {
                name: "Vitalys Crystal",
                amount: 10,
            },
            {
                name: "Dry Wood",
                amount: 10
            },
            {
                name: "Dreamlight",
                amount: 500
            }
        ],
        sellPrice: 1300,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6f/Miracle_Shovel_Varnish.png"
    },
    {
        name: "Purified Night Shard",
        materials: [
            {
                name: "Night Shard",
                amount: 5,
            },
            {
                name: "Dream Shard",
                amount: 1
            }
        ],
        sellPrice: 70,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e5/Purified_Night_Shard.png"
    },
]

/*

    {
        name: "",
        materials: [
            {
                name: "",
                amount: 1,
            }
        ],
        sellPrice: 1,
        imgSrc: ""
    },

*/