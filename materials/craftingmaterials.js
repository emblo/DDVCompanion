//Cotton moved to ingredients
//Array of objects containing crafting materials in DDV
const craftingmaterials = [
    {
        name: "Clay",
        location: "Glade of Trust, Sunlit Plateau, Forgotten Lands",
        sellPrice: 20,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/a/a2/Clay.png/revision/latest?cb=20220908154257"
    },
    {
        name: "Coal Ore",
        location: "Everywhere, always available at Kristoff's Stall",
        sellPrice: 5,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/fe/Coal_Ore.png/revision/latest?cb=20220908154324"
    },
    {
        name: "Iron Ore",
        location: "Forest of Valor, Glade of Trust, Sunlit Plateau, Forgotten Lands, Frosted Heights",
        sellPrice: 10,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/8/87/Iron_Ore.png/revision/latest?cb=20220908160401"
    },
    {
        name: "Gold Nugget",
        location: "Sunlit Plateau, Frosted Heights, Forgotten Lands",
        sellPrice: 20,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/c/cf/Gold_Nugget.png/revision/latest?cb=20220908160601"
    },
    {
        name: "Stone",
        location: "Everywhere",
        sellPrice: 0,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/d/d4/Stone.png/revision/latest?cb=20220908155727"
    },
    {
        name: "Pebbles",
        location: "Dazzle Beach, Forest of Valor, Sunlit Plateau, Forgotten Lands",
        sellPrice: 10,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/7/75/Pebbles.png/revision/latest?cb=20220908160315"
    },
    {
        name: "Soil",
        location: "Plaza, Peaceful Meadow, Forest of Valor, Glade of Trust, Sunlit Plateau, Frosted Heights, Forgotten Lands",
        sellPrice: 3,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/4/42/Soil.png/revision/latest?cb=20220908155738"
    },
    {
        name: "Rich Soil",
        location: "Chance to drop when harvesting crops",
        sellPrice: 25,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/fa/Rich_Soil.png/revision/latest?cb=20221019172833"
    },
    {
        name: "Sand",
        location: "Dazzle Beach",
        sellPrice: 8,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/a/a7/Sand.png/revision/latest?cb=20220908160256"
    },
    {
        name: "Snowball",
        location: "Frosted Heights",
        sellPrice: 25,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/0/04/Snowball.png/revision/latest?cb=20220908160241"
    },
    {
        name: "Seaweed",
        location: "Chance to drop when fishing",
        sellPrice: 20,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/1/13/Seaweed.png/revision/latest?cb=20220909215005"
    },
    {
        name: "Red Algae",
        location: "Chance to drop when fishing",
        sellPrice: 150,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/3/36/Red_Algae.png/revision/latest?cb=20221206223310"
    },
    {
        name: "Softwood",
        location: "Plaza, Peaceful Meadow, Forest of Valor, Glade of Trust",
        sellPrice: 5,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/f4/Softwood.png/revision/latest?cb=20220908160208"
    },
    {
        name: "Hardwood",
        location: "Forest of Valor, Glade of Trust, Sunlit Plateau, Frosted Heights",
        sellPrice: 10,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/e/ed/Hardwood.png/revision/latest?cb=20220908160537"
    },
    {
        name: "Dry Wood",
        location: "Sunlit Plateau, Frosted Heights, Forgotten Lands",
        sellPrice: 25,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/f4/Dry_Wood.png/revision/latest?cb=20220908160549"
    },
    {
        name: "Dark Wood",
        location: "Forgotten Lands",
        sellPrice: 50,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/2/25/Dark_Wood.png/revision/latest?cb=20220908155638"
    },
    {
        name: "Dream Shard",
        location: "Can drop from digging in sparkling ground, clearing Night Thorns, or when feeding critters something they like or love.",
        sellPrice: 0,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/e/e2/Dream_Shard.png/revision/latest?cb=20221016233928"
    },
    {
        name: "Night Shard",
        location: "Can drop from digging in sparkling ground, clearing Night Thorns, or can be crafted with an Onyx at a crafting station.",
        sellPrice: 0,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/e/ef/Night_Shard.png/revision/latest?cb=20220919010659"
    }
]

export {craftingmaterials};