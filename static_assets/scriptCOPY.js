function searchRecipe() {
    var searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm !== '') {
        fetchRecipe(searchTerm);
    } else {
        alert('Please enter a recipe name to search.');
    }
}
function displayRecipe(recipeData) {
    console.log('Fetch response data:', recipeData);
    document.getElementById('name').innerText = recipeData[0];
    document.getElementById('description').innerText = recipeData[1];
    document.getElementById('steps').innerText = recipeData[2];
    document.getElementById('ingredients').innerText = recipeData[3]['Ingredients'];
}

function displayRecipeNotFound(searchTerm) {
    document.getElementById('name').innerText = 'Recipe Not Found for: '  +  searchTerm ;
    document.getElementById('description').innerText = '';
    document.getElementById('ingredients').innerHTML = '';
    document.getElementById('steps').innerText = '';
}

async function fetchRecipe(searchTerm) {
    var url = 'http://127.0.0.1:8000/recipe/' + encodeURIComponent(searchTerm);
fetch(url)
    .then(response => response.json())
    .then(
           data => displayRecipe(data.out[0] )
           )
    .catch(error => alert(error));
}


