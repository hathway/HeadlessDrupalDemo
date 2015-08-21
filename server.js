var express = require('express');
var request = require('request');
var http = require('http');
var app = express();


app.get('/', function(req, resp) {
    resp.sendFile('/app/index.html');
});

app.all(function(req, resp) {
    req.pipe(request('https://membership.tui.transunion.com/' + req.path)).pipe(resp);
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