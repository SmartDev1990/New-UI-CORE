import { coreTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'RICE',
    lpAddress: '0xA5d20d84deeEd3850a7538e993E3b2592bf997A0',
    token: coreTokens.syrup,
    quoteToken: coreTokens.wbnb,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'RICE-CORE LP',
    lpAddress: '0x015404A6e68c5201aA878dC900b3B06e182C8D22',
    token: coreTokens.tw,
    quoteToken: coreTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'xRICE-CORE LP',
    lpAddress: '0x646210B8adA924edEdC68F60E2c5F38276d3c239',
    token: coreTokens.xRice,
    quoteToken: coreTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'RICE-xRICE LP',
    lpAddress: '0x77C9d5De69Af9d7Ae550B5ad392B400c114692d3',
    token: coreTokens.tw,
    quoteToken: coreTokens.xRice,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
