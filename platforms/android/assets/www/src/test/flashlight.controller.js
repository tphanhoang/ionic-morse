
angular.module('morse')

.controller('TestFlashCtrl', function () {

    var vm = this;

    vm.on = function () {
        window.plugins.flashlight.switchOn();
    };

    vm.off = function () {
        window.plugins.flashlight.switchOff();
    };

    vm.toggle = function () {
        console.log('Hello world');
        window.plugins.flashlight.toggle();
    };

});
