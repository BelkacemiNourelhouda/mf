import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

const fondSchema = z.object({
    decisionFond: z.enum(["conforme", "non conforme"], {
      required_error: "Veuillez sélectionner une décision",
    }),
    justification: z.string().optional(),
  }).superRefine((data, ctx) => {
    if (data.decisionFond === "non conforme" && (!data.justification || data.justification.trim().length < 3)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "La justification est requise pour un rejet.",
        path: ["justification"],
      })
    }
  })
  

type FondFormValues = z.infer<typeof fondSchema>

export default function ExaminerFondForm() {
  const navigate = useNavigate()
  const form = useForm<FondFormValues>({
    resolver: zodResolver(fondSchema),
    defaultValues: {
      decisionFond: undefined,
      justification: "",
    },
  })

  const decision = form.watch("decisionFond")

  const onSubmit = (data: FondFormValues) => {
    console.log("✅ Données : ", data)
    if (data.decisionFond === "conforme") {
      navigate("/immatriculationProv")
    } else {
      navigate("/finNegative")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-white rounded shadow space-y-4">
        <h2 className="text-xl font-bold">Examen de la conformité de fond</h2>

        <FormField
          control={form.control}
          name="decisionFond"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Résultat de l’examen de fond</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une décision" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="conforme">Conforme</SelectItem>
                  <SelectItem value="non conforme">Non Conforme</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
            control={form.control}
            name="justification"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Justification de la conformité <span className="text-sm italic">(acte ayant une date certaine...)</span></FormLabel>
                <FormControl>
                  <Textarea placeholder="Exemple : Acte non enregistré ou contenant des erreurs majeures..." {...field} />
                </FormControl>
                <FormDescription>
              
              </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

        <Button type="submit" className="w-full">Continuer</Button>
      </form>
    </Form>
  )
}
