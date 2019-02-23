---
htmlHead:
    title: 'marlou knowledge base' 
    containerClass: 'markdown-body'
    metaTags:
        - name: viewport
          content: 'width=device-width, initial-scale=1, minimal-ui'
        - name: robots
          content: none
    links:
        - href: '../../../github-markdown.css'
          rel: stylesheet
          media: all
        - href: '../../../main.css'
          rel: stylesheet
          media: all
        - href: '../../../github.css'
          rel: stylesheet
    scripts:
        - src: '../../../index.js'

---

# nodejs - handling files

## super basic and old school

[Read a file in Node.js - stackoverflow.com](https://stackoverflow.com/questions/18386361/read-a-file-in-node-js)

```javascript
var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'start.html');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    } else {
        console.log(err);
    }
});
```

## streams

[fs.readFile vs streams to read text files in node.js - medium.com - Duncan Grant - 20170822](https://medium.com/@dalaidunc/fs-readfile-vs-streams-to-read-text-files-in-node-js-5dd0710c80ea)

> TLDR: my suggestion is once you are planning on dealing with text files of greater size than around 10MB, it’s best to ditch readFile and start using streams instead.

## with promises

[From callbacks to fs/promises to handle the file system in Node.js - dev.to/mrm8488 - 20180529](https://dev.to/mrm8488/from-callbacks-to-fspromises-to-handle-the-file-system-in-nodejs-56p2)

> In this post, I will show you the evolution of Node.js to work with the file system.

With callback (old school way to do in node) :

```javascript
const fs = require("fs");

fs.writeFile("/tmp/test.js", "console.log('Hello world');", error => {
    if (error) console.error(error);
    else console.log("file created successfully!");
});
```

Promisify must be manual **before** `node@8` (or using `bluebird` or `Q`) :

```javascript
const fs = require("fs");

const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, error => {
            if (error) reject(error);
            resolve("file created successfully with handcrafted Promise!");
        });
    });
};

writeFilePromise(
        "/tmp/test2.js",
        "console.log('Hello world with handcrafted promise!');"
    )
    .then(result => console.log(result))

    .catch(error => console.log(error));

```

The `node@8` release introduce [`util.promisify()` api](https://nodejs.org/api/util.html#util_util_promisify_original) :

```javascript
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

writeFile("/tmp/test3.js", "console.log('Hello world with promisify!');")
  .then(() => console.log("file created successfully with promisify!"))

  .catch(error => console.log(error));

```

Same with `async`/`await` :

```javascript
const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

async function main() {
    await writeFile("/tmp/test4.js",
        "console.log('Hello world with promisify and async/await!');");

    console.info("file created successfully with promisify and async/await!");
}

main().catch(error => console.error(error));
```

The `node@10` release introduce [`fs/promises` api](https://nodejs.org/api/fs.html#fs_fs_promises_api) :

```javascript
const fsp = require("fs").promises;

try {
    await fsp.writeFile("/tmp/test5.js", "console.log('Hello world with Node.js v10 fs/promises!'");
    console.info("File created successfully with Node.js v10 fs/promises!");
} catch (error){
    console.error(error);
}

```

This code is using the experimental top level await feature, node needs to be executed with the `--experimental-repl-await` flag.
