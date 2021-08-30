import { useState, createContext } from 'react';
import { db } from '../db/db';
export const DaniaContext = createContext(db);
export const DaniaProvider = ({children }) => {
  const [baza, setBaza] = useState(db)
  
  return <DaniaContext.Provider value={{baza,setBaza}}>
    {children}
  </DaniaContext.Provider>
}