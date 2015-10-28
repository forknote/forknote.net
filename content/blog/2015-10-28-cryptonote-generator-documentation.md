---
kind: article
title: "Cryptonote generator documentation added"
created_at: 2015-10-28
author_name: pmitchev
--- 

[Documentation][cryptonote-generator-overview] for the [Cryptonote generator][cryptonote-generator-github] was added. With the generator you can generate a separate source of any Forknote coins. This ability is valuable if you need an actual source or you want to extend the functionality of a coin.

The way to extend the functionality of a Forknote coin is through [extensions][cryptonote-generator-extensions]. This ensures that the development of your coin constantly matches that of Bytecoin.

What the actual positives of using the generator instead of merging?

* In most of the cases it will save you the actual merging process
* It will save you the merge conflicts

The downside is writing extensions is slower than writing just a C code. But since the extensions are pure json, the process CAN be reduced to just writing a C code.

[cryptonote-generator-github]: https://github.com/forknote/cryptonote-generator
[cryptonote-generator-overview]: /documentation/cryptonote-generator/
[cryptonote-generator-extensions]: /documentation/cryptonote-generator/extensions/
