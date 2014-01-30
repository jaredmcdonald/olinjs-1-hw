var http = require('http'),
    url = require('url');

function start(route, handle) {
    http.createServer(function(request, response) {
      var pathname = url.parse(request.url).pathname,
      postData = '';
      console.log('Request for ' + pathname +  ' recieved');
      route(handle, pathname, request, response);
    }).listen(process.env.PORT || 8888);

    console.log('Server started');    
};

exports.start = start;

