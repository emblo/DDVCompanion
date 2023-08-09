import { craftingmaterials } from "./craftingmaterials.js";
import { gems } from "./gems.js";
import { flowers } from "./flowers.js";

function printCraftingMaterial(category) {
    //Print objects of specified category
    category.forEach(material => {
        const objectBox = document.createElement("div");
        objectBox.className = "objectBox";
        let specifiedCategory = document.querySelector("#flowers");
        
        if (category == craftingmaterials) {
            specifiedCategory = document.querySelector("#craftingMaterial");
        } else if (category == gems) {
            specifiedCategory = document.querySelector("#gems");
        } 
        
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const sellPrice = document.createElement("p");
        const img = document.createElement("img")
        img.alt = material.imgAlt;
        img.src = material.imgSrc;

        name.innerText = material.name;
        location.innerText = `Location: ${material.location}`;
        sellPrice.innerText = `Sell Price: ${material.sellPrice}`;
        img.innerText = material.img;
        objectBox.append(name,location,sellPrice,img);

        specifiedCategory.appendChild(objectBox)
    })
}

printCraftingMaterial(craftingmaterials);
printCraftingMaterial(gems);
printCraftingMaterial(flowers);