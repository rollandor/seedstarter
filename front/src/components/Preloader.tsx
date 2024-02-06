import React from 'react';
import { usePresaleContract, useRaisedAmount, useSdsContract } from '@/hooks/useContractInfo';

function Preloader() {
  usePresaleContract();
  useSdsContract();

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default Preloader;