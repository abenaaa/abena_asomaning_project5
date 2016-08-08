//Get data from Yummly
var foodFinder = {};
foodFinder.apiKey = 'c2af0ec8eedaae8581dccc39c30d0209';
foodFinder.apiUrl = 'http://api.yummly.com/v1/api/recipes';

//Get Yummly from API 
foodFinder.getRecipe = function(protein,starch,veggie) {
	console.log(protein, starch, veggie);
	$.ajax({
		url: foodFinder.apiUrl, 
		method: 'GET',
		dataType: 'jsonp',
		data: {
			_app_key: foodFinder.apiKey,
			_app_id: '442f7f27',
			allowedIngredient: [protein,starch,veggie]
		}
//Store info in recipeData.matches
	}).then(function(recipeData) {
		foodFinder.displayRecipes(recipeData.matches);

	});
};

//Get allergy info and store matches
foodFinder.getAllergy = function(protein,starch,veggie,allergy) {
	$.ajax({
		url: foodFinder.apiUrl, 
		method: 'GET',
		dataType: 'jsonp',
		data: {
			_app_key: foodFinder.apiKey,
			_app_id: '442f7f27',
			allowedIngredient: [protein,starch,veggie],
			allowedAllergy: allergy
		}
	}).then(function(recipeData) {
		foodFinder.displayRecipes(recipeData.matches);
	});
}

//Display recipe results TITLE
foodFinder.displayRecipes = function(showRecipe) {
	console.log(showRecipe);
	showRecipe.forEach(function(recipe){
		console.log(recipe.recipeName);

		var recipeTitle = $('<h2>').text(recipe.recipeName);

		$('.recipeResults').append(recipeTitle);

//Display recipe results RATING
		var recipeRating = $('<h2>').text(recipe.rating);

		$('.recipeResults').append(recipeRating);

//Display recipe results INGREDIENTS
		var ingredients = recipe.ingredients;

		for(var i = 0; i < ingredients.length; i = i + 1 ){

			var recipeContainer = $('<ul>');
			var recipeIngredients = $('<li>').text(ingredients[i]);
			var list = recipeContainer.append(recipeIngredients);

		$('.recipeResults').append(list)
		}

//Display recipe results IMAGES
			var smallImageUrls = recipe.smallImageUrls;
			// console.log(smallImageUrls);

			for(var i = 0; i < smallImageUrls.length; i = i + 1){

				var recipeImage = $('<img class="resultImage">').attr('src',smallImageUrls);

			$('.recipeResults').append(recipeImage)
			}

		});
	};

//Initialize event on submit and collect all input types, and store value
foodFinder.init = function() {

	$('#searchForm').on('submit', function(e){
		e.preventDefault();

		var protein = $('input[name="searchTermOne"]').val();
		var starch = $('input[name="searchTermTwo"]').val();
		var veggie = $('input[name="searchTermThree"]').val();
		var allergy = $('select option:selected').val();

//Allergy argument and conditions
		if(allergy === "peanut") {
			// foodFinder.getRecipe(protein,starch,veggie);
			foodFinder.getAllergy(protein,starch,veggie,'394^Peanut-Free');
		}else if(allergy === "dairy") {
			foodFinder.getAllergy(protein,starch,veggie,'396^Dairy-Free');
		}else if(allergy === "gluten") {
			foodFinder.getAllergy(protein,starch,veggie, '393^Gluten-Free');
		}else if(allergy === "soy") {
			foodFinder.getAllergy(protein,starch,veggie,'400^Soy-Free');
		}else if(allergy === "") {
			foodFinder.getRecipe(protein,starch,veggie);

		}
		
	});
};

//Clear or empty to start again without refreshing page

$(function() {
	foodFinder.init();
});