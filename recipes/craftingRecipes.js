import { refinedMaterials,enchantments,paving,fences,chests,stoves,mannequins,companions,functionalItems,furniture,balloons,touchOfMagic,fallEvent,winterEvent,springEvent,floral,lamps,signs,mailboxes } from "./crafting.js";

function printCraftingRecipe(category) {
    let object;
    let materials;
    let material;

    // Print objects of specified category
    category.forEach((currentObject) => {
        object = currentObject;

        // Access the materials array inside of the current object
        materials = object.materials;

        // Create a container for the current object's details
        const objectBox = document.createElement("div");
        objectBox.className = "recipeBox";

        const name = document.createElement("h3");
        const img = document.createElement("img");
        img.src = object.imgSrc;

        name.innerText = object.name;
        img.alt = object.imgAlt;
        
        // Append the name and image of the current object to its container
        objectBox.append(name, img);

        // Create a container for the materials of the current object
        const materialsBox = document.createElement("div");
        materialsBox.className = "recipeMaterials";

        // Iterate over the materials array of the current object
        for (let j = 0; j < materials.length; j++) {
            material = materials[j];

            // Create elements for material details
            const recipeMaterials = document.createElement("p");

            recipeMaterials.innerText = `${material.name} (${material.amount})`;

            // Append material details to the materials container
            materialsBox.append(recipeMaterials);
        }

        // Append the materials container to the object container
        objectBox.appendChild(materialsBox);

        // Find the specified category container
        let specifiedCategory;
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

        // Append the object container to the specified category container
        specifiedCategory.appendChild(objectBox);
    });
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