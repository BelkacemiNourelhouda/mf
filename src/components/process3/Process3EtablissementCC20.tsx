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

const cc20Schema = z.object({
  numeroCC20: z.string().min(1, 'Numéro du CC20 requis'),
  dateEtablissement: z.string().min(1, 'Date requise'),
  agentEtablissement: z.string().min(1, 'Nom de l’agent requis'),
  referenceActe: z.string().min(1, 'Référence de l’acte requise'),
})

type CC20Values = z.infer<typeof cc20Schema>

export default function Process3EtablissementCC20() {
  const navigate = useNavigate()

  const form = useForm<CC20Values>({
    resolver: zodResolver(cc20Schema),
    defaultValues: {
      numeroCC20: '',
      dateEtablissement: '',
      agentEtablissement: '',
      referenceActe: '',
    },
  })

  function onSubmit(values: CC20Values) {
    console.log('📐 CC20 établi :', values)
    navigate('/fin-processus')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Établissement du CC20</h2>

        <FormField
          control={form.control}
          name="numeroCC20"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro CC20</FormLabel>
              <FormControl>
                <Input placeholder="CC20-2025-001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateEtablissement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date d’établissement</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agentEtablissement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent responsable</FormLabel>
              <FormControl>
                <Input placeholder="ex : M. Touati" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="referenceActe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Référence de l’acte</FormLabel>
              <FormControl>
                <Input placeholder="ex : ACT-2025-77" {...field} />
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
