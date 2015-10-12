---
title: Create Cryptonote coin guide | Forknote
layout: documentation
body_class: developers
subnav_class: docs-guides
sidebar_nav: sidebar-giudes
---

# Create coin

* TOC
{:toc}


Let's walk through the process of creating a configuration file for your coin.


## Creating config file

Create the configuration file of your coin by using our [configuration form][create].

[![Create cryptonote coin form](/images/documentation/create-form.png)][create]

Save the resulted configuration in the `configs` folder of Forknote.

###Example on Linux/Mac:

<pre class="terminal">$ cat >testcoin.conf 

EMISSION_SPEED_FACTOR=18
DIFFICULTY_TARGET=120
CRYPTONOTE_DISPLAY_DECIMAL_POINT=12
MONEY_SUPPLY=18446744073709551615
PREMINED_PERCENT=0
DEFAULT_DUST_THRESHOLD=1000000
MINIMUM_FEE=1000000
CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW=10
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE=60000
CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX=86
p2p-bind-port=13539
rpc-bind-port=13540
BYTECOIN_NETWORK=e3df4e17-934c-9768-d63d-37df3503e80b
CRYPTONOTE_NAME=testcoin
UPGRADE_HEIGHT=1
</pre>


If you want to learn more you can checkout the [supported parameters][supported-parameters] of the configuration file.


## Creating simplewallet addresses

*This step is only required if your coin has premine*

<pre class="terminal">$ ./simplewallet --config-file configs/testcoin.conf --generate-new-wallet MY.wallet --password PASSWORD

config path exist
forknote wallet v1.0.8.1.614()
Sync from timestamp: 1444336575
Error: wallet failed to connect to daemon (http://localhost:13540).
Generated new wallet: FXhKiPxMdJ6LL1iqkEDWbk1BiiQ7SzHY1b3L9KqqPmP95e9toTXKvQSVGePtjfoDUhMPqSEKFhzymA84o6fGPhQiUYP92rT
view key: 18367126f3948849c1754d14e53702c046751ed7a108290f16bbfd5b3a71180e

</pre>

**Caution: Don't forget to backup the wallets**


## Genesis coinbase transaction creation

### For coins without premine

<pre class="terminal">$ ./forknoted --config-file configs/testcoin.conf --print-genesis-tx

config path exist
Modify this line into your coin configuration file as is: 
GENESIS_COINBASE_TX_HEX=010a01ff0001ffffffffffff0f029b2e4c0281c0b02e7c53291a94d1d0cbff8883f8024f5142ee494ffbbd0880712101fc680aba69fb5028ade093fb1186ca9de4e65a369ca13ae75fdeef9e952b9449

</pre>

###For coins with premine

<pre class="terminal">$ ./forknoted --config-file configs/testcoin.conf --print-genesis-tx \
 --genesis-block-reward-address FXhKiPxMdJ6LL1iqkEDWbk1BiiQ7SzHY1b3L9KqqPmP95e9toTXKvQSVGePtjfoDUhMPqSEKFhzymA84o6fGPhQiUYP92rT \
 --genesis-block-reward-address FPMfUYtRHcZJdL2nLDH7zi2bZUMzgdMPm8kHibeV4qLh8pfsvZsBF6eiHH8T2QkdZm4viA2F9S4YvUk2PXodvxRPDYVvXyR

config path exist
outs: 922337203685477580
outs: 922337203685477580
Modify this line into your coin configuration file as is: 
GENESIS_COINBASE_TX_HEX=010a01ff0002cc99b3e6cc99b3e60c024fe47e814d9f44c83184334fb3b5f9a4ab3ebb347050e3742729703086a5e130cc99b3e6cc99b3e60c021011cd9c37a669ea1e5a930cac793aa98431dfe77a9274385b4ed29e3e5e2ac021011afb48c42cbd0a72fc9d782580d6474cf68b5eaac224315447e9694809410930

</pre>

You have to add `GENESIS_COINBASE_TX_HEX` to your configuration file.

Alternatively, you can add it into the [configuration form][create] and save the config file again.

[![Create cryptonote coin form - genesis](/images/documentation/create-form-genesis.png)][create]

### Using simplewallet for wallets, containing premined coins:

You must use the `SYNC_FROM_ZERO` option of simplewallet to see the premined coins.

<pre class="terminal">$ ./simplewallet --config-file configs/testcoin.conf --SYNC_FROM_ZERO
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