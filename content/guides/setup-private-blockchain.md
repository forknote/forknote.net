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



## Creating simplewallet addresses

*This step is only required for blockchains has premined coins*

<pre class="terminal">$ ./simplewallet --config-file configs/dashcoin.conf --generate-new-wallet MY.wallet --password PASSWORD

config path exist
forknote wallet v1.0.9.1.662()
Sync from timestamp: 1455950318
Error: wallet failed to connect to daemon (http://localhost:29081).
Generated new wallet: D9CTMkRfsJ594cuvX2pGXNWMFK5ARwxPN1x7bFC5wY5XTZxf12LjWUK5QkMVeSkD6gT532FepdaohRYkt99e9gdF6hyrUgx
view key: f45a0505d89e4c3bbb91c3481861c12b2b0c6e43b9de23fa108a48a0db116901
**********************************************************************
Your wallet has been generated.
Use "help" command to see the list of available commands.
Always use "exit" command when closing simplewallet to save
current session's state. Otherwise, you will possibly need to synchronize 
your wallet again. Your wallet key is NOT under risk anyway.
**********************************************************************
</pre>

At this line is your wallet address:
```
Generated new wallet: D9CTMkRfsJ594cuvX2pGXNWMFK5ARwxPN1x7bFC5wY5XTZxf12LjWUK5QkMVeSkD6gT532FepdaohRYkt99e9gdF6hyrUgx
```

**Caution: Don't forget to backup the wallets**<br />
**Notice: You can also use walletd or another wallet to create an address**


## Creating configuration file

Create the configuration file of your coin by using our [configuration form][create].

Save the resulted configuration in the `configs` folder of Forknote.

###Example on Linux/Mac:

<pre class="terminal">$ cat >configs/fakecoin.conf 

BYTECOIN_NETWORK=10101010-1010-1010-1010-101010101010
CRYPTONOTE_DISPLAY_DECIMAL_POINT=12
CRYPTONOTE_NAME=fakecoin
CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX=86
GENESIS_COINBASE_TX_HEX=010a01ff0001ffffffffffff0f029b2e4c0271c0b42e7c53291a94d1c0cbff8883f8024f5142ee494ffbbd08807121013c086a48c15fb637a96991bc6d53caf77068b5ba6eeb3c82357228c49790584a
P2P_STAT_TRUSTED_PUB_KEY=

UPGRADE_HEIGHT_V2=1
UPGRADE_HEIGHT_V3=2

p2p-bind-port=8080
rpc-bind-port=8081

seed-node=127.0.0.1:8080
</pre>

Check is the configuration file working properly by:
<pre class="terminal">$ ./forknoted --config-file configs/fakecoin.conf
</pre>

**Notice: Be careful when you test different configurations with the same CRYPTONOTE_NAME. You may need to delete the blockchain folder to avoid conflict.**<br>
Example OSX/Linux: ~/.fakecoin/ <br>
Example Windows: C:\Users\%user_name%\AppData\Roaming\fakecoin\


## Adding seed nodes

After you have all set in the configuration file, you can start the seed nodes.

We recommend you use [Digital Ocean][ditital-ocean] or [Vultr][vultr]. The 5$ or 10$ option should be enough for most of the cases.
You can use our [guide about seed node creation][seed-node-guide] to get started fast.

After you know the IP of the VPS, you have to add `seed-node` to your configuration file.

<pre class="terminal">seed-node=1.1.1.1:8080
</pre>

**Notice: Don't forget to delete the line seed-node=127.0.0.1:xxxxx**


[supported-parameters]: /documentation/daemon/#command-line-options-and-settings-options
[create]: /create/
[seed-node-guide]: /guides/starting-seed-node/
[ditital-ocean]: https://www.digitalocean.com/?refcode=8ebba1ef9746
[vultr]: http://www.vultr.com/?ref=6832621
