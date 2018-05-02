# elasticsearch overview

[site officiel www.elastic.co](https://www.elastic.co/)

## ELK overview

Elasticsearch Store, Search, and Analyze

Logstash: Collect, Enrich, and Transport 

Kibana: Explore, Visualize, and Share

## install

### elastic

[Installing Elasticsearch - all packages formats](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)

[Installing Elasticsearch - with apt](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html)

## Concepts

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

[Remove support for types? - the github issue in elastic/elasticsearch repo](https://github.com/elastic/elasticsearch/issues/15613)

[Here is why : Removal of mapping types - www.elastic.co/guide](https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html)

In an Elasticsearch index, fields that have the same name in different mapping types are backed by the same Lucene field internally.

In other words, using the example above, the `user_name` field in the `user` type is stored in exactly the same field as the `user_name` field in the `tweet` type, and both `user_name` fields must have the same mapping (definition) in both types.

This can lead to frustration when, for example, you want `deleted` to be a `date` field in one type and a `boolean` field in another type in the same index.

## basic concepts

[Getting Started @latest](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)

[Basic Concepts - www.elastic.co - v5.6](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/_basic_concepts.html)

> Near Real Time, Cluster, Node, Index, Type, Document, Shards & Replicas

[Basic Concepts - www.elastic.co - v6.2](https://www.elastic.co/guide/en/elasticsearch/reference/6.2/_basic_concepts.html)

### exploring the cluster

#### cluster health

`GET /_cat/health?v`

```
epoch      timestamp cluster       status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent
1475247709 17:01:49  elasticsearch green           1         1      0   0    0    0        0             0                  -                100.0%
```

cf [cat APIs](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/cat.html)

`GET /_cat/nodes?v`

```
ip        heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name
127.0.0.1           10           5   5    4.46                        mdi      *      PB2SGZY
```

#### list all indices

`GET /_cat/indices?v`

```
health status index uuid pri rep docs.count docs.deleted store.size pri.store.size
green  open   index_boubou_1       OGxhmflXRKy4z_tHvlqf3w   5   0    5436288            0      6.9gb          6.9gb
green  open   index_boubou_2       FL3x1kDhT1y1DA4bXy4kLQ   5   0    5436132       162456      7.1gb          7.1gb
```

#### create an index


```
PUT /customer?pretty
GET /_cat/indices?v
```

```
health status index    uuid                   pri rep docs.count docs.deleted store.size pri.store.size
yellow open   customer 95SQ4TSUT7mWBT7VNHH67A   5   1          0            0       260b           260b
```

#### index a document

without specifying the id, use a `POST` request

in v5.6

```
POST /customer/external?pretty
{
  "name": "Jane Doe"
}
```

in v6.2

```
POST /customer/_doc?pretty
{
  "name": "Jane Doe"
}
```

to specify the id use a `PUT` request

in v5.6

```
PUT /customer/external/1?pretty
{
  "name": "John Doe"
}
```

response 

```
{
  "_index" : "customer",
  "_type" : "external",
  "_id" : "1",
  "_version" : 1,
  "result" : "created",
  "_shards" : {
    "total" : 2,
    "successful" : 1,
    "failed" : 0
  },
  "created" : true
}
```

in v6.2

```
PUT /customer/_doc/1?pretty
{
  "name": "John Doe"
}
```

response 

```
{
  "_index" : "customer",
  "_type" : "_doc",
  "_id" : "1",
  "_version" : 1,
  "result" : "created",
  "_shards" : {
    "total" : 2,
    "successful" : 1,
    "failed" : 0
  },
  "_seq_no" : 0,
  "_primary_term" : 1
}
```

#### query a document

in v5.6

`GET /customer/external/1?pretty`

```
{
  "_index" : "customer",
  "_type" : "external",
  "_id" : "1",
  "_version" : 1,
  "found" : true,
  "_source" : { "name": "John Doe" }
}
```

in v6.2

`GET /customer/_doc/1?pretty`

```
{
  "_index" : "customer",
  "_type" : "_doc",
  "_id" : "1",
  "_version" : 1,
  "found" : true,
  "_source" : { "name": "John Doe" }
}
```

#### delete an index

in v5.6 and in v6.2

```
DELETE /customer?pretty
GET /_cat/indices?v
```

```
health status index uuid pri rep docs.count docs.deleted store.size pri.store.size
```

#### summary

we have executed in v5.6

```
PUT /customer
PUT /customer/external/1
{
  "name": "John Doe"
}
GET /customer/external/1
DELETE /customer
```

and in v6.2

```
PUT /customer
PUT /customer/_doc/1
{
  "name": "John Doe"
}
GET /customer/_doc/1
DELETE /customer
```

pattern to access data in elastic : `<REST Verb> /<Index>/<Type>/<ID>`

In v6.2, `_doc` is the `<Type>` value by default.


## JavaScript

[elastic/elasticsearch-js - github.com](https://github.com/elastic/elasticsearch-js)

Usable from Node or the browser

## articles

[Elasticsearch & Node.js [Getting Started] - Siddhartha Chowdhury - 20170123](https://medium.com/@siddharthac6/elasticsearch-node-js-b16ea8bec427)

[Build a Search Engine with Node.js and Elasticsearch - Behrooz Kamali - 20160927](https://www.sitepoint.com/search-engine-node-elasticsearch/)

[Self hosted search engine](https://wiki.sgripon.net/doku.php/self_hosted_search_engine)

> Ubuntu 16.04 LTS server + Docker + Elasticsearch + Calaca for UI + nutch for website crawler
