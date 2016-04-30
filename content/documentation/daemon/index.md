---
title: Daemon configuration and commands| Forknote
layout: documentation
body_class: developers
subnav_class: docs-documentation
sidebar_nav: sidebar-documentation
---

# Daemon configuration and commands

* TOC
{:toc}

##Command line options

      --help                                Produce help message
      --version                             Output version information
      --os-version 
      --data-dir arg (=/Users/USER/.forknote)
                                            Specify data directory
      --config-file arg (=./configs/-.conf) Specify configuration file

      --allow-local-ip                      Allow local ip add to peer list

      --print-genesis-tx                    Prints genesis block transaction hex and exits
      --genesis-block-reward-address arg (=FPM...yR)   
                                            Addresses for premined coins


##Configuration options

Option | Description | &nbsp;&nbsp;Config&nbsp;Example&nbsp;&nbsp;
-----------|-----------|-----------|
log-file | A name of log file that you want to use for logging. | log-file = mylog.log
log-level | Level of logging. Default is 1. | log-level = 2
no-console | Disable daemon console commands | no-console
testnet | Used to deploy test nets. Checkpoints and hardcoded seeds are ignored, network id is --data-dir flag. The wallet must be launched with --testnet flag. | testnet
rpc-bind-ip | Specify ip to bind rpc server | rpc-bind-ip = 127.0.0.1
rpc-bind-port | Specify port to bind rpc server | rpc-bind-port = 29081
p2p-bind-ip | Interface for p2p network protocol | p2p-bind-ip = 0.0.0.0
p2p-bind-port | Port for p2p network protocol | p2p-bind-port = 29080
p2p-external-port | External port for p2p network protocol (if port forwarding used with NAT) | p2p-external-port = 443
add-peer | Manually add peer to local peerlist | add-peer = 127.0.0.1
add-priority-node | Specify list of peers to connect to and attempt to keep the connection open | add-priority-node = 127.0.0.1
add-exclusive-node | Specify list of peers to connect to only. If this option is given the options add-priority-node and seed-node are ignored | add-exclusive-node = 127.0.0.1
seed-node | Connect to a node to retrieve peer addresses, and disconnect | seed-node = 127.0.0.1
hide-my-port | Do not announce yourself as peerlist candidate | hide-my-port
extra-messages-file | Specify file for extra messages to include into coinbase transactions | extra-messages-file = message.txt
start-mining | Specify wallet address to mining for | start-mining = FPM...yR
mining-threads | Specify mining threads count | mining-threads = 1
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
UPGRADE_HEIGHT_V2 | Block hight to move to blocks with major version 2. Use '1' for new blockchains | UPGRADE_HEIGHT_V2 = 1
UPGRADE_HEIGHT_V3 | Block hight to move to blocks with major version 3. Use '2' for new blockchains | UPGRADE_HEIGHT_V3 = 2
DIFFICULTY_CUT | Timestamps to cut after sorting | DIFFICULTY_CUT = 60
DIFFICULTY_LAG | Lag of calculating the difficulty in terms of blocks | DIFFICULTY_LAG = 15
CRYPTONOTE_NAME | Cryptonote name. Used for storage directory | CRYPTONOTE_NAME = dashcoin
CHECKPOINT | Checkpoints. Format: HEIGHT:HASH | CHECKPOINT = 10:70d..f8
GENESIS_BLOCK_REWARD | Amount of premined coins. In atomic units | GENESIS_BLOCK_REWARD = 1844674407370955161


##Example of a config file

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

</pre>

##Daemon commands

Command | Description | Args
-----------|-----------|-----------|
help | print forknoted commands | -
start_mining | Start mining in several threads to a given wallet address | &#91;string&#93; wallet_address <br/> &#91;uint&#93; threads
stop_mining | Stop mining | - 
show_hr | Show current mining hashrate | - 
hide_hr | Stop showing current mining hashrate | -
exit | Exit forknoted | -
print_bc | Print blockchain info in a given blocks range | &#91;uint&#93; begin_height <br/> &#91;uint&#93; end_height (optional)
print_block | Print block | &#91;string&#93; block_hash or &#91;uint&#93; block_height
print_cn | Print connections | - 
print_pl | Print peer list | - 
print_pool | Print transaction pool (long format) | - 
print_pool_sh | Print transaction pool (short format) | - 
set_log | Change current log detailization level | &#91;uint&#93; log level (0 - 4) 
print_tx | Print transaction | &#91;string&#93; transaction_hash 
