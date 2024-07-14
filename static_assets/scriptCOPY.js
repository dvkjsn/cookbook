function searchRecipe() {
    var searchTerm = document.getElementById('searchInput').value.trim();
    alert('For: ' + searchTerm)
    if (searchTerm !== '') {
        fetchRecipe(searchTerm);
    } else {
        alert('Please enter a recipe name to search.');
    }
}
function fetchRecipeOLD(searchTerm) {
    var url = 'http://127.0.0.1:8000/recipe/' + encodeURIComponent(searchTerm);

alert('URL: ' + url)
    fetch(url)
        .then(response => {

            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.detail); });
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetch response data:', data);
            if (data && data.out.length > 0) {
                displayRecipe(data.out[0]);
            } else {
                displayRecipeNotFound();
            }
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
            displayRecipeNotFound(searchTerm);
        });
}

function displayRecipe(recipeData) {
    document.getElementById('name').innerText = recipeData[0];
    document.getElementById('description').innerText = recipeData[1];

    const ingredientsList = document.getElementById('ingredients');
    ingredientsList.innerHTML = '';
    const ingredients = JSON.parse(recipeData[3]).Ingredients;
    ingredients.forEach(ingredient => {
        let li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
    });

    document.getElementById('steps').innerText = recipeData[2];
}

function displayRecipeNotFound(searchTerm) {
    document.getElementById('name').innerText = 'Recipe Not Found for: '  +  searchTerm ;
    document.getElementById('description').innerText = '';
    document.getElementById('ingredients').innerHTML = '';
    document.getElementById('steps').innerText = '';
}

async function fetchRecipe(searchTerm) {
    var url = 'http://127.0.0.1:8000/recipe/' + encodeURIComponent(searchTerm);
    alert('URL 2: ' + url);

fetch(url)
    .then(response => response.json())
    .then(data => alert(data.out ))
    .catch(error => alert(error));

  /**
    fetch(url, {
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  alert('json: ');
});

  /**
    const response =  await fetch(url);
    //alert(`Response status: ${response.status}`);
    const json = await response.json();
    alert('Response status:' +  json);
  /**
    alert( response.text());
    //const json = response.json();
    //alert ('Json:' + json) ;
    /**
      if (!response.ok) {
         displayRecipeNotFound('Error');
       }
        const json = response.json();
        displayRecipe(json);
**/
}