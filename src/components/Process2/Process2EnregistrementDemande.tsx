import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  
const demandeSchema = z.object({
  numeroIdentite: z.string().min(1, "Numéro de pièce d'identité requis"),
  extraitNaissance: z.string().min(1, "Numéro d'extrait de naissance requis"),
  justificatifPossession: z.instanceof(File).refine(
    (file) => file.size <= 5_000_000, 
    "Le fichier ne doit pas dépasser 5MB"
  ),
  adresse: z.string().min(1, 'L’adresse est requise'),
    conformitéType: z.string().min(1, 'Le type d’acte est requis'),
})
const conformitéTypes = [
    { label: 'Conforme', value: 'Conforme' },
    { label: 'Non Conforme', value: 'Non Conforme' },
  ]

type DemandeValues = z.infer<typeof demandeSchema>

export default function Process2EnregistrementDemande() {
    const navigate = useNavigate()
    const form = useForm<DemandeValues>({
    
    resolver: zodResolver(demandeSchema),
    defaultValues: {
      numeroIdentite: "",
      extraitNaissance: "",
      adresse: '',
    },
  })

  const onSubmit = (values: DemandeValues) => {
    console.log("📩 Données enregistrées :", values)
    if (values.conformitéType === "Conforme") {
        navigate("/Process2ExaminerFond")
      } else {
        navigate("/Process2RejetProvisoire")
      }  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl p-6 bg-white rounded-lg shadow mx-auto">
        <h2 className="text-xl font-bold mb-4">Enregistrement de la demande</h2>

        <FormField
          control={form.control}
          name="numeroIdentite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de pièce d'identité</FormLabel>
              <FormControl>
                <Input placeholder="ex: 0123456789" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <FormField
          control={form.control}
          name="extraitNaissance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro d'extrait de naissance</FormLabel>
              <FormControl>
                <Input placeholder="ex: 123-456-789" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
  control={form.control}
  name="justificatifPossession"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Document justificatif de possession</FormLabel>
      <FormControl>
        <Input 
          type="file"
          onChange={(e) => {
            // Gérer le changement de fichier
            field.onChange(e.target.files ? e.target.files[0] : null);
          }}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" // Types de fichiers acceptés
        />
      </FormControl>
      <FormDescription>
        Formats acceptés: PDF, Word, JPG, PNG
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
              <FormLabel>Adresse Email</FormLabel>
              <FormControl>
                <Input placeholder="abc@gmail.com" {...field} className="h-12 text-base w-full" />
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
          Enregistrer
        </Button>
      </form>
    </Form>
  )
}
