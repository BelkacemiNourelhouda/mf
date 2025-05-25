import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const enregistrementSchema = z.object({
  numeroDemande: z.string().min(1, 'Le numéro de demande est requis'),
  dateDepot: z.string().min(1, 'La date de dépôt est requise'),
  nomDemandeur: z.string().min(1, 'Le nom du demandeur est requis'),
  prenomDemandeur: z.string().min(1, 'Le prénom du demandeur est requis'),
  referenceCadastrale: z.string().min(1, 'La référence cadastrale est requise'),
})

type EnregistrementValues = z.infer<typeof enregistrementSchema>

export default function Process3EnregistrementDemande() {
  const navigate = useNavigate()

  const form = useForm<EnregistrementValues>({
    resolver: zodResolver(enregistrementSchema),
    defaultValues: {
      numeroDemande: '',
      dateDepot: '',
      nomDemandeur: '',
      prenomDemandeur: '',
      referenceCadastrale: '',
    },
    mode: 'onChange',
  })

  function onSubmit(values: EnregistrementValues) {
    console.log('📩 Enregistrement soumis :', values)
    navigate('/verification-forme') // étape suivante
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Enregistrement de la demande</h2>

        <FormField
          control={form.control}
          name="numeroDemande"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de la demande</FormLabel>
              <FormControl>
                <Input placeholder="ex : DEM-2025-0001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateDepot"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de dépôt</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nomDemandeur"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du demandeur</FormLabel>
              <FormControl>
                <Input placeholder="ex : Benali" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="prenomDemandeur"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom du demandeur</FormLabel>
              <FormControl>
                <Input placeholder="ex : Karim" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="referenceCadastrale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Référence cadastrale</FormLabel>
              <FormControl>
                <Input placeholder="ex : 25/125/2025" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-12 text-base">
          Enregistrer
        </Button>
      </form>
    </Form>
  )
}
