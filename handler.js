var index  = require ('./index'),
    config = require ('./config');

var event = {
  type: 'forecast10day',
  zipcode: '73012'
};

var context = {
  fail: function (e) { console.error (e); },
  succeed: function (data) { console.log (data); }
};

index.handler (event, context);
