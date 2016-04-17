---
title: Simplewallet configuration and commands | Forknote
layout: documentation
body_class: developers
subnav_class: docs-documentation
sidebar_nav: sidebar-documentation
---

# Simplewallet configuration and commands

* TOC
{:toc}

##General options

      --help                                Produce help message
      --version                             Output version information
      --data-dir arg (=/Users/USER/.forknote)
                                            Specify data directory
      --config-file arg (=./configs/-.conf) Specify configuration file
      --command arg                         Specify command
      --generate-new-wallet arg (=/home/USER/forknote/my.wallet)
                                            Generate new wallet and save it to <arg>


##Wallet options

Option | Description | Config&nbsp;Example
-----------|-----------|-----------|
wallet-file | Use wallet &lt;arg&gt; | wallet-file = /home/USERNAME/<br/>forknote-linux/dashcoin.wallet
password | Wallet password | password = PASSWORD
daemon-address | Use daemon instance at &lt;host&gt;:&lt;port&gt; | daemon-address = 127.0.0.1:29081
daemon-host | Use daemon instance at host &lt;arg&gt; instead of localhost | daemon-host = 127.0.0.1
daemon-port | Use daemon instance at port &lt;arg&gt; instead of 8081 | daemon-port = 29081
set_log | Level of logging. Default is 1. | set_log = 4
P2P_STAT_TRUSTED_PUB_KEY | P2P stat trusted pub key | P2P_STAT_TRUSTED_PUB_KEY = 4d..eb
BYTECOIN_NETWORK | Used for network packages in order not to mix two different cryptocoin networks | BYTECOIN_NETWORK = 11100111-1100-0101-1011-001210110110
GENESIS_COINBASE_TX_HEX | The hex of the transaction in the genesis block | GENESIS_COINBASE_TX_HEX = 01..4a
CRYPTONOTE_PUBLIC_ADDRESS_<br/>BASE58_PREFIX | Prefix of the wallet address. Since the rules for address prefixes are nontrivial you may use a prefix generator | CRYPTONOTE_PUBLIC_ADDRESS_<br/>BASE58_PREFIX = 86
MONEY_SUPPLY | Total amount of coins to be emitted. | MONEY_SUPPLY = 18446744073709551615
EMISSION_SPEED_FACTOR | Constant defines emission curve slope. This parameter is required to calulate block reward. | EMISSION_SPEED_FACTOR = 18
DIFFICULTY_TARGET | Difficulty target is an ideal time period between blocks. Measured in seconds. | DIFFICULTY_TARGET = 120
CRYPTONOTE_BLOCK_GRANTED_<br/>FULL_REWARD_ZONE | The maximum size of a block not resulting into penelty. | CRYPTONOTE_BLOCK_GRANTED_<br/>FULL_REWARD_ZONE = 20000
CRYPTONOTE_BLOCK_GRANTED_<br/>FULL_REWARD_ZONE_V1 | The maximum size of a block not resulting into penelty. Used only by old (v1) coins | CRYPTONOTE_BLOCK_GRANTED_<br/>FULL_REWARD_ZONE_V1 = 10000
CRYPTONOTE_BLOCK_GRANTED_<br/>FULL_REWARD_ZONE_V2 | The maximum size of a block not resulting into penelty. Used only by old (v2) coins | CRYPTONOTE_BLOCK_GRANTED_<br/>FULL_REWARD_ZONE_V2 = 10000
CRYPTONOTE_DISPLAY<br/>_DECIMAL_POINT | 1 coin = 10^(this value) atomic units | CRYPTONOTE_DISPLAY<br/>_DECIMAL_POINT = 8
MINIMUM_FEE | Transactions with less than this fee wouldn't be accepted by daemons | MINIMUM_FEE = 1000000
DEFAULT_DUST_THRESHOLD | The amount bellow this value will be considered as dust | DEFAULT_DUST_THRESHOLD = 1000000
CRYPTONOTE_MINED_MONEY_<br/>UNLOCK_WINDOW | Number of blocks to unlock miner transactions | CRYPTONOTE_MINED_MONEY_<br/>UNLOCK_WINDOW = 10
MAX_BLOCK_SIZE_INITIAL | The size of the initial block. Used to correct error in v1 coins | MAX_BLOCK_SIZE_INITIAL = 20480
EXPECTED_NUMBER_<br/>OF_BLOCKS_PER_DAY | Expected number of blocks per day. Used to correct error in v1 coins | EXPECTED_NUMBER_<br/>OF_BLOCKS_PER_DAY = 720
UPGRADE_HEIGHT_V2 | Block hight to move to blocks with major version 2. Use '1' for new blockchains | UPGRADE_HEIGHT = 1
DIFFICULTY_CUT | Timestamps to cut after sorting | DIFFICULTY_CUT = 60
DIFFICULTY_LAG | Lag of calculating the difficulty in terms of blocks | DIFFICULTY_LAG = 15
CRYPTONOTE_NAME | Cryptonote name. Used for storage directory | CRYPTONOTE_NAME = dashcoin
CHECKPOINT | Checkpoints. Format: HEIGHT:HASH | CHECKPOINT = 10:70d..f8
GENESIS_BLOCK_REWARD | Amount of premined coins. In atomic units | GENESIS_BLOCK_REWARD = 1844674407370955161
wallet-rpc-bind-ip | Specify ip to bind rpc server | wallet-rpc-bind-ip = 127.0.0.1
wallet-rpc-bind-port | Starts wallet as rpc server for wallet operations, sets bind port for server | wallet-rpc-bind-port = 29082
MAX_TRANSACTION_SIZE_LIMIT | Maximum size of the transactions sent through simplewallet | MAX_TRANSACTION<br/>_SIZE_LIMIT = 20000
DEFAULT_FEE | Default fee of the transactions sent through simplewallet | DEFAULT_FEE = 1000000000
SYNC_FROM_ZERO | Sync from block 0. Use for premine wallet or brainwallet | SYNC_FROM_ZERO


##Example of a config file

You can use the same configuration file as the daemon

<pre class="terminal">$ cat ./notrealcoin.conf 

CRYPTONOTE_NAME=notrealcoin
seed-node=1.1.1.1:17100
seed-node=2.2.2.2:17100
seed-node=seed.notarealcoin.com:17100
GENESIS_COINBASE_TX_HEX=010a01ff0001ffffffffffff0f029b2e4c0271c0b42e7c53291a94d1c0cbff8883f8024f5142ee494ffbbd08807121013c086a48c15fb637a96991bc6d53caf77068b5ba6eeb3c82357228c49790584a
EMISSION_SPEED_FACTOR=18
DIFFICULTY_TARGET=120
CRYPTONOTE_DISPLAY_DECIMAL_POINT=12
MONEY_SUPPLY=18446744073709551615
GENESIS_BLOCK_REWARD=0
DEFAULT_DUST_THRESHOLD=1000000
MINIMUM_FEE=1000000
CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW=10
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE=100000
CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX=86
p2p-bind-port=29829
rpc-bind-port=29830
BYTECOIN_NETWORK=64954525-ff98-5ed4-0576-7c5a0b9c18cc
CRYPTONOTE_NAME=test
UPGRADE_HEIGHT_V2=1
CHECKPOINT=10000:70d2531151529ac00bf875281e15f51324934bc85e5733dcd92e1ccb1a665ff8
CHECKPOINT=20000:c181ec9223a91fef8658c7aa364c093c41c28d250870ca1ed829bf74f0abf038

wallet-file=/home/USERNAME/forknote-linux/notrealwallet.wallet
password=FAKE_PASSWORD
wallet-rpc-bind-port=17102
</pre>


##Wallet commands

Command | Description | Args 
-----------|-----------|-----------|
address | Show current wallet public address | - 
balance | Show current wallet balance | - 
bc_height | Show blockchain height | - 
help  | Print help on wallet commands | - 
incoming_transfers | Show incoming transfers | - 
list_transfers | Show all known transfers | - 
payments | Show payments with the corresponding payment_id's. You may indicate more than one payment_id. | &#91;string&#93;&nbsp;payment_id 
reset | Discard cache data and start synchronizing from scratch | - 
save | Save wallet synchronized data | - 
set_log | Change current log detailization level | &#91;uint&#93; log level (0 - 4)
start_mining | Start mining in daemon | - 
stop_mining | Stop mining in daemon | -
transfer | Transfer amount to address with mixin_count (number of transactions yours is indistinguishable from) | &#91;uint&#93; mixin_count <br/> &#91;string&#93; address <br/> &#91;double&#93; amount <br/> &#91;string&#93; -p payment_id <br/> &#91;double&#93; -f fee

