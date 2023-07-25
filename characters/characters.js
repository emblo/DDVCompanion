//Array of objects holding character information for the characters currently in DDV
const characters = [
    {
        name: "Merlin",
        movie: "The Sword in the Stone",
        info: "Merlin is the very first character that's encountered in the game. He lives in the Dreamlight Library and helps the Player during their journey in uncovering the cause and solution to the Forgetting.",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a6/Merlin.png",
        quote: "'It's up to you how far you'll go. If you don't try, you'll never know.'"
    },
    {
        name: "WALL-E",
        movie: "WALL-E",
        info: "WALL-E, or Waste Allocation Load Lifter - Earth-Class, is a little robot that can be welcomed to the valley by journeying through one of the three initial portals in the Dream Castle. He lives in WALL-E's Truck and eventually has a little garden that the Player can harvest from.",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fa/WALL-E.png",
        quote: "'There's lots of world out there'"
    },
    {
        name: "Stitch",
        movie: "Lilo & Stitch",
        info: "Stitch, or Experiment 626, lives in Stitch's House and can be unlocked following a shorter questchain.",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5f/Stitch.png",
        quote: "'Ohana means family. Family means nobody gets left behind or forgotten.'",
    },
    {
        name: "Maui",
        movie: "Moana",
        info: "Maui is a charismatic demigod wielding a powerful and magical fish hook. He lives in the Peaceful Grotto and can often be seen directly in the Player's path, beating his chest.",
        imgSrc: "https://dreamlightvalleywiki.com/images/4/40/Maui.png",
        quote: "'What can I say except 'you're welcome'?'",
    },
    {
        name: "Moana",
        movie: "Moana has an unlimited amount of love for the ocean and voyaging and can often be found dancing on Dazzle Beach. She lives in Moana's Fale and will eventually have an upgradeable boat that passively gathers fish that the Player can collect.",
        info: "Moana is ",
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f5/Moana.png",
        quote: "'There comes a day when you're gonna look around and realize happiness is where you are.'",
    },
    {
        name: "Remy",
        movie: "Ratatouille",
        info: "Remy is a passionate little chef that lives in Remy's House. He can be welcomed to the valley after travelling through one of the three initial gates in the Dream Castle. Once in the valley and a short quest, Chez Remy is re-opened for the Player to buy pantry ingredients, serve diners, and cook meals.",
        imgSrc: "https://dreamlightvalleywiki.com/images/7/70/Remy.png",
        quote: "'You must not let anyone define your limits because of where you come from. Your only limit is your soul.'",
    },
    {
        name: "Nala",
        movie: "The Lion King",
        info: "Nala can be found after unlocking and entering the Lion King gate in the Dream Castle, where she is hanging out with Simba. Once she has been welcomed to the valley after a questline, she lives in Pride Rock with Simba.",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9e/Nala.png",
        quote: "'Being brave doesn't mean you go looking for trouble.'",
    },
    {
        name: "Simba",
        movie: "The Lion King",
        info: "Simba can be found after unlocking and entering the Lion King gate in the Dream Castle, where he is hanging out with Nala. Once he has been welcomed to the valley after  questline, he lives in Pride Rock with Nala.",
        imgSrc: "https://dreamlightvalleywiki.com/images/9/95/Simba.png",
        quote: "'Oh yes, the past can hurt. But from the way I see it, you can either run from it, or learn from it.'",
    },
    {
        name: "Scar",
        movie: "The Lion King",
        info: "Scar is a power hungry lion that's always scheming to find a way to power. Once welcomed to the valley he lives in the Giant Skull that is initially found in the Elephant Graveyard in the Sunlit Plateau.",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c7/Scar.png",
        quote: "'I'm surrounded by idiots.'",
    },
    {
        name: "Ariel",
        movie: "The Little Mermaid",
        info: "Ariel can be found swimming or walking in the valley after the Player has welcomed her and completed one of Prince Eric's friendship quests. Her home, Ariel's Sea Castle, can be placed in the valley's waters as long as there's sufficient space.",
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0a/Ariel.png",
        quote: "'Have you ever seen something so wonderful in your entire life?'",
    },
    {
        name: "Prince Eric",
        movie: "The Little Mermaid",
        info: "Prince Eric can be found playing his flute in various places in the valley, when he's not busy standing directly on top of the Player. He lives in Prince Eric's Castle and can be welcomed to the valley after completing one of Ursula's last few quests.",
        imgSrc: "https://dreamlightvalleywiki.com/images/c/c5/Prince_Eric.png",
        quote: "'Who says that my dreams have to stay just my dreams?'",
    },
    {
        name: "Ursula",
        movie: "The Little Mermaid",
        info: "Ursula is a scheming sea witch that longs for power and attempts to get it by striking deals with unsuspecting merfolk. She can be found living in her home, Ursula's Lair, or just out of talking distance to the Player. ",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/a4/Ursula.png",
        quote: "'Life's full of tough choices, isn't it?'",
    },
    {
        name: "Anna",
        movie: "Frozen",
        info: "Anna is an optimistic and caring princess that is always trying to help those around her and make sure they are happy and healthy. Once welcomed to the valley she can be found in her home, the Frozen Castle, with Kristoff and Olaf.",
        imgSrc: "https://dreamlightvalleywiki.com/images/a/ae/Anna.png",
        quote: "'Follow your heart and do what is right.'",
    },
    {
        name: "Elsa",
        movie: "Frozen",
        info: "Elsa the Snow queen wields the power of snow and ice and is the fifth spirit of the Enchanted Forest. She can be found in her home, the Ice Cavern",
        imgSrc: "https://dreamlightvalleywiki.com/images/4/4a/Elsa.png",
        quote: "'The cold never bothered me anyway.'",
    },
    {
        name: "Kristoff",
        movie: "Frozen",
        info: "Kristoff lives in the Frozen Castle with Anna and Olaf and it's with his help that the Player can rescue and later welcome Donald Duck. Eventually he will also have a stall that the Player can buy crafting material from once a day.",
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b0/Kristoff.png",
        quote: "'Reindeers are better than people.'",
    },
    {
        name: "Olaf",
        movie: "Frozen",
        info: "Olaf is a lovable little snowman that can be found living in the Frozen Castle with Anna and Kristoff. He can be welcomed to the valley after solving the mystery of the Great Blizzard in the Frosted Heights.",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d2/Olaf.png",
        quote: "'Some people are worth melting for.'",
    },
    {
        name: "Mother Gothel",
        movie: "Tangled",
        info: "Mother Gothel is an old crone that has extended her life several hundred years by the consistent use of a magical golden flower, and later Rapunzel. In the valley she can be found scheming in her home in the Glade of Trust, the Giant Willow.",
        imgSrc: "https://dreamlightvalleywiki.com/images/0/02/Mother_Gothel.png",
        quote: "'Mother knows best.'",
    },
    {
        name: "Donald Duck",
        movie: "Mickey & Friends",
        info: "Donald Duck, or just Donald, is first encountered after the Player helps Kristoff find and rescue him from the Dark Grove. He can be found living in his home, the S.S. Daisy, or more commonly when throwing a temper tantrum right in the Player's path.",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/6f/Donald_Duck.png",
        quote: "'Things don't always work out the first time, but keep trying.'",
    },
    {
        name: "Goofy",
        movie: "Mickey & Friends",
        info: "Goofy is a kind and positive villager that's in the valley when the Player starts the game. He can be found in his home, Goofy's House, or often fishing in the pond outside of it.",
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e5/Goofy.png",
        quote: "'Life's too short to always be serious.'",
    },
    {
        name: "Mickey Mouse",
        movie: "Mickey & Friends",
        info: "Mickey Mouse is found already living in the valley as the Player begins the game. He can be found inside his home, Mickey's House, or out wandering the village with his girlfriend, Minnie.",
        imgSrc: "https://dreamlightvalleywiki.com/images/d/d4/Mickey_Mouse.png",
        quote: "'If you can dream it, you can do it.'",
    },
    {
        name: "Minnie Mouse",
        movie: "Mickey & Friends",
        info: "Minnie Mouse is Mickey's longtime girlfriend and she can be found wandering the village when she's not inside her home, Minnie's House. She always encourages the player in their journey of solving the Forgetting.",
        imgSrc: "https://dreamlightvalleywiki.com/images/6/67/Minnie_Mouse.png",
        quote: "'Do what makes you happy!'",
    },
    {
        name: "Scrooge McDuck",
        movie: "Mickey & Friends",
        info: "Scrooge McDuck, or Scrooge, is already living in the valley when the Player begins the game. His upgradeable home, Scrooge's Store, offers the Player a selection of items to purchase everyday.",
        imgSrc: "https://dreamlightvalleywiki.com/images/5/54/Scrooge_McDuck.png",
        quote: "'I made it by being tougher than the toughies, and smarter than the smarties! And I made it square!'",
    },
    {
        name: "Buzz Lightyear",
        movie: "Toy Story",
        info: "Buzz Lightyear, or just Buzz, is a spaceman often found patrolling the perimeter of the valley. He can be found in his home, Buzz's RV, and is always ready to test the Player's preparedness for space scenarios.",
        imgSrc: "https://dreamlightvalleywiki.com/images/b/b4/Buzz_Lightyear.png",
        quote: "'To infinity and beyond!'",
    },
    {
        name: "Woody",
        movie: "Toy Story",
        info: "Sheriff Woody is a friendly cowboy that's always running around in the valley. He lives in his house, Woody's Carousel, that the player gets to repair through a questline.",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/25/Woody.png",
        quote: "'You've got a friend in me!'",
    },
    {
        name: "The Fairy Godmother",
        movie: "Cinderella",
        info: "The Fairy Godmother, a constant symbol of hope, is a kind fairy that make dreams come true for those that are kind and pure of heart. She can be found in her home, the Pumpkin House, or wandering the valley.",
        imgSrc: "https://dreamlightvalleywiki.com/images/2/20/The_Fairy_Godmother.png",
        quote: "'Bibbidi-bobbidi-boo!'",
    },
    {
        name: "Mirabel",
        movie: "Encanto",
        info: "Mirabel is a kind and magical friend that wanders the valley often surrounded by a bunch of butterflies. She can be found in her home, Mini-Casita, or very often in Chez Remy where she might be waiting for some Buñuelos.",
        imgSrc: "https://dreamlightvalleywiki.com/images/3/3c/Mirabel.png",
        quote: "'Even in our darkest moments there's light where you least expect it.'",
    },
    {
        name: "The Forgotten",
        movie: "Disney Dreamlight Valley",
        info: "The Forgotten were responsible for the Forgetting but also helps the Player end the Forgetting. They offer no quests or friendship rewards, but can be found wandering the valley or in their home, the Dark Castle.",
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0c/The_Forgotten.png",
        quote: "'If we were always perfect, we could never grow.'",
    }
]

//Print characters
const character = document.querySelector(".characters");

characters.forEach(char => {
    const characterBox = document.createElement("div");
    characterBox.className = "characterBox";
        
    const name = document.createElement("h3");
    const movie = document.createElement("p");
    movie.className = "objectText";
    const movieText = document.createElement("p");
    movieText.className = "objectText";
    const about = document.createElement("p");
    about.className = "objectText";
    const aboutText = document.createElement("p");
    aboutText.className = "objectText";
    const img = document.createElement("img")
    const quote = document.createElement("p");
    quote.className = quote;
    img.src = char.imgSrc;
    const lineBreak = document.createElement("br");

    name.innerText = char.name;
    movie.innerText = char.movie;
    movieText.innerText = "From:";
    about.innerText = char.info;
    aboutText.innerText = "About:";
    quote.innerText = char.quote;
    img.innerText = char.img;

    characterBox.append(name,movieText,movie,about,img,lineBreak,quote);

    character.appendChild(characterBox);
})