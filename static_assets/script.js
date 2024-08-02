// Get references to the input box and result display area in the HTML
const inputBox = document.getElementById("input-box");
const resultBox = document.getElementById("result-box");

// Debounce function to limit the rate of search requests
// This function prevents the search from being executed too frequently
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // Clear the previous timer
        timer = setTimeout(() => func.apply(this, args), delay); // Set a new timer
    };
}

// Attach event listener to input box with debounced search function
// This ensures the searchRecipes function is called only after a short delay
inputBox.addEventListener("input", debounce(searchRecipes, 300));

// Function to perform the search based on user input
function searchRecipes() {
    // Get and clean up the keywords from the input box
    const keywords = inputBox.value.trim().split(',').map(ingredient => ingredient.trim());

    // Check if there are any keywords to search
    if (keywords.length > 0) {
        // Send a POST request to the server with the list of ingredients
        fetch('/recipe/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the request content type
            },
            body: JSON.stringify({ ingredients: keywords }) // Send the keywords as JSON
        })
        .then(response => response.json()) // Parse the JSON response
        .then(results => {
            displayResults(results); // Display the search results
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Log errors
            resultBox.innerHTML = '<p>Error fetching data</p>'; // Show error message in result box
        });
    } else {
        resultBox.innerHTML = ''; // Clear results if no keywords are provided
    }
}

// Function to display the search results in the result box
function displayResults(results) {
    resultBox.innerHTML = ''; // Clear any existing content in the result box

    // Check if there are no results
    if (results.length === 0) {
        resultBox.innerHTML = '<p>No recipes found.</p>'; // Show a no results message
        return;
    }

    resultBox.style.display = 'block'; // Make sure the result box is visible

    const ul = document.createElement('ul'); // Create a new unordered list element

    results.forEach(result => {
        const li = document.createElement('li'); // Create a new list item for each result
        li.textContent = result; // Set the text content of the list item

        // Set up an event handler for when the list item is clicked
        li.onclick = () => {
            fetchRecipe(result); // Fetch details for the selected recipe

            // Clear the list and hide the result box after a recipe is selected
            resultBox.innerHTML = '';
            resultBox.style.display = 'none';
        };

        ul.appendChild(li); // Add the list item to the unordered list
    });

    resultBox.appendChild(ul); // Add the unordered list to the result box
}

// Function to fetch and display a specific recipe based on its name
function fetchRecipe(recipeName) {
    inputBox.value = recipeName; // Set the input box to the selected recipe name

    // Send a GET request to fetch the recipe details
    fetch(`/recipe/${encodeURIComponent(recipeName)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`); // Throw error for failed requests
            }
            return response.json(); // Parse the JSON response
        })
        .then(recipeData => {
            displayRecipe(recipeData); // Display the fetched recipe details
        })
        .catch(error => {
            console.error('Error fetching recipe data:', error); // Log errors
            displayRecipeNotFound(recipeName); // Display a not found message if the recipe is not fetched
        });
}

// Function to display recipe details in the designated HTML elements
function displayRecipe(recipeData) {
    document.getElementById('name').innerText = recipeData.name; // Set the recipe name
    document.getElementById('description').innerText = recipeData.description; // Set the recipe description

    const ingredientsList = document.getElementById('ingredients'); // Get the ingredients list element
    ingredientsList.innerHTML = ''; // Clear any existing ingredients

    // Add each ingredient to the ingredients list
    recipeData.ingredients.forEach(ingredient => {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = ingredient; // Set the text content of the list item
        ingredientsList.appendChild(li); // Add the list item to the ingredients list
    });

    document.getElementById('steps').innerText = recipeData.steps; // Set the recipe steps
}

// Function to handle the case where a recipe is not found
function displayRecipeNotFound(recipeName) {
    document.getElementById('name').innerText = `Recipe Not Found for: ${recipeName}`; // Show a not found message
    document.getElementById('description').innerText = ''; // Clear the description
    document.getElementById('ingredients').innerHTML = ''; // Clear the ingredients list
    document.getElementById('steps').innerText = ''; // Clear the steps
}
