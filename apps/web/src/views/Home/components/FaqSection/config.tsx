import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    title: t('What is Rice Token ?'),
    description: [t('Rice Token is main token used for Riceswap as utilit token.')],
  },
  {
    title: t('On which chain Rice token available ?'),
    description: [t('Bitgert and Core Chain')],
  },
  {
    title: t('Where and How to buy RICE?'),
    description: [t('You can buy Rice on Icecreamswap and Riceswap')],
  },
  {
    title: t('Is the Rice contract audited??'),
    description: [t('Yes, the Rice contract has been audit by Securewise, Securewise is official partner of Riceswap')],
  },
]
export default config
