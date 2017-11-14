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
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'usersShowCtrl as vm'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/edit.html',
      controller: 'usersEditCtrl as vm'
    })
    .state('groupsIndex', {
      url: '/groups',
      templateUrl: '/js/views/groups/index.html',
      controller: 'groupsIndexCtrl as vm'
    })
    .state('groupsShow', {
      url: '/groups/:id',
      templateUrl: '/js/views/groups/show.html',
      controller: 'groupsShowCtrl as vm'
    })
    .state('eventsIndex', {
      url: '/events',
      templateUrl: '/js/views/events/index.html'
    })
    .state('eventsShow', {
      url: '/events/:id',
      templateUrl: '/js/views/events/show.html',
      controller: 'eventsShowCtrl as vm'
    });


  $urlRouterProvider.otherwise('/');
}
