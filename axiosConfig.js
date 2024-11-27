
import axios from 'axios';
import i18n from 'i18next';
import Notification from './src/components/Notification/Notification';
import React from 'react';
import ReactDOM from 'react-dom';


const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true 
});

let notify; 

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.data.businessErrorCode!=321 && error.response.data.businessErrorCode) {
      const errorCode = error.response.data.businessErrorCode;
      const errorMessage = i18n.t(`${errorCode}`);

      notify(errorMessage, 'error');
    } else {
     
    }
    return Promise.reject(error);
  }
);

export const setNotifyFunction = (notifyFunction) => {
  notify = notifyFunction;
};

export default axiosInstance;