//Current event
const wonderOfPixar = [
    {
        name: "Moonstones x100",
        cost: 10,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/f/fe/Dory_Motif.png/90px-Dory_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/43/Summer_Accessories_Motif.png/90px-Summer_Accessories_Motif.png"
    },
    {
        name: "Burning Eyes",
        cost: 15,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/f8/Burning_Eyes.png"
    },
    {
        name: "Quirky Retro Couch",
        cost: 30,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/8/8f/Quirky_Retro_Couch.png"
    },
    {
        name: "All-Terrain Scooter",
        cost: 30,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/3/38/All-Terrain_Scooter.png"
    },
    {
        name: "Fiery Raven Companion",
        cost: 50,
        page: 1,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/71/Fiery_Raven.png"
    },
    {
        name: "Moonstones x200",
        cost: 20,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/9/9f/Orb_Flower_Motif.png/90px-Orb_Flower_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/a/a8/Red_Panda_Sticker_Motif.png/90px-Red_Panda_Sticker_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b1/Joy_and_Sadness_Motif.png/90px-Joy_and_Sadness_Motif.png"
    },
    {
        name: "Large Aquarium",
        cost: 20,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fe/Large_Aquarium.png"
    },
    {
        name: "The Wave",
        cost: 35,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/e/e6/The_Wave.png"
    },
    {
        name: "Circular Embossed Metal Fireplace",
        cost: 35,
        page: 2,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/14/Circular_Embossed_Metal_Fireplace.png"
    },
    {
        name: "Moonstones x250",
        cost: 25,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/2/23/Rainbow_Gems_Motif.png/77px-Rainbow_Gems_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/3/31/Hank_Motif.png/90px-Hank_Motif.png"
    },{
        name: "Upscale Makeup",
        cost: 15,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/2a/Upscale_Makeup.png"
    },
    {
        name: "Manta Ray Mobile",
        cost: 30,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/be/Manta_Ray_Mobile.png"
    },
    {
        name: "Pompadour in the Cloud",
        cost: 30,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/96/Pompadour_in_the_Cloud.png"
    },
    {
        name: "Drop Pillar",
        cost: 35,
        page: 3,
        imgSrc: "https://dreamlightvalleywiki.com/images/5/5a/Drop_Pillar.png"
    },
    {
        name: "Moonstones x350",
        cost: 35,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/a/ab/Squirt_Motif.png/90px-Squirt_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/e/e0/Inside_Out_Hairstyles_Motif.png/90px-Inside_Out_Hairstyles_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/f/ff/Torch_Motif.png/43px-Torch_Motif.png"
    },
    {
        name: "Octo-bomber",
        cost: 35,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/f/fb/Octo-bomber.png"
    },
    {
        name: "Red Panda PIllar",
        cost: 30,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/9/9b/Red_Panda_Pillar.png"
    },
    {
        name: "Blooming Bob",
        cost: 30,
        page: 4,
        imgSrc: "https://dreamlightvalleywiki.com/images/b/be/Blooming_Bob.png"
    },
    {
        name: "Moonstones x400",
        cost: 40,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/8/8b/Cuddle_Party_Motif.png/90px-Cuddle_Party_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/4/46/Mei_Portrait_Motif.png/90px-Mei_Portrait_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/1/14/Bing_Bong_Motif.png/71px-Bing_Bong_Motif.png"
    },
    {
        name: "Blazing Pixie",
        cost: 30,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/0/0d/Blazing_Pixie.png"
    },
    {
        name: "'Friend to the Drivers' Crop Jacket",
        cost: 50,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/1/1c/%22Friend_to_the_Divers%22_Crop_Jacket.png"
    },
    {
        name: "Grinning Red Panda Pillar",
        cost: 40,
        page: 5,
        imgSrc: "https://dreamlightvalleywiki.com/images/2/22/Grinning_Red_Panda_Pillar.png"
    },
    {
        name: "Moonstones x610",
        cost: 60,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/a/a5/Yawning_Mei_Panda_Motif.png/81px-Yawning_Mei_Panda_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/9/96/Rock_and_Roll_Hand_Motif.png/72px-Rock_and_Roll_Hand_Motif.png"
    },
    {
        name: "Design Motif",
        cost: 10,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/d/d6/Bing_Bong_Wagon_Rocket_Motif.png/90px-Bing_Bong_Wagon_Rocket_Motif.png"
    },
    {
        name: "Memory Display Partition",
        cost: 30,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/d/da/Memory_Display_Partition.png"
    },
    {
        name: "Red Panda Onesie",
        cost: 30,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/7/74/Red_Panda_Onesie.png"
    },
    {
        name: "Stealthy Space Ranger",
        cost: 50,
        page: 6,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/5/52/Stealthy_Space_Ranger.png/180px-Stealthy_Space_Ranger.png"
    },
    {
        name: "Moonstones x90",
        cost: 10,
        page: 7,
        imgSrc: "https://dreamlightvalleywiki.com/images/thumb/b/b6/Moonstone.png/150px-Moonstone.png"
    },
]

//Print objects of current active day
const rewards = document.querySelector(".eventRewards");

wonderOfPixar.forEach(reward => {
    const rewardBox = document.createElement("div");
    rewardBox.className = "rewardBox";
        
    const name = document.createElement("h3");
    const cost = document.createElement("p");
    const page = document.createElement("p");
    const img = document.createElement("img")
    img.src = reward.imgSrc;

    name.innerText = reward.name;
    cost.innerText = reward.cost;
    page.innerText = reward.page;
    img.innerText = reward.img;
    rewardBox.append(name,cost,page,img);

    rewards.appendChild(rewardBox);
})
