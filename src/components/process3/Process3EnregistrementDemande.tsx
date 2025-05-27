import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
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

const enregistrementSchema = z.object({
  numeroDemande: z.string().min(1, 'Le numéro de demande est requis'),
  dateDepot: z.string().min(1, 'La date de dépôt est requise'),
  nomDemandeur: z.string().min(1, 'Le nom du demandeur est requis'),
  prenomDemandeur: z.string().min(1, 'Le prénom du demandeur est requis'),
  referenceCadastrale: z.string().min(1, 'La référence cadastrale est requise'),
  conformitéType: z.string().min(1, 'Le type d’acte est requis'),
})

type EnregistrementValues = z.infer<typeof enregistrementSchema>
const conformitéTypes = [
  { label: 'Conforme', value: 'Conforme' },
  { label: 'Non Conforme', value: 'Non Conforme' },
]

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
    if (values.conformitéType === "Conforme") {
      navigate("/Processus3VerificationForme")
    } else {
      navigate("/Process3Notifier")
    } 
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

        
 {/* conformité */}
 <FormField
          control={form.control}
          name="conformitéType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de conformité</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 text-base w-full">
                    <SelectValue placeholder="Sélectionnez un type de conformité" />
                  </SelectTrigger>
                </FormControl>
                <FormDescription>
              
              </FormDescription>
                <SelectContent>
                  {conformitéTypes.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
