
# nodejs - hello world

[Node.JS Hello World : tutorials.kode-blog.com 20160802](https://tutorials.kode-blog.com/nodejs-hello-world)

## Create `package.json` using `npm`

```
mkdir node
cd node
mkdir hello-world
cd hello-world
npm init
```

Fill in the answers to the utility questions.

## Node.JS Hello World Console Application

Create a new file `app.js`

Add the following code :

```javascript
console.log('Hello World!');
```

Console is a global module that provides simple debugging console that is similar to the one JavaScript console in web browsers. 

Run the following command :

```
node app.js
```

`.js` extension is not mandatory, this works also :

```
node app
```


## Node.JS Hello World Web Application

Create a new file `web.js`

Add the following code :

```javascript
var http = require("http");

var port = 3000;

http.createServer(function(reqst, resp) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('Hello World!');
}).listen(port);

console.log('Load http://127.0.0.1:' + port + ' and watch the magic');
 ```

Run the following command :

```
node web
```

Load the following url in your browser : `http://127.0.0.1:3000/`
