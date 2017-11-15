angular
//not sure if I have to inject our module or call a new one?
  .module('groupProject')
  .config(Interceptor);

Interceptor.$inject = [
  '$httpProvider'
];
function Interceptor(
  $httpProvider
) {
  $httpProvider.interceptors.push('errorHandler');
}
