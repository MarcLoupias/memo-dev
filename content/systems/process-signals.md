# process signals

See [Signal (IPC)](https://en.wikipedia.org/wiki/Signal_(IPC))

> Signals are standardized messages sent to a running program to trigger specific behavior, such as quitting or error handling. They are a limited form of inter-process communication (IPC), typically used in Unix, Unix-like, and other POSIX-compliant operating systems.
>
> A signal is an asynchronous notification sent to a process or to a specific thread within the same process to notify it of an event. Common uses of signals are to interrupt, suspend, terminate or kill a process. Signals originated in 1970s Bell Labs Unix and were later specified in the POSIX standard.

## POSIX signals

[POSIX signals](https://en.wikipedia.org/wiki/Signal_(IPC)#POSIX_signals)

## Important signals to handle

### `SIGINT` (*Signal interrupt*)

Especially when writting a CLI app.

The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process. This is typically initiated by pressing Ctrl+C, but on some systems, the "delete" character or "break" key can be used.

### `SIGTERM` (*Signal terminate*)

The SIGTERM signal is sent to a process to request its termination. Unlike the SIGKILL signal, it can be caught and interpreted or ignored by the process. This allows the process to perform nice termination releasing resources and saving state if appropriate. SIGINT is nearly identical to SIGTERM.

### `SIGKILL` (*Signal kill*)

The SIGKILL signal is sent to a process to cause it to terminate immediately (kill). In contrast to SIGTERM and SIGINT, this signal cannot be caught or ignored, and the receiving process cannot perform any clean-up upon receiving this signal.

## Process signals and Docker

[L'erreur à ne pas faire avec une application en production (partie 2/2) - LinkedIn](https://www.linkedin.com/posts/antoine-coulon-c9_lerreur-%C3%A0-ne-pas-faire-avec-une-application-activity-7121071711550066688-6-UT/)

[How To Use Tini Init system in Docker Containers](https://computingforgeeks.com/use-tini-init-system-in-docker-containers/)

[compose-file-v2 doc](https://docs.docker.com/compose/compose-file/compose-file-v2/#init)

> Run an init inside the container that forwards signals and reaps processes. Set this option to true to enable this feature for the service.
>
> ```yaml
> version: "2.4"
> services:
>   web:
>     image: alpine:latest
>     init: true
> ```

### program exit code to use

[What should my program's exit code be if I caught a signal?](https://stackoverflow.com/questions/39269536/what-should-my-programs-exit-code-be-if-i-caught-a-signal)

> If your program receives a signal then **successfully** exits, this is considered a successful termination, so your program should return `EXIT_SUCCESS`.

[What are Exit Codes in Linux?](https://itsfoss.com/linux-exit-codes/)

> The basic ideology is that programs return the exit code `0` to indicate that it executed successfully without issues. Code `1` or anything other than `0` is considered unsuccessful.
