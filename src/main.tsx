import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DepotDemandPage from './pages/form'
import EncaissementTaxePage from './pages/form/EncaissementTaxePage'
import ExecutionPage from './pages/form/ExecutionPage'
import LevementReservationPage from './pages/form/LevementReservationPage'
import RefusDepotPage from './pages/form/RefusDepotPage'
import RefusEncaissementPage from './pages/form/RefusEncaissementPage'
import LevementReservation2Page from './pages/form/LevementReservation2Page'
import FinPage from './pages/form/finPage'
import EnregistrementDemandePage from './pages/form2/EnregistrementDemandePage'
import ExaminerConformitePage from './pages/form2/ExaminerConformitePage'
import ExaminerFondPage from './pages/form2/ExaminerFondPage'
import ImmatriculationProvisoirePage from './pages/form2/ImmatriculationProvisoirePage'
import PreparerImmatriculationForm from './components/process2/PréparerImmatriculationForm'
import PreparerImmatriculationPage from './pages/form2/PreparerImmatriculationPage'
import EmailEnvoyePage from './pages/form2/EmailEnvoyePage'
import RejetProvisoirePage from './pages/form2/RejetProvisoirePage'

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


        
        <Route path="/immatriculationDemand" element={<EnregistrementDemandePage />} />
        <Route path="/examinationFond" element={<ExaminerFondPage />} />
        <Route path="/immatriculationProv" element={<ImmatriculationProvisoirePage />} />
        <Route path="/preparationImmat" element={<PreparerImmatriculationPage />} />
        <Route path="/fin2" element={<EmailEnvoyePage />} />
        <Route path="/finNegative" element={<RejetProvisoirePage />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
