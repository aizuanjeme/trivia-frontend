import React, {  Suspense } from 'react'
import './App.css';
import AppLoading from './components/apploading';
import RouterPage from './routerPage';


function App() {

  return (
      <Suspense fallback={<AppLoading />}>
        <RouterPage />
      </Suspense>  
  );
}

export default App;