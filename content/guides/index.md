---
title: Getting Started | Forknote
layout: documentation
body_class: developers
subnav_class: docs-guides
sidebar_nav: sidebar-giudes
---

# Getting Started

* TOC
{:toc}

Let's walk through core Forknote concepts as we tackle a simple use case.

## Overview

Forknote uses configuration files to describe the properties of a Cryptonote blockchain. To get started you must [download][download] the latest version of Forknote.

## Connecting the daemon to a blockchain

To connect to the daemon to existing blockchain, just start `forknoted` with the corresponding configuration file.

<pre class="terminal">
$ ./forknoted --config-file configs/imaginary_blockchain.conf
</pre>

New blockchains are created by creating new configuration files. Configuration files are created with our [blockchain creation form][create].
You can find more about the available configuration options in our [documentation][documentation].

### Examples

To connect the daemon to the Dashcoin, start `forknoted` with its corresponding configuration file:

<pre class="terminal">
$ ./forknoted --config-file configs/dashcoin.conf
</pre>

To connect to the Bytecoin blockchain, start `forknoted` with its corresponding configuration file:

<pre class="terminal">
$ ./forknoted --config-file configs/bytecoin.conf
</pre>


## Starting simplewallet

Simplewallet uses the same configuration file as the daemon.

To start simplewallet:

<pre class="terminal">
$ ./simplewallet --config-file configs/imaginary_blockchain.conf
</pre>


### Examples

Starting `simplewallet` for the Dashcoin blockchain:

<pre class="terminal">
$ ./simplewallet --config-file configs/dashcoin.conf
</pre>

Starting `simplewallet` for the Bytecoin blockchain:

<pre class="terminal">
$ ./simplewallet --config-file configs/bytecoin.conf
</pre>


## Mining with miner

`miner` needs a running and synced daemon.

To start mining:

<pre class="terminal">
$ ./miner --daemon-address 127.0.0.1:[DAEMON_RPC_PORT]  --address [WALLET_ADDRESS]
</pre>


### Examples

Starting `miner` for the Dashcoin blockchain:

<pre class="terminal">
$ ./miner --daemon-address 127.0.0.1:29081  --address D6WLtrV1SBWV8HWQzQv8uuYuGy3uwZ8ah5iT5HovSqhTKMauquoTsKP8RBJzVqVesX87poYWQgkGWB4
</pre>


[bytecoin]: https://bytecoin.org/
[create]: /create/
[download]: /download/
[documentation]: /documentation/daemon/#configuration-options
