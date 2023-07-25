//Cotton moved to ingredients
//Array of objects containing crafting materials in DDV
const craftingmaterials = [
    {
        name: "Clay",
        location: "Glade of Trust, Sunlit Plateau, Forgotten Lands",
        sellPrice: 20,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a2/Clay.png",
        imgAlt: "A pile with three brown clay bricks in a puddle of clay."
    },
    {
        name: "Coal Ore",
        location: "Everywhere, always available at Kristoff's Stall",
        sellPrice: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fe/Coal_Ore.png",
        imgAlt: "Two pieces of black charcoal, a bigger one placed leaning on a smaller one."
    },
    {
        name: "Iron Ore",
        location: "Forest of Valor, Glade of Trust, Sunlit Plateau, Forgotten Lands, Frosted Heights",
        sellPrice: 10,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/87/Iron_Ore.png",
        imgAlt: "A nugget of metal ore, with spiky pieces of gray iron protruding from it."
    },
    {
        name: "Gold Nugget",
        location: "Sunlit Plateau, Frosted Heights, Forgotten Lands",
        sellPrice: 20,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/cf/Gold_Nugget.png",
        imgAlt: "Three pieces of gold metal nuggets in three sizes, placed together in a group."
    },
    {
        name: "Stone",
        location: "Everywhere",
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d4/Stone.png",
        imgAlt: "A big square piece of stone with two smaller rocks on the side of it."
    },
    {
        name: "Pebbles",
        location: "Dazzle Beach, Forest of Valor, Sunlit Plateau, Forgotten Lands",
        sellPrice: 10,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/75/Pebbles.png",
        imgAlt: "A group of round gray pebbles in varying sizes."
    },
    {
        name: "Soil",
        location: "Plaza, Peaceful Meadow, Forest of Valor, Glade of Trust, Sunlit Plateau, Frosted Heights, Forgotten Lands",
        sellPrice: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/42/Soil.png",
        imgAlt: "A few pieces of rectangular soil with tufty grass on top."
    },
    {
        name: "Rich Soil",
        location: "Chance to drop when harvesting crops",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fa/Rich_Soil.png",
        imgAlt: "A few pieces of rectangular red soil with tufty grass on top, with some white flowers with a yellow center."
    },
    {
        name: "Sand",
        location: "Dazzle Beach",
        sellPrice: 8,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a7/Sand.png",
        imgAlt: "A big pile of sand with a tiny piece of sand on the right."
    },
    {
        name: "Snowball",
        location: "Frosted Heights",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/04/Snowball.png",
        imgAlt: "A big and round white snowball."
    },
    {
        name: "Seaweed",
        location: "Chance to drop when fishing",
        sellPrice: 20,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/13/Seaweed.png",
        imgAlt: "Seaweed in various shades of green."
    },
    {
        name: "Red Algae",
        location: "Chance to drop when fishing",
        sellPrice: 150,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/36/Red_Algae.png",
        imgAlt: "Red seaweed wiwth various shades of green at the top."
    },
    {
        name: "Softwood",
        location: "Plaza, Peaceful Meadow, Forest of Valor, Glade of Trust",
        sellPrice: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f4/Softwood.png",
        imgAlt: "A group of light colored sticks in varying sizes."
    },
    {
        name: "Hardwood",
        location: "Forest of Valor, Glade of Trust, Sunlit Plateau, Frosted Heights",
        sellPrice: 10,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ed/Hardwood.png",
        imgAlt: "A group of deep brown colored sticks in varying sizes."
    },
    {
        name: "Dry Wood",
        location: "Sunlit Plateau, Frosted Heights, Forgotten Lands",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f4/Dry_Wood.png",
        imgAlt: "A group of white colored sticks in varying sizes."
    },
    {
        name: "Dark Wood",
        location: "Forgotten Lands",
        sellPrice: 50,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/25/Dark_Wood.png",
        imgAlt: "A group of dark brown colored sticks in varying sizes."
    },
    {
        name: "Dream Shard",
        location: "Can drop from digging in sparkling ground, clearing Night Thorns, or when feeding critters something they like or love.",
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e2/Dream_Shard.png",
        imgAlt: "A crystal like pink shard."
    },
    {
        name: "Night Shard",
        location: "Can drop from digging in sparkling ground, clearing Night Thorns, or can be crafted with an Onyx at a crafting station.",
        sellPrice: 0,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ef/Night_Shard.png",
        imgAlt: "A crystal like black shard."
    }
]

export {craftingmaterials};