# nodejs - express project structure

## express internals

[How express.js works - Understanding the internals of the express library - www.sohamkamani.com/blog - 20180530](https://www.sohamkamani.com/blog/2018/05/30/understanding-how-expressjs-works/)

## project POV

[How to structure a Node.js Express project : Sean McGary 20160327](https://seanmcgary.com/posts/how-to-structure-a-nodejs-express-project)

Embrace the Majestic Monolith - at least to start :

- All of your code is in one place
- Everyone on your team can find things easily
- No npm dependency management hell

Example writing a RESTful API service built on top of PostgreSQL.

Three different layers : Models, lib, and services.

Data model is simple : each "company" can have n many "users" associated.

The directory structure :

```text
.
├── index.js
├── lib
│   ├── company
│   │   └── index.js
│   └── user
│       └── index.js
├── models
│   ├── company.js
│   └── user.js
├── routes
│   └── account
│       └── index.js
└── services
    └── account
        └── index.js
```

The models schema :

```text
user
----------
- id
- name
- email
- password
- company_id


company
----------
- id
- name


user (1) --> (1) company
company (1) --> (n) user
```

### model

[sequelize](http://docs.sequelizejs.com/en/latest/) (featureful and powerfuly ORM)

Your models can express relationships and are used to build sets of data to eventually send to the end user.

### lib

This is where we start to actually interact with our models.

Create a corresponding file for each model that will wrap basic CRUD operations of a model.

So if we want to list all the users for a company we write a `lib/user/index.js` file implementing a `listUsersForCompany` function.

### services

They take different model-level modules and perform some combination of actions.

We want to write a registration system for our application. When a user registers, you take their name, email, and
password, but you also need to create a company profile which could potentially have more users down the road.

One company per user, many users per company. Being that a user depends on the existence of a company, we're going to
transactionally create the two together to illustrate how a service would work.

So we create a createUser function in `lib/user/index.js` and a `createCompany` function in `lib/company/index.js`.

Then a `registerUserAndCompany` function wires everything in a `services/account/index.js` file using sequelize to make
it transactional.

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

```text
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
