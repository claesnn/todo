import { createContext, useContext } from 'react';
import { StateContext } from '@/types/types';

export const AppContext = createContext<StateContext | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
}