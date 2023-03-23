import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade your favorite Tokens ✨'),
  bodyText: t(
    'Riceswap is the DEX with an adequate UI for beginners. anyone can trade any token under Core and Bitgert Blockchain. with almost zero fees, lowest slippage and guaranteed asset security will make anyone feel comfortable when trading on our DEX.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://riceswap.gitbook.io/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/bridge/',
    attributes: [
      { src: 'CORE', alt: t('Pie chart') },
      { src: 'BRISE', alt: t('Stocks chart') },
      { src: 'RICE1', alt: t('Folder with cake token') },
    ],
  },
})

export const bridgeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with Rice platform.'),
  bodyText: t(
    'Increase your financial income by staking or adding liquidity then put your LP token on the farming page and get passive income every second.',
  ),
  reverse: true,
  primaryButton: {
    to: '/Farms',
    text: 'Earn now',
    external: false,
  },
  secondaryButton: {
    to: 'https://riceswap.gitbook.io/',
    text: '',
    external: true,
  },
  images: {
    path: '/images/home/bridge/',
    attributes: [{ src: 'folder1', alt: t('Folder with cake token') }],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Launchpad Integration'),
  bodyText: t(
    'Riceswap is now officially integrated with Dxsale App as the main partner for Riceswap launchpad.',
  ),
  reverse: false,
  primaryButton: {
    to: 'https://dx.app/dxsalecreate',
    text: 'Launchpad',
    external: false,
  },
  secondaryButton: {
    to: 'https://riceswap.gitbook.io',
    text: '',
    external: false,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [{ src: 'dxsale', alt: t('Pie chart') }],
  },
})

export const moreSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('TowerLabs Features'),
  bodyText: t(
    'Towerlabs is the latest feature to be developed by our team.  ' +
      'Its features include, automatic token maker without the need for coding, token lock and liquidity lock. ',
  ),
  reverse: true,
  primaryButton: {
    to: 'https://riceswap.gitbook.io/',
    text: 'Coming Soon',
    external: false,
  },
  secondaryButton: {
    to: 'https://riceswap.gitbook.io/',
    text: '',
    external: true,
  },
  images: {
    path: '/images/home/bridge/',
    attributes: [{ src: 'labs', alt: t('Stocks chart') }],
  },
})

export const launchpadSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Tower Launchpad'),
  bodyText: t(
    'Get additional income through the features that we have provided, We have prepared farming and staking features so that the tokens that you have work for you, everyone is free to choose where their tokens will be stored and we have prepared a place..',
  ),
  reverse: false,
  primaryButton: {
    to: 'https://riceswap.gitbook.io/',
    text: t('Coming Soon'),
    external: false,
  },
  secondaryButton: {
    to: 'https://riceswap.gitbook.io/',
    text: t(''),
    external: true,
  },
  images: {
    path: '/images/home/bridge/',
    attributes: [{ src: 'hero', alt: t('Folder with cake token') }],
  },
})
