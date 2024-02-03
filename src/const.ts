export const networks = [
    {
        name: 'Klaytn',
        chainId: '0x2019', // Replace with actual Klaytn chain ID
        rpcUrl: 'https://api.cypress.klaytn.net:8651', // Replace with actual Klaytn RPC URL
        iconUrl: "/assets/klaytn.svg"
    },
    {
        name: 'Ethereum',
        chainId: '0x1', // Replace with actual Ethereum chain ID
        rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with actual Infura project ID
        iconUrl: "/assets/etherium.svg"
    },
    {
        name: 'Optimism',
        chainId: '0xA', // Replace with actual Optimism chain ID
        rpcUrl: 'https://optimism-mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with actual Infura project ID
        iconUrl: "/assets/optimism.svg"
    },
    {
        name: 'Base',
        chainId: '0xA4B1', // Replace with actual Base chain ID
        rpcUrl: 'https://base-network-rpc-url', // Replace with actual Base network RPC URL
        iconUrl: "/assets/coinbase.svg"
    },
];

export const tokens = [
    {
        name: 'Ether',
        unit: 'ETH',
        balance: 0.12345678,
        icon: "/assets/etherium.svg",
    },
    {
        name: 'US Tether',
        unit: 'USDT',
        balance: 12.31234,
        icon: "/assets/tether.svg",
    },
    {
        name: 'Ive Token',
        unit: 'IVE',
        balance: 54321.098765,
        icon: "/assets/ive.svg",
    }
]