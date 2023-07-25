//Current event
const wonderOfPixar = [
    {
        name: "Moonstones x100",
        cost: 10,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png",
        imgAlt: "A dark blue round icon, with a dark blue crescent moon, surrounded by white sparkles on a light blue background."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/f/fe/Dory_Motif.png/90px-Dory_Motif.png",
        imgAlt: "A Blue Tang fish. Big round eyes, light blue scales with dark blue markings. The fins are bright yellow."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/43/Summer_Accessories_Motif.png/90px-Summer_Accessories_Motif.png",
        imgAlt: "3 items, a blue stereo with pink and yellow details, a pink tamagotchi with yellow buttons and a light blue display, and a tall light yellow cup of bubble tea with purple boba, a purple straw, purple liquid and a yellow lid."
    },
    {
        name: "Burning Eyes",
        cost: 15,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f8/Burning_Eyes.png",
        imgAlt: "A makeup look displayed on a dark gray mannequin head. The pattern of the makeup is shown using red, yellow and blue."
    },
    {
        name: "Quirky Retro Couch",
        cost: 30,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Quirky_Retro_Couch.png",
        imgAlt: "A big orange couch with dark orange details and two round yellow pillows."
    },
    {
        name: "All-Terrain Scooter",
        cost: 30,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/38/All-Terrain_Scooter.png",
        imgAlt: "A blue scooter with gray details. On the back theres an area with metal bars where the driver could place items."
    },
    {
        name: "Fiery Raven Companion",
        cost: 50,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/71/Fiery_Raven.png",
        imgAlt: "A red raven with yellow and orange wings. Its wings spread, and a short red beak."
    },
    {
        name: "Moonstones x200",
        cost: 20,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png",
        imgAlt: "A dark blue round icon, with a dark blue crescent moon, surrounded by white sparkles on a light blue background."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/9/9f/Orb_Flower_Motif.png/90px-Orb_Flower_Motif.png",
        imgAlt: "A dark purple orb with a purple, yellow, and magenta lotus like flower in the center."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/a/a8/Red_Panda_Sticker_Motif.png/90px-Red_Panda_Sticker_Motif.png",
        imgAlt: "A smiling cartoon-style Red Panda. It has a bright red face with white and brown details, and brown eyes."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b1/Joy_and_Sadness_Motif.png/90px-Joy_and_Sadness_Motif.png",
        imgAlt: "Two characters, Joy and Sadness, from the Pixar movie Inside Out. They are made up by colored shapes that resemble confetti and balloons."
    },
    {
        name: "Large Aquarium",
        cost: 20,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fe/Large_Aquarium.png",
        imgAlt: "A large aquarium with a wooden base and a black lid. Inside the aquarium corals and sea creatures can be seen. The water inside is very blue."
    },
    {
        name: "The Wave",
        cost: 35,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e6/The_Wave.png",
        imgAlt: "A hairstyle on a light gray silhouette. It looks like ocean waves, with a turqouise color at the base and white foam like ends."
    },
    {
        name: "Circular Embossed Metal Fireplace",
        cost: 35,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/14/Circular_Embossed_Metal_Fireplace.png",
        imgAlt: "A round black fireplace with a blue flame and logs and sticks on the bottom of it."
    },
    {
        name: "Moonstones x250",
        cost: 25,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png",
        imgAlt: "A dark blue round icon, with a dark blue crescent moon, surrounded by white sparkles on a light blue background."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/23/Rainbow_Gems_Motif.png/77px-Rainbow_Gems_Motif.png",
        imgAlt: "6 gems in the colors blue, purple, pink, red, yellow and green, placed in a clustered group."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/3/31/Hank_Motif.png/90px-Hank_Motif.png",
        imgAlt: "A white motif of a cartoon-style squid."
    },{
        name: "Upscale Makeup",
        cost: 15,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2a/Upscale_Makeup.png",
        imgAlt: "A makeup style shown on a dark gray mannequin. The colors showing the scaled makeup on the forehead and cheeks are green, blue, white, pink and red."
    },
    {
        name: "Manta Ray Mobile",
        cost: 30,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/be/Manta_Ray_Mobile.png",
        imgAlt: "A geometric style mobile in the shape of a manta ray. The colors are different shades of blue. It's three manta rays, in three different sizes."
    },
    {
        name: "Pompadour in the Cloud",
        cost: 30,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/96/Pompadour_in_the_Cloud.png",
        imgAlt: "A hairstyle displayed on the silhouette of a mannequin. The hairstyle looks like big pink pillowy clouds, high on the top and neck length in the back."
    },
    {
        name: "Drop Pillar",
        cost: 35,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5a/Drop_Pillar.png",
        imgAlt: "A round purple pillar with turquoise water drops around it."
    },
    {
        name: "Moonstones x350",
        cost: 35,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png",
        imgAlt: "A dark blue round icon, with a dark blue crescent moon, surrounded by white sparkles on a light blue background."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/a/ab/Squirt_Motif.png/90px-Squirt_Motif.png",
        imgAlt: "A white motif of a cartoon-style baby turtle."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/e/e0/Inside_Out_Hairstyles_Motif.png/90px-Inside_Out_Hairstyles_Motif.png",
        imgAlt: "A motif of the characters hairstyles from Inside Out. Short blue hair, medium length green hair, medium length blue hair with round black glasses, flames and glasses with worried eyebrows."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/f/ff/Torch_Motif.png/43px-Torch_Motif.png",
        imgAlt: "A motif of a gel-looking torch with two eyes and a smile."
    },
    {
        name: "Octo-bomber",
        cost: 35,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fb/Octo-bomber.png",
        imgAlt: "A green bomberjacket with orange and red details."
    },
    {
        name: "Red Panda PIllar",
        cost: 30,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9b/Red_Panda_Pillar.png",
        imgAlt: "A pillar statue with a red panda on the top looking worried."
    },
    {
        name: "Blooming Bob",
        cost: 30,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/be/Blooming_Bob.png",
        imgAlt: "A hairstyle displayed on the silhouette of a mannequin. It's short and fluffy and looks like green leaves with brown details."
    },
    {
        name: "Moonstones x400",
        cost: 40,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png",
        imgAlt: "A dark blue round icon, with a dark blue crescent moon, surrounded by white sparkles on a light blue background."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/8/8b/Cuddle_Party_Motif.png/90px-Cuddle_Party_Motif.png",
        imgAlt: "A motif of three otters cuddling together. They are dark brown on the bottom, light brown on the middle and light on the face and chest."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/46/Mei_Portrait_Motif.png/90px-Mei_Portrait_Motif.png",
        imgAlt: "A white motif outlining a smiling girl and shooting stars."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/1/14/Bing_Bong_Motif.png/71px-Bing_Bong_Motif.png",
        imgAlt: "A motif of Bing Bong from the movie Inside Out. It's a pink elephant made out of shapes that resemble confetti."
    },
    {
        name: "Blazing Pixie",
        cost: 30,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0d/Blazing_Pixie.png",
        imgAlt: "A hairstyle displayed on the silhouette of a mannequin. The base is a blackheadband and the hairstyle is flowing flames, yellow at the base and red at the top."
    },
    {
        name: "'Friend to the Drivers' Crop Jacket",
        cost: 50,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1c/%22Friend_to_the_Divers%22_Crop_Jacket.png",
        imgAlt: "A cropped blue jacket with pink details on the bottom, collar, cuffs, and forearms."
    },
    {
        name: "Grinning Red Panda Pillar",
        cost: 40,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Grinning_Red_Panda_Pillar.png",
        imgAlt: "A pillar statue with a grinning red panda."
    },
    {
        name: "Moonstones x610",
        cost: 60,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png",
        imgAlt: "A dark blue round icon, with a dark blue crescent moon, surrounded by white sparkles on a light blue background."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/a/a5/Yawning_Mei_Panda_Motif.png/81px-Yawning_Mei_Panda_Motif.png",
        imgAlt: "A motif of a yawning red panda that's different shades of pink. In the backround some z's can be seen, as well as clouds, a crescent moon and stars."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/9/96/Rock_and_Roll_Hand_Motif.png/72px-Rock_and_Roll_Hand_Motif.png",
        imgAlt: "A motif of a hand with the middle and ring finger pushed down into the palm, the thumb out to the side."
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/d/d6/Bing_Bong_Wagon_Rocket_Motif.png/90px-Bing_Bong_Wagon_Rocket_Motif.png",
        imgAlt: "A motif of Bing Bong and Joy from Inside Out sitting in a wagon, colored sparkles shooting out the end of it indicating the wagon is moving very fast."
    },
    {
        name: "Memory Display Partition",
        cost: 30,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/da/Memory_Display_Partition.png",
        imgAlt: "A wall with a monitor in the middle of it, with an orange outline. Above and below multicolored orbs can be seen."
    },
    {
        name: "Red Panda Onesie",
        cost: 30,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Red_Panda_Onesie.png",
        imgAlt: "A onesie resembling a red panda. The body part is orange and the hood has the face of a red panda with orange and white details."
    },
    {
        name: "Stealthy Space Ranger",
        cost: 50,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/5/52/Stealthy_Space_Ranger.png/180px-Stealthy_Space_Ranger.png",
        imgAlt: "Buzz Lightyear, a toy robot, in a shiny metallic space ranger outfit. His hands are on his hips, and he is looking very confident and happy."
    },
    {
        name: "Moonstones x90",
        cost: 10,
        page: 7,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png",
        imgAlt: "A dark blue round icon, with a dark blue crescent moon, surrounded by white sparkles on a light blue background."
    }
]

//Print event rewards
const rewards = document.querySelector(".eventRewards");

wonderOfPixar.forEach(reward => {
    const rewardBox = document.createElement("div");
    rewardBox.className = "rewardBox";
        
    const name = document.createElement("h3");
    const cost = document.createElement("p");
    cost.className = "objectText";
    const costText = document.createElement("p");
    costText.className = "objectText";
    const page = document.createElement("p");
    page.className = "objectText";
    const pageText = document.createElement("p");
    pageText.className = "objectText";
    const img = document.createElement("img")
    img.src = reward.imgSrc;
    const lineBreak = document.createElement("br");

    name.innerText = reward.name;
    cost.innerText = reward.cost;
    costText.innerText = "Cost:";
    page.innerText = reward.page;
    pageText.innerText = "Page:";
    img.innerText = reward.img;

    rewardBox.append(name,lineBreak,costText,cost,lineBreak,pageText,page,img);

    rewards.appendChild(rewardBox);
})
