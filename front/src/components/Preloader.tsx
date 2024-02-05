import React, { useEffect } from 'react';
import { useToken } from 'wagmi';
import seedstarterConfig from "@/../seedstarter.config";
import { useGlobalState } from '@/services/store/store';

function Preloader() {

  const tokenData = useGlobalState(state => state.tokenData);
  const setTokenData = useGlobalState(state => state.setTokenData);
  const newTokenData = useToken({
    address: process.env.SDS_ADDR,
    chainId: seedstarterConfig.targetNetworks[0].id,
  });

  useEffect(() => {
    if (tokenData !== undefined) return;
    setTokenData(newTokenData.data!);
  }, [tokenData])

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default Preloader;