# elasticsearch overview

[site officiel www.elastic.co](https://www.elastic.co/)

## ELK

Elasticsearch Store, Search, and Analyze

Logstash: Collect, Enrich, and Transport 

Kibana: Explore, Visualize, and Share

### Concepts

[What is an index in Elasticsearch](https://stackoverflow.com/questions/15025876/what-is-an-index-in-elasticsearch)

>
> Comparing with relationnal database : 
> 
> - MySQL => Databases => Tables => Columns/Rows
> - ElasticSearch => Indices => Types => Documents with Properties
> 
> An ElasticSearch cluster can contain multiple `Indices` (databases), which in turn contain multiple `Types` (tables). These types hold multiple `Documents` (rows), and each document has `Properties` (columns).
> 
> Searching and querying takes the format of: `http://localhost:9200/[index]/[type]/[operation]`
> 

#### basic concepts

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
