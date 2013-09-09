var celebrity = [
    //female celebs 
	{name: "Taylor Swift",
	name2: "<b>Taylor Swift</b>" + "<br>",
	gender: "Female",
	ageRange: "20-35",
	personality: "romantic",
	image: "<img src='images/Swift.jpg' />"},

	{name: "Kristen Stewart",
	name2: "<b>Kristen Stewart</b>" + "<br>",
	gender: "Female",
	ageRange: "20-35",
	personality: "serious",
	image: "<img src='images/Kristen.jpg' />" },

	{name: "Anna Kendrick",
	name2: "<b>Anna Kendrick</b>" + "<br>",
	gender: "Female",
	ageRange: "20-35",
	personality: "funny",
	image: "<img src='images/Kendrick.jpg' />" },

	{name: "Julia Roberts",
	name2: "<b>Julia Roberts</b>" + "<br>",
	gender: "Female",
	ageRange: "36-50",
	personality: "romantic", 
	image: "<img src='images/Roberts.jpg' />" },

	{name: "Nicole Kidman",
	name2: "<b>Nicole Kidman</b>" + "<br>",
	gender: "Female",
	ageRange: "36-50",
	personality: "serious",
	image: "<img src='images/Kidman.jpg' />" },

	{name: "Tina Fey",
	name2: "<b>Tina Fey</b>" + "<br>",
	gender: "Female",
	ageRange: "36-50",
	personality: "funny",
	image: "<img src='images/Fey.jpg' />" }, 

	{name: "Kim Cattrall",
	name2: "<b>Kim Cattrall</b>" + "<br>",
	gender: "Female",
	ageRange: "51 and up",
	personality: "romantic",
	image: "<img src='images/Kim.jpg' />" },

	{name: "Susan Sarandon",
	name2: "<b>Susan Sarandon</b>" + "<br>",
	gender: "Female",
	ageRange: "51 and up",
	personality: "serious",
	image: "<img src='images/Susan.jpg' />" },

	{name: "Betty White",
	name2: "<b>Betty White</b>" + "<br>",
	gender: "Female",
	ageRange: "51 and up",
	personality: "funny",
	image: "<img src='images/Betty.jpg' />" }, 

// male celebs 

	{name: "Daniel Radcliffe",
	name2: "<b>Daniel Radcliffe</b>" + "<br>",
	gender: "Male",
	ageRange: "20-35",
	personality: "serious",
	image: "<img src='images/Radcliffe.jpg' />" },

	{name: "Joseph Gordon-Levitt",
	name2: "<b>Joseph Gordon-Levitt</b>" + "<br>",
	gender: "Male",
	ageRange: "20-35",
	personality: "romantic",
	image: "<img src='images/jgl.jpg' />" },

	{name: "Jonah Hill",
	name2: "<b>Jonah Hill</b>" + "<br>",
	gender: "Male",
	ageRange: "20-35",
	personality: "funny",
	image: "<img src='images/Jonah.jpg' />" },

	{name: "Brad Pitt",
	name2: "<b>Brad Pitt</b>" + "<br>",
	gender: "Male",
	ageRange: "36-50",
	personality: "romantic",
	image: "<img src='images/Pitt.jpg' />" },

	{name: "Leonardo DiCaprio",
	name2: "<b>Leonardo DiCaprio</b>" + "<br>",
	gender: "Male",
	ageRange: "36-50",
	personality: "serious",
	image: "<img src='images/Leo.jpg' />" },

	{name: "Zach Galifianakis",
	name2: "<b>Zach Galifianakis</b>" + "<br>",
	gender: "Male",
	ageRange: "36-50",
	personality: "funny",
	image: "<img src='images/Zach.jpg' />" }, 

	{name: "George Clooney",
	name2: "<b>George Clooney</b>" + "<br>",
	gender: "Male",
	ageRange: "51 and up",
	personality: "romantic",
	image: "<img src='images/Clooney.jpg' />" },
	
	{name: "Denzel Washington",
	name2: "<b>Denzel Washington</b>" + "<br>",
	gender: "Male",
	ageRange: "51 and up",
	personality: "serious",
	image: "<img src='images/Denzel.jpg' />" },

	{name: "Alec Baldwin",
	name2: "<b>Alec Baldwin</b>" + "<br>",
	gender: "Male",
	ageRange: "51 and up",
	personality: "funny",
	image: "<img src='images/Baldwin.jpg' />" }, 
];

$(document).ready (function(){
	$('.btn-primary').click(function(){
		if (validateForm()) {  
			getName();
			$('#celeb-name').text(findMatchName());
			$("#preview-image").empty().append(findMatchPhoto());
			addButton();
				} //end of validateForm 
			$()
		}); //end of button click function
	$('.preview-button').click(function(){
		multipleMatches();
		$('#celeb-name').empty();
		$("#preview-image").empty().append(findMatchPhotos2());
		$('.preview-button').empty();
	})
	
}); //end of document ready


// function finds the name of the user 
function getName () {
	var name = $("#name").val();
	$("#preview-text").text(name + ', your celebrity match is:')
};

function addButton (){
	var button = $(".preview-button").html("<button> Not satisfied? </button>")
}

// function fines user's match 
function findMatch () {
	selected = {
		genderInput: $("#gender").val(), 
		ageInput: $("#age-range").val(),
		personalityInput: $("#personality").val()
	}

	matches = celebrity.filter(function(obj) {
		return	obj.gender 		!== selected.genderInput &&
				obj.ageRange 	=== selected.ageInput &&
				obj.personality === selected.personalityInput; 
	});
	}

// function returns the celeb photo
function findMatchPhoto () {
	findMatch()
	return matches.map(function(obj) {return obj.image})
	}

//function returns the celeb name 
function findMatchName () {
	findMatch()
	return matches.map(function(obj) {return obj.name})
	}


function multipleMatches () {
	var name = $("#name").val();
	$("#preview-text").text(name + ', here are some other matches:')
}

function findMatch2 () {
	selected2 = {
		genderInput: $("#gender").val(), 
		ageInput: $("#age-range").val(),
	}

	matches2 = celebrity.filter(function(obj) {
		return	obj.gender 		!== selected.genderInput &&
				obj.ageRange 	=== selected.ageInput;
	});
	}

function findMatchPhotos2 () {
	findMatch2()
	return matches2.map(function(obj) {return obj.name2})
}

function validateForm () {
			var valid = true;
			$('#name').removeClass("highlight")
			$('.message').html('<p> </p>')
			$('#name').each(function(){
				if ($(this).val() == "") {
					valid = false
					$(this).addClass("highlight")
					$('.message').html('<p>*Please enter your name.</p>')
				}
			})
			 return valid
		}