---
title: Payment gateway JSON RPC API | Forknote
layout: documentation
body_class: developers
subnav_class: docs-documentation
sidebar_nav: sidebar-documentation
---

# Payment gateway JSON RPC API

* TOC
{:toc}

On this page you will find description of every method in Forknote RPC Wallet API. Forknote RPC Wallet is a HTTP server which provides JSON 2.0 RPC interface for Forknote payment operations and address management. Each method has its own page that can be found by clicking on this method. 

More on how to start and operate Forknote RPC Wallet can be found here: [Forknote RPC Wallet][Forknote_RPC_Wallet]

To make a JSON PRC request to your Forknote RPC Wallet you should use POST request that looks like this: 

    http://<service address>:<service port>/json_rpc

Where: 

* &lt;service address&gt; is an IP of Forknote RPC Wallet, if RPC Wallet is located on local machine it is either 127.0.0.1 or localhost
* &lt;service port&gt; is Forknote RPC Wallet port, by default it is binded to 8070 port, but it can be manually binded to any port you want, read more about this [here][Configure_Forknote_RPC_Wallet].


##send_transaction

**send_transaction()** method allows you to send transaction to one or several addresses. Also, it allows you to use a payment_id for a transaction to a single address. 

Input:

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
payment_id | No | 64 symbol string consisting of A-Z and 0-9 characters. Will be depreciated soon. It used to serve as an identifier for each user of the service. | string | 96A3..A5BB
fee | Yes | Transaction fee. Minimal fee in Bytecoin network is .01 BCN. This parameter should be specified in minimal available BCN units. For example, if your fee is .01 BCN, you should pass it as 1000000 | uint64 | 1000000
unlock_time | No | Height of the block until which transaction is going to be locked for spending. | uint64 | 0
mixin | Yes | Privacy level (a discrete number from 1 to infinity). Level 6 and higher is recommended. | uint64 | 6
destinations | Yes | Array that contains addresses and amounts for the transaction: <br/>* amount - uint64 - desired amount. Specify it in atomic units <br/>* address - string - desired address <br/> | array | "amount": 10000000000, <br/>"address": "288Ck..Zv" |


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transaction_id | Identifier of the sent transaction. Identifier indicates a number of the transaction in your wallet. | uint64 | 25


Input Example:

     {
        "params": {
            "payment_id": "96A3937D88E21009C7E3987EBC19000000E77FE29AEB080041B1FE9C0487A5BB", // optional
            "fee": 1000000000, 
            "unlock_time": 0, 
            "mixin": 0, 
            "destinations": [ 
                {
                "amount": 10000000000, 
                "address": "28aYVwSsGMxCWJGCNe26GYPWVR2xLdGnSaHiv5WF8MSa4CGuWfnj8eY2CrSUqPRjaqbYVApwxPjwtbPpA3XKjCZSUamsrZv"
                },
                {
                "amount": 500000, 
                "address": "2A8CkYbbEqSSeGPZPmfVvyUMR3PB1RxQ4XTGE2x7cFsUhxe4hwPzJJBd4TQ38Mc3R7hqRXuU13ABxUqLbtcoyvETNt7MqSw"
                }
            ]
        }, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "send_transaction"
     }


Return value example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {
            "transaction_id":470
        }
     }


##get_address

**get_address()** method returns an address that corresponds to the provided id. For example, you have 20 addresses in your wallet, you want to get a 15th address. All you have to do is point out "15" in the methods body. The first address created on wallet generation has id 0.


Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
index | No | ID of an address in a multi-address wallet. Please note, omitting the argument is similar to index=0 which will return the origin address. | uint64 | 20

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
address | Corresponding address | string | 2A8CkYbbEqSSeGPZPmfVvyUM..UqLbtcoyvETNt7MqSw



Input example:

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "get_address",
        "params": {
            "index": 42
        }
     }

Output value example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": { 
            "address":"2A8CkYbbEqSSeGPZPmfVvyUMR3PB1RxQ4XTGE2x7cFsUhxe4hwPzJJBd4TQ38Mc3R7hqRXuU13ABxUqLbtcoyvETNt7MqSw"
        }
     }


##create_address

**create_address()** method creates an additional address in your wallet. 


No input. 


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
address | Created address | string | 2A8CkYbbEqSSeGPZPmfVvyUM..UqLbtcoyvETNt7MqSw


Input value example:

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "create_address",
        "params": {
        }
     }

Output value example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": { 
            "address":"2A8CkYbbEqSSeGPZPmfVvyUMR3PB1RxQ4XTGE2x7cFsUhxe4hwPzJJBd4TQ38Mc3R7hqRXuU13ABxUqLbtcoyvETNt7MqSw"
        }
     }


##get_address_count

**get_address_count()** method returns a number of addresses in your wallet.


No input. 


Output:

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
count | A number of addresses in your wallet | uint64 | 21


Input example:

     {
        "params": {}, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "get_address_count"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {
            "count":2
        }
     }


##delete_address

**delete_address()** method deletes a specified address. 


Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
address | Yes | An address to be deleted. | string | 2A8CkYbbEqSSeGPZPmf..tcoyvETNt7MqSw


Output: 

In case of success returns an empty JSON object.


Input example:

     {
        "params": 
            { 
                "address":"2A8CkYbbEqSSeGPZPmfVvyUMR3PB1RxQ4XTGE2x7cFsUhxe4hwPzJJBd4TQ38Mc3R7hqRXuU13ABxUqLbtcoyvETNt7MqSw" 
            }, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "delete_address"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {}
     }



##get_actual_balance

**get_actual_balance()** method returns an actual balance. You can request both cumulative balance of all your addresses or a balance of a single address. 

* Actual Balance — your wallet's balance that is available for spending immediately
* Pending Balance — your wallet's balance that is locked and can't be spend. Usually funds are getting unlocked within 10 blocks (20 minutes) at most. 
 

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
address | Yes | Specify an address if you wish to see the balance of a particular address. Leave it blank if you want to see a cumulative balance of your wallet. | string | 2A8CkYbbEqSSeGPZPmf..tcoyvETNt7MqSw


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
actual_balance | Cumulative balance or a balance of a single address in minimal BCN units. | uint64 | 100000000


Input example:

     {
        "params": 
        { 
            "address":"2A8CkYbbEqSSeGPZPmfVvyUMR3PB1RxQ4XTGE2x7cFsUhxe4hwPzJJBd4TQ38Mc3R7hqRXuU13ABxUqLbtcoyvETNt7MqSw" 
        }, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "get_actual_balance"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {
            "actual_balance":32340960388304977
        }
     }


##get_pending_balance

**get_pending_balance()** method returns a pending balance. You can request both cumulative balance of all your addresses or a balance of a single address. 

* Actual Balance — your wallet's balance that is available for spending immediately
* Pending Balance — your wallet's balance that is locked and can't be spend. Usually funds are getting unlocked within 10 blocks (20 minutes) at most. 


Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
address | Yes | Specify an address if you wish to see pending balance of a particular address. Leave it blank if you want to see a cumulative balance. | string | 2A8CkYbbEqSSeGPZPmf..tcoyvETNt7MqSw


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
pending_balance | Cumulative balance or a balance of a single address in minimal BCN units. | uint64 | 100000000


Input example:

     {
        "params": 
            { 
                "address":"2A8CkYbbEqSSeGPZPmfVvyUMR3PB1RxQ4XTGE2x7cFsUhxe4hwPzJJBd4TQ38Mc3R7hqRXuU13ABxUqLbtcoyvETNt7MqSw" 
            },  
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "get_pending_balance"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": { 
            "pending_balance": 10000
        }
     }


##get_transactions_count

**get_transactions_count()** method returns a cumulative number of transactions in your wallet. 


No input. 


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transactions_count | A number of transactions | uint64 | 21


Input example:

     {
        "params": {},
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "get_transactions_count"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": { 
            "transactions_count":471
        }
     }


##get_transfers_count

**get_transfers_count()** method returns a cumulative number of transfers in your wallet. 


No input. 


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transfers_count | A number of transfers | uint64 | 21


Input example:

     {
        "params": {}, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "get_transfers_count"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {
            "transfers_count":2
        }
     }


##get_transaction_id_by_transfer_id

**get_transaction_id_by_transfer_id()** method returns and id of a transaction containing this particular transfer.


Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
transfer_id | Yes | Transfer identifier | uint64 | 20


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transaction_id | Corresponding transaction id | uint64 | 21


Input example:

     {
        "params": { 
            "transfer_id": 0
        }, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "get_transaction_id_by_transfer_id"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result":{
            "transaction_id":469
        }
     }


##get_transaction

**get_transaction()** method returns information about a particular transaction. 

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.


Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
transaction_id | Yes | Requested transaction id | uint64 | 20


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
found | Is found or not | bool | True / False
transaction_info | Contains: <br/> * 1. first_transfer_id - uint64 - identifier of the first transfer in this transaction. Numbering is relative to the number of transfers in your wallet<br/> * 2. transfer_count - uint64 - a number of transfers in this transaction<br/> * 3. total_amount - int64 - total transaction amount <br/> * 4. fee - uint64 - transaction fee. <br/> * 5. hash - string - transaction's hash<br/> * 6. block_height - uint64 - height of the block containing this transaction<br/> * 7. timestamp - uint64 - time when transaction was included into the block<br/> * 8. extra - string - string of a variable length containing A-Z, 0-9 characters <br/> * 9. state - uint8 - state of the transaction, where 0 - sending successful, 1 - sending failed, 2 - sending cancelled by user and 3 - transaction has been created but not yet sent <br/> * 10. transfers - array - contains 2 fields: <br/> ** address - string <br/> ** amount - int64<br/> | object | See below


Input example:

     {
        "params": {
            "transaction_id": 1
        }, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": 
        "get_transaction"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {
            "found":true,
            "transaction_info": { 
                "block_height":2,
                "extra":"2jh1iak...123yh1g4g",
                "fee":0,
                "first_transfer_id":103,
                "hash":"ab29aa2ce295146dc8a4ed72a559aa3a2b3d5d213e23734cd161b0159a044c39",
                "timestamp":1409833412,
                "total_amount":7036820,
                "transfer_count":0,
                "transfers": 
                [
                    {
                        "amount": 10000000000, 
                        "address": "28aYVwSsGMxCWJGCNe26GYPWVR2xLdGnSaHiv5WF8MSa4CGuWfnj8eY2CrSUqPRjaqbYVApwxPjwtbPpA3XKjCZSUamsrZv"
                    },
                    {
                        "amount": 500000, 
                        "address": "2A8CkYbbEqSSeGPZPmfVvyUMR3PB1RxQ4XTGE2x7cFsUhxe4hwPzJJBd4TQ38Mc3R7hqRXuU13ABxUqLbtcoyvETNt7MqSw"
                    }   
                ]
            }
        }
     }


##get_transfer

**get_transfer()** method returns a transfer that corresponds to the requested identifier

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.


Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
transfer_id | Yes | Requested transfer | uint64 | 20


Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
found | Is found or not | bool | true / false
transfer_info | Returns transfer_info object containing: <br /> * amount - uint64  <br /> * address - string | object | See below


Input example:

     {
        "params": {
            "transfer_id": 0
        }, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "get_transfer"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {
            "found":true,
            "transfer_info": {
                "address":"2A8CkYbbEqSSeGPZPmfVvyUMR3PB1RxQ4XTGE2x7cFsUhxe4hwPzJJBd4TQ38Mc3R7hqRXuU13ABxUqLbtcoyvETNt7MqSw",
                "amount":100000
            }
        }
     }


##get_incoming_payments

**get_incoming_payments()** method returns payments with a requested payment_id. This method will be depreciated soon.


Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
payments | Yes | Contains strings of payment_id's | array | 96A3937D88E210..B1FE9C0487A5BB

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
payments | Contains objects: <br /> * id - string - in payment_id format<br /> * payments - array, contains: <br /> ** tx_hash - string - hash of the transaction <br /> ** amount - uint64 - amount of the transaction <br /> ** block_height - uint64 - the height of the block containing a transaction<br /> ** unlock_time - uint64 - transaction unlock time<br /> | array | See below


Input example:

     {
        "params": { 
            "payments": ["96A3937D88E21009C7E3987EBC19000000E77FE29AEB080041B1FE9C0487A5BB"]
        }, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "get_incoming_payments"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {
            "payments": [
                {
                    "id":"96A3937D88E21009C7E3987EBC19000000E77FE29AEB080041B1FE9C0487A5BB",
                    "payments": 
                    [ 
                        {
                            "amount":10000000000, 
                            "block_height":728, 
                            "tx_hash":"7c4fb735fbea0e918d2fa9b5abacfd6c763994718f86dc3272c7631b812bc3ce", 
                            "unlock_time":0
                        },
                        {
                            "amount":10000000000, 
                            "block_height":728, 
                            "tx_hash":"b467df2607d4475ebd2e5d9f01f4ae54ba197449fb099fdd76668d138e6f2f55", 
                            "unlock_time":0
                        }, 
                        {
                            "amount":10000000000, 
                            "block_height":728, 
                            "tx_hash":"abfc13eaa21e9d3df3b03d410aece5de1d2abb6caa588faa15752d26d8101880", 
                            "unlock_time":0
                        }, 
                        {
                            "amount":10000000000, 
                            "block_height":728, 
                            "tx_hash":"fcd43f9f784552fbc88c9928fa85e440f952d684f5ce525b3d3c544d6636080d", 
                            "unlock_time":0
                        }
                    ]
                }
            ]
        }
     }


##list_transactions

**list_transactions()** method returns an array of transactions starting from a particular id. 

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
starting_transaction_id | Yes | Identifier of a starting transaction | uint32 | 20
max_transaction_count | Yes | Maximum number of returned consecutive transactions | uint32 | 20

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transactions | An array containing information about transactions:<br/>Contains:<br/> * block_height - uint64 - height of the block containing this transaction<br/><br/> * extra - string - string of a variable length containing A-Z, 0-9 characters<br/> * fee - uint64 - transaction fee.<br/> * first_transfer_id - uint64 - identifier of the first transfer in this transaction<br/> * hash - string - transaction's hash<br/> * timestamp - uint64 - time when transaction was included into the block<br/> * total_amount - int64 - total transaction amount<br/> * transfer_count - uint64 - a number of transfers in this transaction<br/> * state - uint8 - state of the transaction, where 0 - sending successful, 1 - sending failed, 2 - sending cancelled by user and 3 - transaction has been created but not yet sent<br/> * transfers - array - contains 2 fields:<br/> ** address - string<br/> ** amount - int64<br/> | object | See below. 


Input example:

     {
        "params": {
            "starting_transaction_id": 100,
            "max_transaction_count": 50
        }, 
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "list_transactions"
     }

Output example:

     {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {
            "transactions": [
                { 
                    "block_height":2,
                    "extra":"01e3...70f3acfc4",
                    "fee":0,
                    "first_transfer_id":-1,
                    "hash":"fcd43f9f784552fbc88c9928fa85e440f952d684f5ce525b3d3c544d6636080d",
                    "timestamp":1409833412,
                    "total_amount":7036820,
                    "transfer_count":0
                    "transfers": [
                        {
                            "amount": 102002,
                            "address": "28aYVwSsGMxCWJGCNe26GYPWVR2xLdGnSaHiv5WF8MSa4CGuWfnj8eY2CrSUqPRjaqbYVApwxPjwtbPpA3XKjCZSUamsrZv"
                        }
                    ]
                },
                { 
                    "block_height":3,
                    "extra":"01e3...70f3acfc4",
                    "fee":0,
                    "first_transfer_id":-1,
                    "hash":"fcd43f9f784552fbc88c9928fa85e440f952d684f5ce525b3d3c544d6636080d",
                    "timestamp":1409833412,
                    "total_amount":7036820,
                    "transfer_count":0
                    "transfers": [
                        {
                            "amount": 102002,
                            "address": "28aYVwSsGMxCWJGCNe26GYPWVR2xLdGnSaHiv5WF8MSa4CGuWfnj8eY2CrSUqPRjaqbYVApwxPjwtbPpA3XKjCZSUamsrZv"
                        }
                    ]
                }
            ]
        }
     }


[Forknote_RPC_Wallet]: /documentation/payment-gateway/
[Configure_Forknote_RPC_Wallet]: /documentation/payment-gateway/#configure-forknote-rpc-wallet
