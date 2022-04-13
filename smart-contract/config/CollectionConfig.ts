import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'FHTNFTTEST',
  tokenName: 'Frontline Heroes',
  tokenSymbol: 'FHNFTs',
  hiddenMetadataUri: 'ipfs://QmPmaJHMFZR4UueXnFkkCkgFHybMSTzpvi7e6dzKMXTiN5/reveal.json',
  maxSupply: 8000,
  whitelistSale: {
    price: 0.025,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.04,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.056,
    maxMintAmountPerTx: 50,
  },
  contractAddress: "0x669D6cD9ECEC927F3fc8458Ed70dAf85b801248C",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
