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
  

const encaissementSchema = z.object({
  montant: z
    .string()
    .min(1, 'Le montant est requis')
    .regex(/^[0-9]+(\.[0-9]{1,2})?$/, 'Montant invalide'),
  reference: z.string().min(1, 'Référence obligatoire'),
  nomCaissier: z.string().min(1, 'Nom du caissier requis'),
  conformitéType: z.string().min(1, 'Conformité requise'),
})


const conformitéTypes = [
    { label: 'Conforme', value: 'Conforme' },
    { label: 'Non Conforme', value: 'Non Conforme' },
  ]

type EncaissementValues = z.infer<typeof encaissementSchema>

export default function EncaissementTaxeForm() {
const navigate = useNavigate()
  const form = useForm<EncaissementValues>({
    resolver: zodResolver(encaissementSchema),
    defaultValues: {
      montant: '',
      reference: '',
      nomCaissier: '',
    },
    mode: 'onChange',
  })

  const onSubmit = (values: EncaissementValues) => {
    console.log('✅ Encaissement soumis :', values)
    if (values.conformitéType === "Conforme") {
      navigate("/execution")
    } else {
      navigate("/refusEncaissement")
    }
 }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Encaissement de la taxe</h2>

        <FormField
          control={form.control}
          name="montant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Montant</FormLabel>
              <FormControl>
                <Input placeholder="ex : 5000.00" {...field} />
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
          name="nomCaissier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du caissier</FormLabel>
              <FormControl>
                <Input placeholder="ex : Mme Aït Ali" {...field} />
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
          Valider l'encaissement
        </Button>
      </form>
    </Form>
  )
}
