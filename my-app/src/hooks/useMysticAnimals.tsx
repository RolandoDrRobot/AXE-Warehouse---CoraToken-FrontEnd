import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useMysticAnimalsABI } from '../config/tokens/MysticAnimals';

const { address, abi } = useMysticAnimalsABI;

const useMysticAnimals = () => {
  const { active, library, chainId } = useWeb3React();

  // Use memo will make this to happen only when active, chainId... are available
  const mysticAnimals = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address);
  }, [active, chainId]);

  return mysticAnimals;
};

export default useMysticAnimals;
