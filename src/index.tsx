import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { CircularProgress } from '@mui/material';

const AppContainer = lazy(() => import('./app/AppContainer'));
const App = lazy(() => import('./app/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <AppContainer>
        <App />
      </AppContainer>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
