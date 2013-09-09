/*global describe, it */
'use strict';
// (function () {
//     describe('Form validation', function () {
//         describe('when name is left empty', function () {
//             it('should return an error message', function () {
// 				var valid = true;
// 							$('#name').removeClass("highlight")
// 							$('.message').html('<p> </p>')
// 							$('#name').each(function(){
// 								if ($(this).val() == "") {
// 									valid = false
// 									$(this).addClass("highlight")
// 									$('.message').html('<p>Please enter your name.</p>')
// 								}
// 							})
// 							 return valid
						
//             });
//         });
//     });
// })();
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });
})();

(function () {
    describe('Object is returned', function () {
        describe('that is the celebrity photo that matches', function () {
            it('input gender, age, and personality', function () {
				var matches = celebrity.filter(function(obj) {
		return	obj.gender 		!== selected.genderInput &&
				obj.ageRange 	=== selected.ageInput &&
				obj.personality === selected.personalityInput; 
	});

	return matches.map(function(obj) {return obj.image})
	}
            });
        });
    });
})();


