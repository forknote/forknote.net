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

Forknote uses configuration files to describe the properties of a Cryptonote network. To get started you must [download][download] the latest version of Forknote. 

## Starting the daemon for preconfigured networks

Forknote comes preconfigured with 2 networks - Dashcoin and [Bytecoin][bytecoin].

### Connecting to Dashcoin

To connect to Dashcoin open up a command prompt and enter the
following command (without the `$`):

<pre class="terminal">
$ ./forknoted

config path exist
12:34:56.789012 INFO forknote v1.0.8.608()
</pre>

By default, Forknote will load the Dashcoin configuration file (`configs/-.conf`), if no configuration file is passed as option.

### Connecting to Bytecoin

To connect to Dashcoin open up a command prompt and enter the
following command (without the `$`):

<pre class="terminal">
$ ./forknoted --config-file configs/bytecoin.conf

config path exist
12:34:56.789012 INFO forknote v1.0.8.608()
</pre>

## Starting the daemon for custom networks

To connect to custom networks, you must save the configuraton file in the `configs` subfolder of Forknote.

Next, let's start the daemon itself:

<pre class="terminal">
$ ./forknoted --config-file configs/CUSTOM_NETWORK.conf

config path exist
12:34:56.789012 INFO forknote v1.0.8.608()
</pre>

Please note you have to change `CUSTOM_NETWORK` with appropriate file name.

## Starting simplewallet

Simplewallet uses the same configuration file as the daemon.

To start simplewallet:

<pre class="terminal">
$ ./simplewallet --config-file configs/CUSTOM_NETWORK.conf

config path exist
forknote wallet v1.0.8.608()
Nor 'generate-new-wallet' neither 'wallet-file' argument was specified.
What do you want to do?
[O]pen existing wallet, [G]enerate new wallet file or [E]xit.
</pre>

Press `g` to create new wallet and type your wallet's name and password.

A good practice for naming your wallet is to add `NETWORK.` prefix to your name.<br />
For example, for Dashcoin wallet use the `dashcoin.` prefix - `dashcoin.example_wallet`

Don't forget to backup your wallet.


[download]: /download/
[bytecoin]: https://bytecoin.org/