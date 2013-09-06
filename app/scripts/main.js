var femaleCeleb = [
{name: "Taylor Swift",
ageRange: "20-35",
personality: "romantic"},

{name: "Kristen Stewart",
ageRange: "20-35",
personality: "serious"},

{name: "Anna Kendrick",
ageRange: "20-35",
personality: "funny"},

{name: "Julia Roberts",
ageRange: "36-50",
personality: "romantic"},

{name: "Nicole Kidman",
ageRange: "36-50",
personality: "serious"},

{name: "Tina Fey",
ageRange: "36-50",
personality: "funny"}, 

{name: "Kim Cattrall",
ageRange: "51 and up",
personality: "romantic"},

{name: "Susan Sarandon",
ageRange: "51 and up",
personality: "serious"},

{name: "Betty White",
ageRange: "51 and up",
personality: "funny"}, 
]

var maleCeleb = [
{name: "Daniel Radcliffe",
ageRange: "20-35",
personality: "serious"},

{name: "Channing Tatum",
ageRange: "20-35",
personality: "romantic"},

{name: "Seth Rogan",
ageRange: "20-35",
personality: "funny"},

{name: "Brad Pitt",
ageRange: "36-50",
personality: "romantic"},

{name: "Leonardo DiCaprio",
ageRange: "26-50",
personality: "serious"},

{name: "Adam Sandler",
ageRange: "36-50",
personality: "funny"}, 

{name: "George Clooney",
ageRange: "51 and up",
personality: "romantic"},

{name: "Denzel Washington",
ageRange: "51 and up",
personality: "serious"},

{name: "Alec Baldwin",
ageRange: "51 and up",
personality: "funny"}, 
]

$(document).ready (function(){
$(".btn-primary").click(function(){
if (validateForm()){
getName();
}

}) //end of button click function
}) //end of document ready 


function getName () {
var name = $('.name').val();

$('#preview-name').text(name + " your celebrity match is:")
}


// var usersCollection = []

// $(document).ready (function(){

// 	$('.button').click(function(){
// 		if (validateForm()) {
// 			// getProfileInfo();
// 			// usersCollection.push(getFormValues());
// 			// updateUserList(usersCollection);
// 		}
// 	}) //end of button click function 

// })  //end of document ready

// function getFormInfo () {
// 	var genderVal	 		= $('#gender-dropdown').val();
// 	var ageVal 				= $('#age-dropdown').val();
// 	var interestsVal 		= $('#interests-dropdown').val();
	

// 	$('.preview-name').text(nameVal);	
// 	$('.preview-age').text('Want to know more about me? Well, I am ' + ageVal + ' years old.');
// 	$('.preview-job').text('I work as a ' + jobVal + '.');
// 	$('.preview-movie').text('If I had to pick a favorite movie it would be ' + movieVal + '.');
// 	$('.preview-hobbies').text('Here are a few of my hobbies: ' + hobbiesVal + '.');
// 	$('.preview-email').text('You can reach me at ' + emailVal + '.');

// }

// function getFormValues () {
// 	var name 	= $('.name').val();
// 	var email 	= $('.email').val();
	

// 	formData = {
// 		name: name,
// 		email: email
// 	};

// 	return formData // returns an object
// 	//if you return something, can store it

// 	}


// function updateUserList (list) {
// 	var ol = $('.users-list ol');
// 	ol.html(''); //clears 

// 	list.forEach(function(user) {
// 		var text = "<li>" + ("<b>" + "Name: " + "</b>") + user.name + "," + 
// 		("<b>" + "		Email address: " + "</b>") + user.email + "</li>";
// 		ol.append(text);
// 	})
// }



// function validateForm () {
// 			var valid = true;
// 			$('.message').removeClass('popup-message')
// 			$('input').removeClass("warning")
// 			$('input').each(function(){
// 				if ($(this).val() == "") {
// 					console.log("input left empty");
// 					valid = false
// 					$(this).addClass("warning")
// 					$('.message').addClass('popup-message')
// 				}
// 			})

// 			 return valid
// 		}

 
