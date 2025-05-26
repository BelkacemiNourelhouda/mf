import Process3EnregistrementDemande from '@/components/Process3/Process3EnregistrementDemande'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process3EnregistrementDemande')({
  component:()=> <Process3EnregistrementDemande/>,
})
