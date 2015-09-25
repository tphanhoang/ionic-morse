
angular.module('morse')

.factory('Translator', function () {

	var morse = {
		"0": "−−−−−",
		"1": "·−−−−",
		"2": "··−−−",
		"3": "···−−",
		"4": "····−",
		"5": "·····",
		"6": "−····",
		"7": "−−···",
		"8": "−−−··",
		"9": "−−−−·",
		"a": "·−",
		"b": "−···",
		"c": "−·−·",
		"d": "−··",
		"e": "·",
		"f": "··−·",
		"g": "−−·",
		"h": "····",
		"i": "··",
		"j": "·−−−",
		"k": "−·−",
		"l": "·−··",
		"m": "−−",
		"n": "−·",
		"o": "−−−",
		"p": "·−−·",
		"q": "−−·−",
		"r": "·−·",
		"s": "···",
		"t": "−",
		"u": "··−",
		"v": "···−",
		"w": "·−−",
		"x": "−··−",
		"y": "−·−−",
		"z": "−−··",
		"·": "·−·−·−",
		",": "−−··−−",
		"?": "··−−··",
		"!": "−·−·−−",
		"−": "−····−",
		"/": "−··−·",
		"@": "·−−·−·",
		"(": "−·−−·",
		")": "−·−−·−",
		" ": " "
	};

    return {

    	translate: function(params, morseInput) {
        	
    		
	        var result = [];



	        for(i=0; i<morseInput.length; i++){
	            var letter = morse[morseInput.charAt(i).toLowerCase()];
	                if(i<morseInput.length && morseInput.charAt(i) !==" "){
	                    if(morseInput.charAt(i+1) !==" "){
	                        letter = letter.concat(" ");
	                    }
	                }

	            result = result.concat(letter);
	        }
		    		    
		    if(params['format'] == null){
	        	console.log(result.toString().replace(/,/g,''));
			}

    	}
	}
});


































