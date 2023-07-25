const fish = [
    {
        name: "Anglerfish",
        location: "Forgotten Lands",
        ripple: "Gold",
        sellPrice: 1500,
        energy: 2000,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/6/64/Anglerfish.png/revision/latest?cb=20220908042921",
        imgAlt: "A big round purple anglerfish, blue fins and a light rod sticking out of its forehead."
    },
    {
        name: "Festive Anglerfish",
        location: "Forgotten Lands",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 2000,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/0/06/Festive_Anglerfish.png/revision/latest?cb=20221206223553",
        imgAlt: "A big round purple anglerfish, blue fins and green and red holly sticking out of its forehead."
    },
    {
        name: "Bass",
        location: "Peaceful Meadow, Forest of Valor, Sunlit Plateau, Frosted Heights",
        ripple: "None",
        sellPrice: 25,
        energy: 150,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/b/bd/Bass.png/revision/latest?cb=20220908153521",
        imgAlt: "A green and brown bass."
    },
    {
        name: "Festive Bass",
        location: "Peaceful Meadow",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 150,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/c/cc/Festive_Bass.png/revision/latest?cb=20221206223621",
        imgAlt: "A green and brown bass with a santa hat on its forehead."
    },
    {
        name: "Bream",
        location: "Peaceful Meadow",
        ripple: "Blue",
        sellPrice: 280,
        energy: 700,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/8/82/Bream.png/revision/latest?cb=20220908153644",
        imgAlt: "A blue and white bream with pinkish cheeks."
    },
    {
        name: "Carp",
        location: "Forest of Valor, Sunlit Plateau",
        ripple: "Blue",
        sellPrice: 400,
        energy: 800,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/a/a8/Carp.png/revision/latest?cb=20220908153557",
        imgAlt: "An orange carp with dark fins."
    },
    {
        name: "Catfish",
        location: "Peaceful Meadow",
        ripple: "Gold",
        sellPrice: 550,
        energy: 1200,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/9/99/Catfish.png/revision/latest?cb=20220908153536",
        imgAlt: "A light blue catfish with light gray details."
    },
    {
        name: "Cod",
        location: "Dazzle Beach, Forgotten Lands, Glade of Trust",
        ripple: "None",
        sellPrice: 35,
        energy: 150,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/4/41/Cod.png/revision/latest?cb=20220908153612",
        imgAlt: "A brown cod with dark brown details."
    },
    {
        name: "Crab",
        location: "Frosted Heights",
        ripple: "Blue",
        sellPrice: 600,
        energy: 1200,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/6/63/Crab.png/revision/latest?cb=20220908153625",
        imgAlt: "A red crab with eight smaller legs and two bigger legs with claws at the end."
    },
    {
        name: "Fugu",
        location: "Dazzle Beach while raining",
        ripple: "Gold",
        sellPrice: 900,
        energy: 1700,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/e/e7/Fugu.png/revision/latest?cb=20220908153912",
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
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/f1/Herring.png/revision/latest?cb=20220908153934",
        imgAlt: "A blue and yellow herring."
    },
    {
        name: "Kingfish",
        location: "Dazzle Beach",
        ripple: "Blue",
        sellPrice: 450,
        energy: 800,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/fb/Kingfish.png/revision/latest?cb=20220917042243",
        imgAlt: "A light and dark blue striped Kingfish."
    },
    {
        name: "Lancetfish",
        location: "Forgotten Lands",
        ripple: "Blue",
        sellPrice: 650,
        energy: 1300,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/f1/Lancetfish.png/revision/latest?cb=20220917042205",
        imgAlt: "A light and dark blue Lancetfish with a big top fin."
    },
    {
        name: "Lobster",
        location: "Glade of Trust",
        ripple: "Gold",
        sellPrice: 950,
        energy: 1600,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/9/9f/Lobster.png/revision/latest?cb=20220917042156",
        imgAlt: "A red lobster with six smaller legs and two big claws."
    },
    {
        name: "Perch",
        location: "Forest of Valor, Sunlit Plateau",
        ripple: "White",
        sellPrice: 80,
        energy: 400,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/4/43/Perch.png/revision/latest?cb=20220917042147",
        imgAlt: "A light and dark green perch with orange markings on some of its fins."
    },
    {
        name: "Pike",
        location: "Forest of Valor",
        ripple: "Gold",
        sellPrice: 800,
        energy: 1500,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/3/31/Pike.png/revision/latest?cb=20220917042137",
        imgAlt: "A long pike that's light green with white spots and orange markings on its fins."
    },
    {
        name: "Rainbow Trout",
        location: "Peaceful Meadow, Forest of Valor",
        ripple: "White",
        sellPrice: 50,
        energy: 300,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/1/14/Rainbow_Trout.png/revision/latest?cb=20220917042126",
        imgAlt: "A purple rainbow trout with orange markings on its fins and dark purple spots."
    },
    {
        name: "Salmon",
        location: "Sunlit Plateau, Frosted Heights",
        ripple: "White",
        sellPrice: 150,
        energy: 500,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/e/e0/Salmon.png/revision/latest?cb=20220917042103",
        imgAlt: "A big red salmon with a white belly and brown markings on its fins, body, and face."
    },
    {
        name: "Festive Salmon",
        location: "Sunlit Plateau",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 500,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/5/5c/Festive_Salmon.png/revision/latest?cb=20221206223753",
        imgAlt: "A big red salmon with a white belly and brown markings on its fins, body, and face, and a tiny santa hat on its forehead."
    },
    {
        name: "Shrimp",
        location: "Dazzle Beach",
        ripple: "Blue",
        sellPrice: 300,
        energy: 750,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/9/91/Shrimp.png/revision/latest?cb=20220914091942",
        imgAlt: "A small shrimp with eight small legs."
    },
    {
        name: "Sole",
        location: "Forgotten Lands",
        ripple: "White",
        sellPrice: 200,
        energy: 500,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/4/47/Sole.png/revision/latest?cb=20220917042039",
        imgAlt: "An orange sole, a completely flat fish with yellow fins and two eyes on one side of its head."
    },
    {
        name: "Squid",
        location: "Glade of Trust, Forgotten Lands",
        ripple: "Blue",
        sellPrice: 500,
        energy: 1000,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/8/81/Squid.png/revision/latest?cb=20220917042030",
        imgAlt: "A long squid with multiple legs. The top of it is purple, and its a gradient color shift lightening the colors down on its legs. Two black eyes are on either side of its head."
    },
    {
        name: "Festive Squid",
        location: "Glade of Trust",
        ripple: "Red/green, holiday only",
        sellPrice: 0,
        energy: 1000,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/fa/Festive_Squid.png/revision/latest?cb=20221206231309",
        imgAlt: "A long squid with multiple legs. The top of it is purple, and its a gradient color shift lightening the colors down on its legs. Two black eyes are on either side of its head. It has a big santa hat on its head."
    },
    {
        name: "Swordfish",
        location: "Dazzle Beach",
        ripple: "Gold",
        sellPrice: 700,
        energy: 1500,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/f/f7/Swordfish.png/revision/latest?cb=20220917042022",
        imgAlt: "A big green and yellow swordfish with a protruding, sword-like nose."
    },
    {
        name: "Tilapia",
        location: "Sunlit Plateau, Frosted Heights",
        ripple: "Blue",
        sellPrice: 600,
        energy: 1150,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/7/73/Tilapia.png/revision/latest?cb=20220917042012",
        imgAlt: "A blue fish with white spots, white face and belly, and pink fins."
    },
    {
        name: "Tuna",
        location: "Forgotten Lands, Glade of Trust",
        ripple: "White",
        sellPrice: 95,
        energy: 350,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/c/c5/Tuna.png/revision/latest?cb=20220917041958",
        imgAlt: "A big fish with a white belly, blue top side and yellow fins."
    },
    {
        name: "Walleye",
        location: "Sunlit Plateau",
        ripple: "Gold",
        sellPrice: 1100,
        energy: 1700,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/0/05/Walleye.png/revision/latest?cb=20220917041948",
        imgAlt: "A yellow fish with orange spots and markings."
    },
    {
        name: "White Sturgeon",
        location: "Frosted Heights",
        ripple: "Gold",
        sellPrice: 1200,
        energy: 1800,
        imgSrc: "https://static.wikia.nocookie.net/disneydreamlightvalley/images/9/9e/White_Sturgeon.png/revision/latest?cb=20220917041939",
        imgAlt: "A long gray fish with orange markings on its fins."
    }
]

export {fish};
//Moved seaweed to crafting material