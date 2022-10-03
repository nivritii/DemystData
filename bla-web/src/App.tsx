import React, { useEffect } from 'react';
import { env } from './env';
import './App.css';
import { Router } from './router';

export const App = () => {

  useEffect(() => {
    loadApp();
  }, []);

  const loadApp = () => {
    let path = window.location.pathname;
    if (path.startsWith(env.server.path)) {
      path = path.replace(env.server.path, '');
    }
    if (path === '') {
      path = '/';
    }
  };

  return (
    <>
      <Router />
    </>
  );
}

export default App;
