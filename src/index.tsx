import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { CircularProgress } from '@mui/material';

const AppProvider = lazy(() => import('./app/AppProvider'));
const App = lazy(() => import('./app/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <AppProvider>
        <App />
      </AppProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
