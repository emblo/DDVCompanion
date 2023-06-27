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
    }
]

//Enchantments
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
    }
]

//Paving
let paving = [
    {
        name: "Asphalt",
        materials: [
            {
                name: "Sand",
                amount: 1,
            },
            {
                name: "Pebbles",
                amount: 1
            },
            {
                name: "Coal Ore",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/d/d7/Asphalt.png/150px-Asphalt.png"
    },
    {
        name: "Asphalt with Border",
        materials: [
            {
                name: "Sand",
                amount: 1,
            },
            {
                name: "Pebbles",
                amount: 1
            },
            {
                name: "Coal Ore",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/47/Asphalt_with_Border.png/150px-Asphalt_with_Border.png"
    },
    {
        name: "Brick Road",
        materials: [
            {
                name: "Stone",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/9/92/Brick_Road.png/150px-Brick_Road.png"
    },
    {
        name: "Brick Road with Border",
        materials: [
            {
                name: "Stone",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/3/3d/Brick_Road_with_Border.png/150px-Brick_Road_with_Border.png"
    },
    {
        name: "Deluxe Sugar Cookie Pavement",
        materials: [
            {
                name: "Candy",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/4b/Deluxe_Sugar_Cookie_Pavement.png/150px-Deluxe_Sugar_Cookie_Pavement.png"
    },
    {
        name: "Gem & Opal Road",
        materials: [
            {
                name: "Stone",
                amount: 1
            },
            {
                name: "Aquamarine",
                amount: 1
            },
            {
                name: "Tourmaline",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/d/d5/Gem_%26_Opal_Road.png/150px-Gem_%26_Opal_Road.png"
    },
    {
        name: "Gem & Opal Road with Border",
        materials: [
            {
                name: "Stone",
                amount: 1
            },
            {
                name: "Aquamarine",
                amount: 1
            },
            {
                name: "Tourmaline",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/4e/Gem_%26_Opal_Road_with_Border.png/150px-Gem_%26_Opal_Road_with_Border.png"
    },
    {
        name: "Gold & Opal Road",
        materials: [
            {
                name: "Stone",
                amount: 1,
            },
            {
                name: "Gold Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/45/Gold_%26_Opal_Road.png/150px-Gold_%26_Opal_Road.png"
    },
    {
        name: "Gold & Opal Road with Border",
        materials: [
            {
                name: "Stone",
                amount: 1
            },
            {
                name: "Gold Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/c/ce/Gold_%26_Opal_Road_with_Border.png/150px-Gold_%26_Opal_Road_with_Border.png"
    },
    {
        name: "Golden Brick Road",
        materials: [
            {
                name: "Gold Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/21/Golden_Brick_Road.png/150px-Golden_Brick_Road.png"
    },
    {
        name: "Golden Brick Road with Border",
        materials: [
            {
                name: "Gold Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/f/f4/Golden_Brick_Road_with_Border.png/150px-Golden_Brick_Road_with_Border.png"
    },
    {
        name: "Leaf-Strewn Path",
        materials: [
            {
                name: "Hardwood",
                amount: 1
            },
            {
                name: "Soil",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/f/f2/Leaf-Strewn_Path.png/150px-Leaf-Strewn_Path.png"
    },
    {
        name: "Leaf-Strewn Path with Border",
        materials: [
            {
                name: "Hardwood",
                amount: 1
            },
            {
                name: "Soil",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/2b/Leaf-Strewn_Path_with_Border.png/150px-Leaf-Strewn_Path_with_Border.png"
    },
    {
        name: "Loose Gravel Path",
        materials: [
            {
                name: "Soil",
                amount: 1
            },
            {
                name: "Pebbles",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/d/d4/Loose_Gravel_Path.png/150px-Loose_Gravel_Path.png"
    },
    {
        name: "Loose Gravel Path with Border",
        materials: [
            {
                name: "Soil",
                amount: 1
            },
            {
                name: "Pebbles",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/8/82/Loose_Gravel_Path_with_Border.png/150px-Loose_Gravel_Path_with_Border.png"
    },
    {
        name: "Muddy Path",
        materials: [
            {
                name: "Soil",
                amount: 1
            },
            {
                name: "Hardwood",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/e/e6/Muddy_Path.png/150px-Muddy_Path.png"
    },
    {
        name: "Muddy Path with Border",
        materials: [
            {
                name: "Soil",
                amount: 1
            },
            {
                name: "Hardwood",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/45/Muddy_Path_with_Border.png/150px-Muddy_Path_with_Border.png"
    },
    {
        name: "Natural Rock Path",
        materials: [
            {
                name: "Pebbles",
                amount: 1
            },
            {
                name: "Sand",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/28/Natural_Rock_Path.png/150px-Natural_Rock_Path.png"
    },
    {
        name: "Natural Rock Path with Border",
        materials: [
            {
                name: "Pebbles",
                amount: 1
            },
            {
                name: "Sand",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/2e/Natural_Rock_Path_with_Border.png/150px-Natural_Rock_Path_with_Border.png"
    },
    {
        name: "Sinister Brick Road",
        materials: [
            {
                name: "Stone",
                amount: 1
            },
            {
                name: "Soil",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/1/19/Sinister_Brick_Road.png/150px-Sinister_Brick_Road.png"
    },
    {
        name: "Sinister Brick Road with Border",
        materials: [
            {
                name: "Stone",
                amount: 1
            },
            {
                name: "Soil",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b4/Sinister_Brick_Road_with_Border.png/150px-Sinister_Brick_Road_with_Border.png"
    },
    {
        name: "Snowy Brick Road",
        materials: [
            {
                name: "Stone",
                amount: 1
            },
            {
                name: "Snowball",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/9/96/Snowy_Brick_Road.png/150px-Snowy_Brick_Road.png"
    },
    {
        name: "Snowy Brick Road with Border",
        materials: [
            {
                name: "Stone",
                amount: 1
            },
            {
                name: "Snowball",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/8/84/Snowy_Brick_Road_with_Border.png/150px-Snowy_Brick_Road_with_Border.png"
    },
    {
        name: "Sugar Cookie Pavement",
        materials: [
            {
                name: "Candy",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/0/05/Sugar_Cookie_Pavement.png/150px-Sugar_Cookie_Pavement.png"
    },
    {
        name: "Sun-Baked Earthen Road",
        materials: [
            {
                name: "Soil",
                amount: 1
            },
            {
                name: "Clay",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/c/c1/Sun-Baked_Earthen_Road.png/150px-Sun-Baked_Earthen_Road.png"
    },
    {
        name: "Sun-Baked Earthen Road with Border",
        materials: [
            {
                name: "Soil",
                amount: 1
            },
            {
                name: "Clay",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/0/0f/Sun-Baked_Earthen_Road_with_Border.png/150px-Sun-Baked_Earthen_Road_with_Border.png"
    }
]

//Fences
let fences = [
    {
        name: "Dark Wire Mesh Fence -- Base",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5a/Dark_Wire_Mesh_Fence.png"
    },
    {
        name: "Dark Wood Fence -- Base",
        materials: [
            {
                name: "Dark Wood",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/ba/Dark_Wood_Fence.png"
    },
    {
        name: "Green Bamboo Fence -- Base",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1d/Green_Bamboo_Fence.png"
    },
    {
        name: "Iron Spike and Brick Fence -- Base",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2
            },
            {
                name: "Brick",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Iron_Spike_and_Brick_Fence.png"
    },
    {
        name: "Metal Spike Fence -- Base",
        materials: [
            {
                name: "Brick",
                amount: 2
            },
            {
                name: "Iron Ingot",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e7/Metal_Spike_Fence.png"
    },
    {
        name: "White Bamboo Fence -- Base",
        materials: [
            {
                name: "Softwood",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b4/White_Bamboo_Fence.png"
    },
    {
        name: "White Picket Fence -- Base",
        materials: [
            {
                name: "Softwood",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/White_Picket_Fence_-_Base.png"
    },
    {
        name: "Wire Mesh Fence -- Base",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c0/Wire_Mesh_Fence.png"
    }
]

/*

    {
        name: "",
        materials: [
            {
                name: "",
                amount: 0
            }
        ],
        sellPrice: 0,
        imgSrc: ""
    },

*/