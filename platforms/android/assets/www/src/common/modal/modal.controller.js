
angular.module('morse')

.controller('ModalCtrl', function ($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('src/common/modal/modal.html', {
    scope: vm,
    animation: 'slide-in-up'
  }).then(function(modal) {
    vm.modal = modal;
  });

    var vm = this;
  	

  	vm.morse = morse; 


});