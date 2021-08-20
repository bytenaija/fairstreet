import React from 'react';

const WizardContext = React.createContext();

export const useStore = () => React.useContext(WizardContext);


export const AppProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <WizardContext.Provider value={[globalState, dispatch]}>{children}</WizardContext.Provider>
  );
};