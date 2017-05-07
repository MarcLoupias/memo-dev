# ACID

It is a set of properties for database transactions.

## **A**tomicity

Atomicity requires that each transaction be "all or nothing": if one part of the transaction fails, then the entire transaction fails, and the database state is left unchanged.

## **C**onsistency

The consistency property ensures that any transaction will bring the database from one valid state to another.

## **I**solation

The isolation property ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially, i.e., one after the other.

## **D**urability

The durability property ensures that once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors.
