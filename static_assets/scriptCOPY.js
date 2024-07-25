const inputBox = document.getElementById("input-box");
const resultBox = document.getElementById("result-box");

// Debounce function to limit the rate of search requests
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Attach event listener to input box with debounced search function
inputBox.addEventListener("input", debounce(searchRecipes, 300));

// Function to perform the search
function searchRecipes() {
    const keywords = inputBox.value.trim().split(',').map(ingredient => ingredient.trim());

    if (keywords.length > 0) {
        fetch('/recipe/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ingredients: keywords })
        })
        .then(response => response.json())
        .then(results => {
            displayResults(results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultBox.innerHTML = '<p>Error fetching data</p>';
        });
    } else {
        resultBox.innerHTML = '';
    }
}

// Function to display the search results
function displayResults(results) {
    resultBox.innerHTML = '';

    if (results.length === 0) {
        resultBox.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    resultBox.style.display = 'block'; // Make sure the result box is visible

    const ul = document.createElement('ul');

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result; // Assuming result is a recipe name

        li.onclick = () => {
            fetchRecipe(result);

            // Clear the list and hide the result box after a recipe is selected
            resultBox.innerHTML = '';
            resultBox.style.display = 'none';
        };

        ul.appendChild(li);
    });

    resultBox.appendChild(ul);
}

// Function to fetch and display a specific recipe
function fetchRecipe(recipeName) {
    inputBox.value = recipeName;

    fetch(`/recipe/${encodeURIComponent(recipeName)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(recipeData => {
            displayRecipe(recipeData);
        })
        .catch(error => {
            console.error('Error fetching recipe data:', error);
            displayRecipeNotFound(recipeName);
        });
}

// Function to display recipe details
function displayRecipe(recipeData) {
    document.getElementById('name').innerText = recipeData.name;
    document.getElementById('description').innerText = recipeData.description;

    const ingredientsList = document.getElementById('ingredients');
    ingredientsList.innerHTML = '';

    recipeData.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    document.getElementById('steps').innerText = recipeData.steps;
}

// Function to handle case where recipe is not found
function displayRecipeNotFound(recipeName) {
    document.getElementById('name').innerText = `Recipe Not Found for: ${recipeName}`;
    document.getElementById('description').innerText = '';
    document.getElementById('ingredients').innerHTML = '';
    document.getElementById('steps').innerText = '';
}
