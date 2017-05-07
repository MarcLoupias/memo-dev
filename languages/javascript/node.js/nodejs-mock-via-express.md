# mock management via expressjs

The idea is to add a real nodejs rest server in the front project.

## the gulp task

```javascript
// write this in your gulp files
var gulp = require('gulp'); // 3.9.1
var gls = require('gulp-live-server'); // 0.0.28

gulp.task('server-rest-mock', function() {
    var server = gls.new(['app.js']);
    server.start();
});
```

## `/app.js` - the rest server

Your server source code is in `/server`

```javascript
'use strict';

var express = require('express'); // 4.13.3
var bodyParser = require('body-parser'); // 1.14.0
var common = require('./server/common');
var fs = require('fs'); // 0.0.2

var context = 'project-name';

var app = module.exports = express();
app.use(bodyParser.json());
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// to serve also the webapp
app.use('/' + context, express.static(__dirname + '/src'));

var serverApp = app.listen(3001, function () {
    console.log('App listening at http://%s:%s/%s', 'localhost', serverApp.address().port, context);
});

// the core server files
require('./server/debug')(app);
require('./server/cors')(app);
require('./server/logger')(app);

// rest impl
require('./server/example/example')(app);
```

## `/server/debug.js` - to ping the server

```javascript
'use strict';

module.exports = function(app)
{
    app.get('/rest/debug/ping', function (req, res) {
        var result = {code: 200, message:'ok'};
        res.json(result);
    });
};
```

## `/server/cors.js` - to add CORS support

```javascript
'use strict';

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since");
        next();
    });
};
```

## `/server/logger.js` - to display http request in the gulp task console

```javascript
'use strict';

module.exports = function (app) {
    app.use(function (req, res, next) {
        console.log(new Date(Date.now()).toLocaleString() + ' ' + req.url);
        next();
    });
};
```

## `/server/common.js` - to add custom utils methods

```javascript
'use strict';

String.prototype.isEmpty = function () {
    return this.length === 0;
};

String.prototype.equalsIgnoreCaseWhiteSpace = function (other) {
    return this.toLowerCase().trim() === other.toLowerCase().trim();
};

String.prototype.contains = function (stringToCheck) {
    return this.indexOf(stringToCheck) > -1;
};

Array.prototype.limitTo = function (int) {
    int = int || 3;
    return this && this.slice(0, int);
};

Array.prototype.contain=function (value) {
    return this && this.indexOf(value) > -1;
};

exports.randomTime = function () {
    var min = 1000;
    var max = 2000;

    if (min < 0) {
        return min + Math.random() * (Math.abs(min) + max);
    } else {
        return min + Math.random() * max;
    }
};
```

## `/server/example/example.js` - WS impl example

```javascript
'use strict';

var common = require('../common');
var fs = require("fs");
var data = JSON.parse(fs.readFileSync('./server/example/example-data.json', 'utf8'));

module.exports = function (app) {
    app.get('/rest/example/:id/data', function (req, res) {

        if(!req.query) {
            setTimeout(function() {
                res.status(400).send('Bad Request');
            }, common.randomTime());

            return;
        }

        var id = req.params.id;
        if(!id) {
            setTimeout(function() {
                res.status(400).send('Bad Request : id missing');
            }, common.randomTime());

            return;
        }

        setTimeout(function() {
            res.json(data);
        }, common.randomTime());
    });
};
```
