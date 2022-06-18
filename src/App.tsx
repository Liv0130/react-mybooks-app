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
import { ConnectedRouter } from "connected-react-router";
import history from './history';
function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/add' element={<Add />} />
        <Route path='/book/:id' element={<Detail />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route element={<NotFound />} />
        </Routes>
      </ConnectedRouter>
     </ErrorBoundary>
    </div>
  )
}

export default App;
