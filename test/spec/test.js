(function () {
    describe('Celebrity is defined', function () {
        describe('with corresponding attributes', function () {
            it('name, gender, age, personality, image', function () {
				var celebrity = [
				    //female celebs 
				{name: "Taylor Swift",
				gender: "Female",
				ageRange: "20-35",
				personality: "romantic",
				image: "<img src='images/Swift.jpg' />"}]
            });
        });
    });
})();

(function () {
    describe('Form validation', function () {
        describe('when name is left empty', function () {
            it('should return an error message', function () {
				var valid = true;
							$('#name').removeClass("highlight")
							$('.message').html('<p> </p>')
							$('#name').each(function(){
								if ($(this).val() == "") {
									valid = false
									$(this).addClass("highlight")
									$('.message').html('<p>Please enter your name.</p>')
								}
							})
							 return valid
						
            });
        });
    });
})();

(function () {
    describe('Celebrity is defined', function () {
        describe('with corresponding attributes', function () {
            it('name, gender, age, personality, image', function () {
var celebrity = [
    //female celebs 
{name: "Taylor Swift",
gender: "Female",
ageRange: "20-35",
personality: "romantic",
image: "<img src='images/Swift.jpg' />"}]
            });
        });
    });
})();


(function () {
    describe('Object is returned', function () {
        describe('that is the celebrity name that corresponds to', function () {
            it('user input gender, age, and personality', function () {
					
			
      // your code here 
      var name = ("#name").val();
	("#preview-text").text(name + ', your celebrity match is:')
    

            });
        });
    });
})();


(function () {
    describe('Celebrity is defined', function () {
        describe('with corresponding attributes', function () {
            it('name, gender, age, personality, image', function () {
var button = $(".preview-button").html("<button type='button' class='btn btn-danger'>Not satisfied?</button>")

            });
        });
    });
})();
