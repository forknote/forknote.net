---
kind: article
title: "Forknote 2.1.1 Release"
created_at: 2017-09-13
author_name: pmitchev
---

Forknote 2.1.1 was released.


**Changes:**

 * Core changed to Bytecoin 2.1.1


**Configuration variables changes:**

 * _MIN_MIXIN_ - minimum mixin amount. Not enforced by default on blockchain level
 * _MIXIN_START_HEIGHT_ - use to define the maximum height of a blockchain
 * _MANDATORY_MIXIN_BLOCK_VERSION_ - Enforce minimum mixin _MIN_MIXIN_ on blockchain level, after block with major version bigger than _MANDATORY_MIXIN_BLOCK_VERSION_
 * _BUGGED_ZAWY_DIFFICULTY_BLOCK_INDEX_ - used only by coins adopted bugged _ZAWY_DIFFICULTY_BLOCK_INDEX_

You can download this release from here:
[https://github.com/forknote/forknote/releases/tag/2.1.1](https://github.com/forknote/forknote/releases/tag/2.1.1)


**Replay attack protection for Forknote blockchains**

To protect your transactions from replay attacks, use in your config _MIN_MIXIN_ greater than 0 and _MIXIN_START_HEIGHT_ equal or greater than the fork's height.

Example for Dashcoin and Dashcoin Minergate:
https://github.com/forknote/configs/blob/master/dashcoin.conf
https://github.com/forknote/configs/blob/master/dashcoin.minergate.conf

Example for Quazarcoin Forknote and Quazarcoin Minergate:
https://github.com/forknote/configs/blob/master/quazarcoin.conf
https://github.com/forknote/configs/blob/master/quazarcoin.minergate.conf
