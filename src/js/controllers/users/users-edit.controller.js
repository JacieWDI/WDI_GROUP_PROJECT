angular
  .module('groupProject')
  .controller('usersEditCtrl', usersEditCtrl);

usersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function usersEditCtrl(User, $stateParams, $state) {
  const vm = this;
  vm.user = User.get($stateParams);
  // vm.submit = submit;

//   function submit(user){
//     console.log('working1');
//     User
//     .save(user)
//     // console.log('working2')
//     .$promise
//     // console.log('working4')
//     .then(()=>{
//       $state.go('home');
//       // $state.go('usersShow', { id: user._id });
//       // console.log('working4');
//     });
//   }
//
// }


  vm.submitForm = update;
  console.log('working1');
  function update() {
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then(user => {
        $state.go('usersShow', { id: $stateParams.id });
      });
    }
}
