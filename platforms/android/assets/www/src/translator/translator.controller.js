
angular.module('morse')

.controller('TranslatorCtrl', function (Translator) {

    var vm = this;

    vm.translate = function (formatOutput, morseInput) {    	
    	
        Translator.translate(formatOutput,morseInput)
    };

});
