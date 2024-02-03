"use client"
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { CustomButton } from '@/components/custom';
import { ContactForm, contactFormSchema } from '@/lib/form';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ContactContainer from '@/components/custom/ContactContainer';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const onSubmit: SubmitHandler<ContactFormProps> = (formData) => { window.location.href = `mailto:mikeodnis3242004@gmail.com?subject=${formData.subject}&body=${formData.message}` };
  const [charactersLeft, setCharactersLeft] = useState(500);
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  })
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentLength = event.target.value.length;
    const remaining = 500 - currentLength;
    setCharactersLeft(remaining);
  };
  return (
    <>
      <ContactContainer
        title={`Contact form`}
        cardContent={
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={`
                  space-y-8
                `}
              autoComplete={`on`}
            >
              <FormField
                control={form.control}
                name={`name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={``} autoCapitalize={`on`} type={`text`} required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`email`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={``} type={`email`} required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`subject`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Subject
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={``} type={`text`} required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`message`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        autoCapitalize='sentences' autoCorrect='on'
                        spellCheck="true"
                        placeholder='Message'
                        maxLength={500}
                        required onChange={handleTextareaChange} />
                      <p className='text-sm text-accent-foreground'>Characters left: {charactersLeft}</p>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        }
      />
    </>
  )
}

export default Contact