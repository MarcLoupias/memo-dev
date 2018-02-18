# JSON

JavaScript Object Notation

Auteur : [Douglas Crockford](https://fr.wikipedia.org/wiki/Douglas_Crockford)

http://json.org/

[RFC 7159 : The JavaScript Object Notation (JSON) Data Interchange Format](https://tools.ietf.org/html/rfc7159)


Exemple :

```json
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}
```