import { refinedMaterials,enchantments,paving,fences,chests,stoves,mannequins,companions,functionalItems,furniture,balloons,touchOfMagic,fallEvent,winterEvent,springEvent,floral,lamps,signs,mailboxes } from "./crafting.js";

function printCraftingRecipe(category) {
    let object;
    let materials;
    let material;

    // Iterate over the array
    for (let i = 0; i < category.length; i++) {
        object = category[i];

        // Access the materials array
        materials = object.materials;

        // Iterate over the materials array
        for (let j = 0; j < materials.length; j++) {
            material = materials[j];
        }
    }

    //Print objects of specified category
    category.forEach(object => {
        const materialBox = document.createElement("div");
        materialBox.className = "recipeBox";
        let specifiedCategory = document.querySelector(".refinedMaterials");

        switch(category) {
            case refinedMaterials: 
                specifiedCategory = document.querySelector(".refinedMaterials");
                break;
            case enchantments: 
                specifiedCategory = document.querySelector(".enchantments");
                break;
            case paving: 
                specifiedCategory = document.querySelector(".paving");
                break;
            case fences: 
                specifiedCategory = document.querySelector(".fences");
                break;
            case chests: 
                specifiedCategory = document.querySelector(".chests");
                break;
            case stoves: 
                specifiedCategory = document.querySelector(".stoves");
                break;
            case mannequins: 
                specifiedCategory = document.querySelector(".mannequins");
                break;
            case companions: 
                specifiedCategory = document.querySelector(".companions");
                break;
            case functionalItems: 
                specifiedCategory = document.querySelector(".functionalItems");
                break;
            case furniture: 
                specifiedCategory = document.querySelector(".furniture");
                break;
            case balloons: 
                specifiedCategory = document.querySelector(".balloons");
                break;
            case touchOfMagic: 
                specifiedCategory = document.querySelector(".touchOfMagic");
                break;
            case fallEvent: 
                specifiedCategory = document.querySelector(".fallEvent");
                break;
            case winterEvent: 
                specifiedCategory = document.querySelector(".winterEvent");
                break;
            case springEvent: 
                specifiedCategory = document.querySelector(".springEvent");
                break;
            case floral: 
                specifiedCategory = document.querySelector(".floral");
                break;
            case lamps: 
                specifiedCategory = document.querySelector(".lamps");
                break;
            case signs: 
                specifiedCategory = document.querySelector(".signs");
                break;
            case mailboxes: 
                specifiedCategory = document.querySelector(".mailboxes");
                break;
        }
            
        const name = document.createElement("h3");
        const materialName = document.createElement("p");
        const materialAmount = document.createElement("p");
        const sellPrice = document.createElement("p");
        const img = document.createElement("img")
        img.src = object.imgSrc;
    
        name.innerText = object.name;
        sellPrice.innerText = object.sellPrice;
        img.innerText = object.img;
        materialBox.append(name,`${material.name}: ${material.amount}`,img);
            
        specifiedCategory.appendChild(materialBox)
    })
}

printCraftingRecipe(refinedMaterials);
printCraftingRecipe(enchantments);
printCraftingRecipe(paving);
printCraftingRecipe(fences);
printCraftingRecipe(chests);
printCraftingRecipe(stoves);
printCraftingRecipe(mannequins);
printCraftingRecipe(companions);
printCraftingRecipe(functionalItems);
printCraftingRecipe(furniture);
printCraftingRecipe(balloons);
printCraftingRecipe(touchOfMagic);
printCraftingRecipe(fallEvent);
printCraftingRecipe(winterEvent);
printCraftingRecipe(springEvent);
printCraftingRecipe(floral);
printCraftingRecipe(lamps);
printCraftingRecipe(signs);
printCraftingRecipe(mailboxes);