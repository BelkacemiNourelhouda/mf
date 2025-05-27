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

const reserveFormeSchema = z.object({
  numeroDossier: z.string().min(1, "Numéro requis"),
  justificatif: z.string().min(5, "Justificatif requis"),
  code: z.string().min(1, "Numéro requis"),
  ccp: z.string().min(5, "Justificatif requis"),
  dateLevee: z.string().min(1, "Date requise"),
})

type ReserveFormeValues = z.infer<typeof reserveFormeSchema>

export default function Process1LeverReserveForme2() {
    const navigate = useNavigate()
  const form = useForm<ReserveFormeValues>({
    resolver: zodResolver(reserveFormeSchema),
    defaultValues: {
      numeroDossier: "",
      justificatif: "",
      dateLevee: "",
    },
  })

  const onSubmit = (values: ReserveFormeValues) => {
    console.log("✅ Réserve levée :", values)
    navigate("/Process1EncaissementTaxe")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl p-6 bg-white shadow rounded mx-auto">
      <h2 className="text-xl font-bold mb-4">Lever La Reserve</h2>
        <FormField
          control={form.control}
          name="numeroDossier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de dossier</FormLabel>
              <FormControl>
                <Input {...field} placeholder="ex: 2025-00123" />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="justificatif"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Justificatif</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Référence ou document fourni..." />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateLevee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de levée</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>VOUS DEVEREZ PAYER 1000.00DA</p>

        <FormField
          control={form.control}
          name="ccp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CCP</FormLabel>
              <FormControl>
                <Input {...field} placeholder="1234-5678-9123-4567" />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CODE </FormLabel>
              <FormControl>
                <Input {...field} placeholder="123" />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Valider la levée
        </Button>
      </form>
    </Form>
  )
}
