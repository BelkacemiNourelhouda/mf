import Process2ExaminerFond from '@/components/Process2/Process2ExaminerFond'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('Process2ExaminerFond')({
  component:()=> <Process2ExaminerFond/>,
})
