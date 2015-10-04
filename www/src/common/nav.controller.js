
angular.module('morse')

.controller('NavCtrl', function ($scope, $ionicModal) {

   $ionicModal.fromTemplateUrl('src/common/modal/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  vm = this;
  vm.morse = morse;


})

.controller('ModalCtrl', function ($scope, $ionicModal) {
    var vm = this;
    vm.morse = morse;
});

   