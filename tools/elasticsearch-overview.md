# elasticsearch overview

[site officiel www.elastic.co](https://www.elastic.co/)

## ELK

Elasticsearch Store, Search, and Analyze

Logstash: Collect, Enrich, and Transport 

Kibana: Explore, Visualize, and Share

### install

#### elastic

[Installing Elasticsearch - all packages formats](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)

[Installing Elasticsearch - with apt](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html)

### Concepts

[What is an index in Elasticsearch](https://stackoverflow.com/questions/15025876/what-is-an-index-in-elasticsearch)

>
> Comparing with relationnal database (**5- only !**) : 
> 
> - MySQL => Databases => Tables => Columns/Rows
> - ElasticSearch => Indices => Types => Documents with Properties
> 
> An ElasticSearch cluster can contain multiple `Indices` (databases), which in turn contain multiple `Types` (tables). These types hold multiple `Documents` (rows), and each document has `Properties` (columns).
> 
> Searching and querying takes the format of: `http://localhost:9200/[index]/[type]/[operation]`
>

**!!! Breaking change in Elasticsearch 6+ !!!**

The type becomes deprecated, in v7 it will be removed.

[Here is why : Removal of mapping types - www.elastic.co/guide](https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html)

In an Elasticsearch index, fields that have the same name in different mapping types are backed by the same Lucene field internally.

In other words, using the example above, the `user_name` field in the `user` type is stored in exactly the same field as the `user_name` field in the `tweet` type, and both `user_name` fields must have the same mapping (definition) in both types.

This can lead to frustration when, for example, you want `deleted` to be a `date` field in one type and a `boolean` field in another type in the same index.

#### basic concepts

[Getting Started @latest](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)

[Basic Concepts - www.elastic.co - v5.6](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/_basic_concepts.html)

> Near Real Time, Cluster, Node, Index, Type, Document, Shards & Replicas

## JavaScript

[elastic/elasticsearch-js - github.com](https://github.com/elastic/elasticsearch-js)

Usable from Node or the browser

## articles

[Elasticsearch & Node.js [Getting Started] - Siddhartha Chowdhury - 20170123](https://medium.com/@siddharthac6/elasticsearch-node-js-b16ea8bec427)

[Build a Search Engine with Node.js and Elasticsearch - Behrooz Kamali - 20160927](https://www.sitepoint.com/search-engine-node-elasticsearch/)

[Self hosted search engine](https://wiki.sgripon.net/doku.php/self_hosted_search_engine)

> Ubuntu 16.04 LTS server + Docker + Elasticsearch + Calaca for UI + nutch for website crawler
