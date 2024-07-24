// Get the input box element by its ID
const inputBox = document.getElementById("input-box");

// Get the result box element by its ID
const resultBox = document.getElementById("result-box");

// Add an event listener to the input box to handle 'input' events
inputBox.addEventListener("input", () => {
    // Get the trimmed value from the input box
    const keyword = inputBox.value.trim();

    // If the input value is not empty
    if (keyword.length > 0) {
        // Fetch search results from the server using the keyword
        fetch(`/search?keyword=${encodeURIComponent(keyword)}`)
            .then(response => response.json()) // Parse the response as JSON
            .then(results => {
                // Display the search results
                displayResults(results);
            })
            .catch(error => {
                // Log any errors and show an error message in the result box
                console.error('Error fetching data:', error);
                resultBox.innerHTML = '<p>Error fetching data</p>';
            });
    } else {
        // Clear the result box if the input value is empty
        resultBox.innerHTML = '';
    }
});

function displayResults(results) {
    // Clear previous results
    resultBox.innerHTML = '';

    // Create a new <ul> element to hold the search results
    const ul = document.createElement('ul');

    // Iterate through each result and create a <li> element
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;

        // Add click event listener to fetch recipe details when a result is clicked
        li.onclick = () => {
            // Fetch the details of the selected recipe
            fetchRecipe(result);

            // Clear other options except the clicked one
            ul.childNodes.forEach(node => {
                if (node !== li) {
                    ul.removeChild(node);
                }
            });
        };

        // Append each result as a list item to the <ul>
        ul.appendChild(li);
    });

    // Append the <ul> element to the result box
    resultBox.appendChild(ul);
}

function fetchRecipe(recipeName) {
    // Set the input box value to the selected recipe name
    inputBox.value = recipeName;

    // Clear the result box as we're now fetching recipe details
    resultBox.innerHTML = '';

    // Fetch the recipe details from the server using the recipe name
    fetch(`/recipe/${encodeURIComponent(recipeName)}`)
        .then(response => {
            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(recipeData => {
            // Display the fetched recipe details
            displayRecipe(recipeData);
        })
        .catch(error => {
            // Log any errors and display a "recipe not found" message
            console.error('Error fetching recipe data:', error);
            displayRecipeNotFound(recipeName);
        });
}

function displayRecipe(recipeData) {
    // Update the page with the recipe details
    document.getElementById('name').innerText = recipeData.name;
    document.getElementById('description').innerText = recipeData.description;

    // Get the ingredients list element and clear any previous content
    const ingredientsList = document.getElementById('ingredients');
    ingredientsList.innerHTML = '';

    // Add each ingredient to the list
    recipeData.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Display the recipe steps
    document.getElementById('steps').innerText = recipeData.steps;
}

function displayRecipeNotFound(recipeName) {
    // Update the page to show that the recipe was not found
    document.getElementById('name').innerText = `Recipe Not Found for: ${recipeName}`;
    document.getElementById('description').innerText = '';
    document.getElementById('ingredients').innerHTML = '';
    document.getElementById('steps').innerText = '';
}
