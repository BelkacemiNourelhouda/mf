import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export default function Process3FinProcessus() {
  const navigate = useNavigate()

  return (
    <div className="max-w-xl mx-auto mt-20 text-center p-8 bg-white rounded-lg shadow">
      <div className="flex justify-center mb-6">
        <CheckCircle2 className="text-green-600 w-16 h-16" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Processus terminé</h2>
      <p className="text-gray-700 mb-6">
        Toutes les étapes du processus 3 ont été complétées avec succès.
      </p>
      <Button onClick={() => navigate('/dashboard')} className="h-12 text-base px-6">
        Retour au tableau de bord
      </Button>
    </div>
  )
}
