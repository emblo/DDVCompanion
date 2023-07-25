const gems = [
    {
        name: "Amethyst",
        location: "Frosted Heights, Forgotten Lands",
        sellPrice: "500",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2e/Amethyst.png",
        imgAlt: "A purple rectangular amethyst."
    },
    {
        name: "Shiny Amethyst",
        location: "Frosted Heights, Forgotten Lands",
        sellPrice: "2000",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/26/Shiny_Amethyst.png",
        imgAlt: "A big purple rectangular amethyst with sparkles around it."
    },
    {
        name: "Aquamarine",
        location: "Dazzle Beach, Forest of Valor",
        sellPrice: "250",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a2/Aquamarine.png",
        imgAlt: "An oval blue aquamarine."
    },
    {
        name: "Shiny Aquamarine",
        location: "Dazzle Beach, Forest of Valor",
        sellPrice: "1000",
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b2/Shiny_Aquamarine.png",
        imgAlt: "A big oval blue aquamarine with sparkles around it."
    },
    {
        name: "Citrine",
        location: "Glade of Trust, Sunlit Plateau",
        sellPrice: "380",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f7/Citrine.png",
        imgAlt: "An oval orange citrine."
    },
    {
        name: "Shiny Citrine",
        location: "Glade of Trust, Sunlit Plateau",
        sellPrice: "1500",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a8/Shiny_Citrine.png",
        imgAlt: "A big oval orange citrine with sparkles around it."
    },
    {
        name: "Diamond",
        location: "Forgotten Lands",
        sellPrice: "600",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ea/Diamond.png",
        imgAlt: "A silver diamond, laying on its side."
    },
    {
        name: "Shiny Diamond",
        location: "Forgotten Lands",
        sellPrice: "2400",
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/5/58/Gem_Location-Diamond_Shiny.png",
        imgAlt: "A big silver diamond, laying on its side with sparkles around it."
    },
    {
        name: "Emerald",
        location: "Forest of Valor, Glade of Trust",
        sellPrice: "325",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6a/Emerald.png",
        imgAlt: "A green rectangular emerald."
    },
    {
        name: "Shiny Emerald",
        location: "Forest of Valor, Glade of Trust",
        sellPrice: "1300",
        imgSrc: "https://dreamlightvalleywiki.com/images/b/bb/Shiny_Emerald.png",
        imgAlt: "A big green rectangular emerald with sparkles around it."
    },
    {
        name: "Garnet",
        location: "Plaza, Peaceful Meadow",
        sellPrice: "160",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5a/Garnet.png",
        imgAlt: "An oval red garnet."
    },
    {
        name: "Shiny Garnet",
        location: "Plaza, Peaceful Meadow",
        sellPrice: "640",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f1/Shiny_Garnet.png",
        imgAlt: "A big oval red garnet with sparkles around it."
    },
    {
        name: "Onyx",
        location: "Can drop when mining any mining node",
        sellPrice: "300",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fb/Onyx.png",
        imgAlt: "A black rectangular onyx."
    },
    {
        name: "Peridot",
        location: "Peaceful Meadow, Dazzle Beach",
        sellPrice: "200",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/24/Peridot.png",
        imgAlt: "An oval green peridot."
    },
    {
        name: "Shiny Peridot",
        location: "Peaceful Meadow, Dazzle Beach",
        sellPrice: "800",
        imgSrc: "https://dreamlightvalleywiki.com/images/8/82/Shiny_Peridot.png",
        imgAlt: "A big oval green peridot with sparkles around it."
    },
    {
        name: "Ruby",
        location: "Vitalys Mines",
        sellPrice: "350",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a9/Ruby.png",
        imgAlt: "A red rectangular ruby."
    },
    {
        name: "Shiny Ruby",
        location: "Vitalys Mines",
        sellPrice: "1400",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e3/Shiny_Ruby.png",
        imgAlt: "A big red rectangular ruby with sparkles around it."
    },
    {
        name: "Sapphire",
        location: "Vitalys Mines",
        sellPrice: "350",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f7/Sapphire.png",
        imgAlt: "A blue rectangular sapphire."
    },
    {
        name: "Shiny Sapphire",
        location: "Vitalys Mines",
        sellPrice: "1400",
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Shiny_Sapphire.png",
        imgAlt: "A big blue rectangular sapphire with sparkles around it."
    },
    {
        name: "Topaz",
        location: "Plaza",
        sellPrice: "240",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a5/Topaz.png",
        imgAlt: "A yellow rectangular topaz."
    },
    {
        name: "Shiny Topaz",
        location: "Plaza",
        sellPrice: "960",
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/4/4a/Gem_Location-Topaze_Shiny.png",
        imgAlt: "A big yellow rectangular topaz with sparkles around it."
    },
    {
        name: "Tourmaline",
        location: "Sunlit Plateau, Frosted Heights",
        sellPrice: "420",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/94/Tourmaline.png",
        imgAlt: "An oval pink tourmaline."
    },
    {
        name: "Shiny Tourmaline",
        location: "Sunlit Plateau, Frosted Heights",
        sellPrice: "1600",
        imgSrc: "https://dreamlightvalleywiki.com/images/8/87/Shiny_Tourmaline.png",
        imgAlt: "A big oval pink tourmaline with sparkles around it."
    },
    {
        name: "Vitalys Crystal",
        location: "Vitalys Mines",
        sellPrice: "12",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d5/Vitalys_Crystal.png",
        imgAlt: "A dark and light blue crystal formation."
    }
]

export {gems};