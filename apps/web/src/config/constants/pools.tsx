import { BigNumber } from '@ethersproject/bignumber'
import { Pool } from '@pancakeswap/uikit'
import { SerializedWrappedToken } from '@pancakeswap/token-lists'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { coreTokens } from '@pancakeswap/tokens'
import { PoolCategory } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${coreTokens.tw.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake TW</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 600000,
    tokenImage: {
      primarySrc: `/images/tokens/${coreTokens.tw.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible TW</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${coreTokens.tw.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${coreTokens.tw.address}.png`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: Pool.SerializedPoolConfig<SerializedWrappedToken>[] = [
  {
    sousId: 0,
    stakingToken: coreTokens.tw,
    earningToken: coreTokens.tw,
    contractAddress: {
      32520: '',
      1116: '0x47e6B11Cd7E9664F97E9E570Dd73Cefd934f6E82',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: coreTokens.tw,
    earningToken: coreTokens.xRice,
    contractAddress: {
      32520: '0x61fa23D4376CF069E484Bcb3C67d4422320C75e9',
      1116: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.003',
    version: 2,
  },
  {
    sousId: 2,
    stakingToken: coreTokens.tw,
    earningToken: coreTokens.wbnb,
    contractAddress: {
      32520: '0xEA7cfA5515a31063d4d7130828510e8a876ebe1A',
      1116: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '100',
    version: 2,
  },
  // {
  // 	sousId: 3,
  // 	stakingToken: serializedTokens.xRice,
  // 	earningToken: serializedTokens.rice,
  // 	contractAddress: {
  // 		32520: '0xDa492E9c88E93dcF18c17f441a1938A746Bf9448',
  // 		56: '',
  // 		97: '',
  // 	},
  // 	poolCategory: PoolCategory.CORE,
  // 	tokenPerBlock: '0.06',
  // 	isFinished: false,
  // },
  // {
  // 	sousId: 4,
  // 	stakingToken: serializedTokens.xRice,
  // 	earningToken: serializedTokens.wbnb,
  //   contractAddress: {
  // 		32520: '0xd2E9aE5178E9eeba6857a20Aef93C767B087c6eD',
  // 		56: '',
  // 		97: '',
  // 	},
  // 	poolCategory: PoolCategory.CORE,
  // 	tokenPerBlock: '100',
  // 	isFinished: false,
  // },
]

// known finished pools
const finishedPools = [
  {
    sousId: 3,
    stakingToken: coreTokens.tw,
    earningToken: coreTokens.wbnb,
    contractAddress: {
      32520: '0xD83a7da685180e172512617d45e0ce136ED60167',
      1116: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3000',
    isFinished: true,
  },
].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools] as Pool.SerializedPoolConfig<SerializedWrappedToken>[]
