import Process1DepotDemand from '@/components/Process1/Process1DepotDemand'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process1DepotDemand')({
  component:()=> <Process1DepotDemand/>,
})


