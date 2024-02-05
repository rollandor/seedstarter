import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import seedstarterConfig from '../../../seedstarter.config';

export const { chains, publicClient } = configureChains(
  seedstarterConfig.targetNetworks,
  [
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Seedstarter ICO',
  projectId: process.env.WALLET_CLOUD_PROJECT_ID!,
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient
})