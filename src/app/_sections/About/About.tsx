import React from 'react'
import { Article, PrimitiveArticle } from '@/components/templates/index'
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@/components/ui/card'
import { FaBullseye, FaEye, FaHeart, FaFlag, FaBullhorn, FaRocket, FaHandshake, FaThumbsUp } from 'react-icons/fa';



interface AboutListProps {
  icon: React.SVGAttributes<SVGElement>;
  title: string
  description: string
}

const DummyLorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ex necessitatibus excepturi, id modi repellat.'

const AboutList: AboutListProps[] = [
  {
    icon: <FaBullseye />,
    title: 'Our Mission',
    description: DummyLorem
  },
  {
    icon: <FaEye />,
    title: 'Our Vision',
    description: DummyLorem
  },
  {
    icon: <FaHeart />,
    title: 'Our Values',
    description: DummyLorem
  },
  {
    icon: <FaFlag />,
    title: 'Our Goals',
    description: DummyLorem
  },
  {
    icon: <FaBullhorn />,
    title: 'Our Objectives',
    description: DummyLorem
  },
  {
    icon: <FaRocket />,
    title: 'Our Purpose',
    description: DummyLorem
  },
  {
    icon: <FaHandshake />,
    title: 'Our Commitment',
    description: DummyLorem
  },
  {
    icon: <FaThumbsUp />,
    title: 'Our Promise',
    description: DummyLorem
  },
]
const About: React.FC = () => {
  return (
    <PrimitiveArticle>
      {AboutList.map((value, index) => {
        return (
          <Card
            key={index}
            className={`
              w-fit flex flex-row-reverse items-center justify-center gap-2 rounded-lg shadow-md
            `}
          >
            <CardHeader>
              <CardTitle
                className={`
                  text-2xl font-semibold
                `}
              >
                {value.title}
              </CardTitle>
              <CardDescription
                className={`
                  text-sm font-normal
                `}
              >
                {value.description}
              </CardDescription>
            </CardHeader>
            <CardContent
              className={`
                flex flex-col items-center justify-center
              `}
            >
              <>
                {value.icon}
                <span
                  className={`
                    text-4xl z-10
                  `}
                >
                  {index}
                </span>
              </>
            </CardContent>
          </Card>
        )
      })}
    </PrimitiveArticle>
  )
}
export default About