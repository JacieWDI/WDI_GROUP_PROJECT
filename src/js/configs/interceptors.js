angular
  .module('groupProject')
  .config(Interceptor);

Interceptor.$inject = [
  '$httpProvider'
];
function Interceptor(
  $httpProvider
) {
  $httpProvider.interceptors.push();
}
