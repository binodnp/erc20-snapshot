# Token Snapshot: Create ERC20 Token Snapshot

This command-line utility creates a snapshot of any ERC20 token in JSON or CSV format. Use your own fully synced Ethereum node or any _Ethereum node as a service_ like Infura.

- Works without a local Ethereum node.
- Automatically resumes the next time upon failure.
- Tested to work with Infura.

## Getting Started

```
npm install erc20-snapshot -g
```

### CLI Arguments

None. Prompts for user input and produces a configuration file on the first run.

### How to Use Token Snapshot?

Navigate to a directory where you'd like to save the token snapshot to.

```
cd path/to/a/directory
```

Run the program:

```
erc20-snapshot
```

## Configuration File / Prompt Parameters

```json
{
  "provider": "https://mainnet.infura.io/v3/<key>",
  "contractAddress": "",
  "fromBlock": 0,
  "toBlock": "latest",
  "format": "json",
  "blocksPerBatch": 2500,
  "delay": 0,
  "checkIfContract": "yes"
}
```

### provider

Enter your fully synced Ethereum node. Could be a local node or remote services like Infura.

### contractAddress

Address of your ERC20 token.

### fromBlock

The block height to scan from. To save time, enter the block number of the transaction your token was created on.

### toBlock

The block height to end the scan at.

### blocksPerBatch

The number of blocks to query per batch.

If you are using remote service like Infura, keep this number relative low (2000-5000) to avoid rate limits. If you are using a dedicated Ethereum node, you can increase this number to suit your needs.

### delay

The delay (in ms) between each request in the loop. Tweak this if you are experiencing rate limit from your provider.

### checkIfContract

Checks each address to determine whether it is a smart contract or an Ethereum wallet.

## You May Also Like

- [Vyper ERC20 Contracts](https://github.com/binodnp/)
- [Vyper Crowdsale Contracts](https://github.com/binodnp/)
- [Solidoc: Solidity Documentation Generator](https://github.com)
- [SolFlattener: Solidity Flattener](https://github.com)
- [Vesting Schedule](https://github.com)
