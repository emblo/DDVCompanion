const gems = [
    {
        name: "Amethyst",
        location: "Frosted Heights, Forgotten Lands",
        sellPrice: "500",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/2/2e/Amethyst.png/revision/latest?cb=20220907140503"
    },
    {
        name: "Shiny Amethyst",
        location: "Frosted Heights, Forgotten Lands",
        sellPrice: "2000",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/2/26/Shiny_Amethyst.png/revision/latest?cb=20220907140514"
    },
    {
        name: "Aquamarine",
        location: "Dazzle Beach, Forest of Valor",
        sellPrice: "250",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/a/a2/Aquamarine.png/revision/latest?cb=20220907140525"
    },
    {
        name: "Shiny Aquamarine",
        location: "Dazzle Beach, Forest of Valor",
        sellPrice: "1000",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/b/b2/Shiny_Aquamarine.png/revision/latest?cb=20220907140536"
    },
    {
        name: "Citrine",
        location: "Glade of Trust, Sunlit Plateau",
        sellPrice: "380",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/f7/Citrine.png/revision/latest?cb=20220907140925"
    },
    {
        name: "Shiny Citrine",
        location: "Glade of Trust, Sunlit Plateau",
        sellPrice: "1500",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/a/a8/Shiny_Citrine.png/revision/latest?cb=20220907141011"
    },
    {
        name: "Diamond",
        location: "Forgotten Lands",
        sellPrice: "600",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/e/ea/Diamond.png/revision/latest?cb=20220907140612"
    },
    {
        name: "Shiny Diamond",
        location: "Forgotten Lands",
        sellPrice: "2400",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/e/ea/Shiny_Diamond.png/revision/latest?cb=20220907140643"
    },
    {
        name: "Emerald",
        location: "Forest of Valor, Glade of Trust",
        sellPrice: "325",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/6/6a/Emerald.png/revision/latest?cb=20220907140659"
    },
    {
        name: "Shiny Emerald",
        location: "Forest of Valor, Glade of Trust",
        sellPrice: "1300",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/b/bb/Shiny_Emerald.png/revision/latest?cb=20220907140723"
    },
    {
        name: "Garnet",
        location: "Plaza, Peaceful Meadow",
        sellPrice: "160",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/5/5a/Garnet.png/revision/latest?cb=20220907140735"
    },
    {
        name: "Shiny Garnet",
        location: "Plaza, Peaceful Meadow",
        sellPrice: "640",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/f1/Shiny_Garnet.png/revision/latest?cb=20220907140748"
    },
    {
        name: "Onyx",
        location: "Can drop when mining any mining node",
        sellPrice: "300",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/fb/Onyx.png/revision/latest?cb=20221206223253"
    },
    {
        name: "Peridot",
        location: "Peaceful Meadow, Dazzle Beach",
        sellPrice: "200",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/2/24/Peridot.png/revision/latest?cb=20220907140904"
    },
    {
        name: "Shiny Peridot",
        location: "Peaceful Meadow, Dazzle Beach",
        sellPrice: "800",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/8/82/Shiny_Peridot.png/revision/latest?cb=20220907140946"
    },
    {
        name: "Ruby",
        location: "Vitalys Mines",
        sellPrice: "350",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/a/a9/Ruby.png/revision/latest?cb=20221018161945"
    },
    {
        name: "Shiny Ruby",
        location: "Vitalys Mines",
        sellPrice: "1400",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/e/e3/Shiny_Ruby.png/revision/latest?cb=20221019205714"
    },
    {
        name: "Sapphire",
        location: "Vitalys Mines",
        sellPrice: "350",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/f7/Sapphire.png/revision/latest?cb=20221019205512"
    },
    {
        name: "Shiny Sapphire",
        location: "Vitalys Mines",
        sellPrice: "1400",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/7/74/Shiny_Sapphire.png/revision/latest?cb=20221019205731"
    },
    {
        name: "Topaz",
        location: "Plaza",
        sellPrice: "240",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/a/a5/Topaz.png/revision/latest?cb=20220907141131"
    },
    {
        name: "Shiny Topaz",
        location: "Plaza",
        sellPrice: "960",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/fc/Shiny_Topaz.png/revision/latest?cb=20220907141144"
    },
    {
        name: "Tourmaline",
        location: "Sunlit Plateau, Frosted Heights",
        sellPrice: "420",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/9/94/Tourmaline.png/revision/latest?cb=20220907141208"
    },
    {
        name: "Shiny Tourmaline",
        location: "Sunlit Plateau, Frosted Heights",
        sellPrice: "1600",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/8/87/Shiny_Tourmaline.png/revision/latest?cb=20220907141240"
    },
    {
        name: "Vitalys Crystal",
        location: "Vitalys Mines",
        sellPrice: "12",
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/d/d5/Vitalys_Crystal.png/revision/latest?cb=20221019205432"
    }
]

export {gems};