import { briseTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'RICE',
    lpAddress: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
    token: briseTokens.syrup,
    quoteToken: briseTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'RICE-BRISE LP',
    lpAddress: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
    token: briseTokens.tw,
    quoteToken: briseTokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'xRICE-BRISE LP',
    lpAddress: '0x969d4C83969deB4363417C07A7D502A307d0D1D2',
    token: briseTokens.xRice,
    quoteToken: briseTokens.wbnb,
  },
  {
    pid: 5,
    v1pid: 5,
    lpSymbol: 'RICE-xRICE LP',
    lpAddress: '0x5F3Fa7b0Adb16b0CcE18654A30DA78bc8B2B1542',
    token: briseTokens.tw,
    quoteToken: briseTokens.xRice,
  },
  {
    pid: 8,
    v1pid: 8,
    lpSymbol: 'YPC-WBRISE LP',
    lpAddress: '0xef2a42261824FF0D52230415D57eE86f9aFC47cC',
    token: briseTokens.ypc,
    quoteToken: briseTokens.wbnb,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
