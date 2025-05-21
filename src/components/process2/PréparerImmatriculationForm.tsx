import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

const schema = z.object({
  acteDefinitif: z
    .any()
    .refine((file) => file?.[0], {
      message: "Veuillez joindre l'acte définitif.",
    }),
  commentaire: z.string().optional(),
  conformitéType: z.string().min(1, 'Le type d’acte est requis'),
})

const possessionTypes = [
    { label: 'Justifié', value: 'Justifié' },
    { label: 'Non Justifié', value: 'Non Justifié' },
  ]


type FormData = z.infer<typeof schema>

export default function PreparerImmatriculationForm() {
    const navigate = useNavigate()
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      commentaire: "",
    },
  })

  const onSubmit = (data: FormData) => {
    const file = data.acteDefinitif[0]
    console.log("📎 Acte définitif :", file)
    console.log("📝 Commentaire :", data.commentaire)
    navigate("/fin2")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow space-y-6"
      >
        <h2 className="text-xl font-bold">Préparer l'immatriculation définitive</h2>

        {/* Acte définitif (fichier) */}
        <FormField
          control={form.control}
          name="acteDefinitif"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Joindre l'acte définitif</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.png,.jpeg"
                  onChange={(e) => field.onChange(e.target.files)}
                />
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
          name="possessionTypes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de Possession</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 text-base w-full">
                    <SelectValue placeholder="Sélectionnez un type de conformité" />
                  </SelectTrigger>
                </FormControl>
                <FormDescription>
              
              </FormDescription>
                <SelectContent>
                  {possessionTypes.map((item) => (
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

        {/* Commentaire (facultatif) */}
        <FormField
          control={form.control}
          name="commentaire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commentaire (facultatif)</FormLabel>
              <FormControl>
                <Textarea placeholder="Ajouter une note ou remarque si nécessaire" {...field} />
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
