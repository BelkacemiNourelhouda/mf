import Process2RejetProvisoire from '@/components/Process2/Process2RejetProvisoire'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process2RejetProvisoire')({
  component:()=> <Process2RejetProvisoire/>,
})
