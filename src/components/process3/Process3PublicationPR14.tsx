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

const publicationSchema = z.object({
  numeroPR14: z.string().min(1, 'Numéro PR14 requis'),
  datePublication: z.string().min(1, 'Date requise'),
  agentPublication: z.string().min(1, 'Nom de l’agent requis'),
  remarques: z.string().optional(),
})

type PublicationValues = z.infer<typeof publicationSchema>

export default function Process3PublicationPR14() {
  const navigate = useNavigate()

  const form = useForm<PublicationValues>({
    resolver: zodResolver(publicationSchema),
    defaultValues: {
      numeroPR14: '',
      datePublication: '',
      agentPublication: '',
      remarques: '',
    },
  })

  function onSubmit(values: PublicationValues) {
    console.log('📢 PR14 publié :', values)
    navigate('/Processus3EmissionCC14')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Publication du PR14</h2>

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
          name="datePublication"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de publication</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agentPublication"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent responsable</FormLabel>
              <FormControl>
                <Input placeholder="ex : Mlle Ait Ahmed" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="remarques"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Remarques (optionnel)</FormLabel>
              <FormControl>
                <Input placeholder="Saisir une remarque" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-12 text-base">
          Émettre le CC14
        </Button>
      </form>
    </Form>
  )
}
