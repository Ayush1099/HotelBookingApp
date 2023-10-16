// EmailContext.js
import React, { createContext, useContext, useState } from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [emailId, setEmailId] = useState('');

  return (
    <EmailContext.Provider value={{ emailId, setEmailId }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  return useContext(EmailContext);
};
