import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { Section, PrimitiveDiv as Div } from '@/components/templates/index'
import { FAQList } from '@/constants'

const FAQ: React.FC = () => {
  return (
    <Div
      className={`
        flex flex-row gap-4 items-center justify-center
      `}
    >
      {Object.entries(FAQList).map(([key, section]) => (
        <Accordion
          type="single"
          collapsible
          className={`
            w-[50%]
          `}
          key={key}
        >
          {section.map((value: { question: string, answer: string }, idx: string | number) => (
            <AccordionItem key={idx} value={`question-set-${idx}`}>
              <AccordionTrigger>
                <h3 className="text-lg font-semibold">{value.question}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">{value.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ))}
    </Div>
  )
}

export default FAQ