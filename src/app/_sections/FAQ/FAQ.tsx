import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { Section, PrimitiveDiv as Div } from '@/components/templates/index'

interface FAQListProps {
  section1: {
    question: string;
    answer: string;
  }[];
  section2: {
    question: string;
    answer: string;
  }[];
}

const FAQList: FAQListProps = {
  section1: [
    {
      question: "How can this web application help individuals dealing with depression?",
      answer: "Our web application provides a safe space for users experiencing emotional distress, offering resources, connecting them with empathetic individuals, and facilitating support to navigate through emotional challenges."
    },
    {
      question: "What kind of resources are available on the platform to assist with depression?",
      answer: "The platform offers a range of resources, including articles, coping mechanisms, self-help guides, and expert advice, tailored to help individuals understand and manage depression."
    },
    {
      question: "How does the web application connect users with empathetic individuals?",
      answer: "Through our community features, users can engage in discussions, share experiences, and connect with empathetic individuals who understand their struggles. Peer support and understanding play a crucial role in fostering a sense of community."
    },
    {
      question: "Can users remain anonymous while using the platform?",
      answer: "Yes, users have the option to remain anonymous if they choose, providing a secure and confidential environment for them to share their thoughts and feelings without fear of judgment."
    },
    {
      question: "What measures are in place to ensure the safety and well-being of users on the platform?",
      answer: "The platform employs robust moderation and reporting systems to maintain a positive and safe environment. Moderators monitor interactions, and users can report any inappropriate behavior or content."
    },
  ],
  section2: [
    {
      question: "How can the platform encourage open communication about mental health issues?",
      answer: "We promote open communication through forums, discussion threads, and user-generated content where individuals can share their experiences and insights. Breaking the stigma surrounding mental health is a key focus of the platform."
    },
    {
      question: "Are there trained professionals available on the platform for more serious mental health concerns?",
      answer: "While the platform provides peer support, we also emphasize the importance of seeking professional help. We offer information on mental health professionals and resources to guide users towards appropriate assistance."
    },
    {
      question: "Can users find local support groups through the web application?",
      answer: "Yes, the platform includes features that help users discover local support groups, fostering a sense of community both online and offline."
    },
    {
      question: "How can the web application assist friends and family in supporting individuals dealing with depression?",
      answer: "We provide resources and guides for friends and family to better understand depression, offering tips on providing support and encouragement to their loved ones."
    },
    {
      question: "Is the web application accessible to people with various levels of technological expertise?",
      answer: "Yes, the platform is designed to be user-friendly, ensuring accessibility for individuals with varying levels of technological proficiency to easily navigate and benefit from the available resources and support."
    },
  ],
};

const FAQ: React.FC = () => {
  return (
    <div>
      {Object.entries(FAQList).map(([key, section]) => (
        <Accordion type="single" collapsible key={key}>
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
    </div>
  )
}

export default FAQ