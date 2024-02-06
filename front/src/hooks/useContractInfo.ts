import { useEffect } from "react";
import { erc20ABI, useContractRead, useContractReads, useToken } from "wagmi";

import seedstarterConfig from "@/../seedstarter.config";
import { useGlobalState, PresaleDataType } from '@/services/store/store';

import SeedstarterPresaleABI from '@/../artifacts/contracts/SeedstarterPresale.sol/SeedstarterPresale.json';
import SeedstarterABI from '@/../artifacts/contracts/Seedstarter.sol/Seedstarter.json';


/**
 * This function will get the current state about ICO status
 * @returns 
 */
export function usePresaleContract() {

  const { data: currentStageIdAcite } = useContractRead({
    abi: SeedstarterPresaleABI.abi,
    address: process.env.SDS_PRESALE_ADDR,
    functionName: 'getCurrentStageIdActive',
  });

  if (!currentStageIdAcite) {
    console.log(`current stage is empty`);
    return;
  }

  const { data: stageState } = useContractRead({
    abi: SeedstarterPresaleABI.abi,
    address: process.env.SDS_PRESALE_ADDR,
    functionName: 'stages',
    args: [currentStageIdAcite]
  });

  if (!stageState) {
    return;
  }

  const presaleData = useGlobalState(state => state.presaleData);
  const setPresaleData = useGlobalState(state => state.setPresaleData);

  useEffect(() => {

    if (presaleData !== undefined) {
      return;
    }

    const v: PresaleDataType = {
      currentStageIdAcite: stageState[0],
      bonus: stageState[1],
      price: stageState[2],
      start: stageState[3],
      end: stageState[4],
    };
    setPresaleData(v);

  }, [presaleData]);
}

/**
 * This function will get info about token
 */
export function useSdsContract() {

  const tokenData = useGlobalState(state => state.tokenData);
  const setTokenData = useGlobalState(state => state.setTokenData);

  const owner = useGlobalState(state => state.owner);
  const setOwner = useGlobalState(state => state.setOwner);

  const newTokenData = useToken({
    address: process.env.SDS_ADDR,
    chainId: seedstarterConfig.targetNetworks[0].id,
  });

  if (!newTokenData) {
    return;
  }

  const { data: ownerAddress } = useContractRead({
    abi: SeedstarterABI.abi,
    address: process.env.SDS_ADDR,
    functionName: 'owner',
  });

  if (!ownerAddress) {
    return;
  }

  useEffect(() => {
    if (tokenData === undefined) {
      setTokenData(newTokenData.data!);
    }
    if (owner === '') {
      setOwner(ownerAddress);
    }

  }, [tokenData, owner]);
}

export function useRaisedAmount(): bigint | undefined {
  const owner = useGlobalState(state => state.owner);

  const args = owner ? {
    abi: SeedstarterABI.abi,
    address: process.env.SDS_ADDR,
    functionName: 'balanceOf',
    args: [owner],
  } : {}
  const { data: ownerBalance } = useContractRead(args);

  if (!ownerBalance) {
    return undefined;
  }

  return ownerBalance;
}