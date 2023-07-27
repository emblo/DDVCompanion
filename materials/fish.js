const fish = [
    {
        name: "Anglerfish",
        location: "Forgotten Lands",
        ripple: "Gold",
        sellPrice: 1500,
        energy: 2000,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/7/7c/Fish-AnglerFish.png?width=325",
        imgAlt: "A big round purple anglerfish, blue fins and a light rod sticking out of its forehead."
    },
    {
        name: "Festive Anglerfish",
        location: "Forgotten Lands",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 2000,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/f/f1/Festive_AnglerFish.png?width=325",
        imgAlt: "A big round purple anglerfish, blue fins and green and red holly sticking out of its forehead."
    },
    {
        name: "Bass",
        location: "Peaceful Meadow, Forest of Valor, Sunlit Plateau, Frosted Heights",
        ripple: "None",
        sellPrice: 25,
        energy: 150,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/6/6d/Fish-Bass.png?width=325",
        imgAlt: "A green and brown bass."
    },
    {
        name: "Festive Bass",
        location: "Peaceful Meadow",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 150,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/c/cc/Festive_Bass.png?width=325",
        imgAlt: "A green and brown bass with a santa hat on its forehead."
    },
    {
        name: "Bream",
        location: "Peaceful Meadow",
        ripple: "Blue",
        sellPrice: 280,
        energy: 700,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/4/46/Fish-Bream.png?width=325",
        imgAlt: "A blue and white bream with pinkish cheeks."
    },
    {
        name: "Carp",
        location: "Forest of Valor, Sunlit Plateau",
        ripple: "Blue",
        sellPrice: 400,
        energy: 800,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/0/04/Fish-Carp.png?width=325",
        imgAlt: "An orange carp with dark fins."
    },
    {
        name: "Catfish",
        location: "Peaceful Meadow",
        ripple: "Gold",
        sellPrice: 550,
        energy: 1200,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/e/ee/Fish-Catfish.png?width=325",
        imgAlt: "A light blue catfish with light gray details."
    },
    {
        name: "Cod",
        location: "Dazzle Beach, Forgotten Lands, Glade of Trust",
        ripple: "None",
        sellPrice: 35,
        energy: 150,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/5/5f/Fish-Cod.png?width=325",
        imgAlt: "A brown cod with dark brown details."
    },
    {
        name: "Crab",
        location: "Frosted Heights",
        ripple: "Blue",
        sellPrice: 600,
        energy: 1200,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/c/c5/Fish-Crab.png?width=325",
        imgAlt: "A red crab with eight smaller legs and two bigger legs with claws at the end."
    },
    {
        name: "Fugu",
        location: "Dazzle Beach while raining",
        ripple: "Gold",
        sellPrice: 900,
        energy: 1700,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/4/46/Fish-Fugu.png?width=325",
        imgAlt: "A yellow, green, and white pufferfish called Fugu."
    },
    {
        name: "Festive Fugu",
        location: "Dazzle Beach while raining",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 1700,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2f/Festive_Fugu.png",
        imgAlt: "A yellow, green, and white pufferfish called Fugu, with a small santa hat on its forehead."
    },
    {
        name: "Here and There Fish",
        location: "Everywhere in the morning and evening",
        ripple: "White, and in none",
        sellPrice: 2000,
        energy: 1000,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/35/Here_and_There_Fish.png",
        imgAlt: "A pink blobfish with big black bulging eyes."
    },
    {
        name: "Herring",
        location: "Dazzle Beach, Glade of Trust",
        ripple: "White",
        sellPrice: 65,
        energy: 250,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/0/06/Fish-Herring.png?width=325",
        imgAlt: "A blue and yellow herring."
    },
    {
        name: "Kingfish",
        location: "Dazzle Beach",
        ripple: "Blue",
        sellPrice: 450,
        energy: 800,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/5/5a/KingFish.png?width=325",
        imgAlt: "A light and dark blue striped Kingfish."
    },
    {
        name: "Lancetfish",
        location: "Forgotten Lands",
        ripple: "Blue",
        sellPrice: 650,
        energy: 1300,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/c/cc/LancetFish.png?width=325",
        imgAlt: "A light and dark blue Lancetfish with a big top fin."
    },
    {
        name: "Lobster",
        location: "Glade of Trust",
        ripple: "Gold",
        sellPrice: 950,
        energy: 1600,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/c/c6/Fish-Lobster.png?width=325",
        imgAlt: "A red lobster with six smaller legs and two big claws."
    },
    {
        name: "Perch",
        location: "Forest of Valor, Sunlit Plateau",
        ripple: "White",
        sellPrice: 80,
        energy: 400,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/1/18/Fish-Perch.png?width=325",
        imgAlt: "A light and dark green perch with orange markings on some of its fins."
    },
    {
        name: "Pike",
        location: "Forest of Valor",
        ripple: "Gold",
        sellPrice: 800,
        energy: 1500,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/a/a7/Fish-Pike.png?width=325",
        imgAlt: "A long pike that's light green with white spots and orange markings on its fins."
    },
    {
        name: "Rainbow Trout",
        location: "Peaceful Meadow, Forest of Valor",
        ripple: "White",
        sellPrice: 50,
        energy: 300,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/5/57/RainbowTrout.png?width=325",
        imgAlt: "A purple rainbow trout with orange markings on its fins and dark purple spots."
    },
    {
        name: "Salmon",
        location: "Sunlit Plateau, Frosted Heights",
        ripple: "White",
        sellPrice: 150,
        energy: 500,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/0/01/Fish-Salmon.png?width=325",
        imgAlt: "A big red salmon with a white belly and brown markings on its fins, body, and face."
    },
    {
        name: "Festive Salmon",
        location: "Sunlit Plateau",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 500,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/5/5c/Festive_Salmon.png?width=325",
        imgAlt: "A big red salmon with a white belly and brown markings on its fins, body, and face, and a tiny santa hat on its forehead."
    },
    {
        name: "Shrimp",
        location: "Dazzle Beach",
        ripple: "Blue",
        sellPrice: 300,
        energy: 750,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/0/0b/Fish-Shrimp.png?width=325",
        imgAlt: "A small shrimp with eight small legs."
    },
    {
        name: "Sole",
        location: "Forgotten Lands",
        ripple: "White",
        sellPrice: 200,
        energy: 500,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/8/85/Fish-Sole.png?width=325",
        imgAlt: "An orange sole, a completely flat fish with yellow fins and two eyes on one side of its head."
    },
    {
        name: "Squid",
        location: "Glade of Trust, Forgotten Lands",
        ripple: "Blue",
        sellPrice: 500,
        energy: 1000,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/5/5f/Fish-Squid.png?width=325",
        imgAlt: "A long squid with multiple legs. The top of it is purple, and its a gradient color shift lightening the colors down on its legs. Two black eyes are on either side of its head."
    },
    {
        name: "Festive Squid",
        location: "Glade of Trust",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 1000,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/f/fa/Festive_Squid.png?width=325",
        imgAlt: "A long squid with multiple legs. The top of it is purple, and its a gradient color shift lightening the colors down on its legs. Two black eyes are on either side of its head. It has a big santa hat on its head."
    },
    {
        name: "Swordfish",
        location: "Dazzle Beach",
        ripple: "Gold",
        sellPrice: 700,
        energy: 1500,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/a/ab/Fish-Swordfish.png?width=325",
        imgAlt: "A big green and yellow swordfish with a protruding, sword-like nose."
    },
    {
        name: "Tilapia",
        location: "Sunlit Plateau, Frosted Heights",
        ripple: "Blue",
        sellPrice: 600,
        energy: 1150,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/0/00/Fish-Tilapia.png?width=325",
        imgAlt: "A blue fish with white spots, white face and belly, and pink fins."
    },
    {
        name: "Tuna",
        location: "Forgotten Lands, Glade of Trust",
        ripple: "White",
        sellPrice: 95,
        energy: 350,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/1/1d/Fish-Tuna.png?width=325",
        imgAlt: "A big fish with a white belly, blue top side and yellow fins."
    },
    {
        name: "Walleye",
        location: "Sunlit Plateau",
        ripple: "Gold",
        sellPrice: 1100,
        energy: 1700,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/2/28/Fish-Walleye.png?width=325",
        imgAlt: "A yellow fish with orange spots and markings."
    },
    {
        name: "White Sturgeon",
        location: "Frosted Heights",
        ripple: "Gold",
        sellPrice: 1200,
        energy: 1800,
        imgSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/disney-dreamlight-valley/e/e8/Fish-WhiteSturgeon.png?width=325",
        imgAlt: "A long gray fish with orange markings on its fins."
    }
]

export {fish};
//Moved seaweed to crafting material