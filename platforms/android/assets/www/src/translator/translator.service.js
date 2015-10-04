
angular.module('morse')

.factory('Translator', function () {

	

    return {

    	translate: function(params, morseInput) {
        	
    		
	        var result = [];	        

	        	morseInput = morseInput ==null ? "sos" : morseInput;
	        	slug = morseInput.toLowerCase();

				// remove accents, swap ñ for n, etc (and ' " to space )
				var from = "àáäâèéëêìíïîòóöôùúüûñç'\"";
				var to   = "aaaaeeeeiiiioooouuuunc  ";
				for (var i=0, l=from.length ; i<l ; i++) {
				    slug = slug.replace(new RegExp(from.charAt(i), 'g'),to.charAt(i));
				}
			        // remove invalid chars
				slug = slug.replace(new RegExp('[^a-z0-9.,?!−/@() ]',"g"), '');

				// console.log( slug ) ;


	        for(i=0; i<slug.length; i++){

	        	if(morse[slug.charAt(i).toLowerCase()] != null){
		            var letter = morse[slug.charAt(i).toLowerCase()];
		                if(i<slug.length && slug.charAt(i) !==" "){
		                    if(slug.charAt(i+1) !==" "){
		                        letter = letter.concat(" ");
		                    }
		                }

		            result = result.concat(letter);
	        	}
	        }

/* 
	renvoie le message en code morse
*/		    		    
		    if(params['format'] == null){	        			    
		    	return result.toString().replace(/,/g,'');
			}

/*
	renvoie le message en array de 'temps' : en règle général un tiret est remplacé par 750,250 (temps d'activation et temps d'attente) et un point est remplacé par 250,250. Un traitement particulier à du être appliqué pour traité les espaces entres les mots ==> un espace est un temps qui vaut 7/4 d'un temps point => donc 1750 et doit remplacer le temps d'attente également.
*/
			if(params['format'] == 'time'){
				result = result.toString().replace(/, ,/g,'xxx').replace(/,/g,'').replace(/ /g,'').replace(/·/g,'250,250,').replace(/−/g,'750,250,').replace(/,250,xxx/g,',1750,');
		    	return result.substring(0,result.length-1);
			}




    	}
	}
});


































