function get_recipe(RECIPE_FOR) {
const recipes = {
   'Chocolate Chip Cookies':
	{
	name:"Chocolate Chip Cookies",
    description:"A chewy, buttery treat made with chocolate chips.",
    steps:"Preheat your oven to 375Â°F (190Â°C). Prepare a baking sheet by lining it with parchment paper or lightly greasing it.\n\nIn a mixing bowl, cream together softened butter, granulated sugar, and packed brown sugar until light and fluffy.\n\nAdd eggs, one at a time, to the butter-sugar mixture, beating well after each addition.\nMix in vanilla extract until well combined.\n\nIn a separate bowl, sift together all-purpose flour, baking soda, and salt.\n\nGradually add the dry ingredients to the wet ingredients,mixing until just combined. Be careful not to overmix.\n\nFold in semi-sweet chocolate chips until evenly distributed throughout the cookie dough.\n\nUsing a spoon or cookie scoop, scoop out portions of the cookie dough and roll them into balls about 1 to 1.5 inches in diameter.\nPlace the cookie dough balls onto the prepared baking sheet, leaving some space between each cookie to allow for spreading.\nBake in the preheated oven for 8 to 10 minutes, or until the edges are lightly golden brown.\n\nRemove the baking sheet from the oven and let the cookies cool on the pan for a few minutes before transferring them to a wire rack to cool completely.\nOnce cooled, serve and enjoy your homemade chocolate chip cookies with a glass of milk or your favorite beverage!",
    ingredients:{"Ingredients": ["Butter: 0.5 cup","Sugar: 1 cup","Brown Sugar: 1 cup", "Eggs: 2 N/A","Vanilla Extract: 3 tablespoons","Flour: 3 cups","Baking Soda: 0.125 teaspoon","Salt: 0.125 teaspoon","Chocolate Chips: 0.5 cup" ] }
      },
    'Peanut Butter and Jelly Sandwich':
 	{
	name:"Peanut Butter and Jelly Sandwich",
    description:"A sandwich made with peanut butter and jelly.",
    steps:"Gather Ingredients: You need bread, peanut butter, and jelly.\n\nSpread Peanut Butter: Take one slice of bread and spread a generous layer of peanut butter evenly across one side.\n\n Spread Jelly: Take another slice of bread and spread an even layer of jelly on one side.\n\nCombine: Place the peanut butter-covered slice and the jelly-covered slice together, with the spreads facing each other.\n\n Serve: Enjoy your peanut butter and jelly sandwich!",
    ingredients:{"Ingredients": ["Peanut Butter: 2 tablespoons", "Jelly: 2 tablespoons", "Bread: 2 slices" ] }
      } ,
  'Grilled Cheese Sandwich':
 	{
	name:"Grilled Cheese Sandwich",
    description:"A sandwich made with cheese.",
    steps:"Gather Ingredients: You need bread, butter, and cheddar cheese. Butter Bread: Spread butter evenly on one side of each bread slice. Add Cheese: Place slices of cheddar cheese on the unbuttered side of one bread slice. Assemble: Place the second bread slice on top, buttered side facing out. Heat Pan: Preheat a skillet or frying pan over medium heat. Grill Sandwich: Place the assembled sandwich in the pan. Cook until the bottom slice is golden brown, about 2-4 minutes. Flip: Carefully flip the sandwich and cook until the other side is golden brown and the cheddar cheese is melted, another 2-4 minutes. Serve: Remove from the pan, cut if desired, and enjoy your cheddar grilled cheese sandwich!",
    ingredients:{"Ingredients": ["Butter: 2 tablespoons","Bread: 2 slices","Cheddar Cheese: 1.5 cups" ] }
      },
   'Tomato Soup':
 	 {
	name:"Tomato Soup",
    description:"A soup made with tomatoes and basil.",
    steps:" Gather Ingredients: You need olive oil, onions, garlic, canned tomatoes, chicken broth, salt, pepper, sugar, and fresh basil. Heat Oil: In a large pot, heat the olive oil over medium heat. Cook Onions and Garlic: Add the chopped onion and cook until soft, about 5 minutes. Add the minced garlic cloves and cook for another minute. Add Tomatoes: Pour in the cans of whole or crushed tomatoes, including the juice. Add Broth: Add the chicken broth to the pot. Season: Stir in the salt, pepper, and sugar. Simmer: Bring the mixture to a boil, then reduce the heat and let it simmer for about 20 minutes. Blend Soup: Use an immersion blender to puree the soup until smooth. If you don't have an immersion blender, carefully transfer the soup in batches to a regular blender and puree until smooth. Add Basil: Stir in a handful of chopped fresh basil leaves. Serve: Ladle the soup into bowls and serve hot, optionally with a drizzle of olive oil or a dollop of cream.",
    ingredients:{"Ingredients": ["Olive Oil: 5 tablespoons","Garlic: 3 cloves","Diced Onion: 1 cup", "Diced Tomatoes: 3 cups","Chicken Broth: 6 cups","Salt: 3 tablespoons", "Pepper: 1 tablespoon", "Sugar: 0.25 tablespoon", "Basil Leaves: 8 N/A" ] }
      },
    'Scrambled Eggs':
 	 {
	name:"Scrambled Eggs",
    description:"A breakfast dish made with beaten eggs.",
    steps:"Gather Ingredients: You need eggs, milk , salt, pepper, and butter. Crack Eggs: Crack the eggs into a bowl. Add Milk: Add the milk. Season: Add the salt and pepper to the eggs. Whisk: Whisk the eggs until the mixture is well combined and slightly frothy. Heat Pan: Heat a non-stick skillet over medium-low heat and add the butter. Pour Eggs: Once the butter is melted and bubbling, pour in the egg mixture. Cook Eggs: Let the eggs sit for a few seconds until they begin to set, then gently stir with a spatula, pushing the eggs from the edges to the center. Continue Cooking: Continue to cook, stirring gently, until the eggs are mostly set but still slightly runny. Remove from Heat: Remove the pan from the heat when the eggs are just a little underdone; they will continue to cook from residual heat. Serve: Serve the scrambled eggs immediately while they are still soft and creamy.",
    ingredients:{"Ingredients": ["Eggs: 2 N/A","Milk: 3 tablespoons","Salt: 1.5 tablespoons", "Pepper: 2 teaspoons" ] }
      },
    'Brownie:
 	 {
	name:"Brownie",
    description:"A soft, chocolatey dessert.",
    steps:"Gather Ingredients: You need butter, sugar, eggs, vanilla extract, cocoa powder, flour, salt, and baking powder. Preheat Oven: Preheat your oven to 350°F (175°C). Grease a 9x13-inch baking pan or line it with parchment paper. Melt Butter: In a medium saucepan, melt the butter over medium heat. Remove from heat. Mix Ingredients: Stir in the sugar until smooth. Add the eggs, one at a time, mixing well after each addition. Stir in the vanilla extract. Combine Dry Ingredients: In a separate bowl, whisk together the unsweetened cocoa powder, all-purpose flour, salt, and baking powder. Mix Together: Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Pour Batter: Pour the batter into the prepared baking pan and spread it evenly. Bake: Bake in the preheated oven for 20-25 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs (but not wet batter). Cool: Let the brownies cool in the pan on a wire rack before cutting into squares. Serve: Serve the brownies.",
    ingredients:{"Ingredients": ["Flour: 4 cups","Cocoa Powder: 1.5 cups","Salt: 0.125 teaspoon", "Vanilla Extract: 2 teaspoons", "Sugar: 1.5 cups", "Baking Powder: 1 teaspoon", "Butter: 0.75 cup", "Eggs: 2 N/A"] }
      },
    'French Toast':
 	 {
	name:"French Toast",
    description:"A breakfast dish made with bread and beaten eggs.",
    steps:"Gather Ingredients: You need bread, eggs, milk, vanilla extract, ground cinnamon, salt, and butter. Prepare Batter: In a shallow bowl, whisk together the eggs, milk, vanilla extract, ground cinnamon, and salt until well combined. Heat Pan: Preheat a large skillet or griddle over medium heat and add the butter. Dip Bread: Take a slice of bread and dip it into the egg mixture, letting it soak for a few seconds on each side to absorb the batter. Cook Bread: Place the soaked bread slice onto the hot skillet. Repeat with additional slices, cooking only as many as fit comfortably in the pan. Cook Until Golden: Cook each slice for about 2-3 minutes on each side, or until golden brown and cooked through.Repeat: Continue to dip and cook the remaining bread slices, adding more butter to the pan as needed.Serve: Serve the French toast hot.",
    ingredients:{"Ingredients": ["Bread: 2 slices","Butter: 4 tablespoons","Eggs: 2 N/A", "Vanilla Extract: 2 teaspoons", "Ground Cinnamon: 1 tablespoon", "Salt: 0.125 teaspoon"] }
      },
    'Vanilla Sponge Cake:
 	 {
	name:"Vanilla Sponge Cake",
    description:"A sponge cake flavored with vanilla.",
    steps:"Gather Ingredients: You need flour, sugar, eggs, milk, vanilla extract, baking powder, salt, and butter. Preheat Oven: Preheat your oven to 350°F (175°C). Grease and flour two 8-inch round cake pans or line them with parchment paper. Combine Dry Ingredients: In a medium bowl, whisk together the all-purpose flour, baking powder, and salt. Cream Butter and Sugar: In a large mixing bowl, beat the softened butter with the granulated sugar until light and fluffy, about 3-5 minutes. Add Eggs and Vanilla: Add the eggs, one at a time, beating well after each addition. Mix in the vanilla extract. Alternate Adding Dry Ingredients and Milk: Gradually add the flour mixture to the butter mixture, alternating with a bit of milk, beginning and ending with the flour mixture. Mix until just combined. Pour Batter: Divide the batter evenly between the prepared cake pans and smooth the tops. Bake: Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted into the center of the cakes comes out clean. Cool: Let the cakes cool in the pans for 10 minutes, then turn them out onto wire racks to cool completely. Serve: Once cooled, the cakes can be cut and served.",
    ingredients:{"Ingredients": ["Flour: 4 cups","Salt: 0.125 teaspoon", "Vanilla Extract: 2 teaspoons", "Sugar: 1.5 cups", "Baking Powder: 1 teaspoon", "Butter: 0.75 cup", "Eggs: 2 N/A", "Milk: 1.5 cups"] }
      },
    'Brocoli Cheddar Soup':
 	 {
	name:"Brocoli Cheddar Soup",
    description:"A soup made with broccoli florets and cheddar cheese.",
    steps:"Gather Ingredients: You need broccoli, onion, garlic, carrots, celery, butter, flour, chicken broth, milk, cheddar cheese, salt, and pepper. Prepare Vegetables: Chop the onion, cloves of garlic, carrots, celery stalks, and broccoli florets into small pieces. Sauté Vegetables: In a large pot, melt the butter over medium heat. Add the chopped onion, garlic, carrots, and celery. Sauté until the vegetables are tender, about 5-7 minutes. Make Roux: Sprinkle the flour over the sautéed vegetables and stir to combine. Cook for 1-2 minutes to make a roux, stirring constantly. Add Broth: Gradually pour in the chicken broth, stirring constantly to avoid lumps from forming. Bring the mixture to a simmer. Simmer: Add the chopped broccoli florets to the pot. Let the soup simmer for about 15-20 minutes, or until the broccoli is tender. Add Milk: Stir in the milk to the soup. Let it simmer for another 5 minutes. Add Cheese: Gradually add the shredded cheddar cheese to the soup, stirring until the cheese is melted and the soup is smooth. Season: Season the soup with salt and pepper. Serve: Ladle the broccoli cheddar soup into bowls and serve hot.",
    ingredients:{"Ingredients": ["Brocoli: 12 florets","Butter: 4 tablespoons","Cheddar Cheese: 2 cups", "Diced Onions: 1.5 cups", "Garlic: 4 cloves", "Salt: 2 tablespoons", "Diced Celery: 1 cup", "Flour: 6 tablespoons", "Chicken Broth: 5 cups", "Pepper: 2 tablespoons", "Milk: 0.5 cup", "Diced Carrot: 2 cups"] }
      },
    'Fried Rice':
 	 {
	name:"Fried Rice",
    description:"A rice based dish made with  chicken and seasoned with soy sauce.",
    steps:"Gather Ingredients: You need cooked rice, boneless chicken breast or thigh, eggs, soy sauce, garlic, ginger, sesame oil, vegetable oil, salt, and pepper. Prepare Ingredients: Cook the rice according to package instructions and let it cool completely. Dice the chicken into small pieces, mince the garlic and ginger, and beat the eggs. Cook Chicken: Heat half of the vegetable oil in a large skillet or wok over medium-high heat. Add the diced chicken and cook until it is cooked through and no longer pink. Remove the chicken from the skillet and set it aside. Cook Eggs: In the same skillet, add a little more oil if needed. Pour the beaten eggs into the skillet and cook, stirring gently, until they are scrambled. Remove the eggs from the skillet and set them aside. Stir-fry Aromatics: Add the remaining half of vegetable oil to the skillet. Add the minced garlic cloves and minced ginger. Stir-fry for about 30 seconds until fragrant. Add Rice: Add the cooked rice to the skillet and break up any clumps. Stir-fry the rice for a few minutes until it starts to get slightly crispy. Add Chicken and Eggs: Return the cooked chicken and scrambled eggs to the skillet with the rice. Stir to combine. Season: Drizzle the soy sauce and sesame oil over the rice mixture. Season with salt and pepper to taste. Stir well to evenly distribute the flavors. Finish Cooking: Continue to stir-fry the chicken fried rice for another 2-3 minutes until everything is heated through and well combined.Serve: Transfer the chicken fried rice to serving plates or bowls and serve hot.",
    ingredients:{"Ingredients": ["Rice: 2 cups","Chicken Thigh: 2 pieces","Eggs: 2 N/A", "Soy Sauce: 6 tablespoons", "Garlic: 4 cloves", "Salt: 3 tablespoons", "Ginger: 2 tablespoons", "Sesame Oil: 2 tablespoons", "Vegetable Oil: 2 tablespoons", "Pepper: 1.5 tablespoons"] }
      },
   'Tater Tots':
 	 {
	name:"Tater Tots",
    description:"A snack made with fried potatoes.",
    steps:"Gather Ingredients: You need potatoes, salt, pepper, garlic powder, onion powder, and vegetable oil for frying. Prepare Potatoes: Peel and rinse the potatoes. Use a box grater or a food processor with a grating attachment to grate the potatoes into a bowl. Season Potatoes: Season the grated potatoes with salt, pepper, and in the seasonings (garlic powder and onion powder). Mix well to combine. Shape Tater Tots: Take small portions of the seasoned potato mixture and shape them into small cylinders, about 1 inch in length and 1/2 inch in diameter. You can use your hands to shape them or use a spoon to scoop and shape them. Heat Oil: Heat about 2 inches of vegetable oil in a deep skillet or frying pan over medium-high heat until it reaches about 350°F (175°C). Fry Tater Tots: Carefully place the shaped tater tots into the hot oil in batches, making sure not to overcrowd the pan. Fry them for about 3-4 minutes per side, or until they are golden brown and crispy. Drain: Once the tater tots are cooked, use a slotted spoon or tongs to transfer them to a plate lined with paper towels to drain excess oil. Serve: Serve the tater tots hot and crispy as a delicious snack or side dish.",
    ingredients:{"Ingredients": ["Potato: 6 N/A", "Garlic Powder: 2 tablespoons", "Salt: 3 tablespoons", "Onion Powder: 2 tablespoons", "Pepper: 1.5 tablespoons", "Vegetable Oil: 1.5 cups"] }
      }
    }


document.getElementById('name').innerText = recipes[RECIPE_FOR]['name'];
document.getElementById('description').innerText = recipes[RECIPE_FOR]['description'];
document.getElementById('steps').innerText = recipes[RECIPE_FOR]['steps'];
document.getElementById('ingredients').innerText =  recipes[RECIPE_FOR]['ingredients']['Ingredients'];
}


function myFunction() {
var objectName = {
    'key1': [
      ['string1', 'string2'],
      ['string3', 'string4']
    ],
    'key2': [
      ['string5', 'string6']
    ]
}

var recipes = {
   'Chocolate Chip Cookies':
	{
	name:"Chocolate Chip Cookies",
    description:"A chewy, buttery treat made with chocolate chips.",
    steps:"Preheat your oven to 375Â°F (190Â°C). Prepare a baking sheet by lining it with parchment paper or lightly greasing it.\n\nIn a mixing bowl, cream together softened butter, granulated sugar, and packed brown sugar until light and fluffy.\n\nAdd eggs, one at a time, to the butter-sugar mixture, beating well after each addition.\nMix in vanilla extract until well combined.\n\nIn a separate bowl, sift together all-purpose flour, baking soda, and salt.\n\nGradually add the dry ingredients to the wet ingredients,mixing until just combined. Be careful not to overmix.\n\nFold in semi-sweet chocolate chips until evenly distributed throughout the cookie dough.\n\nUsing a spoon or cookie scoop, scoop out portions of the cookie dough and roll them into balls about 1 to 1.5 inches in diameter.\nPlace the cookie dough balls onto the prepared baking sheet, leaving some space between each cookie to allow for spreading.\nBake in the preheated oven for 8 to 10 minutes, or until the edges are lightly golden brown.\n\nRemove the baking sheet from the oven and let the cookies cool on the pan for a few minutes before transferring them to a wire rack to cool completely.\nOnce cooled, serve and enjoy your homemade chocolate chip cookies with a glass of milk or your favorite beverage!",
    ingredients:{"Ingredients": ["Butter: 0.5 cup","Sugar: 1 cup","Brown Sugar: 1 cup", "Eggs: 2 N/A","Vanilla Extract: 3 tablespoons","Flour: 3 cups","Baking Soda: 0.125 teaspoon","Salt: 0.125 teaspoon","Chocolate Chips: 0.5 cup" ] }
      },
    'Dosas':
 	{
	name:"Dosas",
    description:"A chewy, buttery treat made with rice.",
    steps:"Just heat and eat!!",
    ingredients:{"Ingredients": ["Butter: 0.5 cup","Sugar: 1 cup","Brown Sugar: 1 cup", "Eggs: 2 N/A","Vanilla Extract: 3 tablespoons","Flour: 3 cups","Baking Soda: 0.125 teaspoon","Salt: 0.125 teaspoon","Chocolate Chips: 0.5 cup" ] }
      }
    }
alert(recipes['NON']['name'])

}

function get_recipe_OLD(pname ) {
//document.getElementById('name').innerText = 'TEST';
     //ingredients:{"Ingredients": ["Butter: 0.5 cup","Sugar: 1 cup","Brown Sugar: 1 cup", "Eggs: 2 N/A","Vanilla Extract: 3 tablespoons","Flour: 3 cups","Baking Soda: 0.125 teaspoon","Salt: 0.125 teaspoon","Chocolate Chips: 0.5 cup" ] }
//        ingredients:{Ingredients: [Butter: "0.5 cup",Sugar: "1 cup",Brown Sugar: "1 cup", Eggs: "2 N/A",Vanilla Extract: "3 tablespoons",Flour:" 3 cups",Baking Soda: "0.125 teaspoon",Salt: "0.125 teaspoon",Chocolate Chips: "0.5 cup" ] }
For_R =document.getElementById('Recipe_options').value;
const recipe = {
        name:"Chocolate Chip Cookies",
        description:"A chewy, buttery treat made with chocolate chips.",
        steps:"Preheat your oven to 375Â°F (190Â°C). Prepare a baking sheet by lining it with parchment paper or lightly greasing it.\n\nIn a mixing bowl, cream together softened butter, granulated sugar, and packed brown sugar until light and fluffy.\n\nAdd eggs, one at a time, to the butter-sugar mixture, beating well after each addition.\nMix in vanilla extract until well combined.\n\nIn a separate bowl, sift together all-purpose flour, baking soda, and salt.\n\nGradually add the dry ingredients to the wet ingredients,mixing until just combined. Be careful not to overmix.\n\nFold in semi-sweet chocolate chips until evenly distributed throughout the cookie dough.\n\nUsing a spoon or cookie scoop, scoop out portions of the cookie dough and roll them into balls about 1 to 1.5 inches in diameter.\nPlace the cookie dough balls onto the prepared baking sheet, leaving some space between each cookie to allow for spreading.\nBake in the preheated oven for 8 to 10 minutes, or until the edges are lightly golden brown.\n\nRemove the baking sheet from the oven and let the cookies cool on the pan for a few minutes before transferring them to a wire rack to cool completely.\nOnce cooled, serve and enjoy your homemade chocolate chip cookies with a glass of milk or your favorite beverage!",
        ingredients:{"Ingredients": ["Butter: 0.5 cup","Sugar: 1 cup","Brown Sugar: 1 cup", "Eggs: 2 N/A","Vanilla Extract: 3 tablespoons","Flour: 3 cups","Baking Soda: 0.125 teaspoon","Salt: 0.125 teaspoon","Chocolate Chips: 0.5 cup" ] }
      }
document.getElementById('name').innerText = recipe.name;
document.getElementById('description').innerText = recipe.description;
document.getElementById('steps').innerText = recipe.steps;
document.getElementById('ingredients').innerText = recipe['ingredients']['Ingredients'];
}
