---
kind: article
title: "Forknote 1.0.9 Release"
created_at: 2015-12-15
author_name: pmitchev
--- 

Forknote's core has been updated to Bytecoin v1.0.9.

Bytecoin v1.0.9 introduces major changes in the RPC Wallet. We can highlight the following features among the new ones:

* An option for backup or transferring RPC Wallet keys to another server. Using the 'getSpendKeys' and 'getViewKey' functions, you can get every private key managed by the Wallet. Later you can save them in a secure storage or install on another server using the 'reset' and 'createAddress' functions.

* Delayed transactions. This tool allows you to validate transaction parameters, lock the outputs for a transaction, calculate a hash etc. before sending the transaction into the network. We have introduced the concept of delayed transactions in order to make sure that a transaction passes all checks before being sent.

* The new API allows for operating with the blockchain directly. For instance, there are functions now that allow a developer to get the list of hashes of the last blocks or transactions. It is also possible to get data on certain Payment ID or certain address managed by RPC Wallet from a range of blocks.

Bytecoin's announcement: [https://bytecoin.org/news/bytecoin-1.0.9-release-introduces-rpc-wallet-updated-api/][bytecoin-announcement]


[bytecoin-announcement]: https://bytecoin.org/news/bytecoin-1.0.9-release-introduces-rpc-wallet-updated-api/