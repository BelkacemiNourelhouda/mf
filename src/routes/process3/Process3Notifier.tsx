import Process3Notifier from '@/components/Process3/Process3Notifier'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process3Notifier')({
  component:()=> <Process3Notifier/>,
})
