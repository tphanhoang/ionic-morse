
angular.module('morse')

.controller('TestVibrationCtrl', function () {

    var vm = this;

    vm.brrr = function () {
        console.log('Hello world ! I vibrate !!');
        navigator.vibrate(3000);
    };

});
