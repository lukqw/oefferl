require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
var express = require('express'),
    request = require('request'),
    app = express();
let count = 0;

app.all('*', function (req, res, next) {
    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    let originHeader = process.env.ACCESS_HEADER;
    let appId = process.env.OWM_APP_ID;
    res.header("Access-Control-Allow-Origin", originHeader);
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        let targetURL = req.header('Target-URL');
        if (!targetURL) {
            res.send(500, { error: 'There is no Target-Endpoint header in the request' });
            return;
        }
        console.log('got request for url: ' +  targetURL + ' ' + count++);
        if(targetURL.endsWith("appid=")) {
            targetURL += appId;
        }
        request({ url: targetURL, method: req.method, json: req.body},
            function (error, response, body) {
                if (error) {
                    console.error('error: ' + response.statusCode)
                }
            }).pipe(res);
    }
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Proxy server listening on port ' + app.get('port'));
});
