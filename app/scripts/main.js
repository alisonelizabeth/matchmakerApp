var celebrity = [
    //female celebs 
	{name: "Taylor Swift",
	gender: "Female",
	ageRange: "20-35",
	personality: "romantic",
	image: "<img src='images/Swift.jpg' />"},

	{name: "Kristen Stewart",
	gender: "Female",
	ageRange: "20-35",
	personality: "serious",
	image: "<img src='images/Kristen.jpg' />" },

	{name: "Anna Kendrick",
	gender: "Female",
	ageRange: "20-35",
	personality: "funny",
	image: "<img src='images/Kendrick.jpg' />" },

	{name: "Julia Roberts",
	gender: "Female",
	ageRange: "36-50",
	personality: "romantic", 
	image: "<img src='images/Roberts.jpg' />" },

	{name: "Nicole Kidman",
	gender: "Female",
	ageRange: "36-50",
	personality: "serious",
	image: "<img src='images/Kidman.jpg' />" },

	{name: "Tina Fey",
	gender: "Female",
	ageRange: "36-50",
	personality: "funny",
	image: "<img src='images/Fey.jpg' />" }, 

	{name: "Kim Cattrall",
	gender: "Female",
	ageRange: "51 and up",
	personality: "romantic",
	image: "<img src='images/Kim.jpg' />" },

	{name: "Susan Sarandon",
	gender: "Female",
	ageRange: "51 and up",
	personality: "serious",
	image: "<img src='images/Susan.jpg' />" },

	{name: "Betty White",
	gender: "Female",
	ageRange: "51 and up",
	personality: "funny",
	image: "<img src='images/Betty.jpg' />" }, 

// male celebs 

	{name: "Daniel Radcliffe",
	gender: "Male",
	ageRange: "20-35",
	personality: "serious",
	image: "<img src='images/Radcliffe.jpg' />" },

	{name: "Joseph Gordon-Levitt",
	gender: "Male",
	ageRange: "20-35",
	personality: "romantic",
	image: "<img src='images/jgl.jpg' />" },

	{name: "Jonah Hill",
	gender: "Male",
	ageRange: "20-35",
	personality: "funny",
	image: "<img src='images/Jonah.jpg' />" },

	{name: "Brad Pitt",
	gender: "Male",
	ageRange: "36-50",
	personality: "romantic",
	image: "<img src='images/Pitt.jpg' />" },

	{name: "Leonardo DiCaprio",
	gender: "Male",
	ageRange: "36-50",
	personality: "serious",
	image: "<img src='images/Leo.jpg' />" },

	{name: "Zach Galifianakis",
	gender: "Male",
	ageRange: "36-50",
	personality: "funny",
	image: "<img src='images/Zach.jpg' />" }, 

	{name: "George Clooney",
	gender: "Male",
	ageRange: "51 and up",
	personality: "romantic",
	image: "<img src='images/Clooney.jpg' />" },
	
	{name: "Denzel Washington",
	gender: "Male",
	ageRange: "51 and up",
	personality: "serious",
	image: "<img src='images/Denzel.jpg' />" },

	{name: "Alec Baldwin",
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
				} //end of validateForm 
		}); //end of button click function
	
}); //end of document ready


// function finds the name of the user 
function getName () {
	var name = $("#name").val();
	$("#preview-text").text(name + ', your celebrity match is:')
};

// function finds the user's match and returns the celeb photo
function findMatchPhoto () {
	var selected = {
		genderInput: $("#gender").val(), 
		ageInput: $("#age-range").val(),
		personalityInput: $("#personality").val()
	}

	var matches = celebrity.filter(function(obj) {
		return	obj.gender 		!== selected.genderInput &&
				obj.ageRange 	=== selected.ageInput &&
				obj.personality === selected.personalityInput; 
	});

	return matches.map(function(obj) {return obj.image})
	}

//function finds the uesr's match and returns the celeb name 
function findMatchName () {
	var selected = {
		genderInput: $("#gender").val(), 
		ageInput: $("#age-range").val(),
		personalityInput: $("#personality").val()
	}

	var matches = celebrity.filter(function(obj) {
		return	obj.gender 		!== selected.genderInput &&
				obj.ageRange 	=== selected.ageInput &&
				obj.personality === selected.personalityInput; 
	});

	return matches.map(function(obj) {return obj.name})
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