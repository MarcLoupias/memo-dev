# nodejs express project structure

## project POV

[How to structure a Node.js Express project : Sean McGary 20160327](https://seanmcgary.com/posts/how-to-structure-a-nodejs-express-project)

## entity POV

Example writing a messenger class in `C#`. 

It is a classic interface implemented by a class :

```csharp
public interface IMessenger
{
    bool SendMessage();
    void HandleMessage();
    IMessage ComposeMessage();
}

public class Messenger : IMessenger
{
    public bool SendMessage() {}
    public void HandleMessage() {}
    public IMessage ComposeMessage() {}
```

In JavaScript we use functional style so we split each function in a separated file (no shared state
so there is no need to keep them in the same file)

```
messenger
    __tests__    
        composeMessage.test.js
        handleMessage.test.js
        sendMessage.test.js
    composeMessage.js
    handleMessage.js
    sendMessage.js
    index.js // this file combines them all together
```
