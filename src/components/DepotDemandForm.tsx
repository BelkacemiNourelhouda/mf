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

const acteTypes = [
  { label: 'EDD', value: 'EDD' },
  { label: 'Vente', value: 'vente' },
  { label: 'Achat', value: 'achat' },
  { label: 'Hypothèque', value: 'hypotheque' },
  { label: 'Privilège', value: 'privilege' },
  { label: 'Échange', value: 'echange' },
  { label: 'Donation', value: 'donation' },
]

const conformitéTypes = [
  { label: 'Conforme', value: 'Conforme' },
  { label: 'Non Conforme', value: 'Non Conforme' },
]

const depotFormSchema = z.object({
  numeroDossier: z.string().min(1, 'Le numéro de dossier est requis'),
  acteType: z.string().min(1, 'Le type d’acte est requis'),
  nom: z.string().min(1, 'Le nom est requis'),
  prenom: z.string().min(1, 'Le prénom est requis'),
  telephone: z
    .string()
    .min(6, 'Numéro de téléphone invalide')
    .max(20),
  adresse: z.string().min(1, 'L’adresse est requise'),
  nomNotaire: z.string().min(1, 'Le nom du notaire est requis'),
  conformitéType: z.string().min(1, 'Le type d’acte est requis'),
})

type DepotFormValues = z.infer<typeof depotFormSchema>

export default function DepotDemandForm() {
  const navigate = useNavigate()

  const form = useForm<DepotFormValues>({
    resolver: zodResolver(depotFormSchema),
    defaultValues: {
      numeroDossier: '',
      acteType: '',
      nom: '',
      prenom: '',
      telephone: '',
      adresse: '',
      nomNotaire: '',
    },
    mode: 'onChange',
  })

  function onSubmit(values: DepotFormValues) {
    console.log('🔄 Données soumises :', values)
    if (values.conformitéType === "Conforme") {
      navigate("/encaissement")
    } else {
      navigate("/refusDepot")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Deposer Votre Acte</h2>
        {/* Numéro de dossier */}
        <FormField
          control={form.control}
          name="numeroDossier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de dossier</FormLabel>
              <FormControl>
                <Input
                  placeholder="ex : 2025-00123"
                  {...field}
                 
                />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Type d’acte */}
        <FormField
          control={form.control}
          name="acteType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type d’acte</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 text-base w-full">
                    <SelectValue placeholder="Sélectionnez un type d’acte" />
                  </SelectTrigger>
                </FormControl>
                <FormDescription>
              
              </FormDescription>
                <SelectContent>
                  {acteTypes.map((item) => (
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

        {/* Nom */}
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom du client" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Prénom */}
        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Prénom du client" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Téléphone */}
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone</FormLabel>
              <FormControl>
                <Input placeholder="ex : 0555 55 55 55" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Adresse */}
        <FormField
          control={form.control}
          name="adresse"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse</FormLabel>
              <FormControl>
                <Input placeholder="Adresse complète" {...field} className="h-12 text-base w-full" />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nom du notaire */}
        <FormField
          control={form.control}
          name="nomNotaire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du notaire</FormLabel>
              <FormControl>
                <Input placeholder="ex : Me Benameur" {...field} className="h-12 text-base w-full" />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
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
          Enregistrer la demande
        </Button>
      </form>
    </Form>
  )
}
