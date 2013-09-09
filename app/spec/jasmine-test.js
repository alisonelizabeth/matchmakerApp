describe('returns an object that', function(){
	it('checks for validity and returns error', function(){
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

		expect("valid").toBe(true)

		});
	});

describe('returns an object that', function(){
	it('checks selected gender and returns object matching selected gender', function(){
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
	

		expect(selected.genderInput).toBe("Male")

		});
	it('checks selected personality and returns object matching selected personality', function(){
		selected = {
		personalityInput: $("#personality").val()
	}

	matches = celebrity.filter(function(obj) {
		return obj.personality === selected.personalityInput; 
	});
	

		expect(selected.personalityInput).toBe("funny")

		});
	it('checks selected age range and returns object matching selected age range', function(){
		selected = {
		ageInput: $("#age-range").val()
	}

	matches = celebrity.filter(function(obj) {
		return obj.ageRange === selected.ageInput; 
	});
	

		expect(selected.ageInput).toBe("20-35")

		});
});

describe('returns an object that', function(){
	it('is the celebrity that matches specific attributes', function(){
			var celebrity = [
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
			image: "<img src='images/Kristen.jpg' />" }
			]

			var TaylorSwift = celebrity[0]
			var KristenStewart = celebrity[1]

		
		expect(celebrity[0]).toBe(TaylorSwift)

		});
	});

describe('returns an object that', function(){
	it('is the string, or name of the user, which the user specifies', function(){
			var name = $("#name").val();

		
		expect(name).toBe("")

		});
	});

	

