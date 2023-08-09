import { crops,fruit,spicesAndHerbs,seafood,remy } from "./ingredients.js";
import { fish } from "./fish.js";

function printFoodIngredient(category) {
    //Print objects of specified category
    category.forEach(ingredient => {
        const objectBox = document.createElement("div");
        objectBox.className = "objectBox";
        let specifiedCategory = document.querySelector("#crops");
        
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const seedLocation = document.createElement("p");
        const ripple = document.createElement("p");
        const sellPrice = document.createElement("p");
        const energy = document.createElement("p");
        const growTime = document.createElement("p");
        const cropsYield = document.createElement("p");
        const img = document.createElement("img")
        img.alt = ingredient.imgAlt;
        img.src = ingredient.imgSrc;

        name.innerText = ingredient.name;
        location.innerText = `Location: ${ingredient.location}`;
        seedLocation.innerText = `Seed location: ${ingredient.seedLocation}`;
        ripple.innerText = `Ripple type: ${ingredient.ripple}`;
        sellPrice.innerText = `Sell Price: ${ingredient.sellPrice}`;
        energy.innerText = `Energy: ${ingredient.energy}`;
        growTime.innerText = `Grow time: ${ingredient.growTime}`;
        cropsYield.innerText = `Yield: ${ingredient.yield}`;
        img.innerText = ingredient.img;

        //Determine category and assign appropriate class name
        switch(category) {
            case crops:
                specifiedCategory = document.querySelector("#crops");
                objectBox.append(name,growTime,cropsYield,sellPrice,energy,seedLocation,img);
                specifiedCategory.appendChild(objectBox)
                break;
            case fruit:
                specifiedCategory = document.querySelector("#fruit");
                objectBox.append(name,location,sellPrice,energy,img);
                specifiedCategory.appendChild(objectBox)
                break;
            case spicesAndHerbs:
                specifiedCategory = document.querySelector("#spices");
                objectBox.append(name,location,sellPrice,energy,img);
                specifiedCategory.appendChild(objectBox)
                break;
            case seafood:
                specifiedCategory = document.querySelector("#seafood");
                objectBox.append(name,location,sellPrice,energy,img);
                specifiedCategory.appendChild(objectBox)
                break;
            case fish:
                specifiedCategory = document.querySelector("#fish");
                objectBox.append(name,location,ripple,sellPrice,energy,img);
                specifiedCategory.appendChild(objectBox)
                break;
            case remy:
                specifiedCategory = document.querySelector("#remy");
                objectBox.append(name,location,sellPrice,energy,img);
                specifiedCategory.appendChild(objectBox)
                break;
        }
    })
}

printFoodIngredient(crops);
printFoodIngredient(fruit);
printFoodIngredient(spicesAndHerbs);
printFoodIngredient(fish);
printFoodIngredient(seafood);
printFoodIngredient(remy);