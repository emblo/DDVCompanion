import { craftingmaterials } from "./craftingmaterials.js";
import { gems } from "./gems.js";
import { flowers } from "./flowers.js";

function printCraftingMaterial(category) {
    //Print objects of specified category
    const materialCategory = document.querySelector(".materials");

    category.forEach(material => {
        const materialBox = document.createElement("div");
        if (category == craftingmaterials) {
            materialBox.className = "craftingBox";
        } else if (category == gems) {
            materialBox.className = "gemBox";
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

        materialCategory.appendChild(materialBox);
    })
}

printCraftingMaterial(flowers);