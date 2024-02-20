import { createContext, useContext } from 'react';

export const ModalStateContext = createContext<boolean>(false);
export const useOpenModal = () => useContext(ModalStateContext);

export const ModalDispatchContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});
export const useModalDispatch = () => useContext(ModalDispatchContext);
