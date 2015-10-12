---
title: Daemon HTTP RPC API | Forknote
layout: documentation
body_class: developers
subnav_class: docs-documentation
sidebar_nav: sidebar-documentation
---

# Daemon HTTP RPC API

URL | Description | Format | Arg 1 | Arg 2 | Return value
-----------|-----------|-----------|-----------|-----------|-----------|
/getheight | Returns current chain height | JSON | - | - | &#91;int&#93; height
/getknownblockids | Returns list of known block ids | JSON | - | - | &#91;list&#93;&nbsp;main&nbsp;chain&nbsp;block&nbsp;ids <br /> &#91;list&#93;&nbsp;alternative&nbsp;chains&nbsp;block&nbsp;ids <br /> &#91;list&#93; invalid block ids
/start_mine | Starts mining threads | JSON | &#91;string&#93; wallet address | &#91;int&#93; number of threads | &#91;string&#93;&nbsp;status 
/stop_mine | Stops mining threads | JSON | - | - | [string&#93; status 
/gettransactions | Returns transactions as serialized blobs | JSON | &#91;list&#93; tx ids | - | &#91;list&#93;&nbsp;transactions&nbsp;as&nbsp;hex <br /> &#91;list&#93;&nbsp;missing&nbsp;tx&nbsp;ids <br /> &#91;string&#93;&nbsp;status 
/sendrawtransactions | Send transaction to the network | JSON | &#91;string&#93; serialized transaction in hex form | -  | &#91;string&#93; status 
/getblocks.bin | Returns blocks in binary form | BIN | [list] block ids | - | &#91;list&#93; blocks <br /> &#91;int&#93; start height  <br /> &#91;int&#93; current height <br /> &#91;string&#93; status 
/get_o_indexes.bin |Get global output indicies | BIN | &#91;hash&#93; transaction id | - | &#91;vector&#93; output indicies  <br /> &#91;string&#93; status
/getrandom_outs.bin | Get random output indicies <br /> for a given amount <br />  (purpose: for ring signatures) | BIN | &#91;list&#93; amounts | &#91;int&#93; count | &#91;vector&#93; <br /> { &#91;int&#93; amount; &#91;list&#93; outs } <br />  output entries 
