angular
  .module('groupProject')
  .controller('usersEditCtrl', usersEditCtrl);

usersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function usersEditCtrl(User, $stateParams, $state) {
  const vm = this;
  vm.user = User.get($stateParams);

  vm.submitForm = update;
  
  function update() {
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then(user => {
        $state.go('usersShow', { id: $stateParams.id });
      });
  }
}
