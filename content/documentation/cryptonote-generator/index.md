---
title: Cryptonote generator overview | Forknote
layout: documentation
body_class: developers
subnav_class: docs-documentation
sidebar_nav: sidebar-documentation
---

# Cryptonote generator overview

* TOC
{:toc}

The Cryptonote generator is a collection of scripts for creating and maintaining a Bytecoin clone. The code produced by it have the same properties as its Forknote equivalent.


## How it works

Instead of merging the changes from the seed into the clone, the Cryptonote genetor applies changes to the latest version of the seed.

![Cryptonote generator diagram](/images/documentation/script-generated.png)


## Core parameters

Parameter | Description
SEED_NODES | Array of seed nodes
CHECKPOINTS | Array of checkpoints. See the example for the format
GENESIS_COINBASE_TX_HEX | The hex of the transaction in the genesis block
CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX | Prefix of the wallet address. Since the rules for address prefixes are nontrivial you may use a prefix generator
MONEY_SUPPLY | Total amount of atomic units to be emitted.
EMISSION_SPEED_FACTOR | Constant defines emission curve slope. This parameter is required to calulate block reward.
DIFFICULTY_TARGET | Difficulty target is an ideal time period between blocks. Measured in seconds.
GENESIS_BLOCK_REWARD | Premine amount. Measured in atomic units.
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE | The maximum size of a block not resulting into penelty.
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V1 | The maximum size of a block not resulting into penelty. Used only by old (v1) blockchains
CRYPTONOTE_DISPLAY_DECIMAL_POINT | 1 coin = 10^(this value) atomic units
MINIMUM_FEE | Transactions with less than this fee wouldn't be accepted by daemons
DEFAULT_DUST_THRESHOLD | The amount bellow this value will be considered as dust
CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW | Number of blocks to unlock miner transactions 
MAX_BLOCK_SIZE_INITIAL | The size of the initial block. Used to correct error in v1 blockchains
EXPECTED_NUMBER_OF_BLOCKS_PER_DAY | Expected number of blocks per day. Used to correct error in v1 blockchains
UPGRADE_HEIGHT | Block hight to move to blocks with major version 2. Use '1' for new blockchains
DIFFICULTY_CUT | Timestamps to cut after sorting
DIFFICULTY_LAG | Lag of calculating the difficulty in terms of blocks
MAX_TRANSACTION_SIZE_LIMIT | Maximum size of the transactions sent through simplewallet
DEFAULT_FEE | Default fee of the transactions sent through simplewallet 


## Example

    {
        "base_coin": {
            "name": "bytecoin",
            "git": "https://github.com/amjuarez/bytecoin.git"
        },
        "core": {
            "SEED_NODES": ["108.61.188.93:7610", "128.199.146.243:29080"],
            "EMISSION_SPEED_FACTOR": 18,
            "DIFFICULTY_TARGET": 120,
            "CRYPTONOTE_DISPLAY_DECIMAL_POINT": 12,
            "MONEY_SUPPLY": "18446744073709551615",
            "GENESIS_BLOCK_REWARD": 0,
            "DEFAULT_DUST_THRESHOLD": 1000000,
            "MINIMUM_FEE": 1000000,
            "CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW": 10,
            "CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE": 60000,
            "CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX": 86,
            "P2P_DEFAULT_PORT": 28134,
            "RPC_DEFAULT_PORT": 28135,
            "BYTECOIN_NETWORK": "3354bb33-28e2-66d3-7d92-9267413bede6",
            "CRYPTONOTE_NAME": "newcoin",
            "CHECKPOINTS": ["28000:70d2531151529ac00bf875281e15f51324934bc85e5733dcd92e1ccb1a665ff8", "40000:c181ec9223a91fef8658c7aa364c093c41c28d250870ca1ed829bf74f0abf038"],
            "GENESIS_COINBASE_TX_HEX":"010a01ff0001ffffffffffff0f029b2e4c0271c0b42e7c53291a94d1c0cbff8883f8024f5142ee494ffbbd08807121013c086a48c15fb637a96991bc6d53caf77068b5ba6eeb3c82357228c49790584a"
        },
        "extensions": [
            "core/bytecoin.json",
            "print-genesis-tx.json"
        ]
    }
