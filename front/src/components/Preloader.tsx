import React from 'react';
import { usePresaleContract, useOwnerBalance, useSdsContract } from '@/hooks/useContractInfo';

function Preloader() {
  usePresaleContract();
  useSdsContract();

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default Preloader;