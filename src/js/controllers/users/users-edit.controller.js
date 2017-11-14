angular
  .module('groupProject')
  .controller('usersEditCtrl', usersEditCtrl);

usersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function usersEditCtrl(User, $stateParams, $state) {
  const vm = this;
  vm.user = User.get($stateParams);

  vm.submit = user => {
    User
      .save(user)
      .$promise
      .then(user => {
        $state.go('usersShow', { id: user._id });
      });
  };
}


//   vm.submitForm = update;
// console.log('working1');
//   function update(user) {
//     console.log('working2');
//     User
//       .update({ id: user._id }, user)
//       .$promise
//       .then(user => {
//         $state.go('usersShow', { id: user._id });
//       });
//       console.log('working3');
//   }
// }
