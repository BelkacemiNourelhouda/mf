import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useNavigate } from "react-router-dom"

const refusDepotSchema = z.object({
  numeroDossier: z.string().min(1, "Numéro obligatoire"),
  motif: z.string().min(5, "Motif trop court"),
  dateRefus: z.string().min(1, "Date requise"),
})

type RefusDepotValues = z.infer<typeof refusDepotSchema>

export default function Process1RefusDepot() {
    const navigate = useNavigate()
  const form = useForm<RefusDepotValues>({
    resolver: zodResolver(refusDepotSchema),
    defaultValues: {
      numeroDossier: "",
      motif: "",
      dateRefus: "",
    },
  })

  const onSubmit = (values: RefusDepotValues) => {
    console.log("❌ Refus enregistré :", values)
    navigate("/levementReservation")
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

        <Button type="submit" className="w-full">
          Enregistrer le refus
        </Button>
      </form>
    </Form>
  )
}
