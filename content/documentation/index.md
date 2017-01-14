---
title: Documentation | Forknote
layout: documentation
body_class: developers
subnav_class: docs-documentation
sidebar_nav: sidebar-documentation
---

# Forknote command line client overview

Forknote works through 3 separate binary files operated through command line:

* **forknoted** – daemon to synchronize the block chain and mine cryptonote tokens.

* **simplewallet** – wallet to receive and send funds.

* **walletd** – RPC wallet for services.


## Install Forknote

1. Unzip the archive to one separate folder

2. Create or download the desired configuration: [Forknote configurations][github_forknote_configs]



## Launch Forknote

1. Open forknoted. For downloadable Linux archive use:
    <pre class="terminal">
     ./forknoted --config-file &lt;path_to_config_file&gt;
    </pre>

2. Wait until forknoted is synchronized. You will be notified with several green "SYNCHRONIZED OK" messages.

3. Open simplewallet. For downloadable Linux archive use:
    <pre class="terminal">
     ./simplewallet --config-file &lt;path_to_config_file&gt;
    </pre>

## Daemon: synchronization & mining

*Main article: [Daemon configuration and commands][daemon_commands]*

After forknoted is launched you will have to wait until it is synchronized with the network. You will be notified with several green "SYNCHRONIZED OK" messages. Here are the most important daemon commands:


Command | Description
-----------|-----------|
start_mining &lt;wallet_address&gt; &#91;threads=1&#93; | Start mining in several threads to a given wallet address
stop_mining | Stop mining
show_hr | Show current mining hashrate
hide_hr | Stop showing current mining hashrate
help | Show all daemon commands
exit | Exit forknoted


## Simplewallet: send and receive payments

*Main article: [Simplewallet configuration and commands][simplewallet_commands]*

Simplewallet can only be used after the daemon is launched and synchronized. Simlewallet automatically synchronizes with forknoted. Here are the most important wallet commands:


Command | Description
-----------|-----------|
address | Show your wallet address
balance | Show current wallet balance
transfer &lt;mixin_count&gt; &lt;address&gt; &lt;amount&gt; | Send money to &lt;address&gt; with a mixing degree of &lt;mixin_count&gt;
start_mining &lt;threads&gt; | Start mining in daemon with several threads to the current wallet address
stop_mining | Stop mining in daemon
help | Show all wallet commands
exit | Exit simplewallet


## Walletd:

*Main article: [RPC wallet introduction][rpc_wallet_index]*

The RPC wallet is the way for services to send, recieve and track transactions.



[daemon_commands]: /documentation/daemon/
[simplewallet_commands]: /documentation/simplewallet/
[rpc_wallet_index]: /documentation/rpc-wallet/json-rpc-api/
[github_forknote_configs]: https://github.com/forknote/configs
