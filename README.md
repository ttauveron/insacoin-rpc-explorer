# INSACOIN RPC Explorer
A fork of the [Bitcoin network explorer](https://github.com/janoside/btc-rpc-explorer), by [janoside](https://github.com/janoside) adapted for insacoin.  
Below is the original README of the project.

# Features

* Browse blocks
* View block details
* View transaction details, with navigation "backward" via spent transaction outputs
* View JSON content used to generate most pages
* Search supports transactions, blocks, addresses
* Optional transaction history for addresses by querying configurable ElectrumX servers
* Mempool summary, with fee, size, and age breakdowns
* RPC command browser and terminal
* Currently supports BTC, LTC (support for any Bitcoin-RPC-protocol-compliant coin can be added easily)

# Getting started

## Prerequisites

1. Install and run a full, archiving node. Ensure that your insacoin node has full transaction indexing enabled (`txindex=1`) and the RPC server enabled (`server=1`).
2. Synchronize your node with the Insacoin network.
3. "Recent" version of Node.js (8+ recommended).

## Instructions

1. Clone this repo: `git clone https://github.com/Crypto-lyon/insacoin-rpc-explorer`
2. `npm install`
3. `npm run build`
4. Edit the "rpc" settings in [app/credentials.js](app/credentials.js) to target your node
5. Optional: Add an ipstack.com API access key to [app/credentials.js](app/credentials.js). Doing so will add a map to the /peers page.
6. `npm start` to start the local server
7. Visit http://127.0.0.1:3002/

# Donate to janoside or us.

* Janoside : [Bitcoin](bitcoin:3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe): 3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe

* Us : [Bitcoin](bitcoin:1Jndmhuv1wAPtd2Nw1mmPaqQ7FwiNbQzSJ): 1Jndmhuv1wAPtd2Nw1mmPaqQ7FwiNbQzSJ

