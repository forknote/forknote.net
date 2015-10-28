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
        "params": {
            "height": 123456
        }
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
