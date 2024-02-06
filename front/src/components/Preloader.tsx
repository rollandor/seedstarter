import React, { useEffect } from 'react';
import { useContractReads, useContractRead, useToken } from 'wagmi';
import seedstarterConfig from "@/../seedstarter.config";
import { useGlobalState, PresaleDataType } from '@/services/store/store';
import SeedstarterPresaleABI from '@/../artifacts/contracts/SeedstarterPresale.sol/SeedstarterPresale.json';

function PreloaderPresale({ idRound }: { idRound: bigint; }) {

  const presaleData = useGlobalState(state => state.presaleData);
  const setPresaleData = useGlobalState(state => state.setPresaleData);

  const { data } = useContractReads({
    contracts: [
      {
        abi: SeedstarterPresaleABI.abi,
        address: process.env.SDS_PRESALE_ADDR,
        functionName: 'stages',
        args: [idRound]
      },
      {
        abi: SeedstarterPresaleABI.abi,
        address: process.env.SDS_PRESALE_ADDR,
        functionName: 'presaleTokenAmount',
      },
      {
        abi: SeedstarterPresaleABI.abi,
        address: process.env.SDS_PRESALE_ADDR,
        functionName: 'sellerAddress',
      },
    ],
  });

  useEffect(() => {
    if (presaleData !== undefined) return;
    const v: PresaleDataType = {
      currentStageIdAcite: data[0].result[0],
      bonus: data[0].result[1],
      price: data[0].result[2],
      start: data[0].result[3],
      end: data[0].result[4],
    }
    setPresaleData(v);
  }, []);

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

function Preloader() {

  const tokenData = useGlobalState(state => state.tokenData);
  const setTokenData = useGlobalState(state => state.setTokenData);
  const newTokenData = useToken({
    address: process.env.SDS_ADDR,
    chainId: seedstarterConfig.targetNetworks[0].id,
  });

  const { data } = useContractRead({
    abi: SeedstarterPresaleABI.abi,
    address: process.env.SDS_PRESALE_ADDR,
    functionName: 'getCurrentStageIdActive',
  });

  useEffect(() => {
    if (tokenData !== undefined) return;
    setTokenData(newTokenData.data!);
  }, [tokenData]);

  return (
    <React.Fragment>
      {data !== undefined ? (
        <PreloaderPresale idRound={data} />
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

export default Preloader;