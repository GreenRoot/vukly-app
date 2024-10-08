import { Routes, Route } from 'react-router-dom';
import {routesConfig} from './routes-config';

export function RouterProvider() {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}

