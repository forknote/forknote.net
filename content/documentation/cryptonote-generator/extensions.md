---
title: Cryptonote generator extensions | Forknote
layout: documentation
body_class: developers
subnav_class: docs-documentation
sidebar_nav: sidebar-documentation
---

# Cryptonote generator extensions

* TOC
{:toc}

Extensions are the way to add functionality to the Forknote. Your extensions must be located in the *extensions* folder.

*Notice: If you make big changes in the way your coin functions, it may no longer be compatible with Forknote*


## Meta data

Key | Description
[file][files_anchor] | Filename of the extension. Use relative name
description | Short description of the functionality of the extension
required | Array of required extensions.
files | Array of added or edited files.


## File

Key | Description
path | Path of the file
[changes][changes_anchor] | Array of the changes made in the file. Optional
action | Use with value "add" to add a file. Optional
source | Path to file. Used only with "add" action


## Changes

Key | Description
action | Available options: replace, add_above, add_below, delete
marker | Place in the file where to perform the "action"
parameters | "text" - array of strings, used as new or added text. Use %s for variables<br />"var" - variable from the configuration file


## Example

    {
        "file":"multiply.json",
        "description":"Adds core parameters as option for daemon, simplewallet and walletd",
        "required":[ "core/bytecoin.json", "print-genesis-tx.json", "genesis-block-reward.json" ],
        "files": [ 
            {
                "path":"/src/CryptoNoteConfig.h",
                "changes": [
                    {
                        "action":"add_above",
                        "marker":"} // parameters",
                        "parameters": {
                            "text":[
                                "const char     GENESIS_COINBASE_TX_HEX[]                     = \"%s\";"
                            ],
                            "var":"GENESIS_COINBASE_TX_HEX"
                        }
                    }
                    {
                        "action":"add_below",
                        "marker":"size_t blockGrantedFullRewardZone()",
                        "parameters": {
                            "text":[
                                "  size_t blockGrantedFullRewardZoneV1() const { return m_blockGrantedFullRewardZoneV1; }"
                            ]
                        }
                    }
                ]
            },
            {
                "path":"/src/CryptoNoteCore/Currency.cpp",
                "changes": [
                    {
                        "action":"replace",
                        "marker":"CryptoNote::parameters::CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V1;",
                        "parameters": {
                            "text":[
                                "       m_blockGrantedFullRewardZoneV1;"
                            ]
                        }
                    }

                ]
            },
            {
                "path":"/README.md",
                "action":"add",
                "source":"/multiply/files/README.md"
            }
        ]
    }

## Adding extension to your configuration

Add the created extension in your Cryptonote generator's configuration file to execute it

    {
        "base_coin": {
            ...
        },
        "core": {
            ...
        },
        "extensions": [
            "core/bytecoin.json",
            "print-genesis-tx.json",
            "MY-EXTENSION.json"
        ]
    }



[files_anchor]: #file
[changes_anchor]: #changes