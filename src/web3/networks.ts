const networks = {
    klaytn: {
        name: 'Klaytn',
        chainId: '0x2019', // Replace with actual Klaytn chain ID
        rpcUrl: 'https://api.cypress.klaytn.net:8651', // Replace with actual Klaytn RPC URL
    },
    ethereum: {
        name: 'Ethereum',
        chainId: '0x1', // Replace with actual Ethereum chain ID
        rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with actual Infura project ID
    },
    optimism: {
        name: 'Optimism',
        chainId: '0xA', // Replace with actual Optimism chain ID
        rpcUrl: 'https://optimism-mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with actual Infura project ID
    },
    base: {
        name: 'Base',
        chainId: '0xA4B1', // Replace with actual Base chain ID
        rpcUrl: 'https://base-network-rpc-url', // Replace with actual Base network RPC URL
    },
};

export default networks;