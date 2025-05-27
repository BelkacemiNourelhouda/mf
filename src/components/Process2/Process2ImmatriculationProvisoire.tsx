import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { useNavigate } from "react-router-dom"

const schema = z.object({
  document: z
    .any()
    .refine((file) => file?.[0], {
      message: "Veuillez sélectionner un fichier.",
    }),
})

type ImmatriculationData = z.infer<typeof schema>

export default function Process2ImmatriculationProvisoire() {
  const navigate = useNavigate()

  const form = useForm<ImmatriculationData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: ImmatriculationData) => {
    const file = data.document[0]
    console.log("📎 Fichier sélectionné :", file)
    navigate("/Process2PreparationImmatriculation")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl p-6 bg-white rounded-lg shadow mx-auto mt-10"
      >
        <h2 className="text-xl font-semibold">Procéder à l'immatriculation provisoire</h2>

        <FormField
          control={form.control}
          name="document"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Joindre le document d'immatriculation (PDF, image...)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-12">Soumettre</Button>
      </form>
    </Form>
  )
}
