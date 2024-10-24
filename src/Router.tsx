import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './sections/Layout.tsx';

export default function Router(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<></>} />
      </Route>
    </Routes>
  );
}
