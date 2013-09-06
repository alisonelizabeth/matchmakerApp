// public int findCode(femaleCeleb ageRange) {
//   for (int i=0; i<=9; i++) {
//     if (femaleCeleb.tryCode(i)) {
//       // found the code!
//       return(i);
//     }
//   }
//   return(-1);  // if we get here, we did not find the code
// }



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
	ageRange: "26-50",
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

// function goToNewPage() {
//     if(document.getElementById('target').value){
//         window.location.href = document.getElementById('target').value;
//     }
// }

// for (i=0;i<=9;i++)
//  {
//  if (i==3) continue;
//    i;
//   }


//         for (int celebrity = 0; celebrity <= 9; celebrity++)
//             System.out.println("" + "Male");
    

// var Male = celebrity[0]

// function findMale(Male) {
// 	return Male == "Male"
// }
// celebrity.filter(findMale)


// $(document).ready (function(){
// $(".btn-primary").click(function(){
// if (validateForm()){
// getName();
// }

// }) //end of button click function
// }) //end of document ready 


// function getName () {
// var name = $('.name').val();

// $('#preview-name').text(name + " your celebrity match is:")
// }

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

 
