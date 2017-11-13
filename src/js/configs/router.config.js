angular
  .module('groupProject')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/authentications/register.html',
      controller: 'registerController as vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/authentications/login.html',
      controller: 'loginController as vm'
    })
    .state('usersShow', {
      url: '/students/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'usersShowCtrl as vm'
    })
    .state('usersEdit', {
      url: '/students/:id/edit',
      templateUrl: '/js/views/users/edit.html',
      controller: 'usersEditCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
