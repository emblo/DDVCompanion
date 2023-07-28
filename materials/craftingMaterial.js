import { craftingmaterials } from "./craftingmaterials.js";
import { gems } from "./gems.js";
import { flowers } from "./flowers.js";

function printCraftingMaterial(category) {
    //Print objects of specified category
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
        img.alt = material.imgAlt;
        img.src = material.imgSrc;

        name.innerText = material.name;
        location.innerText = material.location;
        sellPrice.innerText = material.sellPrice;
        img.innerText = material.img;
        materialBox.append(name,location,sellPrice,img);

        specifiedCategory.appendChild(materialBox)
    })
}

printCraftingMaterial(craftingmaterials);
printCraftingMaterial(gems);
printCraftingMaterial(flowers);