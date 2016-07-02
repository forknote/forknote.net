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

Option | Description
-----------|-----------|
wallet-file | Use wallet &lt;arg&gt;
password | Wallet password
daemon-address | Use daemon instance at &lt;host&gt;:&lt;port&gt;
daemon-host | Use daemon instance at host &lt;arg&gt; instead of localhost
daemon-port | Use daemon instance at port &lt;arg&gt; instead of 8081
set_log | Level of logging. Default is 1.
wallet-rpc-bind-port | Starts wallet as rpc server for wallet operations, sets bind port for server
MAX_TRANSACTION_SIZE_LIMIT | Maximum size of the transactions sent through simplewallet
DEFAULT_FEE | Default fee of the transactions sent through simplewallet
SYNC_FROM_ZERO | Sync from block 0. Use for premine wallet or brainwallet

### Blockchain options

See [Blockchain options][Blockchain_options]


##Example of a config file

You can use the same configuration file as the daemon

<pre class="terminal">$ cat >fakecoin.conf 

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

wallet-file=/home/USERNAME/forknote-linux/fake_wallet.wallet
password=FAKE_PASSWORD
wallet-rpc-bind-port=8082
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


[Blockchain_options]: /documentation/daemon/#blockchain-options