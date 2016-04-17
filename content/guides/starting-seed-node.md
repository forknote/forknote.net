---
title: Getting Started | Forknote
layout: documentation
body_class: developers
subnav_class: docs-guides
sidebar_nav: sidebar-giudes
---

# Starting seed node

* TOC
{:toc}

This guide will walk you through the process of starting a Forknote seed node on a **Ubuntu 14.04** VPS.

## Getting a VPS

Run forknoted on a VPS is the cheapest way to get your network started.<br />
You can get a VPS at [Digital Ocean][ditital-ocean] or [Vultr][vultr]. The 5$ option is what most coins need.

[![Vultr recommended VPS](/images/documentation/vps-vultr-recommended.png)][vultr]


## Adding nodes to config file

Once you have your VPS, you can see its IP.

![Vultr IP VPS](/images/documentation/vps-vultr-ip.png)

Add its IP to the seed nodes.

![Create cryptonote coin form - seed](/images/documentation/create-form-seed.png)


## Installing Forknote

Once you connect to the VPS, create and log into user `fork`.

<pre class="terminal">$ useradd -m fork
$ su fork
$ cd ~
</pre>

Now you can download Forknote.

<pre class="terminal">$ wget https://github.com/forknote/forknote/releases/download/1.0.8.1/forknote-linux.tar.

--2015-10-10 03:34:36--  https://github.com/forknote/forknote/releases/download/1.0.8.1/forknote-linux.tar.gz
Resolving github.com (github.com)... 192.30.252.32

</pre>

Unarchive the downloaded file.

<pre class="terminal">$ tar -zxvf forknote-linux.tar.gz 

forknote-linux/
forknote-linux/configs/
forknote-linux/forknoted
forknote-linux/simplewallet
forknote-linux/walletd
forknote-linux/configs/-.conf
forknote-linux/configs/bytecoin.conf
</pre>


## Saving the configuration file

Log into the forknote directory

<pre class="terminal">$ cd forknote-linux</pre>

Write your configuration file

<pre class="terminal">$ cat >configs/testcoin.conf 

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
seed-node=45.32.238.88:13539

</pre>


## Starting in upstart

Log with `root` user and change the directory to `/etc/init/`.

<pre class="terminal">$ cd /etc/init
</pre>

Create the upstart config file.

<pre class="terminal">$ cat >forknote-testcoin-daemon.conf 

description "testcoin daemon"

start on runlevel [23]
stop on shutdown

exec sudo -u fork /home/fork/forknote-linux/forknoted --no-console --config-file /home/fork/forknote-linux/configs/testcoin.conf

post-stop exec sleep 30

respawn
respawn limit 5 30

</pre>

Start the service.

<pre class="terminal">$ start forknote-testcoin-daemon 
</pre>

You now have your seed node up and running. It will automatically restart if something goes wrong.

[ditital-ocean]: https://www.digitalocean.com/?refcode=8ebba1ef9746
[vultr]: http://www.vultr.com/?ref=6832621