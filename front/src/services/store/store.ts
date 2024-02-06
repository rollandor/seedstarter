import { create } from "zustand";
import * as chains from "viem/chains";
import { Chain } from "viem/chains";
import { FetchTokenResult } from '@wagmi/core';

export type PresaleDataType = {
  currentStageIdAcite: bigint,
  bonus: bigint,
  price: bigint,
  start: bigint,
  end: bigint,
};

type GlobalState = {
  targetNetwork: Chain;
  setTargetNetwork: (newTargetNetwork: Chain) => void;
  tokenData: FetchTokenResult | undefined;
  setTokenData: (newTokenData: FetchTokenResult) => void;
  presaleData: PresaleDataType | undefined;
  setPresaleData: (newPresaleData: PresaleDataType) => void;
  owner: string,
  setOwner: (newOwner: string) => void;
};

export const useGlobalState = create<GlobalState>(set => ({
  targetNetwork: chains.sepolia,
  setTargetNetwork: (newTargetNetwork: Chain) => set(() => ({ targetNetwork: newTargetNetwork })),
  tokenData: undefined,
  setTokenData: (newTokenData: FetchTokenResult) => set(() => ({ tokenData: newTokenData })),
  presaleData: undefined,
  setPresaleData: (newPresaleData: PresaleDataType) => set(() => ({ presaleData: newPresaleData })),
  owner: '',
  setOwner: (newOwner: string) => set(() => ({ owner: newOwner }))
}));
