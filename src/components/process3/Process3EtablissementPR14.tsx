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

const pr14Schema = z.object({
  numeroPR14: z.string().min(1, 'Numéro PR14 requis'),
  dateEtablissement: z.string().min(1, 'Date requise'),
  sectionCadastrale: z.string().min(1, 'Section cadastrale requise'),
  superficie: z.string().min(1, 'Superficie requise'),
})

type PR14Values = z.infer<typeof pr14Schema>

export default function Process3EtablissementPR14() {
  const navigate = useNavigate()

  const form = useForm<PR14Values>({
    resolver: zodResolver(pr14Schema),
    defaultValues: {
      numeroPR14: '',
      dateEtablissement: '',
      sectionCadastrale: '',
      superficie: '',
    },
  })

  function onSubmit(values: PR14Values) {
    console.log('📌 PR14 généré :', values)
    navigate('/Processus3TransmissionPR14')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Établissement du PR14</h2>

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
          name="sectionCadastrale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Section cadastrale</FormLabel>
              <FormControl>
                <Input placeholder="ex : A125" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="superficie"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Superficie (m²)</FormLabel>
              <FormControl>
                <Input placeholder="ex : 2500" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-12 text-base">
          Transmettre le PR14
        </Button>
      </form>
    </Form>
  )
}
