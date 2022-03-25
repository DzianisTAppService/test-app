import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path='/' element={<MainPage />} />
    </ReactRouterRoutes>
  );
};
