import React from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import PATHS from 'constants/routes-paths';
import MainPage from 'pages/MainPage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path={PATHS.welcome} element={<MainPage />} />
      <Route path={PATHS.subscribe} element={<div>Subscribe</div>} />

      <Route path={PATHS.noRoute} element={<Navigate to={PATHS.welcome} replace />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
