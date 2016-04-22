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

<pre class="terminal">$ cat >imaginary_blockchain.conf 

EMISSION_SPEED_FACTOR=18
DIFFICULTY_TARGET=120
CRYPTONOTE_DISPLAY_DECIMAL_POINT=12
MONEY_SUPPLY=18446744073709551615
GENESIS_BLOCK_REWARD=1844674407370955300
SYNC_FROM_ZERO=1
DEFAULT_DUST_THRESHOLD=1000000
MINIMUM_FEE=1000000
CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW=10
CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE=100000
CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX=86
p2p-bind-port=6966
rpc-bind-port=6967
BYTECOIN_NETWORK=96a24a34-4585-25af-884d-6039b3ab7fd1
CRYPTONOTE_NAME=imaginary_blockchain
GENESIS_COINBASE_TX_HEX=010a01ff0001a4b4e6cc99b3e6cc190285f558a81f548c1a7be29836e8f512cc33738d07326eeb22a6f4c5b5e1a3aa8e210187216740de551aedfd1b6d8ee7ce73e88a2cc22297d44b46dd4ee5ef6d864e5b
UPGRADE_HEIGHT_V2=1
seed-node=127.0.0.1:6966
</pre>

Check is the configuration file working properly by:
<pre class="terminal">$ ./forknoted --config-file configs/imaginary_blockchain.conf
</pre>

**Notice: Be careful when you test different configurations with the same CRYPTONOTE_NAME. You may need to delete the blockchain folder to avoid conflict.**<br>
Example OSX/Linux: ~/.imaginary_blockchain/ <br>
Example Windows: C:\Users\%user_name%\AppData\Roaming\imaginary_blockchain\


## Adding seed nodes

After you have all set in the configuration file, you can start the seed nodes.

We recommend you use [Digital Ocean][ditital-ocean] or [Vultr][vultr]. The 5$ or 10$ option should be enough for most of the cases.
You can use our [guide about seed node creation][seed-node-guide] to get started fast.

After you know the IP of the VPS, you have to add `seed-node` to your configuration file.

<pre class="terminal">seed-node=1.1.1.1:40741
</pre>

**Notice: Don't forget to delete the line seed-node=127.0.0.1:xxxxx**


[supported-parameters]: /documentation/daemon/#command-line-options-and-settings-options
[create]: /create/
[seed-node-guide]: /guides/starting-seed-node/
[ditital-ocean]: https://www.digitalocean.com/?refcode=8ebba1ef9746
[vultr]: http://www.vultr.com/?ref=6832621
