import Process3VerificationForme from '@/components/Process3/Process3VerificationForme'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process3VerificationForme')({
  component:()=> <Process3VerificationForme/>,
})
