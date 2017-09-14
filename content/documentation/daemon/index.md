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


##Command line options and settings options

Option | Description
-----------|-----------|
log-file | A name of log file that you want to use for logging.
log-level | Level of logging. Default is 1.
no-console | Disable daemon console commands
testnet | Used to deploy test nets. Checkpoints and hardcoded seeds are ignored, network id is --data-dir flag. The wallet must be launched with --testnet flag.
rpc-bind-ip | Specify ip to bind rpc server
rpc-bind-port | Specify port to bind rpc server
p2p-bind-ip | Interface for p2p network protocol
p2p-bind-port | Port for p2p network protocol
p2p-external-port | External port for p2p network protocol (if port forwarding used with NAT)
add-peer | Manually add peer to local peerlist
add-priority-node | Specify list of peers to connect to and attempt to keep the connection open
add-exclusive-node | Specify list of peers to connect to only. If this option is given the options add-priority-node and seed-node are ignored
seed-node | Connect to a node to retrieve peer addresses, and disconnect
hide-my-port | Do not announce yourself as peerlist candidate
extra-messages-file | Specify file for extra messages to include into coinbase transactions
start-mining | Specify wallet address to mining for
mining-threads | Specify mining threads count
enable-cors | Adds header 'Access-Control-Allow-Origin' to the daemon's RPC responses
enable-blockchain-indexes | Enable blockchain indexes

##Blockchain options

Option | Description
-----------|-----------|
BUGGED_ZAWY_DIFFICULTY_BLOCK_INDEX | used only by coins adopted bugged ZAWY_DIFFICULTY_BLOCK_INDEX
BYTECOIN_NETWORK | Used for network packages in order not to mix two different cryptocoin networks
CHECKPOINT | Checkpoints. Format: HEIGHT:HASH
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE | The maximum size of a block not resulting into penelty.
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V1 | The maximum size of a block not resulting into penelty. Used by (v1) blockchains
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 | The maximum size of a block not resulting into penelty. Used by (v2) blockchains
CRYPTONOTE_COIN_VERSION | Use '1' for Cryptonote coin clones (the new version)
CRYPTONOTE_DISPLAY_DECIMAL_POINT | 1 coin = 10^(this value) atomic units
CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW | Number of blocks to unlock miner transactions
CRYPTONOTE_NAME | Cryptonote name. Used for storage directory
CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX | Prefix of the wallet address. Since the rules for address prefixes are nontrivial you may use a prefix generator
DEFAULT_DUST_THRESHOLD | The amount bellow this value will be considered as dust
DIFFICULTY_CUT | Timestamps to cut after sorting
DIFFICULTY_CUT_V1 | Timestamps to cut after sorting. Used by (v1) blockchains
DIFFICULTY_CUT_V2 | Timestamps to cut after sorting. Used by (v2) blockchains
DIFFICULTY_LAG | Lag of calculating the difficulty in terms of blocks
DIFFICULTY_LAG_V1 | Lag of calculating the difficulty in terms of blocks. Used by (v1) blockchains
DIFFICULTY_LAG_V2 | Lag of calculating the difficulty in terms of blocks. Used by (v2) blockchains
DIFFICULTY_TARGET | Difficulty target is an ideal time period between blocks. Measured in seconds.
DIFFICULTY_WINDOW | Window length for calculation the difficulty
DIFFICULTY_WINDOW_V1 | Window length for calculation the difficulty. Used by (v1) blockchains
DIFFICULTY_WINDOW_V2 | Window length for calculation the difficulty. Used by (v2) blockchains
EMISSION_SPEED_FACTOR | Constant defines emission curve slope. This parameter is required to calulate block reward.
EXPECTED_NUMBER_OF_BLOCKS_PER_DAY | Expected number of blocks per day. Used to correct errors
GENESIS_BLOCK_REWARD | Amount of premined coins. In atomic units
GENESIS_COINBASE_TX_HEX | The hex of the transaction in the genesis block
KILL_HEIGHT | End blockchain at height
MANDATORY_MIXIN_BLOCK_VERSION | Enforce minimum mixin MIN_MIXIN on blockchain level, after block with major version bigger than MANDATORY_MIXIN_BLOCK_VERSION
MANDATORY_TRANSACTION | Only blocks with more than 1 transactions are valid (exluding the base transaction)
MAX_BLOCK_SIZE_INITIAL | The size of the initial block. Used to correct error in v1 coins
MIN_MIXIN | minimum mixin amount. Not enforced by default on blockchain level
MINIMUM_FEE | Transactions with less than this fee wouldn't be accepted by daemons
MIXIN_START_HEIGHT | use to define the maximum height of a blockchain
MONEY_SUPPLY | Total amount of coins to be emitted.
P2P_STAT_TRUSTED_PUB_KEY | P2P stat trusted pub key
TAIL_EMISSION_REWARD | Block reward will never drop below this value.
UPGRADE_HEIGHT_V2 | Block hight to move to blocks with major version 2. Use '1' for new blockchains
UPGRADE_HEIGHT_V3 | Block hight to move to blocks with major version 3. Use '2' for new blockchains
ZAWY_DIFFICULTY_BLOCK_INDEX | Activates Zawy difficulty after certain block height
ZAWY_DIFFICULTY_DIFFICULTY_BLOCK_VERSION | Activates Zawy difficulty after block major version
ZAWY_DIFFICULTY_V2 | '1' if the coin uses Zawy difficulty. Active if the block major version is >=2

##Example of a config file

<pre class="terminal">$ cat ./fakecoin.conf

BYTECOIN_NETWORK=10101010-1010-1010-1010-101010101010
CRYPTONOTE_DISPLAY_DECIMAL_POINT=12
CRYPTONOTE_NAME=fakecoin
CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX=72
GENESIS_COINBASE_TX_HEX=010a01ff0001ffffffffffff0f029b2e4c0271c0b42e7c53291a94d1c0cbff8883f8024f5142ee494ffbbd08807121013c086a48c15fb637a96991bc6d53caf77068b5ba6eeb3c82357228c49790584a
P2P_STAT_TRUSTED_PUB_KEY=

UPGRADE_HEIGHT_V2=1
UPGRADE_HEIGHT_V3=2

p2p-bind-port=8080
rpc-bind-port=8081

seed-node=127.0.0.1:8080

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
