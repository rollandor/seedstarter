import { create } from "zustand";
import * as chains from "viem/chains";
import { Chain } from "viem/chains";
import { FetchTokenResult } from '@wagmi/core'


/**
 * Zustand Store
 *
 * You can add global state to the app using this useGlobalState, to get & set
 * values from anywhere in the app.
 *
 * Think about it as a global useState.
 */

type GlobalState = {
  targetNetwork: Chain;
  setTargetNetwork: (newTargetNetwork: Chain) => void;
  tokenData: FetchTokenResult | undefined;
  setTokenData: (newTokenData: FetchTokenResult) => void;
};

export const useGlobalState = create<GlobalState>(set => ({
  targetNetwork: chains.sepolia,
  setTargetNetwork: (newTargetNetwork: Chain) => set(() => ({ targetNetwork: newTargetNetwork })),
  tokenData: undefined,
  setTokenData: (newTokenData: FetchTokenResult) => set(() => ({ tokenData: newTokenData })),
}));
