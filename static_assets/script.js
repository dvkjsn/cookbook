// Get references to the input box and result display area in the HTML
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

// Function to perform the search based on user input
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
            if (results.length > 0) {
                displayResults(results);
                resultBox.style.display = 'block'; // Show result box if there are results
            } else {
                resultBox.style.display = 'none'; // Hide result box if no results
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultBox.innerHTML = '<p>Error fetching data</p>';
            resultBox.style.display = 'none'; // Hide result box on error
        });
    } else {
        resultBox.style.display = 'none'; // Hide result box if no keywords are provided
    }
}

// Function to display the search results in the result box
function displayResults(results) {
    resultBox.innerHTML = '';
    if (results.length === 0) {
        resultBox.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    const ul = document.createElement('ul');

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        li.onclick = () => {
            fetchRecipe(result);
            resultBox.innerHTML = '';
            resultBox.style.display = 'none';
        };
        ul.appendChild(li);
    });

    resultBox.appendChild(ul);
}

// Function to fetch and display a specific recipe based on its name
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

// Function to display recipe details in the designated HTML elements
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

// Function to handle the case where a recipe is not found
function displayRecipeNotFound(recipeName) {
    document.getElementById('name').innerText = `Recipe Not Found for: ${recipeName}`;
    document.getElementById('description').innerText = '';
    document.getElementById('ingredients').innerHTML = '';
    document.getElementById('steps').innerText = '';
}

 // Handle splash screen transition
        document.addEventListener('DOMContentLoaded', function() {
            const goButton = document.querySelector('.go-button');

            if (goButton) {
                goButton.addEventListener('click', function() {
                    console.log('Go button clicked'); // Log message when button is clicked

                    const splashScreen = document.querySelector('.splash-screen');
                    const container = document.querySelector('.container');

                    if (splashScreen && container) {
                        splashScreen.style.display = 'none';
                        container.style.display = 'block';
                        document.body.style.overflow = 'auto'; // Enable scrolling on body
                        console.log('Transition complete'); // Log message after transition
                    } else {
                        console.error('Elements not found'); // Log error if elements are not found
                    }
                });
            } else {
                console.error('Go button not found'); // Log error if button is not found
            }
        });