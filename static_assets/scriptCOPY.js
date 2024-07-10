window.onload = (event) => {  // event handler that executes JavaScript code when the entire webpage has loaded
    get_recipe(document.getElementById('Recipe_options').value); // call the get_recipe function with the selected recipe's value
};
function get_recipe(RECIPE_FOR) {

    const recipes = {
        'Chocolate Chip Cookies': {
            name: "Chocolate Chip Cookies",
            description: "A chewy, buttery treat made with chocolate chips.",
            steps: "Preheat your oven to 375°F (190°C). Prepare a baking sheet by lining it with parchment paper or lightly greasing it. In a mixing bowl, cream together softened butter, granulated sugar, and packed brown sugar until light and fluffy.\n\nAdd eggs, one at a time, to the butter-sugar mixture, beating well after each addition.\nMix in vanilla extract until well combined.\n\nIn a separate bowl, sift together all-purpose flour, baking soda, and salt.\n\nGradually add the dry ingredients to the wet ingredients, mixing until just combined. Be careful not to overmix.\n\nFold in semi-sweet chocolate chips until evenly distributed throughout the cookie dough.\n\nUsing a spoon or cookie scoop, scoop out portions of the cookie dough and roll them into balls about 1 to 1.5 inches in diameter.\nPlace the cookie dough balls onto the prepared baking sheet, leaving some space between each cookie to allow for spreading.\nBake in the preheated oven for 8 to 10 minutes, or until the edges are lightly golden brown.\n\nRemove the baking sheet from the oven and let the cookies cool on the pan for a few minutes before transferring them to a wire rack to cool completely.\nOnce cooled, serve and enjoy your homemade chocolate chip cookies with a glass of milk or your favorite beverage!",
            ingredients: ["Butter: 0.5 cup", "Sugar: 1 cup", "Brown Sugar: 1 cup", "Eggs: 2", "Vanilla Extract: 3 tablespoons", "Flour: 3 cups", "Baking Soda: 0.125 teaspoon", "Salt: 0.125 teaspoon", "Chocolate Chips: 0.5 cup"]
        },
        'Peanut Butter and Jelly Sandwich': {
            name: "Peanut Butter and Jelly Sandwich",
            description: "A sandwich made with peanut butter and jelly.",
            steps: "Gather Ingredients: You need bread, peanut butter, and jelly. Spread Peanut Butter: Take one slice of bread and spread a generous layer of peanut butter evenly across one side.\n\nSpread Jelly: Take another slice of bread and spread an even layer of jelly on one side.\n\nCombine: Place the peanut butter-covered slice and the jelly-covered slice together, with the spreads facing each other.\n\nServe: Enjoy your peanut butter and jelly sandwich!",
            ingredients: ["Peanut Butter: 2 tablespoons", "Jelly: 2 tablespoons", "Bread: 2 slices"]
        },
        'Grilled Cheese Sandwich': {
            name: "Grilled Cheese Sandwich",
            description: "A sandwich made with cheese.",
            steps: "Gather Ingredients: You need bread, butter, and cheddar cheese. Butter Bread: Spread butter evenly on one side of each bread slice. Add Cheese: Place slices of cheddar cheese on the unbuttered side of one bread slice. Assemble: Place the second bread slice on top, buttered side facing out. Heat Pan: Preheat a skillet or frying pan over medium heat. Grill Sandwich: Place the assembled sandwich in the pan. Cook until the bottom slice is golden brown, about 2-4 minutes. Flip: Carefully flip the sandwich and cook until the other side is golden brown and the cheddar cheese is melted, another 2-4 minutes. Serve: Remove from the pan, cut if desired, and enjoy your cheddar grilled cheese sandwich!",
            ingredients: ["Butter: 2 tablespoons", "Bread: 2 slices", "Cheddar Cheese: 1.5 cups"]
        },
        'Tomato Soup': {
            name: "Tomato Soup",
            description: "A soup made with tomatoes and basil.",
            steps: "Gather Ingredients: You need olive oil, onions, garlic, canned tomatoes, chicken broth, salt, pepper, sugar, and fresh basil. Heat Oil: In a large pot, heat the olive oil over medium heat. Cook Onions and Garlic: Add the chopped onion and cook until soft, about 5 minutes. Add the minced garlic cloves and cook for another minute. Add Tomatoes: Pour in the cans of whole or crushed tomatoes, including the juice. Add Broth: Add the chicken broth to the pot. Season: Stir in the salt, pepper, and sugar. Simmer: Bring the mixture to a boil, then reduce the heat and let it simmer for about 20 minutes. Blend Soup: Use an immersion blender to puree the soup until smooth. If you don't have an immersion blender, carefully transfer the soup in batches to a regular blender and puree until smooth. Add Basil: Stir in a handful of chopped fresh basil leaves. Serve: Ladle the soup into bowls and serve hot, optionally with a drizzle of olive oil or a dollop of cream.",
            ingredients: ["Olive Oil: 5 tablespoons", "Garlic: 3 cloves", "Diced Onion: 1 cup", "Diced Tomatoes: 3 cups", "Chicken Broth: 6 cups", "Salt: 3 tablespoons", "Pepper: 1 tablespoon", "Sugar: 0.25 tablespoon", "Basil Leaves: 8"]
        },
        'Scrambled Eggs': {
            name: "Scrambled Eggs",
            description: "A breakfast dish made with beaten eggs.",
            steps: "Gather Ingredients: You need eggs, milk, salt, pepper, and butter. Crack Eggs: Crack the eggs into a bowl. Add Milk: Add the milk. Season: Add the salt and pepper to the eggs. Whisk: Whisk the eggs until the mixture is well combined and slightly frothy. Heat Pan: Heat a non-stick skillet over medium-low heat and add the butter. Pour Eggs: Once the butter is melted and bubbling, pour in the egg mixture. Cook Eggs: Let the eggs sit for a few seconds until they begin to set, then gently stir with a spatula, pushing the eggs from the edges to the center. Continue Cooking: Continue to cook, stirring gently, until the eggs are mostly set but still slightly runny. Remove from Heat: Remove the pan from the heat when the eggs are just a little underdone; they will continue to cook from residual heat. Serve: Serve the scrambled eggs immediately while they are still soft and creamy.",
            ingredients: ["Eggs: 2", "Milk: 3 tablespoons", "Salt: 1.5 tablespoons", "Pepper: 2 teaspoons"]
        },
        'Brownie': {
            name: "Brownie",
            description: "A soft, chocolatey dessert.",
            steps: "Gather Ingredients: You need butter, sugar, eggs, vanilla extract, cocoa powder, flour, salt, and baking powder. Preheat Oven: Preheat your oven to 350°F (175°C). Grease a 9x13-inch baking pan or line it with parchment paper. Melt Butter: In a medium saucepan, melt the butter over medium heat. Remove from heat. Mix Ingredients: Stir in the sugar until smooth. Add the eggs, one at a time, mixing well after each addition. Stir in the vanilla extract. Combine Dry Ingredients: In a separate bowl, whisk together the unsweetened cocoa powder, all-purpose flour, salt, and baking powder. Mix Together: Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Pour Batter: Pour the batter into the prepared baking pan and spread it evenly. Bake: Bake in the preheated oven for 20-25 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs (but not wet batter). Cool: Let the brownies cool in the pan on a wire rack before cutting into squares. Serve: Serve the brownies.",
            ingredients: ["Flour: 4 cups", "Cocoa Powder: 1.5 cups", "Salt: 0.125 teaspoon", "Vanilla Extract: 2 teaspoons", "Sugar: 1.5 cups", "Baking Powder: 1 teaspoon", "Butter: 0.75 cup", "Eggs: 2"]
        },
        'French Toast': {
            name: "French Toast",
            description: "A breakfast dish made with bread and beaten eggs.",
            steps: "Gather Ingredients: You need bread, eggs, milk, vanilla extract, ground cinnamon, salt, and butter. Prepare Batter: In a shallow bowl, whisk together the eggs, milk, vanilla extract, ground cinnamon, and salt until well combined. Heat Pan: Preheat a large skillet or griddle over medium heat and add the butter. Dip Bread: Take a slice of bread and dip it into the egg mixture, letting it soak for a few seconds on each side to absorb the batter. Cook Bread: Place the soaked bread slice onto the hot skillet. Repeat with additional slices, cooking only as many as fit comfortably in the pan. Cook Until Golden: Cook each slice for about 2-3 minutes on each side, or until golden brown and cooked through. Repeat: Continue to dip and cook the remaining bread slices, adding more butter to the pan as needed. Serve: Serve the French toast hot.",
            ingredients: ["Bread: 2 slices", "Butter: 4 tablespoons", "Eggs: 2", "Vanilla Extract: 2 teaspoons", "Ground Cinnamon: 1 tablespoon", "Salt: 0.125 teaspoon"]
        },
        'Vanilla Sponge Cake': {
            name: "Vanilla Sponge Cake",
            description: "A sponge cake flavored with vanilla.",
            steps: "Gather Ingredients: You need flour, sugar, eggs, milk, vanilla extract, baking powder, and salt. Preheat Oven: Preheat your oven to 350°F (175°C). Grease and flour an 8-inch round cake pan. Sift Dry Ingredients: In a medium bowl, sift together the flour, baking powder, and salt. Set aside. Cream Butter and Sugar: In a large mixing bowl, cream together the butter and sugar until light and fluffy. Add Eggs: Beat in the eggs, one at a time, mixing well after each addition. Add Dry Ingredients and Milk: Gradually add the dry ingredients to the wet ingredients, alternating with the milk, beginning and ending with the dry ingredients. Mix until just combined. Add Vanilla: Stir in the vanilla extract until well incorporated. Pour Batter: Pour the batter into the prepared cake pan, spreading it evenly. Bake: Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted into the center of the cake comes out clean. Cool: Let the cake cool in the pan for about 10 minutes, then remove it from the pan and transfer it to a wire rack to cool completely. Serve: Once cooled, serve the vanilla sponge cake as is or with your favorite frosting.",
            ingredients: ["Flour: 1.5 cups", "Vanilla Extract: 2 teaspoons", "Baking Powder: 1 teaspoon", "Sugar: 1 cup", "Butter: 0.5 cup", "Eggs: 2", "Milk: 0.5 cup", "Salt: 0.25 teaspoon"]
        },
        'Broccoli Cheddar Soup': {
            name: "Broccoli Cheddar Soup",
            description: "A creamy soup made with broccoli and cheddar cheese.",
            steps: "Gather Ingredients: You need butter, onions, garlic, broccoli, chicken broth, milk, cheddar cheese, salt, and pepper. Heat Butter: In a large pot, melt the butter over medium heat. Cook Onions and Garlic: Add the chopped onion and cook until soft, about 5 minutes. Add the minced garlic cloves and cook for another minute. Add Broccoli: Add the chopped broccoli florets to the pot and cook for about 5 minutes. Add Broth: Pour in the chicken broth. Season: Stir in the salt and pepper. Simmer: Bring the mixture to a boil, then reduce the heat and let it simmer for about 20 minutes, or until the broccoli is tender. Blend Soup: Use an immersion blender to puree the soup until smooth. If you don't have an immersion blender, carefully transfer the soup in batches to a regular blender and puree until smooth. Add Cheese: Stir in the shredded cheddar cheese until melted and well combined. Serve: Ladle the soup into bowls and serve hot.",
            ingredients: ["Butter: 3 tablespoons", "Cheddar Cheese: 1 cup", "Garlic: 2 cloves", "Diced Onion: 1 cup", "Chicken Broth: 6 cups", "Salt: 3 tablespoons", "Pepper: 1 tablespoon", "Broccoli: 4 cups"]
        },
        'Fried Rice': {
            name: "Fried Rice",
            description: "A dish made with stir-fried rice, vegetables, and soy sauce.",
            steps: "Gather Ingredients: You need rice, soy sauce, sesame oil, carrots, peas, green onions, and eggs. Cook Rice: Cook the rice according to the package instructions and let it cool completely. Prep Ingredients: Chop the carrots and green onions. Heat Oil: In a large skillet or wok, heat the sesame oil over medium-high heat. Cook Vegetables: Add the chopped carrots and peas, and cook until they are tender, about 5 minutes. Add Rice: Add the cooked and cooled rice to the skillet, breaking up any clumps with a spatula. Stir-Fry: Stir-fry the rice and vegetables together for a few minutes, until everything is heated through. Scramble Eggs: Push the rice mixture to one side of the skillet and pour the beaten eggs into the empty side. Scramble the eggs until they are fully cooked, then mix them into the rice. Add Soy Sauce: Drizzle the soy sauce over the fried rice and stir to combine. Add Green Onions: Stir in the chopped green onions. Serve: Serve the fried rice hot.",
            ingredients: ["Rice: 2 cups", "Soy Sauce: 4 tablespoons", "Green Onions: 2", "Carrots: 1", "Peas: 1 cup", "Sesame Oil: 2 tablespoons", "Eggs: 2"]
        },
        'Tater Tots': {
            name: "Tater Tots",
            description: "A dish made with grated potatoes.",
            steps: "Gather Ingredients: You need potatoes, salt, pepper, and oil. Prepare Potatoes: Peel and grate the potatoes. Remove Excess Water: Place the grated potatoes in a clean kitchen towel and squeeze out as much excess water as possible. Season: In a mixing bowl, combine the grated potatoes with salt and pepper. Form Tots: Shape the seasoned potatoes into small, bite-sized tots. Heat Oil: In a large skillet, heat the oil over medium-high heat. Fry Tots: Carefully place the tots in the hot oil and fry until golden brown and crispy, about 3-4 minutes per side. Remove: Use a slotted spoon to remove the fried tots from the oil and drain them on a paper towel-lined plate. Serve: Serve the tater tots hot.",
            ingredients: ["Potatoes: 4", "Salt: 2 teaspoons", "Pepper: 1 teaspoon", "Oil: 2 cups"]
        }
    };

    document.getElementById('name').innerText = recipes[RECIPE_FOR]['name']; // document.getElementById('name') retrieves html element with id = name and .innerText returns text content of element and recipes[RECIPE_FOR]['name'] returns name
    document.getElementById('description').innerText = recipes[RECIPE_FOR]['description'];
    document.getElementById('steps').innerText = recipes[RECIPE_FOR]['steps'];

    const ingredientsList = document.getElementById('ingredients'); // ingredientsList is a const variable that holds reference to html element
    ingredientsList.innerHTML = ''; // Clear any previous content
    recipes[RECIPE_FOR]['ingredients'].forEach(function(ingredient) {
        let li = document.createElement('li'); // Creates a new <li> (list item) element for each ingredient
        li.innerText = ingredient; // Sets the text content of the <li> element to the current ingredient.
        ingredientsList.appendChild(li); // Appends <li> element as a child of the ingredientsList element to build a list of ingredients inside the ingredientsList element.
    });
}
