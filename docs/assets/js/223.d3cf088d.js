(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{339:function(e,t,a){"use strict";a.r(t);var s=a(33),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rest-best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-best-practices"}},[e._v("#")]),e._v(" REST best practices")]),e._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" links")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("best-practices-for-a-pragmatic-restful-api"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dzone.com/articles/5-basic-rest-api-design-guidelines?edition=220209&utm_source=Spotlight&utm_medium=email&utm_campaign=integration%202016-10-06",target:"_blank",rel:"noopener noreferrer"}},[e._v("5-basic-rest-api-design-guidelines : dzone.com"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=6onHFNqMUwY",target:"_blank",rel:"noopener noreferrer"}},[e._v("Le design d'API REST, un débat sans fin ? (Guillaume Laforge) : Devoxx 2016"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.wishtack.com/rest-apis-best-practices-and-security/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReST APIs | Best Practices & Security"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/RestCheatSheet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Strategy and Design Guidelines for REST APIs and Platform Building"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@weblab_tech/graphql-everything-you-need-to-know-58756ff253d8",target:"_blank",rel:"noopener noreferrer"}},[e._v("GraphQL: Everything You Need to Know - medium.com/@weblab_tech - 20180306"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"api-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-documentation"}},[e._v("#")]),e._v(" API documentation")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://idratherbewriting.com/learnapidoc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documenting REST APIs"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://scotch.io/tutorials/document-your-already-existing-apis-with-swagger",target:"_blank",rel:"noopener noreferrer"}},[e._v("Document your Already Existing APIs with Swagger : scotch.io"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://dzone.com/articles/rest-api-documentation-part-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API Documentation – Part 1 : dzone.com"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://dzone.com/articles/rest-api-documentation-part-2-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API Documentation Part 2 — Swagger, RAML, and Open API : dzone.com"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"resources-uris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources-uris"}},[e._v("#")]),e._v(" Resources (URIs)")]),e._v(" "),a("h3",{attrs:{id:"names-and-verbs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#names-and-verbs"}},[e._v("#")]),e._v(" Names and Verbs")]),e._v(" "),a("p",[e._v("To describe your resources, use concrete names and not action verbs.\nFor decades, computer scientists used action verbs in order to expose services in an RPC way, for instance:\n"),a("code",[e._v("getUser(1234)createUser(user)deleteAddress(1234)")])]),e._v(" "),a("p",[e._v("By contrast, the RESTful approach is to use:")]),e._v(" "),a("p",[a("code",[e._v("GET /users/1234POST /users (with JSON describing a user in the body)DELETE /addresses/1234")])]),e._v(" "),a("h3",{attrs:{id:"uri-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri-case"}},[e._v("#")]),e._v(" URI case")]),e._v(" "),a("p",[e._v("When it comes to naming resources in a program, there are 3 main types of case conventions: CamelCase, snake_case, and spinal-case. They are just a way of naming the resources to resemble natural language while avoiding spaces, apostrophes, and other exotic characters. This habit is universal in programming languages where only a finite set of characters is authorized for names.")]),e._v(" "),a("h3",{attrs:{id:"camelcase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#camelcase"}},[e._v("#")]),e._v(" CamelCase")]),e._v(" "),a("p",[e._v("CamelCase has been popularized by the Java language. It intends to emphasize the beginning of each word by making the first letter uppercase. E.g. camelCase, currentUser, etc. Aside from debates about its readability, its main drawback is to be ineffective in contexts which are not case sensitive.")]),e._v(" "),a("h3",{attrs:{id:"snake-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snake-case"}},[e._v("#")]),e._v(" snake_case")]),e._v(" "),a("p",[e._v("snakecase has been widely used for years by C programmers, and more recently in Ruby. Words are separated by underscores “”, thus letting a compiler or an interpreter understand it as a single symbol, but also allowing readers to separate words fluently. However, its popularity has decreased due to a lot of abuses in C programs with over-extended or too short names. Unlike camel case, there are very few contexts where snake case is not usable. Examples: snakecase, currentuser, etc.")]),e._v(" "),a("h3",{attrs:{id:"spinal-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spinal-case"}},[e._v("#")]),e._v(" spinal-case")]),e._v(" "),a("p",[e._v("spinal-case is a variant of snake case which uses hyphens “-” to separate words. The pros and cons are quite similar to those of snake case, with the exception that some languages do not allow hyphens in symbol names (for variable, class, or function naming). You may find it referred to as lisp-case because it is the usual way to name variables and functions in lisp dialects. It is also the traditional way of naming folders and files in UNIX and Linux systems. Examples: spinal-case, current-user, etc.")]),e._v(" "),a("p",[e._v("According to RFC3986, URLs are “case sensitive” (except for the scheme and the host).\nIn practice, though, a sensitive case may create dysfunctions with APIs hosted on a Windows system.")]),e._v(" "),a("p",[e._v("It is recommended to use spinal-case (which is highlighted by RFC3986), this case is used by Google, PayPal and other big companies.")]),e._v(" "),a("h2",{attrs:{id:"http-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-methods"}},[e._v("#")]),e._v(" HTTP Methods")]),e._v(" "),a("p",[e._v("As stated earlier, one of the key objectives of the REST approach is using HTTP as an application protocol in order to avoid shaping a homemade API. Hence, we should systematically use HTTP verbs to describe what actions are performed on the resources and facilitate the developer’s work handling recurrent CRUD operations.")]),e._v(" "),a("p",[e._v("The following methods are usually observed:")]),e._v(" "),a("h3",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" GET")]),e._v(" "),a("p",[e._v("The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.")]),e._v(" "),a("h3",{attrs:{id:"head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[e._v("#")]),e._v(" HEAD")]),e._v(" "),a("p",[e._v("Same as GET but transfers the status line and header section only.")]),e._v(" "),a("h3",{attrs:{id:"post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[e._v("#")]),e._v(" POST")]),e._v(" "),a("p",[e._v("A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.")]),e._v(" "),a("h3",{attrs:{id:"put"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[e._v("#")]),e._v(" PUT")]),e._v(" "),a("p",[e._v("Replaces all current representations of the target resource with the uploaded content.")]),e._v(" "),a("h3",{attrs:{id:"patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patch"}},[e._v("#")]),e._v(" PATCH")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc5789",target:"_blank",rel:"noopener noreferrer"}},[e._v("Added and defined in RFC5789"),a("OutboundLink")],1),e._v(" - modify an existing HTTP resource (PUT is a complete replacement). (check "),a("a",{attrs:{href:"http://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this use case"),a("OutboundLink")],1),e._v(" for a concrete usage)")]),e._v(" "),a("h3",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),a("p",[e._v("Removes all current representations of the target resource given by a URI.")]),e._v(" "),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" OPTIONS")]),e._v(" "),a("p",[e._v("Describes the communication options for the target resource.")]),e._v(" "),a("h2",{attrs:{id:"http-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-headers"}},[e._v("#")]),e._v(" HTTP Headers")]),e._v(" "),a("p",[e._v("HTTP header fields provide required information about the request or response, or about the object sent in the message body.")]),e._v(" "),a("p",[e._v("There are 4 types of HTTP message headers:")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("General Header")]),e._v(": these header fields have general applicability for both request and response messages.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Client Request Header")]),e._v(": these header fields have applicability only for request messages.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Server Response Header")]),e._v(": these header fields have applicability only for response messages.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Entity Header")]),e._v(": these header fields define meta information about the entity-body or, if no BODY is present, about the resource identified by the request.")])])]),e._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query Parameters")]),e._v(" "),a("h3",{attrs:{id:"paging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paging"}},[e._v("#")]),e._v(" Paging")]),e._v(" "),a("p",[e._v("It is necessary to anticipate the paging of your resources in the early design phase of your API. It is indeed difficult to foresee precisely the progression of the amount of data that will be returned. Therefore, we recommend paginating your resources with default values when they are not provided by the calling client, for example with a range of values [0-25].")]),e._v(" "),a("h3",{attrs:{id:"filtering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filtering"}},[e._v("#")]),e._v(" Filtering")]),e._v(" "),a("p",[e._v("Filtering consists in restricting the number of queried resources by specifying some attributes and their expected values. It is possible to filter a collection on several attributes at the same time and to allow several values for one filtered attribute.")]),e._v(" "),a("h3",{attrs:{id:"sorting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sorting"}},[e._v("#")]),e._v(" Sorting")]),e._v(" "),a("p",[e._v("Sorting the result of a query on a collection of resources. A sort parameter should contain the names of the attributes on which the sorting is performed, separated by a comma.")]),e._v(" "),a("h3",{attrs:{id:"searching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searching"}},[e._v("#")]),e._v(" Searching")]),e._v(" "),a("p",[e._v("A search is a sub-resource of a collection. As such, its results will have a different format than the resources and the collection itself. This allows us to add suggestions, corrections, and information related to the search. Parameters are provided the same way as for a filter, through the query-string, but they are not necessarily exact values, and their syntax permits approximate matching.")]),e._v(" "),a("h2",{attrs:{id:"error-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[e._v("#")]),e._v(" error handling")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://stackoverflow.com/questions/942951/rest-api-error-return-good-practices",target:"_blank",rel:"noopener noreferrer"}},[e._v("rest-api-error-return-good-practices : stackoverflow.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The main choice is do you want to treat the HTTP status code as part of your REST API or not.")]),e._v(" "),a("p",[e._v("Both ways work fine. I agree that, strictly speaking, one of the ideas of REST is that you should use the HTTP Status code as a part of your API (return "),a("code",[e._v("200")]),e._v(" or "),a("code",[e._v("201")]),e._v(" for a successful operation and a "),a("code",[e._v("4xx")]),e._v(" or "),a("code",[e._v("5xx")]),e._v(' depending on various error cases.) However, there are no REST police. You can do what you want. I have seen far more egregious non-REST APIs being called "RESTful."')]),e._v(" "),a("p",[e._v("At this point ("),a("strong",[e._v("August, 2015")]),e._v(") "),a("em",[e._v("I do recommend that you use the HTTP Status code as part of your API")]),e._v(". It is now much easier to see the return code when using frameworks than it was in the past. In particular, it is now easier to see the non-200 return case and the body of non-200 responses than it was in the past.")]),e._v(" "),a("h3",{attrs:{id:"the-http-status-code-is-part-of-your-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-http-status-code-is-part-of-your-api"}},[e._v("#")]),e._v(" The HTTP Status code is part of your api")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("You will need to carefully pick 4xx codes that fit your error conditions. You can include a rest, xml, or plaintext message as the payload that includes a sub-code and a descriptive comment.")])]),e._v(" "),a("li",[a("p",[e._v("The clients will need to use a software framework that enables them to get at the HTTP-level status code. Usually do-able, not always straight-forward.")])]),e._v(" "),a("li",[a("p",[e._v("The clients will have to distinguish between HTTP status codes that indicate a communications error and your own status codes that indicate an application-level issue.")])])]),e._v(" "),a("h3",{attrs:{id:"the-http-status-code-is-not-part-of-your-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-http-status-code-is-not-part-of-your-api"}},[e._v("#")]),e._v(" The HTTP Status code is NOT part of your api")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The HTTP status code will always be 200 if your app received the request and then responded (both success and error cases)")])]),e._v(" "),a("li",[a("p",[e._v('ALL of your responses should include "envelope" or "header" information. Typically something like:')])])]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('envelope_ver: 1.0\nstatus:  # use any codes you like. Reserve a code for success.\nmsg: "ok" # A human string that reflects the code. Useful for debugging.\ndata: ...  # The data of the response, if any.\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("ul",[a("li",[e._v("This method can be easier for clients since the status for the response is always in the same place (no sub-codes needed), no limits on the codes, no need to fetch the HTTP-level status-code.")])]),e._v(" "),a("p",[e._v("Here's "),a("a",{attrs:{href:"http://yuiblog.com/blog/2008/10/15/datatable-260-part-one/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a post"),a("OutboundLink")],1),e._v(" with a similar idea.")]),e._v(" "),a("p",[e._v("Main issues:")]),e._v(" "),a("ul",[a("li",[e._v("Be sure to include version numbers so you can later change the semantics of the api if needed.")]),e._v(" "),a("li",[e._v("Document...")])]),e._v(" "),a("p",[e._v("About option 2 :")]),e._v(" "),a("blockquote",[a("p",[e._v("No, tunneling everything through a 200 is not restful at all. It prevents intermediaries from understanding the result of an operation, which will kill any form of caching, it hides the semantics of the operation, and it imposes understanding the content of the message to process an error, breaching the self-contained messages constraint.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);