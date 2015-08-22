var express = require('express');
var request = require('request');
//var http = require('http');
var app = express();
var url = require('url')
    , http = require('http')
    , https = require('https');

app.get('/', function(req, resp) {
    resp.sendFile('./app/index.html', {
        root: __dirname
    });
});

var baseUrl = 'https://membership.tui.transunion.com';

app.use(function(req, resp, next) {
    console.log('this is an API call????  ' + req.path);

    if (req.path.match(/^\/tucm\/mobile/)) {
        console.log('this is an API call!!!');

    var reqOptions = {
            headers: req.headers,
            method: req.method,
            baseUrl: baseUrl,
            uri : req.path,
        };

        delete reqOptions.headers.host;
        delete reqOptions.headers.referer;

        var newRequest = request(reqOptions);
        if (req.method === 'GET') {
            req.pipe(request.get(newRequest)).pipe(resp);
        }
        else if (req.method === 'POST') {
            req.pipe(request.post(newRequest)).pipe(resp);
        }
        //req.pipe(newRequest).pipe(resp);
    }
    next();
});

app.get('*', function(req, resp) {
    console.log('serving ' + req.path);
    resp.sendFile(req.path, {
        root: __dirname
    });
});

//var apiRoot = '/api';
//app.get(apiRoot, function (req, myres, next) {
//
//    var path = req.path.substring(apiRoot.length);
//
//    request('https://membership.tui.transunion.com' + path, function (err, res, body) {
//        myres.send(body);
//    });
//
//});
//

app.listen(8000);