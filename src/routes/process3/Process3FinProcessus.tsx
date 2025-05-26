import Process3FinProcessus from '@/components/Process3/Process3FinProcessus'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process3FinProcessus')({
  component:()=> <Process3FinProcessus/>,
})
