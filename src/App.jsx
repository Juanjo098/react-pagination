import './App.css'
import { lazy, Suspense } from 'react';

const LoanPage = lazy(() => import('./pages/Loans'))

function App() {

  return (
    <Suspense fallback={<div>Loading</div>}> 
      <LoanPage />
    </Suspense>
  )
}

export default App
