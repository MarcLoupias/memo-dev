# java - jpa

- [Java_Persistence_API](http://fr.wikipedia.org/wiki/Java_Persistence_API)
- [docs.oracle.com](http://docs.oracle.com/javaee/6/api/javax/persistence/package-summary.html)
- [openjpa - apache](http://ci.apache.org/projects/openjpa/2.2.x/docbook/manual.html)
- [Java_Persistence](http://en.wikibooks.org/wiki/Java_Persistence)
- [www.objectdb.com](http://www.objectdb.com)

## JPQL

- [Java_Persistence_Query_Language](http://fr.wikipedia.org/wiki/Java_Persistence_Query_Language)

## pagination

- [criteria - www.objectdb.com](http://www.objectdb.com/java/jpa/query/criteria)
- [Querying - en.wikibooks.org](http://en.wikibooks.org/wiki/Java_Persistence/Querying#Pagination.2C_Max.2FFirst_Results)
- [stackoverflow - jpa-paging-with-numbers-and-next-previous](http://stackoverflow.com/questions/10144487/jpa-paging-with-numbers-and-next-previous)

REST request args

```text
GET http://api.example.com/resources?offset=0&limit=25
OR
GET /api/v1/tickets?per_page=15&page=2
```

JPA request

```java
List<Country> results =
      query.setFirstResult(page * items-per-page)
           .setMaxResults(items-per-page)
           .getResultList();
```
