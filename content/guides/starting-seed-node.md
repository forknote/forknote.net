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

<pre class="terminal">$ wget https://github.com/forknote/forknote/releases/download/1.0.11/forknote-linux.tar.

--2015-10-10 03:34:36--  https://github.com/forknote/forknote/releases/download/1.0.11/forknote-linux.tar.gz
Resolving github.com (github.com)... 192.30.252.32

</pre>

Unarchive the downloaded file.

<pre class="terminal">$ tar -zxvf forknote-linux.tar.gz 

forknote-linux/
forknote-linux/configs/
forknote-linux/forknoted
forknote-linux/simplewallet
forknote-linux/walletd
...
</pre>


## Saving the configuration file

Log into the forknote directory

<pre class="terminal">$ cd forknote-linux</pre>

Write your configuration file

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

seed-node=45.32.238.88:13539

</pre>


## Starting in upstart

Log with `root` user and change the directory to `/etc/init/`.

<pre class="terminal">$ cd /etc/init
</pre>

Create the upstart config file.

<pre class="terminal">$ cat >forknote-fakecoin-daemon.conf 

description "fakecoin daemon"

start on runlevel [23]
stop on shutdown

exec sudo -u fork /home/fork/forknote-linux/forknoted --no-console --config-file /home/fork/forknote-linux/configs/fakecoin.conf

post-stop exec sleep 30

respawn
respawn limit 5 30

</pre>

Start the service.

<pre class="terminal">$ start forknote-fakecoin-daemon 
</pre>

You now have your seed node up and running. It will automatically restart if something goes wrong.


Stopping the service.

<pre class="terminal">$ stop forknote-fakecoin-daemon 
</pre>


[ditital-ocean]: https://www.digitalocean.com/?refcode=8ebba1ef9746
[vultr]: http://www.vultr.com/?ref=6832621