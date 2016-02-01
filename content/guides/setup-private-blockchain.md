---
title: Setup Cryptonote blockchain guide | Forknote
layout: documentation
body_class: developers
subnav_class: docs-guides
sidebar_nav: sidebar-giudes
---

# Setup new Cryptonote blockchain

* TOC
{:toc}


Let's walk through the process of creating a configuration file for a new private blockchain.


## Creating configuration file

Create the configuration file of your coin by using our [configuration form][create].

[![Create cryptonote coin form](/images/documentation/create-form.png)][create]

Save the resulted configuration in the `configs` folder of Forknote.

###Example on Linux/Mac:

<pre class="terminal">$ cat >imaginary_blockchain.conf 

EMISSION_SPEED_FACTOR=18
DIFFICULTY_TARGET=120
CRYPTONOTE_DISPLAY_DECIMAL_POINT=12
MONEY_SUPPLY=18446744073709551615
GENESIS_BLOCK_REWARD=0
DEFAULT_DUST_THRESHOLD=1000000
MINIMUM_FEE=1000000
CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW=10
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE=60000
CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX=86
p2p-bind-port=13539
rpc-bind-port=13540
BYTECOIN_NETWORK=e3df4e17-934c-9768-d63d-37df3503e80b
CRYPTONOTE_NAME=imaginary_blockchain
GENESIS_COINBASE_TX_HEX=010a01ff0001ffffffffffff0f029b2e4c0281c0b02e7c53291a94d1d0cbff8883f8024f5142ee494ffbbd0880712101f2b92f2b27d8af7ac7e12f8e7972326d8fc8103d571b4d8e9d61bdfa178ea92a
UPGRADE_HEIGHT=1
</pre>


If you want to learn more you can checkout the [supported parameters][supported-parameters] of the configuration file.


## Creating simplewallet addresses

*This step is only required if your coin has premine*

<pre class="terminal">$ ./simplewallet --config-file configs/imaginary_blockchain.conf --generate-new-wallet MY.wallet --password PASSWORD

config path exist
forknote wallet v1.0.8.1.614()
Sync from timestamp: 1444336575
Error: wallet failed to connect to daemon (http://localhost:13540).
Generated new wallet: FXhKiPxMdJ6LL1iqkEDWbk1BiiQ7SzHY1b3L9KqqPmP95e9toTXKvQSVGePtjfoDUhMPqSEKFhzymA84o6fGPhQiUYP92rT
view key: 18367126f3948849c1754d14e53702c046751ed7a108290f16bbfd5b3a71180e

</pre>

**Caution: Don't forget to backup the wallets**


### Using simplewallet for wallets, containing premined coins:

You must use the `SYNC_FROM_ZERO` option of simplewallet to see the premined coins.

<pre class="terminal">$ ./simplewallet --config-file configs/imaginary_blockchain.conf --SYNC_FROM_ZERO
</pre>


## Adding seed nodes

After you have all set in the configuration file, you can start the seed nodes.

We recommend you use [Digital Ocean][ditital-ocean] or [Vultr][vultr]. The 5$ or 10$ option should be enough for most of the cases.
You can use our [guide about seed node creation][seed-node-guide] to get started fast.

After you know the IP of the VPS, you have to add `seed-node` to your configuration file.

<pre class="terminal">seed-node=1.1.1.1:40741
</pre>

Alternatively, you can add it into the [configuration form][create] and save the config file again.

[![Create cryptonote coin form - seed](/images/documentation/create-form-seed.png)][create]


[supported-parameters]: /documentation/daemon/#command-line-options-and-settings-options
[create]: /create/
[seed-node-guide]: /guides/starting-seed-node/
[ditital-ocean]: https://www.digitalocean.com/?refcode=8ebba1ef9746
[vultr]: http://www.vultr.com/?ref=6832621