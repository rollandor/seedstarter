import * as chains from "viem/chains";

export type SeedstarterConfig = {
  targetNetworks: chains.Chain[];
  pollingInterval: number;
  walletAutoConnect: boolean;
};

const seedstarterConfig = {
  // The networks on which your DApp is live
  targetNetworks: [
    chains.sepolia,
  ],

  // The interval at which your front-end polls the RPC servers for new data
  // it has no effect if you only target the local network (default is 4000)
  pollingInterval: 30000,

  /**
   * Auto connect:
   * 1. If the user was connected into a wallet before, on page reload reconnect automatically
   * 2. If user is not connected to any wallet:  On reload, connect to burner wallet if burnerWallet.enabled is true && burnerWallet.onlyLocal is false
   */
  walletAutoConnect: true,
} as const satisfies SeedstarterConfig;

export default seedstarterConfig;
