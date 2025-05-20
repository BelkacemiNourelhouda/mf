import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DepotDemandPage from './pages/form'
import EncaissementTaxePage from './pages/form/EncaissementTaxePage'
import ExecutionPage from './pages/form/ExecutionPage'
import LevementReservationPage from './pages/form/levementReservationPage'
import RefusDepotPage from './pages/form/RefusDepotPage'
import RefusEncaissementPage from './pages/form/refusEncaissementPage'
import LevementReservation2Page from './pages/form/LevementReservation2Page'
import FinPage from './pages/form/finPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/encaissement" element={<EncaissementTaxePage />} />
        <Route path="/execution" element={<ExecutionPage />} />
        <Route path="/refusDepot" element={<RefusDepotPage />} />
        <Route path="/levementReservation" element={<LevementReservationPage />} />
        <Route path="/refusEncaissement" element={<RefusEncaissementPage />} />
        <Route path="/levementReservation2" element={<LevementReservation2Page />} />
        <Route path="/fin" element={<FinPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
