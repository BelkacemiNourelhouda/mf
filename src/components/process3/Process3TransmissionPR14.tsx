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

const transmissionSchema = z.object({
  numeroPR14: z.string().min(1, 'Numéro PR14 requis'),
  dateTransmission: z.string().min(1, 'Date requise'),
  agentResponsable: z.string().min(1, 'Agent requis'),
})

type TransmissionValues = z.infer<typeof transmissionSchema>

export default function Process3TransmissionPR14() {
  const navigate = useNavigate()

  const form = useForm<TransmissionValues>({
    resolver: zodResolver(transmissionSchema),
    defaultValues: {
      numeroPR14: '',
      dateTransmission: '',
      agentResponsable: '',
    },
  })

  function onSubmit(values: TransmissionValues) {
    console.log('📤 PR14 transmis :', values)
    navigate('/Processus3PublicationPR14')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Transmission du PR14 visé</h2>

        <FormField
          control={form.control}
          name="numeroPR14"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro PR14</FormLabel>
              <FormControl>
                <Input placeholder="PR14-2025-001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateTransmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de transmission</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agentResponsable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent responsable</FormLabel>
              <FormControl>
                <Input placeholder="ex : M. Benameur" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-12 text-base">
          Envoyer vers publication
        </Button>
      </form>
    </Form>
  )
}
