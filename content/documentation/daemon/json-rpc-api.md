---
title: Daemon JSON RPC API | Forknote
layout: documentation
body_class: developers
subnav_class: docs-documentation
sidebar_nav: sidebar-documentation
---

# Daemon JSON RPC API

* TOC
{:toc}

To start Daemon JSON RPC API server you should specify a port on which server binds (additionally to standard daemon's arguments). You can choose any free port. To do that execute the following command from the command line:

<pre class="terminal">
 forknoted --config-file &lt;path_to_config_file&gt; --rpc-bind-port=29081 
</pre>

Atlernatively, you can edit *rpc-bind-port* in your configuration file
    
    rpc-bind-port=29081


If you want Daemon to be accessed from other computer not only yours you should also use a --rpc-bind-ip 0.0.0.0 command. To do that execute the following command from the command line:

<pre class="terminal">
 forknoted --config-file &lt;path_to_config_file&gt; --rpc-bind-ip=0.0.0.0 --rpc-bind-port=29081 
</pre>

Atlernatively, you can edit your configuration file
    
    rpc-bind-port=29081
    rpc-bind-ip=0.0.0.0

Having done that you're ready to operate with the daemon through the following API URLs (e.g., your IP address is 126.0.1.100):

     http://126.0.1.100:29081/json_rpc
     http://localhost:29081/json_rpc


## getblockcount

Returns current chain height. 

URL:

     /json_rpc

Input arguments:

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "description": "Schema for transfer method in Bytecoin wallet",
        "type": "object", 
        
        "properties" : {
            "jsonrpc" : {
                "type" : "string"
            }, 
            "method" : {
                "type" : "string"
            }
        },
        "required" : ["jsonrpc", "method"]
     }

Return value schema: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "type": "object",
     
        "properties" : {
            "result" : {
                "type" : "object",
                "properties" : {
                    "count" : {
                        "type" : "integer",
                        "minimum": 0,
                        "description": ""
                    },
                    "status" : {
                        "type" : "string"
                    }
                },
            "required": ["count", "status"]
            }
        },
        "required": ["result"]
     }

### Example (getblockcount)

Input:

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "getblockcount",
        "params": {}
     }

Output: 

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "count": 123456,
            "status": "OK"
        }
     }


##getblockhash

Returns block hash by its height

URL:

     /json_rpc

Input arguments:

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "description": "Schema for transfer method in Bytecoin wallet",
        "type": "object", 
        
        "properties" : {
            "jsonrpc" : {
                "type" : "string"
            }, 
            "method" : {
                "type" : "string"
            },
            "height" : {
                "type" : "integer"
            }
        },
        "required" : ["jsonrpc", "method", "height"]
     }
 
Return value schema: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "type": "object",
     
        "properties" : {
            "result" : {
                "type" : "string",
                "description": ""
            }
        },
        "required": ["result"]
     }

###Example (getblockhash)

Input:

     {
        "jsonrpc": "2.0",
        "id": "test",
        "method": "on_getblockhash",
        "params": [123456]
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": "a7428..."
     }


##getblocktemplate

Returns blocktemplate with an empty “hole” for nonce.

URL:

     /json_rpc

Input arguments:

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "description": "Schema for transfer method in Bytecoin wallet",
        "type": "object", 
        
        "properties" : {
            "jsonrpc" : {
                "type" : "string"
            }, 
            "method" : {
                "type" : "string"
            },
            "reserve_size" : {
                "type" : "integer"
            },
            "wallet_address" : {
                "type" : "string"
            }
        },
        "required" : ["jsonrpc", "method", "reserve_size", "wallet_address"] 
     }
 
Return value schema 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "type": "object", 
     
        "properties" : {
            "result" : {
                "difficulty" : {
                    "type" : "integer"
                },
                "height" : {
                    "type" :"integer"
                },
                "reserved_offset" : {
                    "type" : "integer"
                },
                "blocktemplate_blob" : {
                    "type" : "string"
                },
                "status" : {
                    "type" : "string"
                }
            },
        "required": ["difficulty", "height", "reserved_offset", "blocktemplate_blob", "status"]
        }
        "required": ["result"]
     }

###Example (getblocktemplate)

Input:

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "getblocktemplate",
        "params": {
            "reserve_size": 200,
            "wallet_address": "28j5g2Hbe1..."
        }
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "blocktemplate_blob": "0100de...",
            "difficulty": 65563,
            "height": 123456,
            "reserved_offset": 395,
            "status": ""
        }
     }


##submitblock

Submits mined block. 

URL:

     /json_rpc

Input arguments: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "description": "Schema for transfer method in Bytecoin wallet",
        "type": "object", 
        
        "properties" : {
            "jsonrpc" : {
                "type" : "string"
            }, 
            "method" : {
                "type" : "string"
            },
            "block" : {
                "type" : "string"
            }
        },
        "required" : ["jsonrpc", "method", "block"]
     } 

Return value schema: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "type": "object",
     
        "properties" : {
            "result" : {
                "status" : {
                    "type" : "string",
                    "description": ""
                },
                "required": ["status"]
            }
        },
        "required": ["result"]
     }

### Example (submitblock)

Input: 

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "submitblock",
        "params": ["0100b...."]
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "status" : "OK"
        }
     }


##getlastblockheader

Returns last block header.

URL:

     /json_rpc

Input arguments: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "description": "Schema for transfer method in Bytecoin wallet",
        "type": "object", 
        
        "properties" : {
            "jsonrpc" : {
                "type" : "string"
            }, 
            "method" : {
                "type" : "string"
            }
        },
        "required" : ["jsonrpc", "method"]
     }
 
Return value schema: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "type": "object", 
        
        "properties" : {
            "result" : {
                "type" : "object",
                "properties" : {
                    "block_header : {
                        "type" : "object",
                        "properties" : {
                            "major_version" :    {
                                "type" : "integer",
                                "description" : ""
                            },
                            "minor_version" : {
                                "type" : "integer",
                                "description" : ""
                                },
                            "timestamp" : {
                                "type" : "integer",
                                "description" : "UNIX timestamp"
                            },
                            "prev_hash" : {
                                "type" : "string",
                                "description" : "previous block's hash"
                            },
                            "nonce" : {
                                "type" : "integer",
                                "description" : ""
                            },
                            "orphan_status" : {
                                "type" : "boolean",
                                "description" : "True if the block was marked as orphaned"
                            },
                            "height" : {
                                "type" : "integer",
                                "description" : ""
                            },
                            "depth" : {
                                "type" : "integer",
                                "description" : "last_block_height - this_block_height"
                            },
                            "hash" : {
                                "type" : "string",
                                "description" : ""
                            },
                            "difficulty" : {
                                "type" : "integer",
                                "description" : ""
                            },
                            "reward" : {
                                "type" : "integer",
                                "description" : "Reward for the block in atomic units"
                            }
                        },
                        "required": [
                            "major_version", 
                            "minor_version", 
                            "timestamp", 
                            "prev_hash", 
                            "nonce",
                            "orphan_status",
                            "height",
                            "depth",
                            "hash",
                            "difficulty",
                            "reward"
                        ]
                    },
                    "status" : {
                        "type" : "string"
                    }
                },
                "required": ["block_header", "status"]
            }
        },
        "required": ["result"]
     }

### Example (getlastblockheader)

Input:

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "getlastblockheader"
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "block_header": {
                "depth": 1,
                "difficulty": 65198,
                "hash": "9a8be83...",
                "height": 123456,
                "major_version": 1,
                "minor_version": 0,
                "nonce": 2358499061,
                "orphan_status": false,
                "prev_hash": "dde56b7e...",
                "reward": 44090506423186,
                "timestamp": 1356589561
            },
            "status": "OK"
        }
     }


##getblockheaderbyhash

Returns last block header by given hash.

URL:

     /json_rpc

Input arguments: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "description": "Schema for transfer method in Bytecoin wallet",
        "type": "object", 
        
        "properties" : {
            "jsonrpc" : {
                "type" : "string"
            }, 
            "method" : {
                "type" : "string"
            },
            "hash" : {
                "type" : "string"
            }
        },
        "required" : ["jsonrpc", "method", "hash"]
     }
 
Return value schema:

*See [getlastblockheader](#getlastblockheader) above*

### Example (getblockheaderbyhash)

Input:

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "getblockheaderbyhash",
        "params": {
            "hash" : "9a8be8..."
        }
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "block_header": {
                "depth": 1,
                "difficulty": 65198,
                "hash": "9a8be83...",
                "height": 123456,
                "major_version": 1,
                "minor_version": 0,
                "nonce": 2358499061,
                "orphan_status": false,
                "prev_hash": "dde56b7e...",
                "reward": 44090506423186,
                "timestamp": 1356589561
            },
            "status": "OK"
        }
     }


##getblockheaderbyheight

Returns block header by given block height.

URL:

     /json_rpc

Input arguments: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "description": "Schema for transfer method in Bytecoin wallet",
        "type": "object", 
        
        "properties" : {
            "jsonrpc" : {
                "type" : "string"
            }, 
            "method" : {
                "type" : "string"
            },
            "height" : {
                "type" : "integer"
            }
        },
        "required" : ["jsonrpc", "method", "height"]
     }
 
Return value schema: 

*See [getlastblockheader](#getlastblockheader) above*

### Example (getblockheaderbyheight)

Input:

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "getblockheaderbyheight",
        "params": {
            "height" : 123456
        }
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "block_header": {
                "depth": 1,
                "difficulty": 65198,
                "hash": "9a8be83...",
                "height": 123456,
                "major_version": 1,
                "minor_version": 0,
                "nonce": 2358499061,
                "orphan_status": false,
                "prev_hash": "dde56b7e...",
                "reward": 44090506423186,
                "timestamp": 1356589561
                },
            "status": "OK"
        }
     }


##getcurrencyId

Returns unique currency identifier.

URL:

     /json_rpc

Input arguments:

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "description": "Schema for transfer method in Bytecoin wallet",
        "type": "object", 
        
        "properties" : {
            "jsonrpc" : {
                "type" : "string"
            }, 
            "method" : {
                "type" : "string"
            }
        },
        "required" : ["jsonrpc", "method"]
     }
 
Return value schema: 

     {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "BCN JSON RPC API",
        "type": "object",
     
        "properties" : {
            "currency_id_blob" : {
                "type" : "string"
            }
        }
     }

### Example (getcurrencyId)

Input:

     {
        "jsonrpc": "2.0",
        "id" : "test",
        "method": "getcurrencyid"
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "currency_id_blob" : "a7..."
        }
     }


##f_get_blockchain_settings

Returns the settings of the used configuration file

URL:

     /json_rpc

### Example (f_get_blockchain_settings)

Input:

     {
        "jsonrpc": "2.0",
        "id": "test",
        "method": "f_get_blockchain_settings"
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "base_coin": {
                "git": "https://github.com/amjuarez/bytecoin.git",
                "name": "bytecoin"
            },
            "core": {
                "BYTECOIN_NETWORK": "12112111-1110-4101-1311-001212110110",
                "CHECKPOINTS": [
                    "28000:70d2531151529ac00bf875281e15f51324934bc85e5733dcd92e1ccb1a665ff8",
                    "40000:c181ec9223a91fef8658c7aa364c093c41c28d250870ca1ed829bf74f0abf038"
                ],
                "CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE": 20000,
                "CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V1": 10000,
                "CRYPTONOTE_DISPLAY_DECIMAL_POINT": 12,
                "CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW": 10,
                "CRYPTONOTE_NAME": "dashcoin",
                "CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX": 72,
                "DEFAULT_DUST_THRESHOLD": 1000000,
                "DIFFICULTY_CUT": 60,
                "DIFFICULTY_LAG": 15,
                "DIFFICULTY_TARGET": 120,
                "EMISSION_SPEED_FACTOR": 18,
                "EXPECTED_NUMBER_OF_BLOCKS_PER_DAY": 720,
                "GENESIS_BLOCK_REWARD": 0,
                "GENESIS_COINBASE_TX_HEX": "010a01ff0001ffffffffffff0f029b2e4c0271c0b42e7c53291a94d1c0cbff8883f8024f5142ee494ffbbd08807121013c086a48c15fb637a96991bc6d53caf77068b5ba6eeb3c82357228c49790584a",
                "MAX_BLOCK_SIZE_INITIAL": 25600,
                "MINIMUM_FEE": 1000000,
                "MONEY_SUPPLY": "18446744073709551615",
                "P2P_DEFAULT_PORT": 7610,
                "RPC_DEFAULT_PORT": 7611,
                "SEED_NODES": [
                    "108.61.188.93:7610",
                    "128.199.146.243:29080"
                ],
                "UPGRADE_HEIGHT": 91452
            },
            "extensions": [
                "core/bytecoin.json",
                "print-genesis-tx.json",
                "simplewallet-default-fee.json",
                "max-transaction-size-limit.json",
                "genesis-block-reward.json"
            ],
            "status": "OK"
        }
     }


##f_blocks_list_json

Returns list of shortly described blocks.

URL:

     /json_rpc

### Example (f_blocks_list_json)

Input:

     {
        "jsonrpc": "2.0",
        "id": "test",
        "method": "f_blocks_list_json",
        "params": {
            "height": 10
        }
     }

Output:

    {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "blocks": [
                {
                    "cumul_size": 350,
                    "hash": "73c87db65839d0697627ef0a58fbe4d20340c74503df0c22aba5298e0814a16d",
                    "height": 10,
                    "timestamp": 1404556851,
                    "tx_count": 1
                },
                ...
                {
                    "cumul_size": 120,
                    "hash": "2eb6307a9b1be29348db19fdd0a1dad483983cf25241ca27f56d333dbb913d85",
                    "height": 0,
                    "timestamp": 0,
                    "tx_count": 1
                }
            ],
            "status": "OK"
        }
    }


##f_block_json

Returns detailed description of a block.

URL:

     /json_rpc

### Example (f_block_json)

Input:

     {
        "jsonrpc": "2.0",
        "id": "test",
        "method": "f_block_json",
        "params": {
            "hash": "74e21b7b7869465dd0bc0929a92df667d0fc88979999fe07ffa24ab925fad17d"
        }
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "block": {
                "alreadyGeneratedCoins": -4907142100217515000,
                "alreadyGeneratedTransactions": 672169,
                "baseReward": 18719332960321,
                "blockSize": 1515,
                "depth": 308976312,
                "difficulty": 308978448,
                "hash": "74e21b7b7869465dd0bc0929a92df667d0fc88979999fe07ffa24ab925fad17d",
                "height": 347655,
                "major_version": 2,
                "minor_version": 0,
                "nonce": 2147485048,
                "orphan_status": false,
                "penalty": 0,
                "prev_hash": "d1d2e3a67decae0cf7c6559cb5c50e908db572aa04f092c5f4db1693781702c6",
                "reward": 18720332960321,
                "sizeMedian": 386,
                "timestamp": 1446725921,
                "totalFeeAmount": 1000000000,
                "transactions": [
                    {
                        "amount_out": 18720332960321,
                        "blockSize": 37383401493432,
                        "fee": 0,
                        "hash": "eba9c70143bf39a211a2ab2e0635d928455299da45f21cf8da31461ebc467a6a"
                    },
                    {
                        "amount_out": 1999000464873,
                        "blockSize": 7672522688954774000,
                        "fee": 1000000000,
                        "hash": "b3aacbdc9cdb3dbd80731621d3dbbcaf9d6bdc7b731933c5cc92b5ff12777852"
                    }
                ],
                "transactionsCumulativeSize": 1119
            },
            "status": "OK"
        }
     }


##f_transaction_json

Returns detailed description of a transaction.

URL:

     /json_rpc

### Example (f_transaction_json)

Input:

     {
        "jsonrpc": "2.0",
        "id": "test",
        "method": "f_transaction_json",
        "params": {
            "hash": "17246c6ee2e8c05f93dd29ee499f38e8ce4023ea693a3a9e39fb41f2877bbd3d"
        }
     }

Output:

     {
        "id": "test",
        "jsonrpc": "2.0",
        "result": {
            "block": {
                "cumul_size": 8751,
                "hash": "533380e35d0dcec920ed58d92eb6af81771e2f4e414fca54f6105f5208650730",
                "height": 347985,
                "timestamp": 1446765470,
                "tx_count": 5
            },
            "status": "OK",
            "tx": {
                "": "288a8873fe8cbe233b51fd1d2c252f8a74e8eee3dae61d35b9b434645c27f704a502357be566a75ef168032d676d2e0936d50c6f38ea5317ea7a82dd2ce69f03",
                "extra": "01d58d5fd664de79feb3f53ebf9a6a4fa0a5d7987a4c905840d29ef9f13fe380da",
                "unlock_time": 0,
                "version": 1,
                "vin": [
                    {
                        "type": "02",
                        "value": {
                            "amount": 200000000000,
                            "k_image": "1980a3e2d130c8548b92c63e16c6fedf79819755232eda22939c353c3b66046c",
                            "key_offsets": [
                                33019,
                                22585,
                                63469,
                                65530
                            ]
                        }
                    },
                    ...
                    {
                        "type": "02",
                        "value": {
                            "amount": 8000000000000,
                            "k_image": "9831d04dc056d8ef5d562ba68ccaa276653594bc32ea687584bfc143c2089b84",
                            "key_offsets": [
                                46597,
                                1208,
                                4399,
                                42365
                            ]
                        }
                    }
                ],
                "vout": [
                    {
                        "amount": 10000000,
                        "target": {
                            "data": {
                                "key": "de25ddd2a718fa274689a6a5c1d996b67c4b41ad30660a44a3a0fb5968d92547"
                            },
                            "type": "02"
                        }
                    },
                    ...
                    {
                        "amount": 5000000000000,
                        "target": {
                            "data": {
                                "key": "ba9bfb77a79b7b3a6a61c6fbaa441443e38d1a7f44279c78652f84121be3b4b9"
                            },
                            "type": "02"
                        }
                    }
                ]
            },
            "txDetails": {
                "amount_out": 8199010000000,
                "fee": 1000000000,
                "hash": "17246c6ee2e8c05f93dd29ee499f38e8ce4023ea693a3a9e39fb41f2877bbd3d",
                "mixin": 4,
                "paymentId": "",
                "receiveTime": 140271204841312,
                "size": 1227
            }
        }
     }

