
angular.module('morse')

.controller('TranslatorCtrl', function (Translator) {

    var vm = this;

    vm.translate = function (formatOutput, morseInput) {    	
    	formatOutput['format'] = formatOutput[0];  
        vm.morseOutput = Translator.translate(formatOutput,morseInput)
        // console.log(vm.morseOutput);
    };



    vm.vibrationTranslate = function(morseInput) {
    	formatOutput = [];
    	formatOutput['format'] = 'time';    	
        vm.morseOutput = Translator.translate(formatOutput,morseInput);        
        // console.log(vm.morseOutput);
    };

    vm.flashLightTranslate = function(morseInput) {
    	formatOutput = [];
    	formatOutput['format'] = 'time';
    	vm.morseOutput = Translator.translate(formatOutput,morseInput)
    	 
    	msgArray = vm.morseOutput.split(',');

		var i = 0;
		var trait = 0;		
		var flash_actived = false;
		var space = 0;

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
