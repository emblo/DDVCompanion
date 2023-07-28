import { crops,fruit,spicesAndHerbs,seafood,remy } from "./ingredients.js";
import { fish } from "./fish.js";

function printFoodIngredient(category) {
    //Print objects of specified category
    category.forEach(ingredient => {
        const ingredientBox = document.createElement("div");
        let specifiedCategory = document.querySelector(".crops");
        
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
        location.innerText = ingredient.location;
        seedLocation.innerText = ingredient.seedLocation;
        ripple.innerText = ingredient.ripple;
        sellPrice.innerText = ingredient.sellPrice;
        energy.innerText = ingredient.energy;
        growTime.innerText = ingredient.growTime;
        cropsYield.innerText = ingredient.yield;
        img.innerText = ingredient.img;

        //Determine category and assign appropriate class name
        switch(category) {
            case crops:
                ingredientBox.className = "cropsBox"
                specifiedCategory = document.querySelector(".crops");
                console.log(specifiedCategory);
                ingredientBox.append(name,growTime,cropsYield,sellPrice,energy,seedLocation,img);
                specifiedCategory.appendChild(ingredientBox)
                break;
            case fruit:
                ingredientBox.className = "fruitBox"
                specifiedCategory = document.querySelector(".fruit");
                ingredientBox.append(name,location,sellPrice,energy,img);
                specifiedCategory.appendChild(ingredientBox)
                break;
            case spicesAndHerbs:
                ingredientBox.className = "spicesBox"
                specifiedCategory = document.querySelector(".spices");
                ingredientBox.append(name,location,sellPrice,energy,img);
                specifiedCategory.appendChild(ingredientBox)
                break;
            case seafood:
                ingredientBox.className = "seafoodBox"
                specifiedCategory = document.querySelector(".seafood");
                ingredientBox.append(name,location,sellPrice,energy,img);
                specifiedCategory.appendChild(ingredientBox)
                break;
            case fish:
                ingredientBox.className = "fishBox"
                specifiedCategory = document.querySelector(".fish");
                ingredientBox.append(name,location,ripple,sellPrice,energy,img);
                specifiedCategory.appendChild(ingredientBox)
                break;
            case remy:
                ingredientBox.className = "remyBox"
                specifiedCategory = document.querySelector(".remy");
                ingredientBox.append(name,location,sellPrice,energy,img);
                specifiedCategory.appendChild(ingredientBox)
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