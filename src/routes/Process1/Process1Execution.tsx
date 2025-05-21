import Process1Execution from '@/components/Process1/Process1Execution'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process1Execution')({
  component:()=> <Process1Execution/>,
})


