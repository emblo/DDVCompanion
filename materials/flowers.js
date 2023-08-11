const flowers = [
    {
       name: "Blue Falling Penstemon",
       location: "Plaza",
       sellPrice: 23,
       imgSrc: "https://dreamlightvalleywiki.com/images/4/4d/Blue_Falling_Penstemon.png",
       imgAlt: "Four blue falling penstemons with long green foliage at the base." 
    },
    {
        name: "Purple Falling Penstemon",
        location: "Plaza",
        sellPrice: 23,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/ed/Purple_Falling_Penstemon.png",
        imgAlt: "Four purple falling penstemons with long green foliage at the base."  
     },
     {
        name: "Red Falling Penstemon",
        location: "Plaza",
        sellPrice: 18,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3a/Red_Falling_Penstemon.png",
        imgAlt: "Four red falling penstemons with long green foliage at the base." 
     },
     {
        name: "White & Pink Falling Penstemon",
        location: "Plaza",
        sellPrice: 41,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b9/White_%26_Pink_Falling_Penstemon.png",
        imgAlt: "Four white and pink falling penstemons with long green foliage at the base."  
     },
     {
        name: "Dandelion",
        location: "Plaza",
        sellPrice: 23,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b1/Dandelion.png",
        imgAlt: "Three bright yellow dandelions with green foliage at the base." 
     },
     {
        name: "Green Rising Penstemon",
        location: "Peaceful Meadow",
        sellPrice: 35,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/04/Green_Rising_Penstemon.png",
        imgAlt: "Three green rising penstemons with small foliage at the base." 
     },
     {
        name: "Purple Rising Penstemon",
        location: "Peaceful Meadow",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0b/Purple_Rising_Penstemon.png",
        imgAlt: "Three purple rising penstemons with small foliage at the base."  
     },
     {
        name: "Yellow Daisy",
        location: "Peaceful Meadow",
        sellPrice: 20,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Yellow_Daisy.png",
        imgAlt: "Three yellow daisies with lush foliage at the base." 
     },
     {
        name: "White Daisy",
        location: "Peaceful Meadow",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/44/White_Daisy.png",
        imgAlt: "Three white daisies with lush foliage at the base."  
     },
     {
        name: "Red Daisy",
        location: "Peaceful Meadow",
        sellPrice: 48,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/73/Red_Daisy.png",
        imgAlt: "Three red daisies with lush foliage at the base."  
     },
     {
        name: "Blue Hydrangea",
        location: "Dazzle Beach",
        sellPrice: 28,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/2/26/HydrangeaBlue.png",
        imgAlt: "Four blue hydrangeas with long slim foliage at the base." 
     },
     {
        name: "Pink Hydrangea",
        location: "Dazzle Beach",
        sellPrice: 22,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/4/4c/HydrangeaPink.png",
        imgAlt: "Four pink hydrangeas with long slim foliage at the base." 
     },
     {
        name: "Purple Hydrangea",
        location: "Dazzle Beach",
        sellPrice: 39,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/9/97/HydrangeaPurple.png",
        imgAlt: "Four purple hydrangeas with long slim foliage at the base." 
     },
     {
        name: "White & Red Hydrangea",
        location: "Dazzle Beach",
        sellPrice: 54,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8e/White_%26_Red_Hydrangea.png",
        imgAlt: "Four white and red hydrangeas with long slim foliage at the base." 
     },
     {
        name: "Sunflower",
        location: "Dazzle Beach",
        sellPrice: 28,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/81/Sunflower.png",
        imgAlt: "Three tall sunflowers with stems with small leaves." 
     },
     {
        name: "Blue Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 48,
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6a/Blue_Marsh_Milkweed.png",
        imgAlt: "A blue marsh milkweed with three tiers of foliage." 
     },
     {
        name: "Orange & Red Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 66,
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4f/Orange_%26_Red_Marsh_Milkweed.png",
        imgAlt: "An orange and red marsh milkweed with three tiers of foliage." 
     },
     {
        name: "Orange Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 33,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d4/Orange_Marsh_Milkweed.png",
        imgAlt: "An orange marsh milkweed with three tiers of foliage." 
     },
     {
        name: "Purple Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 25,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/dd/Purple_Marsh_Milkweed.png",
        imgAlt: "A purple marsh milkweed with three tiers of foliage." 
     },
     {
        name: "White Marsh Milkweed",
        location: "Glade of Trust",
        sellPrice: 33,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5f/White_Marsh_Milkweed.png",
        imgAlt: "A white marsh milkweed with three tiers of foliage." 
     },
     {
        name: "Blue Star Lily",
        location: "Forest of Valor",
        sellPrice: 30,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b0/Blue_Star_Lily.png",
        imgAlt: "Three blue star lilies with small but lush foliage at the base." 
     },
     {
        name: "Orange Star Lily",
        location: "Forest of Valor",
        sellPrice: 43,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/a/a0/StarLilyOrange.png",
        imgAlt: "Three orange star lilies with small but lush foliage at the base."  
     },
     {
        name: "Purple Bell Flower",
        location: "Forest of Valor",
        sellPrice: 30,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a1/Purple_Bell_Flower.png",
        imgAlt: "Four purple bell flowers with very small foliage at the base."  
     },
     {
        name: "Red Bell Flower",
        location: "Forest of Valor",
        sellPrice: 23,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/14/Red_Bell_Flower.png",
        imgAlt: "Four red bell flowers with very small foliage at the base."   
     },
     {
        name: "White Bell Flower",
        location: "Forest of Valor",
        sellPrice: 60,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/19/White_Bell_Flower.png",
        imgAlt: "Four white bell flowers with very small foliage at the base."   
     },
     {
        name: "Orange Houseleek",
        location: "Sunlit Plateau",
        sellPrice: 52,
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a7/Orange_Houseleek.png",
        imgAlt: "A big orange houseleek with a smaller flower on the side and big, thick, and lush foliage."   
     },
     {
        name: "Pink Houseleek",
        location: "Sunlit Plateau",
        sellPrice: 35,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b1/Pink_Houseleek.png",
        imgAlt: "A big pink houseleek with a smaller flower on the side and big, thick, and lush foliage."  
     },

     {
        name: "Pink Bromeliad",
        location: "Sunlit Plateau",
        sellPrice: 27,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2a/Pink_Bromeliad.png",
        imgAlt: "Two pink bromeliads in big green foliage." 
     },
     {
        name: "Red Bromeliad",
        location: "Sunlit Plateau",
        sellPrice: 27,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/b/bd/BromeliaRed.png",
        imgAlt: "Two red bromeliads in big green foliage."  
     },
     {
        name: "Yellow Bromeliad",
        location: "Sunlit Plateau",
        sellPrice: 73,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/f/f3/BromeliaYellow.png",
        imgAlt: "Two yellow bromeliads in big green foliage."  
     },
     {
        name: "Black Passion Lily",
        location: "Frosted Heights",
        sellPrice: 79,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/9/91/PassionLilyBlack.png",
        imgAlt: "A big black passion lily with a long green stem and six leaves."  
     },
     {
        name: "Blue Passion Lily",
        location: "Frosted Heights",
        sellPrice: 56,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/f/f2/PassionLilyBlue.png",
        imgAlt: "A big blue passion lily with a long green stem and six leaves."   
     },
     {
        name: "Green Passion Lily",
        location: "Frosted Heights",
        sellPrice: 28,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/ca/Green_Passion_Lily.png",
        imgAlt: "A big green passion lily with a long green stem and six leaves."   
     },
     {
        name: "Red Passion Lily",
        location: "Frosted Heights",
        sellPrice: 38,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e5/Red_Passion_Lily.png",
        imgAlt: "A big red passion lily with a long green stem and six leaves."   
     },
     {
        name: "White Passion Lily",
        location: "Frosted Heights",
        sellPrice: 38,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/70/White_Passion_Lily.png",
        imgAlt: "A big white passion lily with a long green stem and six leaves."   
     },
     {
        name: "Orange Nasturtium",
        location: "Forgotten Lands",
        sellPrice: 60,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3a/Orange_Nasturtium.png",
        imgAlt: "A bunch of orange nasturtium with green stems." 
     },
     {
        name: "Red Nasturtium",
        location: "Forgotten Lands",
        sellPrice: 40,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Red_Nasturtium.png",
        imgAlt: "A bunch of red nasturtium with green stems."  
     },
     {
        name: "Yellow Nasturtium",
        location: "Forgotten Lands",
        sellPrice: 85,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/21/Yellow_Nasturtium.png",
        imgAlt: "A bunch of yellow nasturtium with green stems."  
     },
     {
        name: "Purple Impatiens",
        location: "Forgotten Lands",
        sellPrice: 40,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/73/Purple_Impatiens.png",
        imgAlt: "Five purple impatiens with lush green foliage at the base."  
     },
     {
        name: "White Impatiens",
        location: "Forgotten Lands",
        sellPrice: 30,
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c1/White_Impatiens.png",
        imgAlt: "Five white impatiens with lush green foliage at the base." 
     }
]

export {flowers};