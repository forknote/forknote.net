---
title: RPC Wallet curl examples | Forknote
layout: documentation
body_class: developers
subnav_class: docs-guides
sidebar_nav: sidebar-giudes
---

# RPC Wallet curl examples

* TOC
{:toc}

## reset

### no parameters

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {},"jsonrpc": "2.0", "id": "test","method":"reset"}' http://localhost:9090/json_rpc
</pre>

### viewSecretKey

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"viewSecretKey": "4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907"},"jsonrpc": "2.0", "id": "test","method":"reset"}' http://localhost:9090/json_rpc
</pre>


## save

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {},"jsonrpc": "2.0", "id": "test","method":"save"}' http://localhost:9090/json_rpc
</pre>


## getViewKey

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {},"jsonrpc": "2.0", "id": "test","method":"getViewKey"}' http://localhost:9090/json_rpc
</pre>


## getSpendKeys

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"address": "D5dLTBqbemtTFkM9HptxaEgx844trQP2kXk4BfobTYS2J4njZxsQP4nDSeHBf2cGGDWLejg1xaAnKFAAvGTs9rmnVZsmqio"} ,"jsonrpc": "2.0", "id": "test","method":"getSpendKeys"}' http://localhost:9090/json_rpc
</pre>


## getStatus

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {},"jsonrpc": "2.0", "id": "test","method":"getStatus"}' http://localhost:9090/json_rpc
</pre>


## getAddresses

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {},"jsonrpc": "2.0", "id": "test","method":"getAddresses"}' http://localhost:9090/json_rpc
</pre>


## createAddress

### no parameter

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {},"jsonrpc": "2.0", "id": "test","method":"createAddress"}' http://localhost:9090/json_rpc
</pre>

### secretSpendKey

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"spendSecretKey": "7d2ba46048a75235cc260913d4fd85769bc02203583bfdc795bae996ff314421"},"jsonrpc": "2.0", "id": "test","method":"createAddress"}' http://localhost:9090/json_rpc
</pre>

### spendPublicKey

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"spendPublicKey": "5c4da91676f4906575d03345aa3c822fadcbea432f2fd23701e2b466b73d0dec"},"jsonrpc": "2.0", "id": "test","method":"createAddress"}' http://localhost:9090/json_rpc
</pre>


## deleteAddress

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"address": "D4vADauhf7NBYTQ8AoKyByQxJ2g44uiZrLHc1j1iDTccEtTxJdK2pyxDSeHBf2cGGDWLejg1xaAnKFAAvGTs9rmnVZvQLJe"} ,"jsonrpc": "2.0", "id": "test","method":"deleteAddress"}' http://localhost:9090/json_rpc
</pre>


## getBalance

### no parameter

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {},"jsonrpc": "2.0", "id": "test","method":"getBalance"}' http://localhost:9090/json_rpc
</pre>

### address

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"address": "D8ExoFUt2nU961ytoh3YGHb1wF5UoszHmEDjzoPvipdPHz5geH6SPZoddLoNAN5iSDQ6PCQPnMPshMgZMAfjdxmYFMvVuVe"} ,"jsonrpc": "2.0", "id": "test","method":"getBalance"}' http://localhost:9090/json_rpc
</pre>


## getBlockHashes

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"firstBlockIndex": 100, "blockCount": 20} ,"jsonrpc": "2.0", "id": "test","method":"getBlockHashes"}' http://localhost:9090/json_rpc
</pre>


## getTransactionHashes

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"firstBlockIndex": 100, "blockCount": 20} ,"jsonrpc": "2.0", "id": "test","method":"getBlockHashes"}' http://localhost:9090/json_rpc
</pre>


## getTransactions

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"firstBlockIndex": 100, "blockCount": 20} ,"jsonrpc": "2.0", "id": "test","method":"getTransactions"}' http://localhost:9090/json_rpc
</pre>


## getUnconfirmedTransactionHashes

### no parameters

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {} ,"jsonrpc": "2.0", "id": "test","method":"getUnconfirmedTransactionHashes"}' http://localhost:9090/json_rpc
</pre>

### addresses

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"addresses": []} ,"jsonrpc": "2.0", "id": "test","method":"getUnconfirmedTransactionHashes"}' http://localhost:9090/json_rpc
</pre>


## getTransaction

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"transactionHash": "c47ba0bad3c62318732dde8029542df3c06a1577ba9152f8212e754190b1e593"} ,"jsonrpc": "2.0", "id": "test","method":"getTransaction"}' http://localhost:9090/json_rpc
</pre>


## sendTransaction

not working

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"anonymity":0, "fee":1000000,"transfers":[{"amount":100000000,"address":"D8ExoFUt2nU961ytoh3YGHb1wF5UoszHmEDjzoPvipdPHz5geH6SPZoddLoNAN5iSDQ6PCQPnMPshMgZMAfjdxmYFMvVuVe"}], "changeAddress": "D8ExoFUt2nU961ytoh3YGHb1wF5UoszHmEDjzoPvipdPHz5geH6SPZoddLoNAN5iSDQ6PCQPnMPshMgZMAfjdxmYFMvVuVe"},"jsonrpc": "2.0", "id": "test","method":"sendTransaction"}' http://localhost:9090/json_rpc
</pre>


## getUnspendOuts

<pre class="terminal">
curl -X POST -i -H "Accept: application/json" -d '{"params": {"address": "D8ExoFUt2nU961ytoh3YGHb1wF5UoszHmEDjzoPvipdPHz5geH6SPZoddLoNAN5iSDQ6PCQPnMPshMgZMAfjdxmYFMvVuVe"} ,"jsonrpc": "2.0", "id": "test","method":"getUnspendOuts"}' http://localhost:9090/json_rpc
</pre>
