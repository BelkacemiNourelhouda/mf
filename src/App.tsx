import { Link } from 'react-router-dom'
import './App.css'
import DepotDemandForm from "@/components/DepotDemandForm"

function App() {

  return (
    <>

<p className="read-the-docs">
        Publication des actes dans les systemes personnel -GUICHET-
    </p>
      <div>
      <DepotDemandForm />
      </div>
      
      <div className="card">
      <Link 
        to="/immatriculationDemand" 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Demande d'immatriculation provisoire
      </Link>
      </div>
      
    </>
  )
}

export default App
