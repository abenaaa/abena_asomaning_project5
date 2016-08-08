//Get data from Yummly
var foodFinder = {};
foodFinder.apiKey = '22981353ba0adfcf1928128e4a1e73a4';
foodFinder.apiUrl = 'http://api.yummly.com/v1/api/recipes';

//Get Yummly from API
foodFinder.getRecipe = function(protein,starch,veggie) {

	$.ajax({
		url: foodFinder.apiUrl, 
		method: 'GET',
		dataType: 'jsonp',
		data: {
			_app_key: foodFinder.apiKey,
			_app_id: '046e426b',
			allowedIngredient: [protein,starch,veggie]
		}
	}).then(function(recipeData) {
		foodFinder.displayRecipes(recipeData.matches);

	});
};

foodFinder.getAllergy = function(protein,starch,veggie,allergy) {
	var myTemplate = $("#myTemplate").html();
	var template = Handlebars.compile(myTemplate);

	getRecipe.forEach(function(matches){
		console.log(protein,starch,veggie,allergy);
		var recipeTemplate = template(recipe);
		$("#recipe").append(recipeTemplate);
	});

	};


	//Display Result Images
	foodFinder.displayShow = function(showImage) {
	showImage.forEach(function(recipe){
		var recipeURL = recipe[recipeData.matches].smallImageUrls[0];
		var recipeImage = $('<img>').attr('src', recipeURL.replace(/=s90/,""));

			$('#showResultImage').append(recipeImage);

		});    //put images in div
};

	// //Display Ingredients As A For/In Loop
// var displayIngredients = {recicpe:length + ingredients:[length]}; 

// var text = "";
// var x;
// for (x in displayIngredients) {
//     text += displayIngredients[x];
// }

//Display Ingredients As Code Along Museum Example
// foodFinder.displayRecipesI = function(showIngredients) {
// 	console.log(showIngredients);
// 	showIngredients.forEach(function(recipe){
// 		console.log(recipe.ingredients);
// 		var recipeIngredients = $('<h3>').text(recipe.ingredients);
// 		$('#showIngredients').append(recipeIngredients);

// 	});
// };


// 	$.ajax({
// 		url: foodFinder.apiUrl, 
// 		method: 'GET',
// 		dataType: 'jsonp',
// 		data: {
// 			_app_key: foodFinder.apiKey,
// 			_app_id: '046e426b',
// 			allowedIngredient: [protein,starch,veggie],
// 			allowedAllergy: allergy
// 		}
// 	}).then(function(recipeData) {
// 		foodFinder.displayRecipes(recipeData.matches);
// 	});
// }


// //Display Results
// foodFinder.displayRecipes = function(showRecipe) {
// 	console.log(showRecipe);
// 	showRecipe.forEach(function(recipe){
// 		console.log(recipe.recipeName);
// 		var recipeTitle = $('<h2>').text(recipe.recipeName);
// 		$('#showResult').append(recipeTitle);

// 	});
// };

// //Display Ingredients As A For/In Loop
// var displayIngredients = {recicpe:length + ingredients:[length]}; 

// var text = "";
// var x;
// for (x in displayIngredients) {
//     text += displayIngredients[x];
// }



//Display Ingredients As Code Along Example
// foodFinder.displayRecipesI = function(showIngredients) {
// 	console.log(showIngredients);
// 	showIngredients.forEach(function(recipe){
// 		console.log(recipe.ingredients);
// 		var recipeIngredients = $('<h3>').text(recipe.ingredients);
// 		$('#showIngredients').append(recipeIngredients);

// 	});
// };

//Display Result Images
// foodFinder.displayShow = function(showImage) {
// 		console.log(showImage);
// 		showImage.forEach(function(recipe){
// 			console.log(recipe.imageUrlsBySize);
// 			var image = $('<img>').attr('src', recipe.imageUrlsBySize.url);

// 			$('#showResultImage').append(recipeImage);

// 		});    //put images in div
// };

// foodFinder.init = function() {

// 	$('#searchForm').on('submit', function(e){
// 		e.preventDefault();

// 		var protein = $('input[name="searchTermOne"]').val();
// 		var starch = $('input[name="searchTermTwo"]').val();
// 		var veggie = $('input[name="searchTermThree"]').val();
// 		var allergy = $('select option:selected').val();
// 		// console.log(protein, allergy)

// 		if(allergy === "peanut") {
// 			// foodFinder.getRecipe(protein,starch,veggie);
// 			foodFinder.getAllergy(protein,starch,veggie,'394^Peanut-Free');
// 		}else if(allergy === "dairy") {
// 			foodFinder.getAllergy(protein,starch,veggie,'396^Dairy-Free');

// 		}else if(allergy === "gluten") {
// 			foodFinder.getAllergy(protein,starch,veggie, '393^Gluten-Free');
// 		}else if(allergy === "soy") {
// 			foodFinder.getAllergy(protein,starch,veggie,'400^Soy-Free');
// 		}else if(allergy === "") {
// 			foodFinder.getRecipe(protein,starch,veggie);

// 		}
		
// 	});
// };

//Search data for matching keywords
// &allowedIngredient[]=garlic&allowedIngredient[]=cognac

// Exclude allergy input
// &excludedIngredient[]=onion%20soup%20mix&excludedIngredient[]=gruy

//loop through

//Populate results as stylized div

//Clear or empty to start again without refreshing page

foodFinder.init = function() {
	foodFinder.getRecipe();
};

$(function() {
	foodFinder.init();
});