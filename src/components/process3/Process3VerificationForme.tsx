import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useNavigate } from 'react-router-dom'

const decisionSchema = z.object({
  formeValide: z.string().min(1, 'Veuillez sélectionner une décision'),
})

type FormeDecision = z.infer<typeof decisionSchema>

export default function Process3VerificationForme() {
  const navigate = useNavigate()

  const form = useForm<FormeDecision>({
    resolver: zodResolver(decisionSchema),
    defaultValues: {
      formeValide: '',
    },
  })

  function onSubmit(values: FormeDecision) {
    if (values.formeValide === 'oui') {
      navigate('/Processus3TypeChangement')
    } else {
      navigate('/Processus3Notification')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Vérification de la forme</h2>

        <FormField
          control={form.control}
          name="formeValide"
          render={({ field }) => (
            <FormItem>
              <FormLabel>La forme de la demande est-elle conforme ?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 text-base w-full">
                    <SelectValue placeholder="Sélectionnez une décision" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="oui">Oui</SelectItem>
                  <SelectItem value="non">Non</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-12 text-base">
          Valider la décision
        </Button>
      </form>
    </Form>
  )
}
