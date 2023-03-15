import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    icon: '🚀',
    title: t('Q1 2023'),
    description: ['Presale Launch', 'DEX Listing', 'Update Chain on Riceswap', 'Launch Farming & Staking'],
    reached: 'March 2023 (Reached)',
  },
  {
    title: t('Q2, 2023'),
    icon: '👨‍💻',
    description: [
      'Launch Launchpad',
      'Start building new Features',
      'Remove liquidity from Icecream to Riceswap DEX',
      'Negotiated with CEX',
    ],
    reached: 'Apr-June 2023 (Under Progress)',
  },
  {
    title: t('Q3, 2023'),
    icon: '🌐',
    description: [
      'Start Multichain for Rice (Core & Bitgert), Depending on the consideration of the voting results from the community.',
      'Launch new Features',
    ],
    reached: 'July-Sep 2023 (Under Progress)',
  },
  {
    title: t('Q4, 2023'),
    icon: '🚀',
    description: ['Coming Soon'],
    reached: 'Oct-Dec 2023 (Under Progress)',
  },
]
export default config
