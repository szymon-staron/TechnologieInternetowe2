import { useEffect, useContext } from 'react';
import { DaniaContext } from '../../_context/index';
import { db } from '../../db/db';

export const useGetData = () => {
  const { baza, setBaza } = useContext(DaniaContext);

  useEffect(() => {
    setBaza(db);
  }, [db]);
  
  return {baza}
};
