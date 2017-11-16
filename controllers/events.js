const rp = require('request-promise');

function eventsIndex(req, res, next) {
  rp({
    method: 'GET',
    uri: `http://api.eventful.com/json/events/search?app_key=4NdXJf3wjWsTGctn&category=music&page_size=5&where=${req.params.lat},${req.params.lng}&within=2`
  })
    .then(data => {
      const events = JSON.parse(data);
      return res.status(200).json(events);
    })
    .catch(next);
}

function eventsShow(req, res, next) {
  rp({
    method: 'GET',
    uri: `http://api.eventful.com/json/events/get?app_key=4NdXJf3wjWsTGctn&id=${req.params.id}`
  })
    .then(data => {
      const event = JSON.parse(data);
      return res.status(200).json(event);
    })
    .catch(next);
}

module.exports = {
  index: eventsIndex,
  show: eventsShow
};
