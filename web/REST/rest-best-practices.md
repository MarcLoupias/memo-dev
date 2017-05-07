# REST best practices

## links

- [best-practices-for-a-pragmatic-restful-api](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [5-basic-rest-api-design-guidelines : dzone.com](https://dzone.com/articles/5-basic-rest-api-design-guidelines?edition=220209&utm_source=Spotlight&utm_medium=email&utm_campaign=integration%202016-10-06)
- [Le design d'API REST, un débat sans fin ? (Guillaume Laforge) : Devoxx 2016](https://www.youtube.com/watch?v=6onHFNqMUwY)

## API documentation

[Documenting REST APIs](http://idratherbewriting.com/learnapidoc/)

[Document your Already Existing APIs with Swagger : scotch.io](https://scotch.io/tutorials/document-your-already-existing-apis-with-swagger)

[REST API Documentation – Part 1 : dzone.com](https://dzone.com/articles/rest-api-documentation-part-1)
[REST API Documentation Part 2 — Swagger, RAML, and Open API : dzone.com](https://dzone.com/articles/rest-api-documentation-part-2-1)

## Resources (URIs)

### Names and Verbs

To describe your resources, use concrete names and not action verbs.
For decades, computer scientists used action verbs in order to expose services in an RPC way, for instance:
`getUser(1234)createUser(user)deleteAddress(1234)`

By contrast, the RESTful approach is to use:

`GET /users/1234POST /users (with JSON describing a user in the body)DELETE /addresses/1234`

### URI case

When it comes to naming resources in a program, there are 3 main types of case conventions: CamelCase, snake_case, and spinal-case. They are just a way of naming the resources to resemble natural language while avoiding spaces, apostrophes, and other exotic characters. This habit is universal in programming languages where only a finite set of characters is authorized for names.

### CamelCase

CamelCase has been popularized by the Java language. It intends to emphasize the beginning of each word by making the first letter uppercase. E.g. camelCase, currentUser, etc. Aside from debates about its readability, its main drawback is to be ineffective in contexts which are not case sensitive.

### snake_case

snakecase has been widely used for years by C programmers, and more recently in Ruby. Words are separated by underscores “”, thus letting a compiler or an interpreter understand it as a single symbol, but also allowing readers to separate words fluently. However, its popularity has decreased due to a lot of abuses in C programs with over-extended or too short names. Unlike camel case, there are very few contexts where snake case is not usable. Examples: snakecase, currentuser, etc.

### spinal-case

spinal-case is a variant of snake case which uses hyphens “-” to separate words. The pros and cons are quite similar to those of snake case, with the exception that some languages do not allow hyphens in symbol names (for variable, class, or function naming). You may find it referred to as lisp-case because it is the usual way to name variables and functions in lisp dialects. It is also the traditional way of naming folders and files in UNIX and Linux systems. Examples: spinal-case, current-user, etc.

According to RFC3986, URLs are “case sensitive” (except for the scheme and the host).
In practice, though, a sensitive case may create dysfunctions with APIs hosted on a Windows system.

It is recommended to use spinal-case (which is highlighted by RFC3986), this case is used by Google, PayPal and other big companies.

## HTTP Methods

As stated earlier, one of the key objectives of the REST approach is using HTTP as an application protocol in order to avoid shaping a homemade API. Hence, we should systematically use HTTP verbs to describe what actions are performed on the resources and facilitate the developer’s work handling recurrent CRUD operations.

The following methods are usually observed:

### GET

The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.

### HEAD

Same as GET but transfers the status line and header section only.

### POST

A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

### PUT

Replaces all current representations of the target resource with the uploaded content.

### PATCH

[Added and defined in RFC5789](https://tools.ietf.org/html/rfc5789) - modify an existing HTTP resource (PUT is a complete replacement). (check [this use case](http://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/) for a concrete usage)

### DELETE

Removes all current representations of the target resource given by a URI.

### OPTIONS

Describes the communication options for the target resource.

## HTTP Headers

HTTP header fields provide required information about the request or response, or about the object sent in the message body.

There are 4 types of HTTP message headers:

1. **General Header**: these header fields have general applicability for both request and response messages.

2. **Client Request Header**: these header fields have applicability only for request messages.

3. **Server Response Header**: these header fields have applicability only for response messages.

4. **Entity Header**: these header fields define meta information about the entity-body or, if no BODY is present, about the resource identified by the request.

## Query Parameters

### Paging

It is necessary to anticipate the paging of your resources in the early design phase of your API. It is indeed difficult to foresee precisely the progression of the amount of data that will be returned. Therefore, we recommend paginating your resources with default values when they are not provided by the calling client, for example with a range of values [0-25].

### Filtering

Filtering consists in restricting the number of queried resources by specifying some attributes and their expected values. It is possible to filter a collection on several attributes at the same time and to allow several values for one filtered attribute.

### Sorting

Sorting the result of a query on a collection of resources. A sort parameter should contain the names of the attributes on which the sorting is performed, separated by a comma.

### Searching

A search is a sub-resource of a collection. As such, its results will have a different format than the resources and the collection itself. This allows us to add suggestions, corrections, and information related to the search. Parameters are provided the same way as for a filter, through the query-string, but they are not necessarily exact values, and their syntax permits approximate matching.

## error handling

[rest-api-error-return-good-practices : stackoverflow.com](http://stackoverflow.com/questions/942951/rest-api-error-return-good-practices)

The main choice is do you want to treat the HTTP status code as part of your REST API or not.

Both ways work fine. I agree that, strictly speaking, one of the ideas of REST is that you should use the HTTP Status code as a part of your API (return `200` or `201` for a successful operation and a `4xx` or `5xx` depending on various error cases.) However, there are no REST police. You can do what you want. I have seen far more egregious non-REST APIs being called "RESTful."

At this point (**August, 2015**) *I do recommend that you use the HTTP Status code as part of your API*. It is now much easier to see the return code when using frameworks than it was in the past. In particular, it is now easier to see the non-200 return case and the body of non-200 responses than it was in the past.

**The HTTP Status code is part of your api**

- You will need to carefully pick 4xx codes that fit your error conditions. You can include a rest, xml, or plaintext message as the payload that includes a sub-code and a descriptive comment.

- The clients will need to use a software framework that enables them to get at the HTTP-level status code. Usually do-able, not always straight-forward.

- The clients will have to distinguish between HTTP status codes that indicate a communications error and your own status codes that indicate an application-level issue.

**The HTTP Status code is NOT part of your api**

- The HTTP status code will always be 200 if your app received the request and then responded (both success and error cases)

- ALL of your responses should include "envelope" or "header" information. Typically something like:
```
envelope_ver: 1.0
status:  # use any codes you like. Reserve a code for success. 
msg: "ok" # A human string that reflects the code. Useful for debugging.
data: ...  # The data of the response, if any.
```
- This method can be easier for clients since the status for the response is always in the same place (no sub-codes needed), no limits on the codes, no need to fetch the HTTP-level status-code.

Here's a post with a similar idea: http://yuiblog.com/blog/2008/10/15/datatable-260-part-one/

Main issues:

- Be sure to include version numbers so you can later change the semantics of the api if needed.

- Document...


About option 2 :

> No, tunneling everything through a 200 is not restful at all. It prevents intermediaries from understanding the result of an operation, which will kill any form of caching, it hides the semantics of the operation, and it imposes understanding the content of the message to process an error, breaching the self-contained messages constraint. 
