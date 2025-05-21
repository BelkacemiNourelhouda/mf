import Process2EmailEnvoye from '@/components/Process2/Process2EmailEnvoye'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process2EmailEnvoye')({
  component:()=> <Process2EmailEnvoye/>,
})
