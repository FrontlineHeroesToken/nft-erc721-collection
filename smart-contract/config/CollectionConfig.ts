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
  tokenName: 'Frontline Heroes TEST',
  tokenSymbol: 'FHNFTs',
  hiddenMetadataUri: 'ipfs://QmVRHv8QjBnVfZ6B9sDtjodrZXkzwTs6e78oPctNhs3wJ6/reveal.json',
  maxSupply: 8000,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.007,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.009,
    maxMintAmountPerTx: 50,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
