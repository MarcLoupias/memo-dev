# js-simple-logger

```javascript
window.simpleLogger = {

    loggers: [],

    load: function (str) {
        console.warn("simpleLogger fallback logger to console");
    },
    getLogger: function (loggerName) {
        var logger = this.loggers[loggerName];
        if (!logger) {
            logger = new SimpleLogger(loggerName, console);
            this.loggers[loggerName] = logger;
        }
        return logger;
    }
};

SimpleLogger._LVL_ERROR = 1;
SimpleLogger._LVL_WARN = 2;
SimpleLogger._LVL_INFO = 3;
SimpleLogger._LVL_DEBUG = 4;

function SimpleLogger(name, console) {
    this.name = name;
    this.console = console;
    this.level = SimpleLogger._LVL_ERROR;
}

SimpleLogger.prototype.setLevel = function (level) {
    this.level = level;

    var noop = function () {
    };

    this.error = noop;
    this.warn = noop;
    this.info = noop;
    this.debug = noop;

    if (level === SimpleLogger._LVL_ERROR) {
        this.error = window.console.error.bind(window.console, '[ERROR] [' + this.name + '] - %s');
    }
    if (level === SimpleLogger._LVL_WARN) {
        this.warn = window.console.warn.bind(window.console, '[WARN] [' + this.name + '] - %s');
    }
    if (level === SimpleLogger._LVL_INFO) {
        this.info = window.console.info.bind(window.console, '[INFO] [' + this.name + '] - %s');
    }
    if (level === SimpleLogger._LVL_DEBUG) {
        this.debug = window.console.debug.bind(window.console, '[DEBUG] [' + this.name + '] - %s');
        this.log = window.console.log.bind(window.console, '[DEBUG] [' + this.name + '] - %s');
    }
};

SimpleLogger.prototype.log = function (message) {
    if (this.level >= SimpleLogger._LVL_DEBUG) {
        this.log = window.console.log.bind(window.console, '[DEBUG] [' + this.name + '] - %s');
    }
};

SimpleLogger.prototype.debug = function (message) {
    if (this.level >= SimpleLogger._LVL_DEBUG) {
        this.debug = window.console.debug.bind(window.console, '[DEBUG] [' + this.name + '] - %s');
    }
};

SimpleLogger.prototype.info = function (message) {
    if (this.level >= SimpleLogger._LVL_INFO) {
        this.info = window.console.info.bind(window.console, '[INFO] [' + this.name + '] - %s');
    }
};

SimpleLogger.prototype.warn = function (message) {
    if (this.level >= SimpleLogger._LVL_WARN) {
        this.warn = window.console.warn.bind(window.console, '[WARN] [' + this.name + '] - %s');
    }
};

SimpleLogger.prototype.error = function (message) {
    if (this.level >= SimpleLogger._LVL_ERROR) {
        this.error = window.console.error.bind(window.console, '[ERROR] [' + this.name + '] - %s');
    }
};
```
