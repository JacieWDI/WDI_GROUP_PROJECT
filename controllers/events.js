const rp = require('request-promise');

function eventsIndex(req, res, next) {
  rp({
    method: 'GET',
    uri: 'http://api.eventful.com/json/events/search?app_key=4NdXJf3wjWsTGctn&category=music&page_size=250'
  })
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(next);
}

module.exports = {
  index: eventsIndex
};