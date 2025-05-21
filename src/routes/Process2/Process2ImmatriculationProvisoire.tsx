import Process2ImmatriculationProvisoire from '@/components/Process2/Process2ImmatriculationProvisoire'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process2ImmatriculationProvisoire')({
  component:()=> <Process2ImmatriculationProvisoire/>,
})
