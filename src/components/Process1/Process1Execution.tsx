import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from "react-router-dom"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'


const executionSchema = z.object({
  numero: z
    .string()
    .min(1, 'Le numéro est requis'),
  reference: z.string().min(1, 'Référence obligatoire'),
  volume: z.string().min(1, 'Le volume est requis'),
})



type ExecutionValues = z.infer<typeof executionSchema>

export default function Process1Execution() {
const navigate = useNavigate()
  const form = useForm<ExecutionValues>({
    resolver: zodResolver(executionSchema),
    defaultValues: {
      numero: '',
      reference: '',
      volume: '',
    },
    mode: 'onChange',
  })

  const onSubmit = (values: ExecutionValues) => {
    console.log('✅ execution soumise :', values)
    navigate("/Process1Fin")
    
    }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Exécution de la formalité</h2>

        <FormField
          control={form.control}
          name="numero"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro d'archivage</FormLabel>
              <FormControl>
                <Input placeholder="ex : 2025/02" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Référence</FormLabel>
              <FormControl>
                <Input placeholder="N° Bordereau ou Référence bancaire" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="volume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Volume</FormLabel>
              <FormControl>
                <Input placeholder="ex : xxx" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-12 text-base">
          Valider l'execution
        </Button>
      </form>
    </Form>
  )
}
