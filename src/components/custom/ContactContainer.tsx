import { CustomCard as Card } from ".";

const ContactContainer = ({ cardContent, title }: { cardContent: React.ReactNode, title: string }) => {
  return (
    <>
      <Card
        className={`
          w-fit flex flex-col justify-between items-center select-none bg-transparent
        `}
        title={title}
        cardContent={cardContent}        
      />
    </>
  )
}

export default ContactContainer