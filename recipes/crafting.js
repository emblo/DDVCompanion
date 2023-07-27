//Array of objects holding information for crafting recipes
//Refined materials
const refinedMaterials = [
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/58/Brick.png",
        imgAlt: "Two red bricks, placed on top of each other. 6 holes can be seen on the topside of the upper brick."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Empty_Vial.png",
        imgAlt: "A brown glass vial, with a golden label and cap."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Fabric.png",
        imgAlt: "A roll of bright blue fabric. The inner piece that the fabric is rolled onto looks like white plastic."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/45/Fiber.png",
        imgAlt: "A rolled up ball of brown fiber thread."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/15/Glass.png",
        imgAlt: "Three round pieces of glass, laid out in a formation that resembles the classic Disney Mickey Mouse symbol, a round face and two round ears."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Gold_Ingot.png",
        imgAlt: "A rectangular metal bar of gold."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0a/Iron_Ingot.png",
        imgAlt: "A rectangular metal bar of gray iron."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ef/Night_Shard.png",
        imgAlt: "A crystal like black shard."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b4/Rope.png",
        imgAlt: "A coil of brown fiber rope."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/13/Seaweed.png",
        imgAlt: "Seaweed in various shades of green."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/42/Soil.png",
        imgAlt: "A few pieces of rectangular soil with tufty grass on top."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fe/Tinkering_Parts.png",
        imgAlt: "Six metal parts in the shape of screws and cogs placed in a pile. The color of them is a reddish-brown."
    }
]

//Enchantments
const enchantments = [
    {
        name: "Dreamlight",
        materials: [
            {
                name: "Dream Shard",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5e/Dreamlight_large.png",
        imgAlt: "Six white sparkles in varying sizes on a round purple sparkly background."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/58/Digging_Training_Manual.png",
        imgAlt: "A blue book with gold details and a big golden shovel on the front."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ea/Fishing_Training_Manual.png",
        imgAlt: "A blue book with gold details and a fishing line with an attached hook on the front."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/8/87/Foraging_Training_Manual.png",
        imgAlt: "A blue book with gold details and a golden basket on the front."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Gardening_Training_Manual.png",
        imgAlt: "A blue book with gold details and a piece of soil with a little stem and two leaves on the front."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Mining_Training_Manual.png",
        imgAlt: "A blue book with gold details and a big golden pickaxe on the front."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7a/Miracle_Fishing_Bait.png",
        imgAlt: "A black vial with brown details and a blue cap, with a red liquid inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/28/Miracle_Growth_Elixir.png",
        imgAlt: "A black vial with brown details and a blue cap, with a light blue liquid inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Miracle_Pickaxe_Polish.png",
        imgAlt: "A black vial with brown details and a blue cap, with a purple liquid inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6f/Miracle_Shovel_Varnish.png",
        imgAlt: "A black vial with brown details and a blue cap, with a yellow liquid inside."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bf/Even_More_Miraculous_Fishing_Bait.png",
        imgAlt: "A black bulbuous vial and flared base with brown details and a blue cap, with a red liquid inside. Around the base of the vial's neck is a yellow tag."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/90/Even_More_Miraculous_Growth_Elixir.png",
        imgAlt: "A black bulbuous vial and flared base with brown details and a blue cap, with a light blue liquid inside. Around the base of the vial's neck is a yellow tag."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Even_More_Miraculous_Pickaxe_Polish.png",
        imgAlt: "A black bulbuous vial and flared base with brown details and a blue cap, with a purple liquid inside. Around the base of the vial's neck is a yellow tag."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1f/Even_More_Miraculous_Shovel_Varnish.png",
        imgAlt: "A black bulbuous vial and flared base with brown details and a blue cap, with a yellow liquid inside. Around the base of the vial's neck is a yellow tag."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e5/Purified_Night_Shard.png",
        imgAlt: "A crystal like very light blue shard."
    }
]

//Paving
const paving = [
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/d/d7/Asphalt.png/150px-Asphalt.png",
        imgAlt: "A square 2D image showcasing the texture for asphalt, which looks like dark gray gravel."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/47/Asphalt_with_Border.png/150px-Asphalt_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for asphalt, which looks like dark gray gravel. There is a light gray stone like border around it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/9/92/Brick_Road.png/150px-Brick_Road.png",
        imgAlt: "A square 2D image showcasing the texture for a brick road, which looks like light gray stone bricks of irregular sizes."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/3/3d/Brick_Road_with_Border.png/150px-Brick_Road_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a brick road, which looks like light gray stone bricks of irregular sizes. There's a light darkers shade of gray as a border around it, with bricks of roughly equal size."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/0/05/Sugar_Cookie_Pavement.png/150px-Sugar_Cookie_Pavement.png",
        imgAlt: "A square 2D image showcasing the texture for a candy road. It has a checkered pattern square in the middle with two white squares and two pink ones with multi-colored sprinkles."

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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/4b/Deluxe_Sugar_Cookie_Pavement.png/150px-Deluxe_Sugar_Cookie_Pavement.png",
        imgAlt: "A square 2D image showcasing the texture for a candy road. It has a checkered pattern square in the middle with two white squares and two pink ones with multi-colored sprinkles. The boarder of the image has swirly candies in different colors and little chocolate pieces placed in the middle of each side."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/d/d5/Gem_%26_Opal_Road.png/150px-Gem_%26_Opal_Road.png",
        imgAlt: "A square 2D image showcasing the texture for a white road with a square pink gemstone placed diagonally. From each edge on the gem, a thick golden line goes to the edge of the image."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/4e/Gem_%26_Opal_Road_with_Border.png/150px-Gem_%26_Opal_Road_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a white road with a square pink gemstone placed diagonally. From each edge on the gem, a thick golden line goes to the edge of the image. The border is a slightly patterned deep gold."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/45/Gold_%26_Opal_Road.png/150px-Gold_%26_Opal_Road.png",
        imgAlt: "A square 2D image showcasing the texture for a white road with a golden cross forming in the center reaching out to each edge."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/c/ce/Gold_%26_Opal_Road_with_Border.png/150px-Gold_%26_Opal_Road_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a white road with a golden cross forming in the center reaching out to each edge. The border is a slightly patterned deep gold."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/21/Golden_Brick_Road.png/150px-Golden_Brick_Road.png",
        imgAlt: "A square 2D image showcasing the texture for a brick road, which looks like uniform gold rectangles."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/f/f4/Golden_Brick_Road_with_Border.png/150px-Golden_Brick_Road_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a brick road, which looks like uniform gold rectangles. The border is a slightly patterned deep gold."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/f/f2/Leaf-Strewn_Path.png/150px-Leaf-Strewn_Path.png",
        imgAlt: "A square 2D image showcasing the texture for a natural looking path that looks like its made from dried leaves and bark."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/2b/Leaf-Strewn_Path_with_Border.png/150px-Leaf-Strewn_Path_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a natural looking path that looks like its made from dried leaves and bark. The border looks like four thin but long wooden planks on each side of the image."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/d/d4/Loose_Gravel_Path.png/150px-Loose_Gravel_Path.png",
        imgAlt: "A square 2D image showcasing the texture for a light gray gravel path."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/8/82/Loose_Gravel_Path_with_Border.png/150px-Loose_Gravel_Path_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a light gray gravel path. The border looks like dark irregular cobblestones."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/e/e6/Muddy_Path.png/150px-Muddy_Path.png",
        imgAlt: "A square 2D image showcasing the texture for a brown mud path with tiny clumps of mud in it."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/45/Muddy_Path_with_Border.png/150px-Muddy_Path_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a brown mud path with tiny clumps of mud in it. The border looks like dark irregular cobblestones."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/28/Natural_Rock_Path.png/150px-Natural_Rock_Path.png",
        imgAlt: "A square 2D image showcasing the texture for a light gray stone path with flat irregular rocks placed on a dark gray foundation."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/2e/Natural_Rock_Path_with_Border.png/150px-Natural_Rock_Path_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a light gray stone path with flat irregular rocks placed on a dark gray foundation. The border looks like several uniform mosaic pieces in varying shades of grade."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/1/19/Sinister_Brick_Road.png/150px-Sinister_Brick_Road.png",
        imgAlt: "A square 2D image showcasing the texture for a dark irregular stone bricks on top of dark purple grass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b4/Sinister_Brick_Road_with_Border.png/150px-Sinister_Brick_Road_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a dark irregular stone bricks on top of dark purple grass. The border looks like dark uniform stone bricks."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/9/96/Snowy_Brick_Road.png/150px-Snowy_Brick_Road.png",
        imgAlt: "A square 2D image showcasing the texture for a gray irregular brick road on top of snow."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/8/84/Snowy_Brick_Road_with_Border.png/150px-Snowy_Brick_Road_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for a gray irregular brick road on top of snow. The border looks like light uniform bricks partially covered by snow."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/c/c1/Sun-Baked_Earthen_Road.png/150px-Sun-Baked_Earthen_Road.png",
        imgAlt: "A square 2D image showcasing the texture for an orange dirt road."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/0/0f/Sun-Baked_Earthen_Road_with_Border.png/150px-Sun-Baked_Earthen_Road_with_Border.png",
        imgAlt: "A square 2D image showcasing the texture for an orange dirt road. The border is made up of dark brown irregular bricks."
    }
]

//Fences
const fences = [
    {
        name: "Wire Mesh Fence -- Base",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c0/Wire_Mesh_Fence.png",
        imgAlt: "A wire mesh fence with light metal. Two poles in the fence are visible with a horizontal pole going through them both."
    },
    {
        name: "Dark Wire Mesh Fence -- Base",
        materials: [
            {
                name: "Iron Ingot",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5a/Dark_Wire_Mesh_Fence.png",
        imgAlt: "A wire mesh fence with dark metal. Two poles in the fence are visible with a horizontal pole going through them both."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/ba/Dark_Wood_Fence.png",
        imgAlt: "An interwoven dark wooden fence with two poles visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1d/Green_Bamboo_Fence.png",
        imgAlt: "A green bamboo fence with horizontal pieces of bamboo stacked on top of each other with two vertical poles visible. There are several pieces of fiber thread visible around some of the pieces."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/3/37/Iron_Spike_and_Brick_Fence.png",
        imgAlt: "A fence with a red brick base and uniform metal iron spikes that appear both vertically and horizontally."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e7/Metal_Spike_Fence.png",
        imgAlt: "A fence with a thick black metal base and uneven metal vertical spikes with two horisontal poles towards the top and bottom."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b4/White_Bamboo_Fence.png",
        imgAlt: "White vertical bamboo pieces with two vertical wooden poles. On the top of the fence there is a square pattern made up from thinner wooden pieces."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/White_Picket_Fence_-_Base.png",
        imgAlt: "A small wooden white picket fence with visible nails where the fence pieces meet the boards that hold them together."
    }
]

//Chests
const chests = [
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/02/Small_Chest.png",
        imgAlt: "A small orange looking wooden chest with two metal clasps and a metal handle visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Small_Blue_Chest.png",
        imgAlt: "A small blue looking wooden chest with two metal clasps and a metal handle visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Small_Green_Chest.png",
        imgAlt: "A small green looking wooden chest with two metal clasps and a metal handle visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ec/Small_Red_Chest.png",
        imgAlt: "A small red looking wooden chest with two metal clasps and a metal handle visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c2/Small_White_Chest.png",
        imgAlt: "A small white looking wooden chest with two metal clasps and a metal handle visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d2/Small_Yellow_Chest.png",
        imgAlt: "A small yellow looking wooden chest with two metal clasps and a metal handle visible."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d4/Medium_Chest.png",
        imgAlt: "A medium sized orange looking wooden chest with two metal clasps and a metal handle visible. The edges of the different parts are a wide dark metal."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fa/Medium_Blue_Chest.png",
        imgAlt: "A medium sized blue looking wooden chest with two metal clasps and a metal handle visible. The edges of the different parts are a wide dark metal."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6d/Medium_Green_Chest.png",
        imgAlt: "A medium sized green looking wooden chest with two metal clasps and a metal handle visible. The edges of the different parts are a wide dark metal."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/14/Medium_Red_Chest.png",
        imgAlt: "A medium sized red looking wooden chest with two metal clasps and a metal handle visible. The edges of the different parts are a wide dark metal."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cc/Medium_White_Chest.png",
        imgAlt: "A medium sized white looking wooden chest with two metal clasps and a metal handle visible. The edges of the different parts are a wide dark metal."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f2/Medium_Yellow_Chest.png",
        imgAlt: "A medium sized yellow looking wooden chest with two metal clasps and a metal handle visible. The edges of the different parts are a wide dark metal."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/62/Large_Chest.png",
        imgAlt: "A large sized orange looking wooden chest with two golden clasps and a golden handle visible. The edges of the different parts are golden, and the middle clasp is a purple ornate gemstone."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/08/Large_Blue_Chest.png",
        imgAlt: "A large sized blue looking wooden chest with two golden clasps and a golden handle visible. The edges of the different parts are golden, and the middle clasp is a purple ornate gemstone."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/5/51/Large_Green_Chest.png",
        imgAlt: "A large sized green looking wooden chest with two golden clasps and a golden handle visible. The edges of the different parts are golden, and the middle clasp is a purple ornate gemstone."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ea/Large_Red_Chest.png",
        imgAlt: "A large sized red looking wooden chest with two golden clasps and a golden handle visible. The edges of the different parts are golden, and the middle clasp is a purple ornate gemstone."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/65/Large_White_Chest.png",
        imgAlt: "A large sized white looking wooden chest with two golden clasps and a golden handle visible. The edges of the different parts are golden, and the middle clasp is a purple ornate gemstone."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Large_Yellow_Chest.png",
        imgAlt: "A large sized yellow looking wooden chest with two golden clasps and a golden handle visible. The edges of the different parts are golden, and the middle clasp is a purple ornate gemstone."
    }
]

//Stoves
const stoves = [
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/10/Black_Flat-Top_Stove.png",
        imgAlt: "A black flat-top stove. The details on the stove look light purple and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a6/Black_Gas_Stove.png",
        imgAlt: "A black gas stove. The details on the stove look light purple and black, and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/Gray_Flat-Top_Stove.png",
        imgAlt: "A dark gray flat-top stove. The details on the stove look light purple and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1c/Gray_Gas_Stove.png",
        imgAlt: "A gray gas stove. The details on the stove look light purple and black, and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1e/Pale_Gray_Flat-Top_Stove.png",
        imgAlt: "A light gray flat-top stove. The details on the stove look white, and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b3/Pale_Gray_Gas_Stove.png",
        imgAlt: "A light gray gas stove. The details on the stove look white and black, and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cf/Pink_Flat-Top_Stove.png",
        imgAlt: "A pink flat-top stove. The details on the stove look dark and light purple, and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/Pink_Gas_Stove.png",
        imgAlt: "A pink gas stove. The details on the stove look dark and light purple, and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/04/White_Flat-Top_Stove.png",
        imgAlt: "A white flat-top stove. The details on the stove look dark and light purple, and the oven door is dark glass."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f4/White_Gas_Stove.png",
        imgAlt: "A white gas stove. The details on the stove look dark and light purple, and the oven door is dark glass."
    }
]

//Mannequins
const mannequins = [
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/Thoughtful_Black_Mannequin.png",
        imgAlt: "A black female mannequin with a white t-shirt and blue jeans. The right hip is slightly pushed out, and the arms are folded in a way that conveys thinking."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ed/Relaxed_Black_Mannequin.png",
        imgAlt: "A black male mannequin with a white t-shirt and blue jeans. The stance is confident with the arms by its side, conveying a relaxed state of mind."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ea/Hand_on_Hip_Black_Mannequin.png",
        imgAlt: "A black female mannequin with a white t-shirt and blue jeans. The left hand is on its hip and the other hand is relaxed on its side."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/0/09/Hesitant_White_Mannequin.png",
        imgAlt: "A white male mannequin with a gray t-shirt and dark blue jeans. The legs are spread somewhat wide, and the hands are nervously touching each other, conveying a hesitant feeling."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4c/Relaxed_White_Mannequin.png",
        imgAlt: "A white female mannequin with a gray t-shirt and dark blue jeans. The stance is confident with the arms by its side, conveying a relaxed state of mind."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fa/Chin_Up_White_Mannequin.png",
        imgAlt: "A white male mannequin with a gray t-shirt and dark blue jeans. The legs are close together and the arms are held together behind its back, the chin angled slightly upward."
    }
]

//Companions
const companions = [
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
        imgSrc: "https://dreamlightvalleywiki.com/images/9/93/Cozy_Companion_Home.png",
        imgAlt: "A dog house looking home with red shingles on the roof, white trims and yellow horizontal planks, fit for the companions of Dreamlight Valley."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ab/Flying_Companion_Feeder.png",
        imgAlt: "An elevated pet food bowl filled with light brown kibble. Attached to the pole that's elevating it is a slightly bent piece of metal with a piece of perching wood for the birds of Dreamlight Valley."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d9/Fuzzy_Friend_Companion_Dish.png",
        imgAlt: "A round red pet food bowl, filled with dark brown kibble."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6b/Pixar_Companion_Ball.png",
        imgAlt: "A round yellow ball with a wide blue line going around the center of it. On either side is a solid red star."
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
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bc/Playful_Companion_Pinwheel.png",
        imgAlt: "A pink pinwheel with a light wooden stick, stuck into some dark brown soil."
    }
]

//Functional Items
const functionalItems = [
    {
        name: "Ariel's Crafting Station",
        materials: [
            {
                name: "Sand",
                amount: 40
            },
            {
                name: "Scallop",
                amount: 10
            },
            {
                name: "Aquamarine",
                amount: 3
            },
            {
                name: "Gold Ingot",
                amount: 10
            },
            {
                name: "Hardwood",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/83/Ariel%27s_Crafting_Station.png",
        imgAlt: "A blue work station with wooden details, tools, sea life on it and a blue sea shell like lamp that's glowing."
    },
    {
        name: "Iron Crafting Station",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Hardwood",
                amount: 10
            },
            {
                name: "Topaz",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a0/Iron_Crafting_Station.png",
        imgAlt: "A gray work station with black metal details, tools, and an industrial looking metal light."
    },
    {
        name: "Wooden Crafting Station",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Hardwood",
                amount: 10
            },
            {
                name: "Topaz",
                amount: 1
            },
            {
                name: "Red Falling Penstemon",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Wooden_Crafting_Station.png",
        imgAlt: "A red work station with black and gray metal details, tools, and an industrial looking metal light."
    },
    {
        name: "Black Retro Portable Radio",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Iron Ingot",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6e/Black_Retro_Portable_Radio.png",
        imgAlt: "An old looking dark brown radio with white details and a black antenna. It is placed on a very small wooden table with long legs."
    },
    {
        name: "Blue Retro Portable Radio",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Iron Ingot",
                amount: 1
            },
            {
                name: "Blue Star Lily",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6a/Blue_Retro_Portable_Radio.png",
        imgAlt: "An old looking light blue radio with white details and a black antenna. It is placed on a very small wooden table with long legs."
    },
    {
        name: "Brown Retro Portable Radio",
        materials: [
            {
                name: "Softwood",
                amount: 10
            },
            {
                name: "Iron Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d7/Brown_Retro_Portable_Radio.png",
        imgAlt: "An old looking reddish-brown radio with white details and a black antenna. It is placed on a very small wooden table with long legs."
    },
    {
        name: "Campfire",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Dry Wood",
                amount: 7
            },
            {
                name: "Coal Ore",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/01/Campfire.png",
        imgAlt: "A black metal construction with a grill on the top. on the bottom four halved wooden logs can be seen."
    }
]

//Furniture
const furniture = [
    {
        name: "Barrel Part",
        materials: [
            {
                name: "Dark Wood",
                amount: 5
            },
            {
                name: "Iron Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/91/Barrel_Part.png"
    },
    {
        name: "Half-Barrel",
        materials: [
            {
                name: "Dark Wood",
                amount: 5
            },
            {
                name: "Iron Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/ce/Half-Barrel.png"
    },
    {
        name: "Old Barrel",
        materials: [
            {
                name: "Dark Wood",
                amount: 5
            },
            {
                name: "Iron Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ed/Old_Barrel.png"
    },
    {
        name: "Basket",
        materials: [
            {
                name: "Fiber",
                amount: 6
            },
            {
                name: "Pink Hydrangea",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e4/Basket.png"
    },
    {
        name: "Bench",
        materials: [
            {
                name: "Softwood",
                amount: 5
            },
            {
                name: "Iron Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f7/Bench.png"
    },
    {
        name: "Broken Carved Pillar Base",
        materials: [
            {
                name: "Soil",
                amount: 25
            },
            {
                name: "Stone",
                amount: 50
            },
            {
                name: "Clay",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/88/Broken_Carved_Pillar_Base.png"
    },
    {
        name: "Broken Pillar Base",
        materials: [
            {
                name: "Soil",
                amount: 25
            },
            {
                name: "Stone",
                amount: 50
            },
            {
                name: "Clay",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ad/Broken_Pillar_Base.png"
    },
    {
        name: "Mossy Base",
        materials: [
            {
                name: "Soil",
                amount: 25
            },
            {
                name: "Stone",
                amount: 50
            },
            {
                name: "Clay",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/Mossy_Base.png"
    },
    {
        name: "Mossy Circle-Carving Stone",
        materials: [
            {
                name: "Soil",
                amount: 25
            },
            {
                name: "Stone",
                amount: 50
            },
            {
                name: "Clay",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b3/Mossy_Circle-Carving_Stone.png"
    },
    {
        name: "Mossy Eye-Carving Stone",
        materials: [
            {
                name: "Soil",
                amount: 25
            },
            {
                name: "Stone",
                amount: 50
            },
            {
                name: "Clay",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8c/Mossy_Eye-Carving_Stone.png"
    },
    {
        name: "Low Sculpted Pillar",
        materials: [
            {
                name: "Soil",
                amount: 25
            },
            {
                name: "Stone",
                amount: 50
            },
            {
                name: "Clay",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/19/Low_Sculpted_Pillar.png"
    },
    {
        name: "Bunny Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 6
            },
            {
                name: "White Impatiens",
                amount: 2
            },
            {
                name: "Red Bromeliad",
                amount: 2
            },
            {
                name: "Orange Marsh Milkweed",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/73/Bunny_Cutout.png"
    },
    {
        name: "Fox Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 6
            },
            {
                name: "Orange Marsh Milkweed",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fd/Fox_Cutout.png"
    },
    {
        name: "Log Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "White Impatiens",
                amount: 2
            },
            {
                name: "Orange & Red Marsh Milkweed",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/19/Log_Cutout.png"
    },
    {
        name: "Moss-Covered Rock Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "White Impatiens",
                amount: 2
            },
            {
                name: "Green Passion Lily",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f1/Moss-Covered_Rock_Cutout.png"
    },
    {
        name: "Oak Tree Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "Orange & Red Marsh Milkweed",
                amount: 2
            },
            {
                name: "Green Passion Lily",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/52/Oak_Tree_Cutout.png"
    },
    {
        name: "Pine Tree Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "Orange & Red Marsh Milkwood",
                amount: 1
            },
            {
                name: "Green Passion Lily",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a0/Pine_Tree_Cutout.png"
    },
    {
        name: "Poplar Tree Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "White Impatiens",
                amount: 3
            },
            {
                name: "Green Passion Lily",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b5/Poplar_Tree_Cutout.png"
    },
    {
        name: "Raccoon Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 6
            },
            {
                name: "White Impatiens",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a9/Raccoon_Cutout.png"
    },
    {
        name: "Rock and Ferns Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "Green Passion Lily",
                amount: 3
            },
            {
                name: "White Impatiens",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4c/Rock_and_Ferns_Cutout.png"
    },
    {
        name: "Rock Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 4
            },
            {
                name: "White Impatiens",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f0/Rock_Cutout.png"
    },
    {
        name: "Squirrel Cutout",
        materials: [
            {
                name: "Dry Wood",
                amount: 6
            },
            {
                name: "Orange Marsh Milkweed",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/83/Squirrel_Cutout.png"
    },
    {
        name: "Burlap Bags",
        materials: [
            {
                name: "Soil",
                amount: 10
            },
            {
                name: "Fiber",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c4/Burlap_Bags.png"
    },
    {
        name: "Cart",
        materials: [
            {
                name: "Dark Wood",
                amount: 20
            },
            {
                name: "Iron Ingot",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Cart.png"
    },
    {
        name: "Crate",
        materials: [
            {
                name: "Hardwood",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Crate.png"
    },
    {
        name: "Elegant Gazebo",
        materials: [
            {
                name: "Dry Wood",
                amount: 200
            },
            {
                name: "Glass",
                amount: 50
            },
            {
                name: "Diamond",
                amount: "10"
            },
            {
                name: "Crystal",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/85/Elegant_Gazebo.png"
    },
    {
        name: "Elegant Town Square Clock",
        materials: [
            {
                name: "Stone",
                amount: 200
            },
            {
                name: "Hardwood",
                amount: 100
            },
            {
                name: "Gold Ingot",
                amount: 30
            },
            {
                name: "Blue Passion Lily",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/95/Elegant_Town_Square_Clock.png"
    },
    {
        name: "Rustic Clock Tower",
        materials: [
            {
                name: "Stone",
                amount: 100
            },
            {
                name: "Hardwood",
                amount: 100
            },
            {
                name: "Iron Ingot",
                amount: 30
            },
            {
                name: "Clay",
                amount: 200
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d7/Rustic_Clock_Tower.png"
    },
    {
        name: "Festive Pennants",
        materials: [
            {
                name: "Hardwood",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 5
            },
            {
                name: "Fabric",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9d/Festive_Pennants.png"
    },
    {
        name: "Wrought Iron Arch",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Fabric",
                amount: 4
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6a/Wrought_Iron_Arch.png"
    },
    {
        name: "Fishing Trap",
        materials: [
            {
                name: "Softwood",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/64/Fishing_Trap.png"
    },
    {
        name: "Fountain",
        materials: [
            {
                name: "Stone",
                amount: 50
            },
            {
                name: "Pebbles",
                amount: 20
            },
            {
                name: "Gold Ingot",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/89/Fountain.png"
    },
    {
        name: "Compass Ottoman",
        materials: [
            {
                name: "Dark Wood",
                amount: 8
            },
            {
                name: "Iron Ingot",
                amount: 8
            },
            {
                name: "Fabric",
                amount: 12
            },
            {
                name: "Tinkering Parts",
                amount: 15
            },
            {
                name: "Rope",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9b/Compass_Ottoman.png"
    },
    {
        name: "Nautical-Themed-Couch",
        materials: [
            {
                name: "Dark Wood",
                amount: 10
            },
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Rope",
                amount: 2
            },
            {
                name: "Tinkering Parts",
                amount: 15
            },
            {
                name: "Fabric",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/62/Nautical-Themed_Couch.png"
    },
    {
        name: "Ship Coffee Table",
        materials: [
            {
                name: "Dark Wood",
                amount: 10
            },
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Tinkering Parts",
                amount: 15
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bf/Ship_Coffee_Table.png"
    },
    {
        name: "Charter Rug",
        materials: [
            {
                name: "Fabric",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c3/Charter_Rug.png"
    },
    {
        name: "Helm Bookshelf",
        materials: [
            {
                name: "Dark Wood",
                amount: 25
            },
            {
                name: "Iron Ingot",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f3/Helm_Bookshelf.png"
    },
    {
        name: "Pirate Map on the Wall",
        materials: [
            {
                name: "Dark Wood",
                amount: 2
            },
            {
                name: "Gold Nugget",
                amount: 2
            },
            {
                name: "Fabric",
                amount: 8
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ad/Pirate_Map_on_the_Wall.png"
    },
    {
        name: "Refreshment Chest",
        materials: [
            {
                name: "Dark Wood",
                amount: 15
            },
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Gold Nugget",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/55/Refreshment_Chest.png"
    },
    {
        name: "Wide Arched Window",
        materials: [
            {
                name: "Dark Wood",
                amount: 20
            },
            {
                name: "Glass",
                amount: 12
            },
            {
                name: "Gold Nugget",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/12/Wide_Arched_Window.png"
    },
    {
        name: "Classic Snowman",
        materials: [
            {
                name: "Snowball",
                amount: 10
            },
            {
                name: "Carrot",
                amount: 1
            },
            {
                name: "Fabric",
                amount: 2
            },
            {
                name: "Pebbles",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/87/Classic_Snowman.png"
    },
    {
        name: "Haughty Snowman",
        materials: [
            {
                name: "Snowball",
                amount: 10
            },
            {
                name: "Crystal",
                amount: 1
            },
            {
                name: "Fabric",
                amount: 2
            },
            {
                name: "Ruby",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3c/Haughty_Snowman.png"
    },
    {
        name: "Snow Kid",
        materials: [
            {
                name: "Snowball",
                amount: 8
            },
            {
                name: "Carrot",
                amount: 1
            },
            {
                name: "Fabric",
                amount: 2
            },
            {
                name: "Pebbles",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/58/Snow_Kid.png"
    },
    {
        name: "Snow Lady",
        materials: [
            {
                name: "Snowball",
                amount: 10
            },
            {
                name: "Carrot",
                amount: 1
            },
            {
                name: "Fabric",
                amount: 2
            },
            {
                name: "Pebbles",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6a/Snow_Lady.png"
    },
    {
        name: "DJ Booth Rig",
        materials: [
            {
                name: "Iron Ingot",
                amount: 100
            },
            {
                name: "Topaz",
                amount: 6
            },
            {
                name: "Aquamarine",
                amount: 6
            },
            {
                name: "Tourmaline",
                amount: 6
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/55/DJ_Booth_Rig.png"
    },
    {
        name: "Stellar Blue DJ Booth",
        materials: [
            {
                name: "Dry Wood",
                amount: 100
            },
            {
                name: "Iron Ingot",
                amount: 50
            },
            {
                name: "Blue Hydrangea",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/24/Stellar_Blue_DJ_Booth.png"
    },
    {
        name: "Stellar Pink DJ Booth",
        materials: [
            {
                name: "Dry Wood",
                amount: 100
            },
            {
                name: "Iron Ingot",
                amount: 50
            },
            {
                name: "Pink Hydrangea",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fb/Stellar_Pink_DJ_Booth.png"
    },
    {
        name: "Granite Fire Bowl",
        materials: [
            {
                name: "Sand",
                amount: 20
            },
            {
                name: "Stone",
                amount: 25
            },
            {
                name: "Coal Ore",
                amount: 10
            },
            {
                name: "Red Falling Penstemon",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/ce/Granite_Fire_Bowl.png"
    },
    {
        name: "Hay Bale",
        materials: [
            {
                name: "Fiber",
                amount: 10
            },
            {
                name: "Wheat",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/Hay_Bale.png"
    },
    {
        name: "Hay Bales",
        materials: [
            {
                name: "Fiber",
                amount: 10
            },
            {
                name: "Wheat",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/77/Hay_Bales.png"
    },
    {
        name: "Heavy Wooden Table",
        materials: [
            {
                name: "Softwood",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/91/Heavy_Wooden_Table.png"
    },
    {
        name: "Wooden Table",
        materials: [
            {
                name: "Softwood",
                amount: 20
            },
            {
                name: "Fabric",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f4/Wooden_Table.png"
    },
    {
        name: "Painted Wood Table",
        materials: [
            {
                name: "Dry Wood",
                amount: 10
            },
            {
                name: "Blue Passion Lily",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9b/Painted_Wood_Table.png"
    },
    {
        name: "Sturdy Chair",
        materials: [
            {
                name: "Softwood",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/41/Sturdy_Chair.png"
    },
    {
        name: "Mickey Mouse Water Tower",
        materials: [
            {
                name: "Iron Ingot",
                amount: 100
            },
            {
                name: "Topaz",
                amount: 10
            },
            {
                name: "White Bell Flower",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/23/Mickey_Mouse_Water_Tower.png"
    },
    {
        name: "Outhouse",
        materials: [
            {
                name: "Softwood",
                amount: 20
            },
            {
                name: "Hardwood",
                amount: 20
            },
            {
                name: "Soil",
                amount: 10
            },
            {
                name: "Iron Ingot",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f1/Outhouse.png"
    },
    {
        name: "Photo Backdrop",
        materials: [
            {
                name: "Hardwood",
                amount: 20
            },
            {
                name: "Tinkering Parts",
                amount: 9
            },
            {
                name: "Fabric",
                amount: 10
            },
            {
                name: "Glass",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/07/Photo_Backdrop.png"
    },
    {
        name: "Rustic Wooden Case",
        materials: [
            {
                name: "Softwood",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f6/Rustic_Wooden_Case.png"
    },
    {
        name: "Sack",
        materials: [
            {
                name: "Fiber",
                amount: 15
            },
            {
                name: "Soil",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/61/Sack.png"
    },
    {
        name: "Tall Birdhouse",
        materials: [
            {
                name: "Softwood",
                amount: 8
            },
            {
                name: "Blue Falling Penstemon",
                amount: 3
            },
            {
                name: "White Daisy",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7b/Tall_Birdhouse.png"
    },
    {
        name: "Short Birdhouse",
        materials: [
            {
                name: "Softwood",
                amount: 8
            },
            {
                name: "Yellow Bromeliad",
                amount: 3
            },
            {
                name: "Pink Hydrangea",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fc/Short_Birdhouse.png"
    },
    {
        name: "Stack of Firewood",
        materials: [
            {
                name: "Dry Wood",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/92/Stack_of_Firewood.png"
    },
    {
        name: "Stall",
        materials: [
            {
                name: "Hardwood",
                amount: 20
            },
            {
                name: "Iron Ingot",
                amount: 3
            },
            {
                name: "Fabric",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e9/Stall.png"
    },
    {
        name: "Stone Well",
        materials: [
            {
                name: "Softwood",
                amount: 20
            },
            {
                name: "Stone",
                amount: 50
            },
            {
                name: "Fiber",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/86/Stone_Well.png"
    },
    {
        name: "Stitch's Television",
        materials: [
            {
                name: "Tinkering Parts",
                amount: 12
            },
            {
                name: "Gold Ingot",
                amount: 5
            },
            {
                name: "Glass",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a5/Stitch%27s_Television.png"
    },
    {
        name: "Swimming Pool",
        materials: [
            {
                name: "Stone",
                amount: 300
            },
            {
                name: "Softwood",
                amount: 50
            },
            {
                name: "White Daisy",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/ce/Swimming_Pool.png"
    },
    {
        name: "Tool Rack",
        materials: [
            {
                name: "Dark Wood",
                amount: 10
            },
            {
                name: "Iron Ingot",
                amount: 4
            },
            {
                name: "Soil",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e6/Tool_Rack.png"
    },
    {
        name: "Trellis",
        materials: [
            {
                name: "Softwood",
                amount: 15
            },
            {
                name: "Soil",
                amount: 3
            },
            {
                name: "White & Pink Falling Penstemon",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e1/Trellis.png"
    },
    {
        name: "Trellis Arch",
        materials: [
            {
                name: "Softwood",
                amount: 15
            },
            {
                name: "Soil",
                amount: 3
            },
            {
                name: "White & Pink Falling Penstemon",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/26/Trellis_Arch.png"
    },
    {
        name: "Wooden Bucket",
        materials: [
            {
                name: "Softwood",
                amount: 3
            },
            {
                name: "Iron Ingot",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c1/Wooden_Bucket.png"
    },
    {
        name: "Zen Garden",
        materials: [
            {
                name: "Stone",
                amount: 100
            },
            {
                name: "Pebbles",
                amount: 100
            },
            {
                name: "Sand",
                amount: 200
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/21/Zen_Garden.png"
    }
]

//Balloons
const balloons = [
    {
        name: "Blue and Silver Balloon Cluster",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Blue Falling Penstemon",
                amount: 8
            },
            {
                name: "Blue Star Lily",
                amount: 8
            },
            {
                name: "Blue Marsh Milkweed",
                amount: 8
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ac/Blue_and_Silver_Balloon_Cluster.png"
    },
    {
        name: "Blue and Silver Balloon Arch",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Blue Falling Penstemon",
                amount: 20
            },
            {
                name: "Blue Star Lily",
                amount: 20
            },
            {
                name: "Blue Marsh Milkweed",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/27/Blue_and_Silver_Balloon_Arch.png"
    },
    {
        name: "Blue, Yellow and Pink Balloon Cluster",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Pink Bromeliad",
                amount: 8
            },
            {
                name: "Blue Falling Penstemon",
                amount: 8
            },
            {
                name: "Yellow Bromeliad",
                amount: 8
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a5/Blue%2C_Yellow_and_Pink_Balloon_Cluster.png"
    },
    {
        name: "Blue, Yellow and Pink Balloon Arch",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Pink Bromeliad",
                amount: 20
            },
            {
                name: "Blue Falling Penstemon",
                amount: 20
            },
            {
                name: "Yellow Bromeliad",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c8/Blue%2C_Yellow_and_Pink_Balloon_Arch.png"
    },
    {
        name: "Green, Yellow and White Balloon Cluster",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Green Rising Penstemon",
                amount: 8
            },
            {
                name: "Dandelion",
                amount: 8
            },
            {
                name: "White Daisy",
                amount: 8
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1b/Green%2C_Yellow_and_White_Balloon_Cluster.png"
    },
    {
        name: "Green, Yellow and White Balloon Arch",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Green Rising Penstemon",
                amount: 20
            },
            {
                name: "Dandelion",
                amount: 20
            },
            {
                name: "White Daisy",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5e/Green%2C_Yellow_and_White_Balloon_Arch.png"
    },
    {
        name: "Red, Black and Yellow Balloon Cluster",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Red Nasturtium",
                amount: 8
            },
            {
                name: "Yellow Nasturtium",
                amount: 8
            },
            {
                name: "Black Passion Lily",
                amount: 8
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/43/Red%2C_Black%2C_and_Yellow_Balloon_Cluster.png"
    },
    {
        name: "Yellow, Red and Black Balloon Arch",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Red Nasturtium",
                amount: 20
            },
            {
                name: "Yellow Nasturtium",
                amount: 20
            },
            {
                name: "Black Passion Lily",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/98/Yellow%2C_Red_and_Black_Balloon_Arch.png"
    },
    {
        name: "White, Yellow and Black Balloon Cluster",
        materials: [
            {
                name: "Iron Ingot",
                amount: 5
            },
            {
                name: "Sunflower",
                amount: 8
            },
            {
                name: "Black Passion Lily",
                amount: 8
            },
            {
                name: "White Marsh Milkweed",
                amount: 8
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/50/White%2C_Yellow_and_Black_Balloon_Cluster.png"
    },
    {
        name: "White, Yellow and Black Balloon Arch",
        materials: [
            {
                name: "Iron Ingot",
                amount: 10
            },
            {
                name: "Sunflower",
                amount: 20
            },
            {
                name: "Black Passion Lily",
                amount: 20
            },
            {
                name: "White Marsh Milkweed",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/90/White%2C_Yellow_and_Black_Balloon_Arch.png"
    }
]

//Touch of Magic Furniture 
const touchOfMagic = [
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
const fallEvent = [
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
const winterEvent = [
    {
        name: "Holiday Feast Chair",
        materials: [
            {
                name: "Hardwood",
                amount: 3
            },
            {
                name: "Fabric",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/44/Holiday_Feast_Chair.png"
    },
    {
        name: "Holiday Feast Plate and Cutlery",
        materials: [
            {
                name: "Clay",
                amount: 5
            },
            {
                name: "Gold Ingot",
                amount: 1
            },
            {
                name: "Fabric",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e9/Holiday_Feast_Plate_and_Cutlery.png"
    },
    {
        name: "Kinara",
        materials: [
            {
                name: "Softwood",
                amount: 3
            },
            {
                name: "Soya",
                amount: 7
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7a/Kinara.png"
    },
    {
        name: "Menorah",
        materials: [
            {
                name: "Gold Ingot",
                amount: 1
            },
            {
                name: "Soya",
                amount: 9
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/80/Menorah.png"
    },
    {
        name: "Tree of Holiday Cheer",
        materials: [
            {
                name: "Glass",
                amount: 15
            },
            {
                name: "Fabric",
                amount: 10
            },
            {
                name: "Sugarcane",
                amount: 25
            },
            {
                name: "Topaz",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7a/Tree_of_Holiday_Cheer.png"
    },
    {
        name: "Yule Goat",
        materials: [
            {
                name: "Wheat",
                amount: 50
            },
            {
                name: "Fabric",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3b/Yule_Goat.png"
    },
    {
        name: "Snow Hut",
        materials: [
            {
                name: "Snowball",
                amount: 100
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c4/Snow_Hut.png"
    },
    {
        name: "Shiny Gift",
        materials: [
            {
                name: "Festive Wrapping Paper",
                amount: 1
            },
            {
                name: "Shiny Ruby",
                amount: 1
            },
            {
                name: "Shiny Emerald",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/84/Shiny_Gift.png"
    },
    {
        name: "Naughty Gift",
        materials: [
            {
                name: "Festive Wrapping Paper",
                amount: 1
            },
            {
                name: "Coal Ore",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/aa/Naughty_Gift.png"
    },
    {
        name: "Handcrafted Gift",
        materials: [
            {
                name: "Festive Wrapping Paper",
                amount: 1
            },
            {
                name: "Holiday Feast Chair",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Handcrafted_Gift.png"
    },
    {
        name: "Delicious Gift",
        materials: [
            {
                name: "Festive Wrapping Paper",
                amount: 1
            },
            {
                name: "Hot Cocoa",
                amount: 1
            },
            {
                name: "Minnie's Gingerbread Cookies",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/ce/Delicious_Gift.png"
    }
]

//Spring Event Furniture
const springEvent = [
    {
        name: "'Don't Put 'Em All in One Basket' Basket",
        materials: [
            {
                name: "Wild Spring Egg",
                amount: 10
            },
            {
                name: "Egg-cellent Fruit",
                amount: 10
            },
            {
                name: "Spring V-EGG-etable",
                amount: 5
            },
            {
                name: "Fiber",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bd/%22Don%27t_Put_%27Em_All_in_One_Basket%22_Basket.png"
    },
    {
        name: "Over Easy Chair",
        materials: [
            {
                name: "Wild Spring Egg",
                amount: 5
            },
            {
                name: "Egg-cellent Fruit",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5c/Over_Easy_Chair.png"
    },
    {
        name: "Spring Egg Bounty",
        materials: [
            {
                name: "Wild Spring Egg",
                amount: 15
            },
            {
                name: "Egg-cellent Fruit",
                amount: 15
            },
            {
                name: "Spring V-EGG-etable",
                amount: 15
            },
            {
                name: "Stone",
                amount: 50
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/49/Spring_Egg_Bounty.png"
    },
    {
        name: "Spring Stall",
        materials: [
            {
                name: "Wild Spring Egg",
                amount: 10
            },
            {
                name: "Egg-cellent Fruit",
                amount: 10
            },
            {
                name: "Spring V-EGG-etable",
                amount: 10
            },
            {
                name: "Hardwood",
                amount: 20
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/7b/Spring_Stall.png"
    },
    {
        name: "Sunny Side Up Arch",
        materials: [
            {
                name: "Wild Spring Egg",
                amount: 25
            },
            {
                name: "Egg-cellent Fruit",
                amount: 25
            },
            {
                name: "Spring V-EGG-etable",
                amount: 25
            },
            {
                name: "Iron Ingot",
                amount: 10
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ad/Sunny_Side_Up_Arch.png"
    }
]

//Floral
const floral = [
    {
        name: "Jubilant Topiary",
        materials: [
            {
                name: "Clay",
                amount: 5
            },
            {
                name: "Soil",
                amount: 5
            },
            {
                name: "Pink Houseleek",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/25/Jubilant_Topiary.png"
    },
    {
        name: "Flower Boxes",
        materials: [
            {
                name: "Dry Wood",
                amount: 6
            },
            {
                name: "Dandelion",
                amount: 2,
            },
            {
                name: "Pink Hydrangea",
                amount: 2
            },
            {
                name: "Blue Marsh Milkweed",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/02/Flower_Boxes.png"
    },
    {
        name: "Flower Pots",
        materials: [
            {
                name: "Clay",
                amount: 6
            },
            {
                name: "Soil",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fd/Flower_Pots.png"
    },
    {
        name: "Sunflower and Daisy Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Yellow Daisy",
                amount: 2
            },
            {
                name: "Sunflower",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/39/Sunflower_and_Daisy_Pot.png"
    },
    {
        name: "Star Lily and Falling Penstemon Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Blue Star Lily",
                amount: 1
            },
            {
                name: "White & Pink Falling Penstemon",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/83/Star_Lily_and_Falling_Penstemon_Pot.png"
    },
    {
        name: "Red and Black Passion Lily Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Red Passion Lily",
                amount: 1
            },
            {
                name: "Black Passion Lily",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5b/Red_and_Black_Passion_Lily_Pot.png"
    },
    {
        name: "Passion Lily and Houseleek Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Orange Houseleek",
                amount: 1
            },
            {
                name: "White Passion Lily",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c5/Passion_Lily_and_Houseleek_Pot.png"
    },
    {
        name: "Nasturtium and Marsh Milkweed Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Yellow Nasturtium",
                amount: 1
            },
            {
                name: "Purple Marsh Milkweed",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a5/Nasturtium_and_Marsh_Milkweed_Pot.png"
    },
    {
        name: "Impatiens and Bromeliad Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Purple Impatiens",
                amount: 1
            },
            {
                name: "Yellow Bromeliad",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3a/Impatiens_and_Bromeliad_Pot.png"
    },
    {
        name: "Hydrangea and Bell Flower Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Blue Hydrangea",
                amount: 1
            },
            {
                name: "Purple Bell Flower",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9f/Hydrangea_and_Bell_Flower_Pot.png"
    },
    {
        name: "Falling Penstemon and Bell Flower Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Blue Falling Penstemon",
                amount: 1
            },
            {
                name: "White Bell Flower",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bf/Falling_Penstemon_and_Bell_Flower_Pot.png"
    },
    {
        name: "Dandelion and Rising Penstemon Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Dandelion",
                amount: 1
            },
            {
                name: "Purple Rising Penstemon",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/26/Dandelion_and_Rising_Penstemon_Pot.png"
    },
    {
        name: "Daisy and Marsh Milkweed Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Red Daisy",
                amount: 1
            },
            {
                name: "White Marsh Milkweed",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/54/Daisy_and_Marsh_Milkweed_Pot.png"
    },
    {
        name: "Bromeliad and Marsh Milkweed Pot",
        materials: [
            {
                name: "Flower Pots",
                amount: 1
            },
            {
                name: "Pink Bromeliad",
                amount: 3
            },
            {
                name: "White Marsh Milkweed",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2b/Bromeliad_and_Marsh_Milkweed_Pot.png"
    },
    {
        name: "Round Soil Area",
        materials: [
            {
                name: "Stone",
                amount: 5
            },
            {
                name: "Soil",
                amount: 5
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3f/Round_Soil_Area.png"
    },
    {
        name: "Pink and Blue Flower Disk",
        materials: [
            {
                name: "Round Soil Area",
                amount: 1
            },
            {
                name: "Purple Impatiens",
                amount: 2
            },
            {
                name: "Blue Star Lily",
                amount: 2
            },
            {
                name: "Pink Bromeliad",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Pink_and_Blue_Flower_Disk.png"
    },
    {
        name: "Pink, Yellow and Black Flower Disk",
        materials: [
            {
                name: "Round Soil Area",
                amount: 1
            },
            {
                name: "Pink Houseleek",
                amount: 1
            },
            {
                name: "Orange Star Lily",
                amount: 2
            },
            {
                name: "Red Nasturtium",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Pink%2C_Yellow_and_Black_Flower_Disk.png"
    },
    {
        name: "Purple, Pink and Yellow Flower Disk",
        materials: [
            {
                name: "Round Soil Area",
                amount: 1
            },
            {
                name: "Pink Hydrangea",
                amount: 2
            },
            {
                name: "Purple Bell Flower",
                amount: 2
            },
            {
                name: "Yellow Daisy",
                amount: 1
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/73/Purple%2C_Pink_and_Yellow_Flower_Disk.png"
    },
    {
        name: "Red and Yellow Flower Disk",
        materials: [
            {
                name: "Round Soil Area",
                amount: 1
            },
            {
                name: "Dandelion",
                amount: 2
            },
            {
                name: "White Daisy",
                amount: 1
            },
            {
                name: "Red Falling Penstemon",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e8/Red_and_Yellow_Flower_Disk.png"
    },
    {
        name: "White, Red and Purple Flower Disk",
        materials: [
            {
                name: "Round Soil Area",
                amount: 1
            },
            {
                name: "White Impatiens",
                amount: 2
            },
            {
                name: "Purple Rising Penstemon",
                amount: 2
            },
            {
                name: "Orange & Red Marsh Milkweed",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c5/White%2C_Red_and_Purple_Flower_Disk.png"
    },
    {
        name: "Yellow, Red and Blue Flower Disk",
        materials: [
            {
                name: "Round Soil Area",
                amount: 1
            },
            {
                name: "Blue Passion Lily",
                amount: 4
            },
            {
                name: "Red Bell Flower",
                amount: 2
            },
            {
                name: "Sunflower",
                amount: 4
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e8/Yellow%2C_Red_and_Blue_Flower_Disk.png"
    },
    {
        name: "Rectangular Soil Area",
        materials: [
            {
                name: "Stone",
                amount: 8
            },
            {
                name: "Soil",
                amount: 8
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c8/Rectangular_Soil_Area.png"
    },
    {
        name: "Pink, Blue and Purple Flower Rectangle",
        materials: [
            {
                name: "Rectangular Soil Area",
                amount: 1
            },
            {
                name: "Pink Houseleek",
                amount: 1
            },
            {
                name: "Blue Marsh Milkweed",
                amount: 2
            },
            {
                name: "Purple Impatiens",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/81/Pink%2C_Blue_and_Purple_Flower_Rectangle.png"
    },
    {
        name: "Pink, Red and Purple Flower Rectangle",
        materials: [
            {
                name: "Rectangular Soil Area",
                amount: 1
            },
            {
                name: "Purple Hydrangea",
                amount: 2
            },
            {
                name: "Orange Marsh Milkweed",
                amount: 3
            },
            {
                name: "Red Bell Flower",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2c/Pink%2C_Red_and_Purple_Flower_Rectangle.png"
    },
    {
        name: "Red, Blue and Green Flower Rectangle",
        materials: [
            {
                name: "Rectangular Soil Area",
                amount: 1
            },
            {
                name: "Green Passion Lily",
                amount: 2
            },
            {
                name: "Blue Falling Penstemon",
                amount: 2
            },
            {
                name: "Orange Nasturtium",
                amount: 4
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/10/Red%2C_Blue_and_Green_Flower_Rectangle.png"
    },
    {
        name: "Red, White and Purple Flower Rectangle",
        materials: [
            {
                name: "Rectangular Soil Area",
                amount: 1
            },
            {
                name: "Red Bromeliad",
                amount: 2
            },
            {
                name: "White Impatiens",
                amount: 2
            },
            {
                name: "Purple Rising Penstemon",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/83/Red%2C_White_and_Purple_Flower_Rectangle.png"
    },
    {
        name: "Yellow and White Flower Rectangle",
        materials: [
            {
                name: "Rectangular Soil Area",
                amount: 1
            },
            {
                name: "White Daisy",
                amount: 2
            },
            {
                name: "Yellow Bromeliad",
                amount: 1
            },
            {
                name: "Orange Star Lily",
                amount: 3
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Yellow_and_White_Flower_Rectangle.png"
    },
    {
        name: "Yellow, Green and Purple Flower Rectangle",
        materials: [
            {
                name: "Rectangular Soil Area",
                amount: 1
            },
            {
                name: "Purple Falling Penstemon",
                amount: 2
            },
            {
                name: "Dandelion",
                amount: 2
            },
            {
                name: "Green Rising Penstemon",
                amount: 2
            }
        ],
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fb/Yellow%2C_Green_and_Purple_Flower_Rectangle.png"
    }
]

//Lamps
const lamps = [
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
const signs = [
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
const mailboxes = [
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
    }
]

export {refinedMaterials,enchantments,paving,fences,chests,stoves,mannequins,companions,functionalItems,furniture,balloons,touchOfMagic,fallEvent,winterEvent,springEvent,floral,lamps,signs,mailboxes};