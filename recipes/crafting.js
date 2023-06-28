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
        name: "Dreamlight",
        materials: [
            {
                name: "Dream Shard",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5e/Dreamlight_large.png"
    },
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

//Chests
let chests = [
    //Small Chests
    {
        name: "Small Chest",
        materials: [
            {
                name: "Softwood",
                amount: 25
            },
            {
                name: "Stone",
                amount: 25
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/02/Small_Chest.png"
    },
    {
        name: "Small Blue Chest",
        materials: [
            {
                name: "Softwood",
                amount: 25
            },
            {
                name: "Stone",
                amount: 25
            },
            {
                name: "Blue Falling Penstemon",
                amount: 6
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Small_Blue_Chest.png"
    },
    {
        name: "Small Green Chest",
        materials: [
            {
                name: "Softwood",
                amount: 25
            },
            {
                name: "Stone",
                amount: 25
            },
            {
                name: "Green Rising Penstemon",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Small_Green_Chest.png"
    },
    {
        name: "Small Red Chest",
        materials: [
            {
                name: "Softwood",
                amount: 25
            },
            {
                name: "Stone",
                amount: 25
            },
            {
                name: "Red Falling Penstemon",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ec/Small_Red_Chest.png"
    },
    {
        name: "Small White Chest",
        materials: [
            {
                name: "Softwood",
                amount: 25
            },
            {
                name: "Stone",
                amount: 25
            },
            {
                name: "White Daisy",
                amount: 6
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c2/Small_White_Chest.png"
    },
    {
        name: "Small Yellow Chest",
        materials: [
            {
                name: "Softwood",
                amount: 25
            },
            {
                name: "Stone",
                amount: 25
            },
            {
                name: "Dandelion",
                amount: 6
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d2/Small_Yellow_Chest.png"
    },
    //Medium Chests
    {
        name: "Medium Chest",
        materials: [
            {
                name: "Hardwood",
                amount: 25
            },
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 1000
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d4/Medium_Chest.png"
    },
    {
        name: "Medium Blue Chest",
        materials: [
            {
                name: "Hardwood",
                amount: 25
            },
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 1000
            },
            {
                name: "Blue Star Lily",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fa/Medium_Blue_Chest.png"
    },
    {
        name: "Medium Green Chest",
        materials: [
            {
                name: "Hardwood",
                amount: 25
            },
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 1000
            },
            {
                name: "Green Rising Penstemon",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6d/Medium_Green_Chest.png"
    },
    {
        name: "Medium Red Chest",
        materials: [
            {
                name: "Hardwood",
                amount: 25
            },
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 1000
            },
            {
                name: "Red Bell Flower",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/14/Medium_Red_Chest.png"
    },
    {
        name: "Medium White Chest",
        materials: [
            {
                name: "Hardwood",
                amount: 25
            },
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 1000
            },
            {
                name: "White Marsh Milkweed",
                amount: 6
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cc/Medium_White_Chest.png"
    },
    {
        name: "Medium Yellow Chest",
        materials: [
            {
                name: "Hardwood",
                amount: 25
            },
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 1000
            },
            {
                name: "Sunflower",
                amount: 6
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f2/Medium_Yellow_Chest.png"
    },
    //Large Chests
    {
        name: "Large Chest",
        materials: [
            {
                name: "Dark Wood",
                amount: 25
            },
            {
                name: "Gold Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 5000
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/62/Large_Chest.png"
    },
    {
        name: "Large Blue Chest",
        materials: [
            {
                name: "Dark Wood",
                amount: 25
            },
            {
                name: "Gold Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 5000
            },
            {
                name: "Blue Passion Lily",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/08/Large_Blue_Chest.png"
    },
    {
        name: "Large Green Chest",
        materials: [
            {
                name: "Dark Wood",
                amount: 25
            },
            {
                name: "Gold Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 5000
            },
            {
                name: "Green Passion Lily",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/51/Large_Green_Chest.png"
    },
    {
        name: "Large Red Chest",
        materials: [
            {
                name: "Dark Wood",
                amount: 25
            },
            {
                name: "Gold Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 5000
            },
            {
                name: "Red Nasturtium",
                amount: 6
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ea/Large_Red_Chest.png"
    },
    {
        name: "Large White Chest",
        materials: [
            {
                name: "Dark Wood",
                amount: 25
            },
            {
                name: "Gold Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 5000
            },
            {
                name: "White Impatiens",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/65/Large_White_Chest.png"
    },
    {
        name: "Large Yellow Chest",
        materials: [
            {
                name: "Dark Wood",
                amount: 25
            },
            {
                name: "Gold Ingot",
                amount: 5
            },
            {
                name: "Dreamlight",
                amount: 5000
            },
            {
                name: "Yellow Nasturtium",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Large_Yellow_Chest.png"
    },
]

//Stoves
let stoves = [
    {
        name: "Black Flat-Top Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Glass",
                amount: 3
            },
            {
                name: "Black Passion Lily",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/10/Black_Flat-Top_Stove.png"
    },
    {
        name: "Black Gas Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 12
            },
            {
                name: "Glass",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a6/Black_Gas_Stove.png"
    },
    {
        name: "Gray Flat-Top Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Glass",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/Gray_Flat-Top_Stove.png"
    },
    {
        name: "Gray Gas Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 12
            },
            {
                name: "Glass",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1c/Gray_Gas_Stove.png"
    },
    {
        name: "Pale Gray Flat-Top Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Glass",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1e/Pale_Gray_Flat-Top_Stove.png"
    },
    {
        name: "Pale Gray Gas Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 12
            },
            {
                name: "Glass",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b3/Pale_Gray_Gas_Stove.png"
    },
    {
        name: "Pink Flat-Top Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Glass",
                amount: 3
            },
            {
                name: "Pink Houseleek",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cf/Pink_Flat-Top_Stove.png"
    },
    {
        name: "Pink Gas Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 12
            },
            {
                name: "Glass",
                amount: 2
            },
            {
                name: "Pink Houseleek",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/Pink_Gas_Stove.png"
    },
    {
        name: "White Flat-Top Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Glass",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/04/White_Flat-Top_Stove.png"
    },
    {
        name: "White Gas Stove",
        materials: [
            {
                name: "Iron Ingot",
                amount: 12
            },
            {
                name: "Glass",
                amount: 2
            },
            {
                name: "Black Passion Lily",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f4/White_Gas_Stove.png"
    },
]

//Mannequins
let mannequins = [
    {
        name: "Thoughtful Black Mannequin",
        materials: [
            {
                name: "Softwood",
                amount: 15
            },
            {
                name: "Fiber",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/Thoughtful_Black_Mannequin.png"
    },
    {
        name: "Relaxed Black Mannequin",
        materials: [
            {
                name: "Hardwood",
                amount: 15
            },
            {
                name: "Fiber",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ed/Relaxed_Black_Mannequin.png"
    },
    {
        name: "Hand on Hip Black Mannequin",
        materials: [
            {
                name: "Dry Wood",
                amount: 15
            },
            {
                name: "Fiber",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ea/Hand_on_Hip_Black_Mannequin.png"
    },
    {
        name: "Hesitant White Mannequin",
        materials: [
            {
                name: "Softwood",
                amount: 15
            },
            {
                name: "Fiber",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/09/Hesitant_White_Mannequin.png"
    },
    {
        name: "Relaxed White Mannequin",
        materials: [
            {
                name: "Hardwood",
                amount: 15
            },
            {
                name: "Fiber",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4c/Relaxed_White_Mannequin.png"
    },
    {
        name: "Chin Up White Mannequin",
        materials: [
            {
                name: "Dry Wood",
                amount: 15
            },
            {
                name: "Fiber",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fa/Chin_Up_White_Mannequin.png"
    },
]

//Companions
let companions = [
    {
        name: "Cozy Companion Home",
        materials: [
            {
                name: "Softwood",
                amount: 15
            },
            {
                name: "Sunflower",
                amount: 5
            },
            {
                name: "White & Red Hydrangea",
                amount: 5
            },
            {
                name: "Topaz",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/93/Cozy_Companion_Home.png"
    },
    {
        name: "Flying Companion Feeder",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Clay",
                amount: 5
            },
            {
                name: "Wheat",
                amount: 5
            },
            {
                name: "Red Bell Flower",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ab/Flying_Companion_Feeder.png"
    },
    {
        name: "Fuzzy Friend Companion Dish",
        materials: [
            {
                name: "Clay",
                amount: 5
            },
            {
                name: "Wheat",
                amount: 5
            },
            {
                name: "Red Bell Flower",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d9/Fuzzy_Friend_Companion_Dish.png"
    },
    {
        name: "Pixar Companion Ball",
        materials: [
            {
                name: "Red Bell Flower",
                amount: 3
            },
            {
                name: "Yellow Daisy",
                amount: 5
            },
            {
                name: "Blue Hydrangea",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6b/Pixar_Companion_Ball.png"
    },
    {
        name: "Playful Companion Pinwheel",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Pink Hydrangea",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bc/Playful_Companion_Pinwheel.png"
    }
]

//Functional Items

//Furniture

//Touch of Magic Furniture 
let touchOfMagic = [
    {
        name: "Basic Armchair",
        materials: [
            {
                name: "Hardwood",
                amount: 10
            },
            {
                name: "Fiber",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c6/Basic_Armchair.png"
    },
    {
        name: "Basic Beach Chair",
        materials: [
            {
                name: "Softwood",
                amount: 10
            },
            {
                name: "Fiber",
                amount: 10
            },
            {
                name: "Sand",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0a/Basic_Beach_Chair.png"
    },
    {
        name: "Basic Chair",
        materials: [
            {
                name: "Softwood",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/50/Basic_Chair.png"
    },
    {
        name: "Basic Couch",
        materials: [
            {
                name: "Hardwood",
                amount: 20
            },
            {
                name: "Fiber",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/ce/Basic_Couch.png"
    },
    {
        name: "Basic Desk",
        materials: [
            {
                name: "Hardwood",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2f/Basic_Desk.png"
    },
    {
        name: "Basic Double Bed",
        materials: [
            {
                name: "Hardwood",
                amount: 20
            },
            {
                name: "Fabric",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1e/Basic_Double_Bed.png"
    },
    {
        name: "Basic Dresser",
        materials: [
            {
                name: "Softwood",
                amount: 25
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9d/Basic_Dresser_%282%29.png"
    },
    {
        name: "Basic Fridge",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Snowball",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/76/Basic_Fridge.png"
    },
    {
        name: "Basic Lamp",
        materials: [
            {
                name: "Dry Wood",
                amount: 10
            },
            {
                name: "Fabric",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bf/Basic_Lamp.png"
    },
    {
        name: "Basic Large Table",
        materials: [
            {
                name: "Softwood",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1d/Basic_Large_Table.png"
    },
    {
        name: "Basic Parasol and Towel",
        materials: [
            {
                name: "Fiber",
                amount: 10
            },
            {
                name: "Sand",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dc/Basic_Parasol_and_Towel.png"
    },
    {
        name: "Basic Picnic Table",
        materials: [
            {
                name: "Softwood",
                amount: 10
            },
            {
                name: "Hardwood",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ad/Basic_Picnic_Table.png"
    },
    {
        name: "Basic Rug",
        materials: [
            {
                name: "Fiber",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/68/Basic_Rug.png"
    },
    {
        name: "Basic Side Table",
        materials: [
            {
                name: "Softwood",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ae/Basic_Side_Table.png"
    },
    {
        name: "Basic Wardrobe",
        materials: [
            {
                name: "Softwood",
                amount: 30
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ec/Basic_Wardrobe.png"
    }
]

//Fall Event Furniture
let fallEvent = [
    {
        name: "Playful Pumpkin Scarecrow",
        materials: [
            {
                name: "Dark Wood",
                amount: 10
            },
            {
                name: "Fabric",
                amount: 10
            },
            {
                name: "Wheat",
                amount: 20
            },
            {
                name: "Pumpkin",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/91/Playful_Pumpkin_Scarecrow.png"
    },
    {
        name: "Pampas Grass Jug",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2
            },
            {
                name: "Soil",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/76/Pampas_Grass_Jug.png"
    },
    {
        name: "Bountiful Marigold Basket",
        materials: [
            {
                name: "Iron Ingot",
                amount: 1
            },
            {
                name: "Soil",
                amount: 10
            },
            {
                name: "Hardwood",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/31/Bountiful_Marigold_Basket.png"
    },
    {
        name: "Autumn Wreath",
        materials: [
            {
                name: "Sunflower",
                amount: 2
            },
            {
                name: "Rope",
                amount: 1
            },
            {
                name: "Soil",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/Autumn_Wreath.png"
    },
    {
        name: "Autumn Harvest Pennants",
        materials: [
            {
                name: "Dark Wood",
                amount: 10
            },
            {
                name: "Fabric",
                amount: 5
            },
            {
                name: "Corn",
                amount: 10
            },
            {
                name: "Pumpkin",
                amount: 4
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ee/Autumn_Harvest_Pennants.png"
    }
]

//Winter Event Furniture

//Spring Event Furniture

//Flowers

//Gifts

//Lamps
let lamps = [
    {
        name: "Black Wrought Iron Streetlamp",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Glass",
                amount: 2
            },
            {
                name: "Topaz",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3f/Black_Wrought_Iron_Streetlamp.png"
    },
    {
        name: "Blue Wrought Iron Streetlamp",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Glass",
                amount: 2
            },
            {
                name: "Aquamarine",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/54/Blue_Wrought_Iron_Streetlamp.png"
    },
    {
        name: "Green Wrought Iron Streetlamp",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Glass",
                amount: 2
            },
            {
                name: "Emerald",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9f/Green_Wrought_Iron_Streetlamp.png"
    },
    {
        name: "Purple Wrought Iron Streetlamp",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Glass",
                amount: 2
            },
            {
                name: "Amethyst",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/87/Purple_Wrought_Iron_Streetlamp.png"
    },
    {
        name: "Wooden Lamppost with Yellow Light",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Iron Ingot",
                amount: 2
            },
            {
                name: "Topaz",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/72/Wooden_Lamppost_with_Yellow_Light.png"
    },
    {
        name: "Wooden Lamppost with Blue Light",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Iron Ingot",
                amount: 2
            },
            {
                name: "Sapphire",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d1/Wooden_Lamppost_with_Blue_Light.png"
    },
    {
        name: "Wooden Lamppost with Green Light",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Iron Ingot",
                amount: 2
            },
            {
                name: "Emerald",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fd/Wooden_Lamppost_with_Green_Light.png"
    },
    {
        name: "Wooden Lamppost with Pink Light",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Iron Ingot",
                amount: 2
            },
            {
                name: "Tourmaline",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e4/Wooden_Lamppost_with_Pink_Light.png"
    },
    {
        name: "Yellow Light High Beach Torch",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Sand",
                amount: 3
            },
            {
                name: "Topaz",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/79/Yellow_Light_High_Beach_Torch.png"
    },
    {
        name: "Blue Light High Beach Torch",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Sand",
                amount: 3
            },
            {
                name: "Aquamarine",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/83/Blue_Light_High_Beach_Torch.png"
    },
    {
        name: "Green Light High Beach Torch",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Sand",
                amount: 3
            },
            {
                name: "Peridot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e7/Green_Light_High_Beach_Torch.png"
    },
    {
        name: "Red Light High Beach Torch",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Sand",
                amount: 3
            },
            {
                name: "Ruby",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Red_Light_High_Beach_Torch.png"
    },
    {
        name: "Yellow Light Low Beach Torch",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Sand",
                amount: 3
            },
            {
                name: "Topaz",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/de/Yellow_Light_Low_Beach_Torch.png"
    },
    {
        name: "Blue Light Low Beach Torch",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Sand",
                amount: 3
            },
            {
                name: "Aquamarine",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Blue_Light_Low_Beach_Torch.png"
    },
    {
        name: "Green Light Low Beach Torch",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Sand",
                amount: 3
            },
            {
                name: "Peridot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3e/Green_Light_Low_Beach_Torch.png"
    },
    {
        name: "Red Light Low Beach Torch",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Sand",
                amount: 3
            },
            {
                name: "Ruby",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/83/Red_Light_Low_Beach_Torch.png"
    },
    {
        name: "Lamppost with Yellow Light",
        materials: [
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Topaz",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/db/Lamppost_with_Yellow_Light.png"
    },
    {
        name: "Lamppost with Blue Light",
        materials: [
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Sapphire",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/13/Lamppost_with_Blue_Light.png"
    },
    {
        name: "Lamppost with Green Light",
        materials: [
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Emerald",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/96/Lamppost_with_Green_Light.png"
    },
    {
        name: "Lamppost with Red Light",
        materials: [
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Garnet",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/01/Lamppost_with_Red_Light.png"
    },
    {
        name: "Round Lamppost with White Light",
        materials: [
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Diamond",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Round_Lamppost_with_White_Light.png"
    },
    {
        name: "Round Lamppost with Blue Light",
        materials: [
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Sapphire",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e0/Round_Lamppost_with_Blue_Light.png"
    },
    {
        name: "Round Lamppost with Orange Light",
        materials: [
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Citrine",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8b/Round_Lamppost_with_Orange_Light.png"
    },
    {
        name: "Round Lamppost with Pink Light",
        materials: [
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Glass",
                amount: 1
            },
            {
                name: "Tourmaline",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/99/Round_Lamppost_with_Pink_Light.png"
    },
    {
        name: "Round White Three-Pronged Lamppost",
        materials: [
            {
                name: "Iron Ingot",
                amount: 4
            },
            {
                name: "Glass",
                amount: 3
            },
            {
                name: "Diamond",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3c/Round_White_Three-Pronged_Lamppost.png"
    },
    {
        name: "Round Blue Three-Pronged Lamppost",
        materials: [
            {
                name: "Iron Ingot",
                amount: 4
            },
            {
                name: "Glass",
                amount: 3
            },
            {
                name: "Sapphire",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e1/Round_Blue_Three-Pronged_Lamppost.png"
    },
    {
        name: "Round Orange Three-Pronged Lamppost",
        materials: [
            {
                name: "Iron Ingot",
                amount: 4
            },
            {
                name: "Glass",
                amount: 3
            },
            {
                name: "Citrine",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/30/Round_Orange_Three-Pronged_Lamppost.png"
    },
    {
        name: "Round Pink Three-Pronged Lamppost",
        materials: [
            {
                name: "Iron Ingot",
                amount: 4
            },
            {
                name: "Glass",
                amount: 3
            },
            {
                name: "Tourmaline",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ee/Round_Pink_Three-Pronged_Lamppost.png"
    }
]

//Signs
let signs = [
    {
        name: "Custom Signpost",
        materials: [
            {
                name: "Softwood",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c6/Custom_Signpost.png"
    },
    {
        name: "Left Signpost",
        materials: [
            {
                name: "Hardwood",
                amount: 5
            },
            {
                name: "Iron Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/93/Left_Signpost.png"
    },
    {
        name: "Right Signpost",
        materials: [
            {
                name: "Hardwood",
                amount: 5
            },
            {
                name: "Iron Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/31/Right_Signpost.png"
    }
]

//Mailboxes
let mailboxes = [
    {
        name: "Gray Mailbox",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2
            },
            {
                name: "Hardwood",
                amount: 10
            },
            {
                name: "White Bell Flower",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/65/Gray_Mailbox.png"
    },
    {
        name: "Red Mailbox",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2
            },
            {
                name: "Hardwood",
                amount: 10
            },
            {
                name: "Red Bromeliad",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f5/Red_Mailbox.png"
    },
    {
        name: "Mailbox",
        materials: [
            {
                name: "Hardwood",
                amount: 4
            },
            {
                name: "Stone",
                amount: 2
            },
            {
                name: "Iron Ingot",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/88/Mailbox.png"
    },
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