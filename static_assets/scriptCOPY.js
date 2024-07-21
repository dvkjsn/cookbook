function searchRecipe() {
    var searchTerm = document.getElementById('searchInput').value.trim();
     // Get the value from the input field with id 'searchInput' and remove any leading/trailing whitespace
    if (searchTerm !== '') {
        fetchRecipe(searchTerm); // Call the fetchRecipe function, passing the searchTerm as an argument
    } else {
        alert('Please enter a recipe name to search.');
    }
}
function displayRecipe(recipeData) {
    console.log('Fetch response data:', recipeData); // Log the fetched recipe data to the console for debugging purposes
    document.getElementById('name').innerText = recipeData[0];
     // Set the inner text of the element with id 'name' to the 1st item in the recipeData array
    document.getElementById('description').innerText = recipeData[1];
    // Set the inner text of the element with id 'description' to the 2nd item in the recipeData array
    document.getElementById('steps').innerText = recipeData[2];
    // Set the inner text of the element with id 'steps' to the 3rd item in the recipeData array
    document.getElementById('ingredients').innerText = recipeData[3]['Ingredients'];
    // Set the inner text of the element with id 'ingredients' to the 'Ingredients' property of the 4th item in the recipeData array
}

function displayRecipeNotFound(searchTerm) {
    document.getElementById('name').innerText = 'Recipe Not Found for: '  +  searchTerm ;
        // Set the inner text of the element with id 'name' to indicate that the recipe was not found for the searchTerm
    document.getElementById('description').innerText = '';
        // Set the inner text of the element with id 'description' to an empty string, clearing any previous content
    document.getElementById('ingredients').innerHTML = '';
        // Set the inner HTML of the element with id 'ingredients' to an empty string, clearing any previous content
    document.getElementById('steps').innerText = '';
        // Set the inner text of the element with id 'steps' to an empty string, clearing any previous content
}

async function fetchRecipe(searchTerm) {
// async function can execute tasks that takes time (like fetching data from a server) without blocking the main
// execution thread of the program.
    var url = 'http://127.0.0.1:8000/recipe/' + encodeURIComponent(searchTerm);
      // Construct the URL for the API endpoint. encodeURIComponent() ensures that special characters in the searchTerm
      // are properly encoded for inclusion in a URL.
fetch(url)    // Perform a fetch request to the constructed URL
    .then(response => response.json())
            // When the fetch operation completes successfully, convert the response to JSON format
    .then(
           data => displayRecipe(data.out[0] )
           ) // Chain another .then() to handle the parsed JSON data. Pass the first item of the 'out' array
           // (from the fetched data) to the displayRecipe function.
    .catch(error => displayRecipeNotFound(searchTerm)); // If an error occurs during the fetch operation or JSON parsing, show recipe not found.
}


