import { appetizers,entrees,desserts } from "./meals.js";

function printMealRecipe(category) {
    let object;
    let ingredients;
    let ingredient;

    // Iterate over the array
    for (let i = 0; i < category.length; i++) {
        object = category[i];

        // Access the materials array
        ingredients = object.ingredients;

        // Iterate over the materials array
        for (let j = 0; j < ingredients.length; j++) {
            ingredient = ingredients[j];
        }
    }

    //Print objects of specified category
    category.forEach(object => {
        const materialBox = document.createElement("div");
        materialBox.className = "recipeBox";
        let specifiedCategory = document.querySelector(".appetizers");

        if (category == entrees) {
            specifiedCategory = document.querySelector(".entrees");
        } else if (category == desserts) {
            specifiedCategory = document.querySelector(".desserts");
        } 

        const name = document.createElement("h3");

        const sellPrice = document.createElement("p");
        const img = document.createElement("img")
        img.src = object.imgSrc;
    
        name.innerText = object.name;
        sellPrice.innerText = object.sellPrice;
        img.innerText = object.img;
        materialBox.append(name,`${ingredient.name}`*length,img);
            
        specifiedCategory.appendChild(materialBox)
    })
}

printMealRecipe(appetizers);
printMealRecipe(entrees);
printMealRecipe(desserts);