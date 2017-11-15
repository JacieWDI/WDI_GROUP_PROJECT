angular
  .module('groupProject')
  .factory('Event', Event);

Event.$inject = [
  '$resource',
  'API'
];
function Event(
  $resource,
  API){
  return $resource(`${API}/events/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' },
    'findGroups': { url: `${API}/events/:id/groups`, method: 'GET', isArray: true }
  });
}
