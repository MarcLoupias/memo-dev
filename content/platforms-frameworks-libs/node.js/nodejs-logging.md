# nodejs - logging

## the problem

[Production best practices: performance and reliability - expressjs.com - Do logging correctly](http://expressjs.com/en/advanced/best-practice-performance.html#do-logging-correctly)

> In general, there are two reasons for logging from your app: For debugging and for logging app activity (essentially, everything else). Using `console.log()` or `console.error()` to print log messages to the terminal is common practice in development. [But these functions are synchronous](https://nodejs.org/api/console.html#console_console_1) when the destination is a terminal or a file, so they are not suitable for production, unless you pipe the output to another program.
>
> **For debugging**
>
> If you’re logging for purposes of debugging, then instead of using `console.log()`, use a special debugging module like [debug](https://www.npmjs.com/package/debug). This module enables you to use the `DEBUG` environment variable to control what debug messages are sent to `console.err()`, if any. To keep your app purely asynchronous, you’d still want to pipe `console.err()` to another program. But then, you’re not really going to debug in production, are you?
>
> **For app activity**
>
> If you’re logging app activity (for example, tracking traffic or API calls), instead of using `console.log()`, use a logging library like [Winston](https://www.npmjs.com/package/winston) or [Bunyan](https://www.npmjs.com/package/bunyan). For a detailed comparison of these two libraries, see the StrongLoop blog post [Comparing Winston and Bunyan Node.js Logging](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/).

## specs & articles

[RFC5424 - The Syslog Protocol - tools.ietf.org](https://tools.ietf.org/html/rfc5424)

> Abstract
>
> This document describes the syslog protocol, which is used to convey
> event notification messages.  This protocol utilizes a layered
> architecture, which allows the use of any number of transport
> protocols for transmission of syslog messages.  It also provides a
> message format that allows vendor-specific extensions to be provided
> in a structured way.

[OWASP Logging Cheat Sheet - www.owasp.org](https://www.owasp.org/index.php/Logging_Cheat_Sheet)

> This cheat sheet is focused on providing developers with concentrated guidance on building application logging mechanisms, especially related to security logging.
> (...)
> Application logging should be consistent within the application, consistent across an organization's application portfolio and use industry standards where relevant, so the logged event data can be consumed, correlated, analyzed and managed by a wide variety of systems.

[Getting Started Quickly With Node.js Logging - blog.scalyr.com - 20180410](https://blog.scalyr.com/2018/04/getting-started-quickly-node-js-logging/)

[How to Get Node.js Logging Right - blog.risingstack.com - 20160531](https://blog.risingstack.com/node-js-logging-tutorial/)

## For debugging

[awesome-nodejs - debugging--profiling](https://github.com/sindresorhus/awesome-nodejs#debugging--profiling)

[`visionmedia/debug` - `github.com`](https://github.com/visionmedia/debug)

> A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers.

## For app activity

[awesome-nodejs - logging](https://github.com/sindresorhus/awesome-nodejs#logging)

[`winstonjs/winston` - `github.com`](https://github.com/winstonjs/winston)

> A logger for just about everything.
>
> `winston` is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs.
