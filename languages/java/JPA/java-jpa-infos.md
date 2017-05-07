
Java Persistence API
====================

http://fr.wikipedia.org/wiki/Java_Persistence_API
http://docs.oracle.com/javaee/6/api/javax/persistence/package-summary.html

http://ci.apache.org/projects/openjpa/2.2.x/docbook/manual.html

http://en.wikibooks.org/wiki/Java_Persistence

http://www.objectdb.com

JPQL
----
http://fr.wikipedia.org/wiki/Java_Persistence_Query_Language


Pagination
----------
http://www.objectdb.com/java/jpa/query/criteria
http://en.wikibooks.org/wiki/Java_Persistence/Querying#Pagination.2C_Max.2FFirst_Results
http://stackoverflow.com/questions/10144487/jpa-paging-with-numbers-and-next-previous

http://angular-ui.github.io/bootstrap/#/pagination

input param pagination angular-ui
- - - - - - - - - - - - - - - - - 
page (page number)
items-per-page (item displayed per page)
total-items (total items available)

REST request args
- - - - - - - - - 
GET http://api.example.com/resources?offset=0&limit=25
OR 
GET /api/v1/tickets?per_page=15&page=2

JPA request
- - - - - -
List<Country> results =
      query.setFirstResult(page * items-per-page)
           .setMaxResults(items-per-page)
           .getResultList();


