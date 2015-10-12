---
title: Troutbleshooting | Forknote
layout: documentation
body_class: developers
subnav_class: docs-guides
sidebar_nav: sidebar-giudes
---

# Troubleshooting

* TOC
{:toc}

A list of problems you may encounter on the way. 

##An existing connection was forcibly closed by the remote host

###Symptom

Nobody can connect to the seed node. `forknoted` on the seed node prints the following `WARNING`

<pre class="terminal">
2015-Sep-22 22:51:12.627019 WARNING [node_server] [127.0.0.1:55741 INC] Exception in 
connectionHandler: TcpConnection::read, WSAGetOverlappedResult failed, result=10054, 
An existing connection was forcibly closed by the remote host.
</pre>

###Solution

* Add the P2P port in "Inbound Rules" in the Windows Firewall on the seed node
* If you are behind NAT added `--p2p-external-port <PORT>` param to forknoted.


##Coinbase transaction doesn't use full amount of block reward

###Symptom

`forknoted` cannot start and prints the following `ERROR`

<pre class="terminal">
20:41:36.303639 ERROR Coinbase transaction doesn't use full amount of block reward: spent 70.368744177663, block reward is 1844674.407370955160
20:41:36.303736 INFO Block &lt;5668876f735d91e7a4b7230dedddfeead0004e83a913eb1d8782101c5f8fc13a&gt; has invalid miner transaction
20:41:36.303830 ERROR Failed to add genesis block to blockchain
20:41:36.303898 ERROR Failed to initialize blockchain storage
20:41:36.303960 ERROR Failed to initialize core
</pre>

This error occurs when the loaded blockchain has different parameters than the configuration file.

###Solution

Delete the blockchain folder.

On Windows delete this folder:

<pre class="terminal">C:\Users\%user_name%\AppData\Roaming\%yourcoin%\</pre>

On Linux/OSX:

<pre class="terminal">$ rm -rf ~/.YOURCOIN/</pre>
