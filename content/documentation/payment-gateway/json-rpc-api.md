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


#Forknote RPC Wallet API methods

## reset

**reset()** method allows you to re-sync your wallet.

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
viewSecretKey | No | Private view key | string | 4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907

No output in case of success.

**Important:** If the view_secret_key was not pointed out reset() methods resets the wallet and re-syncs it. If the view_secret_key argument was pointed out reset() method substitutes the existing wallet with a new one with a specified view_secret_key and creates an address for it.

Input value example:

    {  
      'params':{  
         'viewSecretKey':'4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'reset'
    }

Output value example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
      }
    }


## getViewKey

**getViewKey()** method returns your view key.

No input.

Output:

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
viewSecretKey | Private view key | string | 4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907

Input Example:

    {  
      'params':{  
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getViewKey'
    }

Return value example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'viewSecretKey':'4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907'
      }
    }


## getSpendKeys

**getSpendKeys()** method returns your spend keys.

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
address | Yes | Valid and existing in this container address | string | 2A8CkYbbEqSSeGPZPmfVvyUM..UqLbtcoyvETNt7MqSw

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
spendSecretKey | Private spend key | string | 4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907
spendPublicKey | Public spend key | string | 4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907

Input Example:

    {  
      'params':{  
         'address':'22p4wUHAMndSscvtYErtqUaYrcUTvrZ9zhWwxc3JtkBHAnw4FJqenZyaePSApKWwJ5BjCJz1fKJoA6QHn5j6bVHg8A8dyhp'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getSpendKeys'
    }

Return value example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'spendSecretKey':'4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907'
         'spendPublicKey':'4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907'
      }
    }


## getStatus

**getStatus()** method returns information about the current RPC Wallet state: block_count, known_block_count, last_block_hash and peer_count.

No input.

Output:

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
blockCount | Node's known number of blocks | uint32 | 123456
knownBlockCount | Maximum known number of blocks of all seeds that are connected to the node | uint32 | 123123
lastBlockHash | Hash of the last known block | string | 8a6f1cb7ed7a9db4751d7b283a0482baff20567173dbfae136c9bceb188e51c4
peerCount | Connected peers number | uint32 | 5

Input example:

    {  
      'params':{  
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getStatus'
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'peerCount':2,
         'blockCount':1,
         'lastBlockHash':'8a6f1cb7ed7a9db4751d7b283a0482baff20567173dbfae136c9bceb188e51c4',
         'knownBlockCount':0
      }
    }


## getAddresses

getAddresses() method returns an array of your RPC Wallet's addresses.

No input.

Output:

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
addresses | Array of strings, where each strings is an address | array | See below

Input example:

    {  
      'params':{  
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getAddresses'
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'addresses':[  
            '2785gGLpyMJhw4JFVVd4vMDeRMmvTNda9MMgQNBd8se2a1mNRcKYubnaCk5zubLSefZAAmjDk9Fyejb2hVDRZQ23MB2BgUW',
            '2785gGLpyMJhw4JFVVd5kFDeRMmvTNda9CClNASd8se2a1mNRcKYubnaCk5zubLSefZAAmjDk9Fyejb2hVDRZQ23MB2BgUW'
         ]
      }
    }


## createAddress

**createAddress()** method creates an additional address in your wallet.

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
secretSpendKey | No | Private spend key. If secretSpendKey was specified, RPC Wallet creates spend address | string |  
publicSpendKey | No | Public spend key. If publicSpendKey was specified, RPC Wallet creates view address | string |  

**Note:** If none of the above mentioned parameters were specified, RPC Wallet creates spend address with generated spend key.<br />
**Note:** both above mentioned parameters can't be present in a single request

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


## deleteAddress

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


## getBalance

**getBalance()** method returns a balance for a specified address. <br />
**Please note:** If address is not specified, returns a cumulative balance of all RPC Wallet's addresses.

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
address | No | Valid and existing address in this particular wallet | string | 2A8CkYbbEqSSeGPZPmf..tcoyvETNt7MqSw

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
availableBalance | Available balance of the specified address | uint64 | 123123
lockedAmount | Locked amount of the specified address | uint64 | 123123

Input example:

    {  
      'params':{  
         'address':'2785gGLpyMJhw4JFVVd4vMDeRMmvTNda9MMgQNBd8se2a1mNRcKYubnaCk5zubLSefZAAmjDk9Fyejb2hVDRZQ23MB2BgUW'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getBalance'
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'lockedAmount':210,
         'availableBalance':110
      }
    }


## getBlockHashes

**getBlockHashes()** method returns an array of block hashes for a specified block range.

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
firstBlockIndex | Yes | Starting height | uint32 | 123123
blockCount | Yes | Number of blocks to process | uint32 | 20

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
blockHashes | Array of strings, where each element is a block hash | array | example

Input example:

    {  
      'params':{  
         'blockCount':11,
         'firstBlockIndex':0
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getBlockHashes'
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'blockHashes':[  
            '8a6f1cb7ed7a9db4751d7b283a0482baff20567173dbfae136c9bceb188e51c4',
            '657cd1c33df7f4250d581c97db665cb4a1856ebfadd6efabaeab745c2c76b1be',
            '21047174f74576b6722e72646d7bd553e17d7c9f07fef05151bb1f9df7ed9dd8',
            '504b9bfb2cd34531551cb2d68ea3e34e030d991164589ba7ed24e16fed3ea374',
            'd9d36b5226d11b2cf60e3cf2038b21032c4ac753eabc32fbdd506158f95a69ca',
            '171be105f8e39729838144c78ced336d0ebc29a4bd2c7a22901c0e8c0eaabb42',
            '5f7933bd0257649a44e571d59a9f4083297acbdd338c1c0094a7226ade8d0f0f',
            '967fd52a57e8193f56329bb37abdddce717098429f62c00776342c605a28e19b',
            '6b1a21634a3d72821c43a244af16098eba7c0a59a2e409efa38bd420702f7594',
            '7bb5ca944c5f916f80d50246f48789cc4605efd166efc2308553fe0d208fbe12',
            '83dfef7c288121d87e60f52c74d3da6b422d4b8581ce732ef8b54273bd6c4f45'
         ]
      }
    }


## getTransactionHashes

**getTransactionHashes()** method returns an array of block and transaction hashes.<br />
Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.

Input:

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
addresses | No | Array of strings, where each string is an address | array | 2A8CkYbbEqSSeGPZPmf..tcoyvETNt7MqSw
blockHash | Only one of these parameters (blockHash or firstBlockIndex) is allowed. | Hash of the starting block | string | f8f07ace392474bfbdc0fc30749a45f779a8aea10c489a103270f63ed88178ad
firstBlockIndex | Only one of these parameters (blockHash or firstBlockIndex) is allowed.    | Starting height | uint32 | 123123
blockCount | Yes | Number of blocks to return transaction hashes from | uint32 | 20
paymentId | No | Valid payment_id | string | somePaymentId

**Note:** if **paymentId** parameter is set, getTransactionHashes() method returns transaction hashes of transactions that contain specified payment_id. (in the set block range)<br />
**Note:** if **addresses** parameter is set, getTransactionHashes() method returns transaction hashes of transactions that contain transfer from at least one of specified addresses.<br />
**Note:** if both above mentioned parameters are set, getTransactionHashes() method returns transaction hashes of transactions that contain both specified payment_id and transfer from at least one of specified addresses.

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
items | Array that contains: <br /> * blockHash - string - hash of the block which contains transaction hashes <br /> * transactionHashes - array - array of strings, where each string is a transaction hash | array | See below

Input example:

    {  
      'params':{  
         'blockCount':100,
         'firstBlockIndex':0,
         'addresses':[  
            '2AFUzhkRatH2kQ19RaUNiE33mMQ3ejvJrGDhdDo77zn3RJQquQG7QBidoe7AD4EgBbChteaVesg3xcLVdq9EoCHH4NV9mxp'
         ]
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getTransactionHashes'
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'items':[  
            {  
               'transactionHashes':[  
                   957dcbf54f327846ea0c7a16b2ae8c24ba3fa8305cc3bbc6424e85e7d358b44b
                   25bb751814dd39bf46c972bd760e7516e34200f5e5dd02fda696671e11201f78
               ],
               'blockHash':'8a6f1cb7ed7a9db4751d7b283a0482baff20567173dbfae136c9bceb188e51c4'
            }
         ]
      }
    }

## getTransactions

**getTransactions()** method returns an array of block and transaction hashes.
Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.

Input:

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
addresses | No | Array of strings, where each string is an address | array | 2A8CkYbbEqSSeGPZPmf..tcoyvETNt7MqSw
blockHash | Only one of these parameters (blockHash or firstBlockIndex) is allowed. | Hash of the starting block | string | f8f07ace392474bfbdc0fc30749a45f779a8aea10c489a103270f63ed88178ad
firstBlockIndex | Only one of these parameters (blockHash or firstBlockIndex) is allowed.    | Starting height | uint32 | 123123
blockCount | Yes | Number of blocks to return transaction hashes from | uint32 | 20
paymentId | No | Valid payment_id | string | somePaymentId

**Note:** if **paymentId** parameter is set, getTransactions() method returns transaction hashes of transactions that contain specified payment_id. (in the set block range)<br />
**Note:** if **addresses** parameter is set, getTransactions() method returns transaction hashes of transactions that contain transfer from at least one of specified addresses.<br />
**Note:** if both above mentioned parameters are set, getTransactions() method returns transaction hashes of transactions that contain both specified payment_id and transfer from at least one of specified addresses.

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
items | Array that contains:<br /> * block_hash - string - hash of the block which contains a transaction<br /> * transactions - array - contains<br /> &nbsp;&nbsp;* transactionHash - string - hash of the transaction<br /> &nbsp;&nbsp;* blockIndex - uint32 - number of the block that contains a transaction<br /> &nbsp;&nbsp;* timestamp - uint64 - timestamp of the transaction<br /> &nbsp;&nbsp;* isBase - boolean - shows if the transaction is a coinbase transaction or not<br /> &nbsp;&nbsp;* unlockTime - uint64 - height of the block when transaction is going to be available for spending<br /> &nbsp;&nbsp;* amount - int64 - amount of the transaction<br /> &nbsp;&nbsp;* fee - uint64- transaction fee<br /> &nbsp;&nbsp;* extra - string<br /> &nbsp;&nbsp;* paymentId - string - payment_id of the transaction (optional)<br /> &nbsp;&nbsp;* transfers - array - contains<br /> &nbsp;&nbsp;&nbsp;&nbsp;* address - string<br /> &nbsp;&nbsp;&nbsp;&nbsp;* amount - int64 | array | See below

Input example:

    {  
      'params':{  
         'blockCount':1000,
         'firstBlockIndex':1,
         'addresses':[  
            '22p4wUHAMndSscvtYErtqUaYrcUTvrZ9zhWwxc3JtkBHAnw4FJqenZyaePSApKWwJ5BjCJz1fKJoA6QHn5j6bVHg8A8dyhp',
            '261K6FuYL4vYvLFQx2ene92JNHip8YGyJGHCCNjPwoFE2RsRYwtzPC7aePSApKWwJ5BjCJz1fKJoA6QHn5j6bVHg8DRRpU1',
            '2AVwwZ6Ju6gGeztrtHjsj42xWLavrXPN1PrpnNKGXCMcLACj2WhGqYwaePSApKWwJ5BjCJz1fKJoA6QHn5j6bVHg8A4Z9K8'
         ],
         paymentId:'somePaymentId'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getTransactions'
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'items':[  
            {  
               'blockHash':'01bd06ca731914f27e143bbb902ce0bc05bff13d76faa027ea817e68f217488c',
               'transactions':[  
                  {  
                     'fee':-70368475742208,
                     'extra':'0127cea59bfadc49aa02ed4a225936671e55607b5241621abca2a5e14405906dbb',
                     'timestamp':1446029698,
                     'blockIndex':1,
                     'state':0,
                     'transactionHash':'06ec210a8359f253f8b2160a0d6040cf89f2a05a553aaa577b7f508ee5d831f9',
                     'amount':70368475742208,
                     'unlockTime':11,
                     'transfers':[  
                        {  
                           'amount':70368475742208,
                           'type':0,
                           'address':'22p4wUHAMndSscvtYErtqUaYrcUTvrZ9zhWwxc3JtkBHAnw4FJqenZyaePSApKWwJ5BjCJz1fKJoA6QHn5j6bVHg8A8dyhp'
                        }
                     ],
                     'paymentId':,
                     'isBase':True
                  }
               ]
            },
            {  
               'blockHash':'28aa7d32f4274f6387969d7671bd4db98fd871bf0dd510a1df5e2ef4b1d41a35',
               'transactions':[  
                  {  
                     'fee':-70368207307776,
                     'extra':'01a8e6e408282b2ddf343e20d5e9aab283723ba10ab7ab7b3131f6981b02a84431',
                     'timestamp':1446029698,
                     'blockIndex':2,
                     'state':0,
                     'transactionHash':'922d00d2e6eaed63f62d8e3b968cb08b6ea5c555fe0e6af948ab06efe6eb213a',
                     'amount':70368207307776,
                     'unlockTime':12,
                     'transfers':[  
                        {  
                           'amount':70368207307776,
                           'type':0,
                           'address':'22p4wUHAMndSscvtYErtqUaYrcUTvrZ9zhWwxc3JtkBHAnw4FJqenZyaePSApKWwJ5BjCJz1fKJoA6QHn5j6bVHg8A8dyhp'
                        }
                     ],
                     'paymentId':,
                     'isBase':True
                  }
               ]
            }
         ]
      }
    }


## getUnconfirmedTransactionHashes

**getUnconfirmedTransactionHashes()** method returns information about the current unconfirmed transaction pool or for a specified addresses.
Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
addresses | No | Array of strings, where each string is a valid address | array | See below

**Note:** if **addresses** parameter is set, getUnconfirmedTransactionHashes() method returns transactions that contain transfer from at least one of specified addresses.

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transactionHashes | Array of strings, where each element is a block hash | array | See below

Input example:

    {  
      'params':{  
         'addresses':[  
            '26hM1rZa9wWFHSUBbdrof3C5BZ37s1XiLcVnK3xMSrn1583SEBQ98MnTHvsVSkNFbFWgjhrhmdNzgJDy3JudNV9BFMs66ao',
            '27am7ubgS834uVkpMgnqyKicxEJTLNJeL3QtC2zaJuHMbPyBkHcRBnQTHvsVSkNFbFWgjhrhmdNzgJDy3JudNV9BFLppiKL',
            '21pbz9qMWKq6xvFAYe723V4adjEF4ZXNrcJHZ1JFB2geHVwDFuze8A4THvsVSkNFbFWgjhrhmdNzgJDy3JudNV9BFLL4WH8'
         ]
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getUnconfirmedTransactionHashes'
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'transactionHashes':[  
            ...,
            ...,
            ...
         ]
      }
    }


## getTransaction

**getTransaction()** method returns information about a particular transaction.
Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.

Input:

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
transactionHash | Yes | Hash of the requested transaction | string | example

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transaction | Contains:<br />* transactionHash - string - hash of the transaction<br />* blockIndex - uint32 - number of the block that contains a transaction (optional)<br />* timestamp - uint64 - timestamp of the transaction (optional)<br />* isBase - boolean - shows if the transaction is a coinbase transaction or not<br />* unlockTime - uint64 - height of the block when transaction is going to be available for spending<br />* amount - int64 - amount of the transaction<br />* fee - uint64- transaction fee<br />* extra - string - ?<br />* paymentId - string - payment_id of the transaction (optional)<br />* transfers - array - contains<br />&nbsp;&nbsp;* address - string<br />&nbsp;&nbsp;* amount - int64 | array | See below


Input example:

    {  
      'params':{  
         'transactionHash':'92423b0857d36bd172b3f2effbd47ea477bfe0618a50c29d475542c6d5d1b835'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'getTransaction'
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'transaction':{  
            'fee':1000000,
            'extra':'0130b4472974f2deb9fae7d8fd6602b26396379f3fa05cca2430e10e9e60179f42',
            'timestamp':0,
            'blockIndex':4294967295,
            'state':0,
            'transactionHash':'92423b0857d36bd172b3f2effbd47ea477bfe0618a50c29d475542c6d5d1b835',
            'amount':-1703701,
            'unlockTime':0,
            'transfers':[  
               {  
                  'amount':123456,
                  'type':0,
                  'address':'25AqTidmdu1awhLZPEUkumZEnM8Rt1fNsbpdRwEGNeLpDDfc1WW9RP6QsdENfxafTz4qE8vThbv413nXhs6WAzYeKBtgA98'
               },
               {  
                  'amount':234567,
                  'type':0,
                  'address':'278g3wNw5W48DeGbjwxkW3XauBip64uYKS9eFveUHBfdRAG3dYHPZvqXy5BWbfuKEtWZ86PJZdRacAgr1x3gtP5nLyGcVt8'
               },
               {  
                  'amount':345678,
                  'type':0,
                  'address':'2AtjUXGmhP6CmbRxCtBESR4MjSGiWCQUTPCdsDpw72Co2pwzZT7rjnaBNRCSFCEygjNo5oe8mHyXU4Eip8szu4ZnAFyPW1a'
               }
            ],
            'paymentId':,
            'isBase':False
         }
      }
    }

## sendTransaction

**send_transaction()** method allows you to send transaction to one or several addresses. Also, it allows you to use a payment_id for a transaction to a single address.

Input: 

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
addresses | No | Array of strings, where each string is an address to take the funds from | array | See below
transfers | Yes | Array that contains:<br />address - string<br />amount - int64 | array | "amount": 10000000000,<br />"address": "28aYVwSsGMxCWJGCN..CZSUamsrZv"
fee | Yes | Transaction fee. Minimal fee in Bytecoin network is .01 BCN. This parameter should be specified in minimal available BCN units. For example, if your fee is .01 BCN, you should pass it as 1000000   | uint64 | 1000000
unlockTime | No | Height of the block until which transaction is going to be locked for spending. | uint64 | 0
anonymity | Yes | Privacy level (a discrete number from 1 to infinity). Level 6 and higher is recommended. | uint64 | 6
extra | No | String of variable length. Can contain A-Z, 0-9 characters. | string | something123
payment_id | No | payment_id | string | somePaymentId
changeAddress | No | Valid and existing in this container address. | string | 28aYVwSsGMxCWJGCN..CZSUamsrZv

**Note:** if container contains only 1 address, **changeAddress** field can be left empty and the change is going to be sent to this address<br />
**Note:** if **addresses** field contains only 1 address, **changeAddress** can be left empty and the change is going to be sent to this address<br />
**Note:** in the rest of the cases, **changeAddress** field is mandatory and must contain an address.

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transactionHash | Hash of the sent transaction. | string | 93faedc8b8a80a084a02dfeffd163934746c2163f23a1b6022b32423ec9ae08f

Input Example:

    {  
      'params':{  
         'anonymity':0,
         'fee':1000000,
         'unlockTime':0,
         'paymentId':'somePaymentId',
         'addresses':[  
            '27eJo2S9eVo5N2G9zyjkqNBZPR6d2qvVD122vQMGAhcrjZjLu8nsMqk3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFX4qWNh',
            '24JtjYsLdSJKNNDCPGdMco5NbMBLqVWZ5ZiW5vzjXQUrLpMs1MRnfTQ3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFXHARwn',
            '21fYPCpaM3ochSSyLnhDAhgw1yV5WPb5c1BfyX5eidbMGyEPgnbSgJW3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFX8VQMv'
         ],
         'transfers':[  
            {  
               'amount':123456,
               'address':'27eJo2S9eVo5N2G9zyjkqNBZPR6d2qvVD122vQMGAhcrjZjLu8nsMqk3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFX4qWNh'
            },
            {  
               'amount':234567,
               'address':'278g3wNw5W48DeGbjwxkW3XauBip64uYKS9eFveUHBfdRAG3dYHPZvqXy5BWbfuKEtWZ86PJZdRacAgr1x3gtP5nLyGcVt8'
            },
            {  
               'amount':345678,
               'address':'2AtjUXGmhP6CmbRxCtBESR4MjSGiWCQUTPCdsDpw72Co2pwzZT7rjnaBNRCSFCEygjNo5oe8mHyXU4Eip8szu4ZnAFyPW1a'
            }
         ],
         'changeAddress':'27eJo2S9eVo5N2G9zyjkqNBZPR6d2qvVD122vQMGAhcrjZjLu8nsMqk3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFX4qWNh'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'sendTransaction'
    }

Return value example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'transactionHash':'93faedc8b8a80a084a02dfeffd163934746c2163f23a1b6022b32423ec9ae08f'
      }
    }


## createDelayedTransaction

**createDelayedTransaction()** method creates a delayed transaction. Such transactions are not sent into the network automatically and should be pushed using sendDelayedTransaction method

Input:

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
addresses | No | Array of strings, where each string is an address to take the funds from | array | See below
transfers | Yes | Array that contains:<br />address - string<br />amount - int64 | array | "amount": 10000000000,<br />"address": "28aYVwSsGMxCWJGCN..CZSUamsrZv"
fee | Yes | Transaction fee. Minimal fee in Bytecoin network is .01 BCN. This parameter should be specified in minimal available BCN units. For example, if your fee is .01 BCN, you should pass it as 1000000   | uint64 | 1000000
unlockTime | No | Height of the block until which transaction is going to be locked for spending. | uint64 | 0
anonymity | Yes | Privacy level (a discrete number from 1 to infinity). Level 6 and higher is recommended. | uint64 | 6
extra | No | String of variable length. Can contain A-Z, 0-9 characters. | string | something123
payment_id | No | payment_id | string | somePaymentId
changeAddress | No | Valid and existing in this container address. | string | 28aYVwSsGMxCWJGCN..CZSUamsrZv

**Note:** if container contains only 1 address, **changeAddress** field can be left empty and the change is going to be sent to this address<br />
**Note:** if **addresses** field contains only 1 address, **changeAddress** can be left empty and the change is going to be sent to this address<br />
**Note:** in the rest of the cases, **changeAddress** field is mandatory and must contain an address.<br />
**Note:** outputs that were used for this transactions will be locked until the transaction is sent or cancelled

Output: 

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transactionHash | Hash of the sent transaction. | string | 93faedc8b8a80a084a02dfeffd163934746c2163f23a1b6022b32423ec9ae08f

Input Example:

    {  
      'params':{  
         'anonymity':0,
         'fee':1000000,
         'unlockTime':0,
         'paymentId':'somePaymentId',
         'addresses':[  
            '27eJo2S9eVo5N2G9zyjkqNBZPR6d2qvVD122vQMGAhcrjZjLu8nsMqk3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFX4qWNh',
            '24JtjYsLdSJKNNDCPGdMco5NbMBLqVWZ5ZiW5vzjXQUrLpMs1MRnfTQ3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFXHARwn',
            '21fYPCpaM3ochSSyLnhDAhgw1yV5WPb5c1BfyX5eidbMGyEPgnbSgJW3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFX8VQMv'
         ],
         'transfers':[  
            {  
               'amount':123456,
               'address':'27eJo2S9eVo5N2G9zyjkqNBZPR6d2qvVD122vQMGAhcrjZjLu8nsMqk3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFX4qWNh'
            },
            {  
               'amount':234567,
               'address':'278g3wNw5W48DeGbjwxkW3XauBip64uYKS9eFveUHBfdRAG3dYHPZvqXy5BWbfuKEtWZ86PJZdRacAgr1x3gtP5nLyGcVt8'
            },
            {  
               'amount':345678,
               'address':'2AtjUXGmhP6CmbRxCtBESR4MjSGiWCQUTPCdsDpw72Co2pwzZT7rjnaBNRCSFCEygjNo5oe8mHyXU4Eip8szu4ZnAFyPW1a'
            }
         ],
         'changeAddress':'27eJo2S9eVo5N2G9zyjkqNBZPR6d2qvVD122vQMGAhcrjZjLu8nsMqk3c4KQ9iMJ4AV4fpBMccmjfJ4cu7uprKLNFX4qWNh'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'createDelayedTransaction'
    }

Return value example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
         'transactionHash':'93faedc8b8a80a084a02dfeffd163934746c2163f23a1b6022b32423ec9ae08f'
      }
    }


## getDelayedTransactionHashes

**getDelayedTransactionHashes()** method returns hashes of delayed transactions.

No input.

Output:

Argument | Description | Format | Example
-----------|-----------|-----------|-----------|
transactionHashes | Array of strings, where each string is a transaction hash | array | See below

Input example:

    {
        "jsonrpc": "2.0", 
        "id": "1", 
        "method": "getDelayedTransactionHashes"
    }

Output example:

    {  
      'jsonrpc':'2.0',
      'id':'test',
      'result':{  
               'transactionHashes':[  
                   957dcbf54f327846ea0c7a16b2ae8c24ba3fa8305cc3bbc6424e85e7d358b44b
                   25bb751814dd39bf46c972bd760e7516e34200f5e5dd02fda696671e11201f78
               ],
            }
         ]
      }
    }


## deleteDelayedTransaction

**deleteDelayedTransaction()** method deletes a specified delayed transaction.

Input:

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
transactionHash | Yes | Valid, existing delayed transaction | string | c671d1005eaaf7c51b1e23eeec1c899e43fa7a332cdc2bcf1e45b908e23d8837

Output:

In case of success returns an empty JSON object.

Input example:

    {  
      'params':{  
         'transactionHash':'c671d1005eaaf7c51b1e23eeec1c899e43fa7a332cdc2bcf1e45b908e23d8837'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'deleteDelayedTransaction'
    }

Output example:

    {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {}
    }


## sendDelayedTransaction

**sendDelayedTransaction()** method sends a specified delayed transaction.

Input:

Argument | Mandatory | Description | Format | Example
-----------|-----------|-----------|-----------|-----------|
transactionHash | Yes | Valid, existing delayed transaction | string | c671d1005eaaf7c51b1e23eeec1c899e43fa7a332cdc2bcf1e45b908e23d8837

Output:

In case of success returns an empty JSON object.

Input example:

    {  
      'params':{  
         'transactionHash':'c671d1005eaaf7c51b1e23eeec1c899e43fa7a332cdc2bcf1e45b908e23d8837'
      },
      'jsonrpc':'2.0',
      'id':'test',
      'method':'sendDelayedTransaction'
    }

Output example:

    {
        "id":"1",
        "jsonrpc":"2.0",
        "result": {}
    }


[Forknote_RPC_Wallet]: /documentation/payment-gateway/
[Configure_Forknote_RPC_Wallet]: /documentation/payment-gateway/#configure-forknote-rpc-wallet
