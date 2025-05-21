import Process2EnregistrementDemande from '@/components/Process2/Process2EnregistrementDemande'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process2EnregistrementDemande')({
  component:()=> <Process2EnregistrementDemande/>,
})
