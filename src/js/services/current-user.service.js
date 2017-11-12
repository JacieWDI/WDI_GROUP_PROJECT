angular
  .module('groupProject')
  .service('currentUserService', currentUserService);

currentUserService.$inject = [
  '$auth',
  'User',
  '$rootScope'
];

function currentUserService(
  $auth,
  User,
  $rootScope
){
  const self = this;
  //not vm, becuase we will not be binding data to a view, but a service

  self.getUser = () => {
    const decoded = $auth.getPayload();

    if(decoded) {
      User
        .get({ id: decoded.userId })
        .$promise
        .then(user => {

          self.currentUser = user;
          $rootScope.$broadcast('loggedIn');
        });
    }
  };

  self.removeUser = () => {
    self.currentUser = null;
    $auth.logout();
    $rootScope.$broadcast('loggedOut');
  };
  self.getUser();
}
