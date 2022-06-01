import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Error}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/add' element={<Add />} />
        <Route path='/book/:id' element={<Detail />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route element={<NotFound />} />
      </Routes>
     </ErrorBoundary>
    </div>
  )
}

export default App;
