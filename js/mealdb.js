document.getElementById('search-btn').addEventListener('click',function(){
    const searchField = document.getElementById('search-field')
    const searchFieldText = searchField.value;
    // console.log(searchFieldText);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayFoodResult(data.meals))
})

const displayFoodResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
    //    console.log(meal); 
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
            </div>
        </div>
    `
    searchResult.appendChild(div)
    });
}

const loadMealDetail = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayIdMeal(data.meals[0]))

}

const displayIdMeal = detail => {
    // console.log(detail);
    const mealdetails = document.getElementById('meal-details');
    mealdetails.textContent = '';
    const div =document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
        <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${detail.strMeal}</h5>
            <p class="card-text">${detail.strInstructions.slice(0,200)}</p>
            <a href="${detail.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealdetails.appendChild(div)
}