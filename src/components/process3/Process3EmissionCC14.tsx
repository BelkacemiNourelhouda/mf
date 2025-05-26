import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useNavigate } from 'react-router-dom'

const cc14Schema = z.object({
  numeroCC14: z.string().min(1, 'Numéro du CC14 requis'),
  dateEmission: z.string().min(1, 'Date requise'),
  agentEmission: z.string().min(1, 'Nom de l’agent requis'),
  mentionSpeciale: z.string().optional(),
})

type CC14Values = z.infer<typeof cc14Schema>

export default function Process3EmissionCC14() {
  const navigate = useNavigate()

  const form = useForm<CC14Values>({
    resolver: zodResolver(cc14Schema),
    defaultValues: {
      numeroCC14: '',
      dateEmission: '',
      agentEmission: '',
      mentionSpeciale: '',
    },
  })

  function onSubmit(values: CC14Values) {
    console.log('📄 CC14 émis :', values)
    navigate('/Processus3FinProcessus')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Émission du CC14</h2>

        <FormField
          control={form.control}
          name="numeroCC14"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro du CC14</FormLabel>
              <FormControl>
                <Input placeholder="CC14-2025-001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateEmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date d’émission</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agentEmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent émetteur</FormLabel>
              <FormControl>
                <Input placeholder="ex : Mme Belkacem" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mentionSpeciale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mention spéciale (optionnelle)</FormLabel>
              <FormControl>
                <Input placeholder="Observations ou mentions supplémentaires" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-12 text-base">
          Terminer le processus
        </Button>
      </form>
    </Form>
  )
}
