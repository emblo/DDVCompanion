const flowers = [
    {
       name: "Blue Falling Penstemon",
       location: "Plaza",
       sellPrice: 23,
       imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/4/4d/Blue_Falling_Penstemon.png/revision/latest/thumbnail/width/360/height/360?cb=20220917054117" 
    },
    {
        name: "Purple Falling Penstemon",
        location: "Plaza",
        sellPrice: 23,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ed/Purple_Falling_Penstemon.png" 
     },
     {
        name: "Red Falling Penstemon",
        location: "Plaza",
        sellPrice: 18,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/3/3a/Red_Falling_Penstemon.png/revision/latest/thumbnail/width/360/height/360?cb=20220917053721" 
     },
     {
        name: "White & Pink Falling Penstemon",
        location: "Plaza",
        sellPrice: 41,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/White_%26_Pink_Falling_Penstemon.png" 
     },
     {
        name: "Dandelion",
        location: "Plaza",
        sellPrice: 23,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/b/b1/Dandelion.png/revision/latest/thumbnail/width/360/height/360?cb=20220917054033" 
     },
     {
        name: "Green Rising Penstemon",
        location: "Peaceful Meadow",
        sellPrice: 35,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/04/Green_Rising_Penstemon.png" 
     },
     {
        name: "Purple Rising Penstemon",
        location: "Peaceful Meadow",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0b/Purple_Rising_Penstemon.png" 
     },
     {
        name: "Yellow Daisy",
        location: "Peaceful Meadow",
        sellPrice: 20,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Yellow_Daisy.png" 
     },
     {
        name: "White Daisy",
        location: "Peaceful Meadow",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/44/White_Daisy.png" 
     },
     {
        name: "Red Daisy",
        location: "Peaceful Meadow",
        sellPrice: 48,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/73/Red_Daisy.png" 
     },
     {
        name: "Blue Hydrangea",
        location: "Dazzle Beach",
        sellPrice: 28,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/4/49/Blue_Hydrangea.png/revision/latest/thumbnail/width/360/height/360?cb=20220917054110" 
     },
     {
        name: "Pink Hydrangea",
        location: "Dazzle Beach",
        sellPrice: 22,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/6/67/Pink_Hydrangea.png/revision/latest/thumbnail/width/360/height/360?cb=20220917053906" 
     },
     {
        name: "Purple Hydrangea",
        location: "Dazzle Beach",
        sellPrice: 39,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/9/97/HydrangeaPurple.png" 
     },
     {
        name: "White & Red Hydrangea",
        location: "Dazzle Beach",
        sellPrice: 54,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8e/White_%26_Red_Hydrangea.png" 
     },
     {
        name: "Sunflower",
        location: "Dazzle Beach",
        sellPrice: 28,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/81/Sunflower.png" 
     },
     {
        name: "Blue Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 48,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6a/Blue_Marsh_Milkweed.png" 
     },
     {
        name: "Orange & Red Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 66,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Orange_%26_Red_Marsh_Milkweed.png" 
     },
     {
        name: "Orange Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 33,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d4/Orange_Marsh_Milkweed.png" 
     },
     {
        name: "Purple Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Purple_Marsh_Milkweed.png" 
     },
     {
        name: "White Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 33,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5f/White_Marsh_Milkweed.png" 
     },
     {
        name: "Blue Star Lily",
        location: "Forest of Valor",
        sellPrice: 30,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b0/Blue_Star_Lily.png" 
     },
     {
        name: "Orange Star Lily",
        location: "Forest of Valor",
        sellPrice: 43,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/a/a0/StarLilyOrange.png" 
     },
     {
        name: "Purple Bell Flower",
        location: "Forest of Valor",
        sellPrice: 30,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a1/Purple_Bell_Flower.png" 
     },
     {
        name: "Red Bell Flower",
        location: "Forest of Valor",
        sellPrice: 23,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/14/Red_Bell_Flower.png" 
     },
     {
        name: "White Bell Flower",
        location: "Forest of Valor",
        sellPrice: 60,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/19/White_Bell_Flower.png" 
     },
     {
        name: "Orange Houseleek",
        location: "Sunlit Plateau",
        sellPrice: 52,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a7/Orange_Houseleek.png" 
     },
     {
        name: "Pink Houseleek",
        location: "Sunlit Plateau",
        sellPrice: 35,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b1/Pink_Houseleek.png" 
     },

     {
        name: "Pink Bromeliad",
        location: "Sunlit Plateau",
        sellPrice: 27,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2a/Pink_Bromeliad.png" 
     },
     {
        name: "Red Bromeliad",
        location: "Sunlit Plateau",
        sellPrice: 27,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/0/04/Red_Bromeliad.png/revision/latest/thumbnail/width/360/height/360?cb=20220917053743" 
     },
     {
        name: "Yellow Bromeliad",
        location: "Sunlit Plateau",
        sellPrice: 73,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/1/13/Yellow_Bromeliad.png/revision/latest/thumbnail/width/360/height/360?cb=20220917053532" 
     },
     {
        name: "Black Passion Lily",
        location: "Frosted Heights",
        sellPrice: 79,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/2/23/Black_Passion_Lily.png/revision/latest/thumbnail/width/360/height/360?cb=20220917054125" 
     },
     {
        name: "Blue Passion Lily",
        location: "Frosted Heights",
        sellPrice: 56,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/7/7a/Blue_Passion_Lily.png/revision/latest/thumbnail/width/360/height/360?cb=20220917054054" 
     },
     {
        name: "Green Passion Lily",
        location: "Frosted Heights",
        sellPrice: 28,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/ca/Green_Passion_Lily.png" 
     },
     {
        name: "Red Passion Lily",
        location: "Frosted Heights",
        sellPrice: 38,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e5/Red_Passion_Lily.png" 
     },
     {
        name: "White Passion Lily",
        location: "Frosted Heights",
        sellPrice: 38,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/70/White_Passion_Lily.png" 
     },
     {
        name: "Orange Nasturtium",
        location: "Forgotten Lands",
        sellPrice: 60,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3a/Orange_Nasturtium.png" 
     },
     {
        name: "Red Nasturtium",
        location: "Forgotten Lands",
        sellPrice: 40,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Red_Nasturtium.png" 
     },
     {
        name: "Yellow Nasturtium",
        location: "Forgotten Lands",
        sellPrice: 85,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/21/Yellow_Nasturtium.png" 
     },
     {
        name: "Purple Impatiens",
        location: "Forgotten Lands",
        sellPrice: 40,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/73/Purple_Impatiens.png" 
     },
     {
        name: "White Impatiens",
        location: "Forgotten Lands",
        sellPrice: 30,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c1/White_Impatiens.png" 
     }
]

