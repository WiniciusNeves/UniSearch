import React, { createContext, useContext, useMemo } from 'react';
import Toast from 'react-native-toast-message';
import { BaseToast } from 'react-native-toast-message';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const toastConfig = useMemo(() => ({
        error: ({ text1, text2 }) => (
          <BaseToast
            {...{ text1, text2 }}
            style={{ backgroundColor: '#fff', borderLeftColor: 'red' }}
            textStyle={{ color: '#909090' }}
          />
        ),
    }), []);
  
    return (
      <ToastContext.Provider value={{ show: Toast.show }}>
        {children}
        <Toast config={toastConfig} position="top" />
      </ToastContext.Provider>
    );
  };

export const useToast = () => {
  return useContext(ToastContext);
};

