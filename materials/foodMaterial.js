import { crops,fruit,spicesAndHerbs,seafood,remy } from "./ingredients.js";
import { fish } from "./fish.js";

function printCraftingMaterial(category) {
    //Print objects of specified category
    const materialCategory = document.querySelector(".materials");

    category.forEach(material => {
        const materialBox = document.createElement("div");
        let specifiedCategory = document.querySelector(".flowers");
        
        if (category == craftingmaterials) {
            materialBox.className = "craftingBox";
            specifiedCategory = document.querySelector(".craftingMaterial");
        } else if (category == gems) {
            materialBox.className = "gemBox";
            specifiedCategory = document.querySelector(".gems");
        } else {
            materialBox.className = "flowerBox";
        }
        
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const sellPrice = document.createElement("p");
        const img = document.createElement("img")
        img.src = material.imgSrc;

        name.innerText = material.name;
        location.innerText = material.location;
        sellPrice.innerText = material.sellPrice;
        img.innerText = material.img;
        materialBox.append(name,location,sellPrice,img);

        specifiedCategory.appendChild(materialBox)
    })
}
