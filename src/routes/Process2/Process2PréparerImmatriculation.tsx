import Process2PréparerImmatriculation from '@/components/Process2/Process2PréparerImmatriculation'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process2PréparerImmatriculation')({
  component:()=> <Process2PréparerImmatriculation/>,
})
