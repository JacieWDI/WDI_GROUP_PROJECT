angular
  .module('groupProject')
  .controller('usersEditCtrl', usersEditCtrl);

usersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function usersEditCtrl(User, $stateParams, $state) {
  const vm = this;
  vm.user = User.get($stateParams);

  vm.submit = user => {
    User
      .update({ id: user._id }, user)
      .$promise
      .then(user => {
        $state.go('usersShow', { id: user._id });
      });
  };
}
