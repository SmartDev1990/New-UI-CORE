import { rinkeby, mainnet, goerli } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const brise: Chain = {
  id: 32520,
  name: 'Brise Mainnet',
  network: 'Brise',
  rpcUrls: {
    default: 'https://rpc.icecreamswap.com',
  },
  nativeCurrency: { name: 'Brise', symbol: 'BRISE', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'Briscan',
      url: 'https://brisescan.com/',
    },
  },
  multicall: {
    address: '0x28BDB5f1613B5C7E953A26CA9e6EdD8E9d05cDfD',
    blockCreated: 15921452,
  },
}

export const core: Chain = {
  id: 1116,
  name: 'Core Mainnet',
  network: 'Core',
  rpcUrls: {
    default: 'https://rpc-core.icecreamswap.com',
  },
  nativeCurrency: { name: 'CORE', symbol: 'CORE', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'CoreScan',
      url: 'https://scan.coredao.org',
    },
  },
  multicall: {
    address: '0xd05CD3b72a851f29804f23BC8b27fe86Bc9b0eac',
    blockCreated: 15921452,
  },
}

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://bsc-dataseed1.binance.org',
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 15921452,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s3.binance.org:8545',
    default: 'https://data-seed-prebsc-1-s3.binance.org:8545',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 17422483,
  },
  testnet: true,
}

export const cmpTestnet: Chain = {
  id: 512512,
  name: 'Caduceus Testnet',
  network: 'cmp_testnet',
  rpcUrls: {
    public: 'https://galaxy.block.caduceus.foundation',
    default: 'https://galaxy.block.caduceus.foundation',
  },
  blockExplorers: {
    default: { name: 'CMP_Testnet Explorer', url: 'https://galaxy.scan.caduceus.foundation' },
  },
  nativeCurrency: {
    name: 'Cadeceus',
    symbol: 'CMP',
    decimals: 18,
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 10275844,
  },
}

export const cmpMainnet: Chain = {
  id: 256256,
  name: 'Caduceus Mainnet',
  network: 'cmp_mainnet',
  rpcUrls: {
    public: 'https://mainnet.block.caduceus.foundation',
    default: 'https://mainnet.block.caduceus.foundation',
  },
  blockExplorers: {
    default: { name: 'CMP_MAINNET Explorer', url: 'https://mainnet.scan.caduceus.foundation' },
  },
  nativeCurrency: {
    name: 'Cadeceus',
    symbol: 'CMP',
    decimals: 18,
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 10275844,
  },
}

export { rinkeby, mainnet, goerli }
