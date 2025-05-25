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

const changementSchema = z.object({
  affecteNumerotation: z.string().min(1, 'Ce champ est requis'),
})

type ChangementType = z.infer<typeof changementSchema>

export default function Process3TypeChangement() {
  const navigate = useNavigate()

  const form = useForm<ChangementType>({
    resolver: zodResolver(changementSchema),
    defaultValues: {
      affecteNumerotation: '',
    },
  })

  function onSubmit(values: ChangementType) {
    if (values.affecteNumerotation === 'oui') {
      navigate('/etablissement-pr14')
    } else {
      navigate('/etablissement-cc20')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl p-6 bg-white rounded-lg shadow mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">
          Type de changement cadastral
        </h2>

        <FormField
          control={form.control}
          name="affecteNumerotation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Le changement affecte-t-il la numérotation cadastrale ?
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 text-base w-full">
                    <SelectValue placeholder="Sélectionnez une option" />
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
          Continuer
        </Button>
      </form>
    </Form>
  )
}
