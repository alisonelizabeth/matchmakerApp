<<<<<<< HEAD
/*global describe, it */
'use strict';

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
=======
>>>>>>> b3fbaf430ba753760885015188c725b80403e8fe
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
<<<<<<< HEAD

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





=======
>>>>>>> b3fbaf430ba753760885015188c725b80403e8fe
