
angular.module('morse')

.controller('TranslatorCtrl', function (Translator) {

    var vm = this;

    vm.translate = function (formatOutput, morseInput) {    	
    	formatOutput['format'] = formatOutput[0];  
        vm.morseOutput= Translator.translate(formatOutput,morseInput)
        console.log(vm.morseOutput);
    };

});
