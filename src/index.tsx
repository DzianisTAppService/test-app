import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { CircularProgress } from '@mui/material';

const App = lazy(() => import('./app/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
