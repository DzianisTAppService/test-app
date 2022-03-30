import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AppProvider: FC = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

export default AppProvider;
