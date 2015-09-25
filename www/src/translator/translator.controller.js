
angular.module('morse')

.controller('TranslatorCtrl', function (Translator) {

    var vm = this;

    vm.tentative = function () {
        Translator.translate(1,"prout")
    };

});
