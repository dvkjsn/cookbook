function get_recipe() {
const recipe = {name:"Chocolate Chip Cookies",
            description:"A chewy, buttery treat made with chocolate chips.",
steps:"Preheat your oven to 375Â°F (190Â°C). Prepare a baking sheet by lining it with parchment paper or lightly greasing it.\n\n
In a mixing bowl, cream together softened butter, granulated sugar, and packed brown sugar until light and fluffy.\n\n
Add eggs, one at a time, to the butter-sugar mixture, beating well after each addition.\nMix in vanilla extract until well combined.\n\n
In a separate bowl, sift together all-purpose flour, baking soda, and salt.\n\nGradually add the dry ingredients to the wet ingredients,
mixing until just combined. Be careful not to overmix.\n\n
Fold in semi-sweet chocolate chips until evenly distributed throughout the cookie dough.\n\n
Using a spoon or cookie scoop, scoop out portions of the cookie dough and roll them into balls about 1 to 1.5 inches in diameter.\n
Place the cookie dough balls onto the prepared baking sheet, leaving some space between each cookie to allow for spreading.\n
Bake in the preheated oven for 8 to 10 minutes, or until the edges are lightly golden brown.\n\n
Remove the baking sheet from the oven and let the cookies cool on the pan for a few minutes before transferring them to a wire rack to cool completely.\n
Once cooled, serve and enjoy your homemade chocolate chip cookies with a glass of milk or your favorite beverage!",
"ingredients":{"Ingredients":
        ["Butter: 0.5 cup",
         "Sugar: 1 cup",
         "Brown Sugar: 1 cup",
         "Eggs: 2 N/A",
         "Vanilla Extract: 3 tablespoons",
         "Flour: 3 cups",
         "Baking Soda: 0.125 teaspoon",
         "Salt: 0.125 teaspoon",
         "Chocolate Chips: 0.5 cup"
         ]
            }
        };
        document.getElementById('name').innerText = 'TEST';
        /***
document.getElementById('name').innerHTML = recipe.name;
document.getElementById('description').innerHTML = recipe.description;
document.getElementById('steps').innerHTML = recipe.steps;
**/
}