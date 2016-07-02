---
kind: article
title: "Forknote 1.0.10.0.1 Release"
created_at: 2016-04-22
author_name: pmitchev
--- 

Forknote 1.0.10.0.1 was released.

Since Bytecoin hardforks at this version, because of the new block size, all existing Forknote blockchains (Dashcoin, Magnatoj, Ethanolium, ...) hardforked or will hardfork as well.
We urge everyone to update since old wallets won't be able to support new block sizes.

Changes:

 * Core changed to Bytecoin 1.0.10 (more info (https://bytecoin.org/news/bytecoin-1.0.10-new-block-size-rpc-wallet-fusion-transactions/))
 * --config-file option of forknoted and simplewallet is now mandatory


Configuration variables changes:

 * UPGRADE_HEIGHT changed to UPGRADE_HEIGHT_V2
 * CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE changed to CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2
 * New parameters added: CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE, UPGRADE_HEIGHT_V3

You can download this release from here:
https://github.com/forknote/forknote/releases/tag/1.0.10.0.1
