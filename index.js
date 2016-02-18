var config     = require ('./config'),
    request    = require ('request'),
    weatherUrl = 'http://api.wunderground.com/api/' + config.API_KEY;

function weatherRequest (url, type, zipcode) {
  return url + '/' + type + '/q/' + zipcode + '.json';
}

function handler (event, context) {
  var type    = event.type,
      zipcode = event.zipcode;

  request.get (weatherRequest (weatherUrl, type, zipcode), { json: true }, function (err, response, body) {
    if (err) { return context.fail (err); }
    return context.succeed (body.forecast);
  });   
}

exports.handler = handler;
