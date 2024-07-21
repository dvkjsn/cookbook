let availableKeywords = [
    'Brownie',
    'Tomato Soup',
    'Chocolate Chip Cookies',
    'Fried Rice',
    'Tater Tots',
    'French Toast',
    'Scrambled Eggs',
    'Brocoli Cheddar Soup',
    'Grilled Cheese Sandwich',
    'Peanut Butter and Jelly Sandwich'
 ];

 const resultsBox = document.querySelector(".result-box");
 const inputBox = document.getElementById("input-box");

 inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
 }

 function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
 }

 function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
 }


/*
function searchRecipe() {
    var searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm !== '') {
        fetchRecipe(searchTerm);
    } else {
        alert('Please enter a recipe name to search.');
    }
}
function displayRecipe(recipeData) {
    console.log('Fetch response data:', recipeData); // Log the fetched recipe data to the console for debugging purposes
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
           ) // Chain another .then() to handle the parsed JSON data. Pass the first item of the 'out' array (from the fetched data) to the displayRecipe function.
    .catch(error => displayRecipeNotFound(searchTerm)); // If an error occurs during the fetch operation or JSON parsing, show recipe not found.
}

*/
