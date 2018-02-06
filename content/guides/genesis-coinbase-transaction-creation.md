---
title: Creating manually genesis coinbase transaction hex for Cryptonote coins | Forknote
layout: documentation
body_class: developers
subnav_class: docs-guides
sidebar_nav: sidebar-giudes
---

# Creating manually genesis coinbase transaction hex

* TOC
{:toc}


Forknote give you the ability to create your own genesis coinbase transaction hex if you need.

## For coins without premine

<pre class="terminal">$ ./forknoted --config-file configs/imaginary_blockchain.conf --print-genesis-tx

config path exist
Modify this line into your coin configuration file as is:
GENESIS_COINBASE_TX_HEX=010a01ff0001ffffffffffff0f029b2e4c0281c0b02e7c53291a94d1d0cbff8883f8024f5142ee494ffbbd0880712101fc680aba69fb5028ade093fb1186ca9de4e65a369ca13ae75fdeef9e952b9449

</pre>

## For coins with premine

<pre class="terminal">$ ./forknoted --config-file configs/imaginary_blockchain.conf --print-genesis-tx --genesis-block-reward-address FXhKiPxMdJ6LL1iqkEDWbk1BiiQ7SzHY1b3L9KqqPmP95e9toTXKvQSVGePtjfoDUhMPqSEKFhzymA84o6fGPhQiUYP92rT --genesis-block-reward-address FPMfUYtRHcZJdL2nLDH7zi2bZUMzgdMPm8kHibeV4qLh8pfsvZsBF6eiHH8T2QkdZm4viA2F9S4YvUk2PXodvxRPDYVvXyR

config path exist
outs: 922337203685477580
outs: 922337203685477580
Modify this line into your coin configuration file as is:
GENESIS_COINBASE_TX_HEX=010a01ff0002cc99b3e6cc99b3e60c024fe47e814d9f44c83184334fb3b5f9a4ab3ebb347050e3742729703086a5e130cc99b3e6cc99b3e60c021011cd9c37a669ea1e5a930cac793aa98431dfe77a9274385b4ed29e3e5e2ac021011afb48c42cbd0a72fc9d782580d6474cf68b5eaac224315447e9694809410930

</pre>
