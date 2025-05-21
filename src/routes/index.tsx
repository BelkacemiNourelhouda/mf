import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <Button asChild>
        <Link to="/process1/process1DepotDemand">Publication des actes dans les systemes personnel -GUICHET-</Link>
      </Button>
      <Button asChild>
        <Link to="/process2/process2EnregistrementDemande">Demande d'immatriculation provisoire</Link>
      </Button>
    </div>
  )
}
