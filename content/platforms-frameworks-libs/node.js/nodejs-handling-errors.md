# nodejs - handling errors

## Base documentation

[Node.js official documentation - errors - nodejs.org](https://nodejs.org/api/errors.html)

[Error Handling in Node.js - www.joyent.com](https://www.joyent.com/node-js/production/design/errors)

[V8 stacktrace API - v8.dev](https://v8.dev/docs/stack-trace-api)

[`Error` global object - developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

[`try`...`catch` - developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Articles

[Checklist: Best Practices of Node.JS Error Handling (2018)](https://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/)

## Tools

[`watson/stackman` - `github.com`](https://github.com/watson/stackman)

> Give Stackman an error and he will give an array of stack frames with extremely detailed information for each frame in the stack trace.
>
> With Stackman you get access to the actual source code and surrounding lines for where the error occurred, you get to know if it happened inside a 3rd party module, in Node.js or in your own code.
>
> By [Thomas Watson](https://github.com/watson), dev at Elastic.
>
> Project is backed by Elastic.

[`AriaMinaei/pretty-error` - `github.com`](https://github.com/AriaMinaei/pretty-error)

> See node.js errors with less clutter

## Cores concepts

### sources

[Error Handling in Node.js - www.joyent.com](https://www.joyent.com/node-js/production/design/errors)

### Operational errors vs programmer errors

#### Operational errors

Represent run-time problems experienced by correctly-written programs. These are not bugs in the program.

Problem with :

- the system itself (out of mem, too many open files, ...)
- the system's configuration (no route to a remote host, ...)
- the network (socket hangup, timeout, ...)
- a remote service (500, failure to connect, ...)

#### Programmer errors

They are bugs. **These are things that can always be avoided by changing the code.**

They are not handled correctly because the developer have not implemented error handling properly, not because it is impossible.

Ex :

- tried to read property of `undefined`
- async call without a callback
- passed the wrong type in function arg (string instead of object, object instead of string, ...)

#### Why distinction is very important

People use the term "errors" to talk about both operational and programmer errors, but they're really quite different.

This distinction is very important: operational errors are part of the normal operation of a program. Programmer errors are bugs.

Sometimes, you have both operational and programming errors as part of the same root problem because they can chain themselves.

Example a server crashes because it try to use undefined variable, then clients will get an operational error (can't connect it is crashed).

Similarly, failure to handle an operational error is itself a programmer error.

The distinction between operational errors and programmer errors is the foundation for figuring out how to deliver errors and how to handle them.

### Handling errors

#### Handling operational errors

Any code that does anything which might possibly fail (opening a file, connecting to a server, forking a child process, and so on) **has** to consider what happens when that operation fails.

That includes knowing **how** it may fail (the failure mode) and what such a failure would indicate.

The key point here is that error handling has to be done in a fine-grained way because the impact and response depend on exactly what failed and why

You may end up handling the same error at several levels of the stack. This happens when lower levels can't do anything useful except propagate the error to their caller, which propagates the error to its caller, and so on.

Often, only the top-level caller knows what the appropriate response is, whether that's to retry the operation, report an error to the user, or something else.

For any given error, there are a few things you might do:

- Deal with the failure directly. (ex : database disconnect following a socket closed by database server)
- Propagate the failure to your client. (ex : if user gave you invalid json, there is nothing you can do instead of telling him)
- Retry the operation. (ex : error on a remote service, like 503 (unavailable), you may want to retry in a few seconds. This should be timebox (retry n times), documented and the end user should be notified)
- Blow up. (the fail fast pattern, unexpected error, we fail as fast as we can because we can do nothing about it and the functionnal critical path of the app is down)
- Log the error — and do nothing else. (ex : you can do nothing about the error, but there is no reason to crash because the error is not in the functional critical path of the app)

#### Handling programmer errors

**The best way to recover from programmer errors is to crash immediately.**

You should run your programs using a restarter that will automatically restart the program in the event of a crash.

With a restarter in place, crashing is the fastest way to restore reliable service in the face of a transient programmer error.

The only downside to crashing on programmer errors is that connected clients may be temporarily disrupted, but remember :

- By definition, these errors are **always** bugs.
- The requests in flight are not necessarily going to complete successfully anyway.
- In a reliable distributed system, clients must be able to deal with server failure by reconnecting and retrying requests.
- If your production program is crashing so often that these disconnections are a problem, then the real problem is that the server is so buggy, not that it crashes in the case of a bug.

The best way to debug these problems is to [configure Node to dump core on an uncaught exception](https://www.joyent.com/node-js/production/debug#postmortem).

Finally, remember that a programmer error on a server just becomes an operational error on a client.

### Patterns for writing functions

If you don't know what errors can happen or don't know what they mean, then your program cannot be correct except by accident.

The question is : **How do you deliver errors to the code that called your function?**

#### Throw, Callback, Reject, or EventEmitter?

##### The basics

- `throw` delivers an error synchronously. If the caller (or someone else in the call stack) used a `try` / `catch` then they catch the error. If none the program crashes (there is a particular case with domains and `uncaughtException` event)
- `callback(err, result)`, the historical pattern in node for asynchronous handling. The user passes the callback to your function. For him, `err` or `result` is `null`, never both `null` or valued.
- promise rejection, since node 8, upgrade of asynchronous handling to remove callback.
- `async` / `await`, since node 8, upgrade of asynchronous handling to look like synchronous. `try` / `catch` by the caller is supported.
- `EventEmitter` listening to `error` event. To deal with streams. Function returns the `EventEmitter` object. Caller listen to events.

##### When do you use `throw`, and when do you use callbacks or event emitters?

It depends :

- Is the error an operational error or a programmer error?
- Is the function itself synchronous or asynchronous?

##### The most common case is an operational error in an asynchronous function

By far, the most common case is an operational error in an asynchronous function (see `fs` module for examples).

##### The next most common case is an operational error in a synchronous

The next most common case is an operational error in a synchronous function like `JSON.parse`.
For these functions, if you encounter an operational error (like invalid user input), you have to deliver the error synchronously. You can either throw it (much more common) or return it.

##### The general rule

For a given function, if any operational error can be delivered asynchronously, then **all** operational errors should be delivered asynchronously.

The general rule is that **a function may deliver operational errors synchronously (e.g., by `throw`ing) or asynchronously (by passing them to a callback or emitting `error` on an `EventEmitter`), but it should not do both.**

This way, a user can handle errors by either handling them in the callback or using `try`/`catch`, but **they never need to do both**.

##### Programmer errors

We've left out programmer errors. Recall that these are always bugs.

They can also usually be identified immediately by checking the types on arguments at the start of the function.

You should throw these errors immediately, since the program is broken. To do this, we recommend validating the types of all arguments at the start of the function.

#### Bad input: programmer error or operational error?

How do you know what's a programmer error vs. an operational error? Quite simply: it's up to you to define and document what types your function will allow and how you'll try to interpret them.

**If you get something other than what you've documented to accept, that's a programmer error.**

You have to use your judgment to decide how strict you want to be.

##### Example

Imagine a function called `connect` that takes an IP address and a callback and invokes the callback asynchronously after either succeeding or failing.

Suppose the user passes something that's obviously not a valid IP address, like `'bob'`.

In this case, you have a few options:

- Document that the function only accepts strings representing valid IPv4 addresses, and throw an exception immediately if the user passes `'bob'`. This is strongly recommended.
- Document that the function accepts any string. If the user passes `'bob'`, emit an asynchronous error indicating that you couldn't connect to IP address `'bob'`.

##### throwing with assert

Using [`assert` module](https://nodejs.org/api/assert.html) to check function parameters.

If the assertion is wrong, node throws.

Assert based exceptions [are unrecoverable](https://nodejs.org/api/errors.html#errors_exceptions_vs_errors) at the JavaScript layer.

So it is an easy way to crash the app when it encounters a programmer error.

##### Strict or loose ?

The better approach is to be super strict at the beginning and to be less strict in future versions without breaking what already exist.

If you do the opposite, super loose then going stricter, you will produce massives breaking changes to your users.

#### What about domains and `process.on('uncaughtException')`?

Domains and the process-wide `'uncaughtException'` event are primarily useful to attempt to handle or recover from unanticipated programmer errors. For all the reasons described above, this is strongly discouraged.

### Specific recommendations for writing new functions

- Be clear about what your function does.
  - what arguments it expects
  - the types of each of those arguments
  - any additional constraints on those arguments (e.g., must be a valid IP address)
  - what operational errors callers should expect (including their `name`s)
  - how to handle operational errors (e.g., will they be thrown, passed to the callback, emitted on an event emitter, etc.)
  - the return value
- Use `Error` objects (or subclasses : `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`) for all errors, and implement the `Error` contract (`name`, `message` and `stack` props at least).
- Use the Error's `name` property to distinguish errors programmatically (you don't need to subclass `Error` for each error type).
- Augment the `Error` object with properties that explain details
- If you pass a lower-level error to your caller, consider wrapping it instead. (wee [joyent/node-verror](https://github.com/joyent/node-verror) on GitHub)
