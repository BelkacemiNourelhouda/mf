import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

import { useNavigate } from "react-router-dom"

const refusEncaissementSchema = z.object({
  numeroDossier: z.string().min(1, "Numéro obligatoire"),
  motif: z.string().min(5, "Motif trop court"),
  dateRefus: z.string().min(1, "Date requise"),
  conformitéType: z.string().min(1, 'Le type d’acte est requis'),
})


const conformitéTypes = [
    { label: 'Conforme', value: 'Conforme' },
    { label: 'Non Conforme', value: 'Non Conforme' },
  ]


type RefusEncaissementValues = z.infer<typeof refusEncaissementSchema>

export default function Process1RefusEncaissement() {
const navigate = useNavigate()
  const form = useForm<RefusEncaissementValues>({
    resolver: zodResolver(refusEncaissementSchema),
    defaultValues: {
      numeroDossier: "",
      motif: "",
      dateRefus: "",
    },
  })

  const onSubmit = (values: RefusEncaissementValues) => {
    console.log("❌ Refus enregistré :", values)
    if (values.conformitéType === "Conforme") {
        navigate("/levementReservation2")
      } else {
        navigate("/fin")
      }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl p-6 bg-white shadow rounded mx-auto">
      <h2 className="text-xl font-bold mb-4">Enregistrer le Refus du Depot</h2>
        <FormField
          control={form.control}
          name="numeroDossier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de dossier</FormLabel>
              <FormControl>
                <Input {...field} placeholder="2025-00123" />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motif"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Motif du refus</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: Dossier incomplet" />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateRefus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date du refus</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
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

        <Button type="submit" className="w-full">
          Enregistrer le refus
        </Button>
      </form>
    </Form>
  )
}
