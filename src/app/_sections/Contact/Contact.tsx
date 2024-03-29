"use client"
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { CustomButton as Button } from '@/components/custom';
import { ContactForm, contactFormSchema } from '@/lib/form';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
    const remaining = 1000 - currentLength;
    setCharactersLeft(remaining);
  };
  return (
    <>
      <ContactContainer
        title={`Contact form`}
        cardContent={
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mx-auto space-y-8 select-none w-[80vw]">
            <div className="flex space-x-2">
              <Input {...form.register('name')} placeholder="Name" className="input-style" type="text" required maxLength={255} />
              <Input {...form.register('email')} placeholder="Email" className="input-style" type="email" required maxLength={255} />
            </div>
            <Input {...form.register('subject')} placeholder="Subject" className="input-style" type="text" required maxLength={255} />
            <Textarea
              autoCapitalize="sentences"
              autoCorrect="on"
              spellCheck="true"
              {...form.register('message')}
              placeholder="Message"
              maxLength={1000}
              required
              onChange={handleTextareaChange}
              className="input-style max-h-[500px] min-h-[100px]"
            />
            <p className="text-sm text-gray-500">Characters left: {charactersLeft}</p>
            <Button type="submit" className="submit-button">
              Submit
            </Button>
          </form>
        }
      />
    </>
  )
}

export default Contact