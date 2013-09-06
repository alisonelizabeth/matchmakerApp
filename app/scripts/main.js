var _; //globals

var maleCelebs = [];
var femaleCelebs = [];


var celebrity = [
	{name: "Taylor Swift",
	gender: "Female",
	ageRange: "20-35",
	personality: "romantic"},


	{name: "Kristen Stewart",
	gender: "Female",
	ageRange: "20-35",
	personality: "serious"},


	{name: "Anna Kendrick",
	gender: "Female",
	ageRange: "20-35",
	personality: "funny"},


	{name: "Julia Roberts",
	ageRange: "36-50",
	personality: "romantic"},

	{name: "Nicole Kidman",
	gender: "Female",
	ageRange: "36-50",
	personality: "serious"},


	{name: "Tina Fey",
	gender: "Female",
	ageRange: "36-50",
	personality: "funny"}, 


	{name: "Kim Cattrall",
	gender: "Female",
	ageRange: "51 and up",
	personality: "romantic"},


	{name: "Susan Sarandon",
	gender: "Female",
	ageRange: "51 and up",
	personality: "serious"},


	{name: "Betty White",
	gender: "Female",
	ageRange: "51 and up",
	personality: "funny"}, 

// starts male celebs 

	{name: "Daniel Radcliffe",
	gender: "Male",
	ageRange: "20-35",
	personality: "serious"},

	{name: "Joseph Gordon-Levitt",
	gender: "Male",
	ageRange: "20-35",
	personality: "romantic"},

	{name: "Jonah Hill",
	gender: "Male",
	ageRange: "20-35",
	personality: "funny"},

	{name: "Brad Pitt",
	gender: "Male",
	ageRange: "36-50",
	personality: "romantic"},

	{name: "Leonardo DiCaprio",
	gender: "Male",
	ageRange: "36-50",
	personality: "serious"},

	{name: "Zach Galifianakis",
	gender: "Male",
	ageRange: "36-50",
	personality: "funny"}, 

	{name: "George Clooney",
	gender: "Male",
	ageRange: "51 and up",
	personality: "romantic"},
	
	{name: "Denzel Washington",
	gender: "Male",
	ageRange: "51 and up",
	personality: "serious"},

	{name: "Alec Baldwin",
	gender: "Male",
	ageRange: "51 and up",
	personality: "funny"}, 
]

$(document).ready (function(){
	$('.btn').click(function(){
		if (validateForm()) {  
			getName();
			}
		}); //end of button click function
	
}); //end of document ready

function getName () {
	var name = $("#name").val();
	$("#preview-text").text(name + ', your celebrity match is:')
};

//finds the male celebs, pushes them into a new array called maleCelebs
function getGenderMale () {	
	var male = celebrity.filter(function(obj) {return obj.gender == "Male";});
	maleCelebs.push(male);
};

//finds female celebs, pushes them into a new array called femaleCelebs
function getGenderFemale () {
   	var female = celebrity.filter(function(obj) {return obj.gender == "Female";});
	femaleCelebs.push(female);	
};

function matchGender () {
	var gender = $("#gender").val()
	if (gender == "Male") {
		return getGenderMale()
	} else {
		return getGenderFemale()
	};
};

function validateForm () {
			var valid = true;
			// $('.message').removeClass('warning-message')
			$('#name').removeClass("highlight")
			$('#name').each(function(){
				if ($(this).val() == "") {
					valid = false
					$(this).addClass("highlight")
					$('.message').html('<p>Please enter your name.</p>')
				}
			})


			 return valid
		}
 
