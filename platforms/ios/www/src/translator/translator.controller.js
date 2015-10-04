
angular.module('morse')

.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {


	$scope.scanBarcode = function() {
		console.log('truc');

        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };


 })



.controller('TranslatorCtrl', function (Translator) {

    var vm = this;

    vm.translate = function (formatOutput, morseInput) {    	
    	formatOutput['format'] = formatOutput[0];  
        vm.morseOutput = Translator.translate(formatOutput,morseInput)
        // console.log(vm.morseOutput);
    };


/*
Transforme le message input en bon format pour le vibreur : un array de temps en microseconde [xxx1,yyy1,xxx2,yyy2, ...] : xxx étant le temps où le vibreur sera actif et yyy le temps où le vibreur sera inactif
*/

    vm.vibrationTranslate = function(morseInput) {
    	formatOutput = [];
    	formatOutput['format'] = 'time';    	
        msgArray = Translator.translate(formatOutput,morseInput).split(',');        
        
        //console.log(msgArray);
        navigator.vibrate(msgArray);

    };

    vm.flashLightTranslate = function(morseInput) {
    	formatOutput = [];
    	formatOutput['format'] = 'time';    	
    	 
    	msgArray = Translator.translate(formatOutput,morseInput).split(',');

		var i = 0;
		var trait = 0;		
		var flash_actived = false;
		var space = 0;

/*
L'utilisation de setInterval est la seul facon que j'ai trouvé afin d'utiliser la flashlight correctement. Théoriquement, toutes les 500 ms, le script verifie la signe à transcrire et vérifie des variables pour voir s'il est nécessaire d'allumer la lumiere ou de l'eteindre ou d'attendre en ne changeant pas l'état de la flashlight.
*/

		var runner = setInterval(function(){			
			if(i<msgArray.length){				
				if(msgArray[i]=="750"){
					if(!flash_actived){
						window.plugins.flashlight.switchOn();
						// console.log("750 ON");	
						trait = trait + 1;
						flash_actived = true;
					}
					else if(flash_actived && trait == 2){
						// console.log("750 Last");	
						trait = 0;
						i=i+1;
					}else{
						// console.log("750 Middle "+trait);	
						trait = trait + 1;
					}
				}
				else if(msgArray[i]=="250"){
					if(!flash_actived){
						// console.log("250 ON");	
						window.plugins.flashlight.switchOn();
						flash_actived = true;
						i=i+1;
					}else{
						// console.log("250 OFF");	
						window.plugins.flashlight.switchOff();
						space = space+1;
						flash_actived = false;
						i=i+1;
					}
				}
				else if(msgArray[i]=="1750"){
					if(flash_actived){
						// console.log("1750 OFF");	
						window.plugins.flashlight.switchOff();
						flash_actived = false;
					}
					else if(!flash_actived && space == 6){
						// console.log("1750 Last");	
						space = 0;
						i=i+1;
					}else{
						// console.log("750 Middle");	
						space = space+1;
					}
				}
							
			}else{
				clearInterval(runner)
			}

		}, 500);

}
});
