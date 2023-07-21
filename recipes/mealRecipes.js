import { appetizers,entrees,desserts } from "./meals.js";

function printMealRecipe(category) {
    let object;
    let ingredients;
    let ingredient;

    // Print objects of specified category
    category.forEach((currentObject) => {
        object = currentObject;

        // Access the ingredients array inside of the current object
        ingredients = object.ingredients;

        // Create a container for the current object's details
        const objectBox = document.createElement("div");
        objectBox.className = "recipeBox";

        const name = document.createElement("h3");
        const img = document.createElement("img");
        img.src = object.imgSrc;

        name.innerText = object.name;
        img.alt = object.name;
        
        // Append the name and image of the current object to its container
        objectBox.append(name, img);

        // Create a container for the ingredients of the current object
        const ingredientsBox = document.createElement("div");
        ingredientsBox.className = "recipeMaterials";

        // Iterate over the ingredients array of the current object
        for (let j = 0; j < ingredients.length; j++) {
            ingredient = ingredients[j];

            // Create elements for ingredient details
            const ingredientName = document.createElement("p");

            ingredientName.innerText = ingredient.name;

            // Append ingredient details to the ingredients container
            ingredientsBox.append(ingredientName);
        }

        // Append the ingredients container to the object container
        objectBox.appendChild(ingredientsBox);

        // Find the specified category container
        let specifiedCategory;
        if (category == appetizers) {
            specifiedCategory = document.querySelector(".appetizers");
        } else if (category == entrees) {
            specifiedCategory = document.querySelector(".entrees");
        } else {
            specifiedCategory = document.querySelector(".desserts");
        }

        // Append the object container to the specified category container
        specifiedCategory.appendChild(objectBox);
    });
}

printMealRecipe(appetizers);
printMealRecipe(entrees);
printMealRecipe(desserts);