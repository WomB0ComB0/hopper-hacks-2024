import React from 'react'
import { Article, PrimitiveArticle } from '@/components/templates/index'
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@/components/ui/card'
import { AboutList } from '@/constants'

const About: React.FC = () => {
  return (
    <PrimitiveArticle
      className={`
        grid items-center justify-center gap-8 mx-0 bg-primary-background grid-cols-2 border-2 
      `}
    >
      {AboutList.map((value, index) => {
        return (
          <Card
            key={index}
            className={`
              w-[400px] flex flex-row  items-center gap-4 rounded-lg shadow-md 
            `}
          >
            <CardContent
              className={`
              flex flex-col items-center justify-center p-6
              `}
            >
              <span
                className={`
                bg-[#3369ff] text-primary-background rounded-full p-4
                `}
              >
                <>
                  {value.icon}
                </>
              </span>
            </CardContent>
            <CardHeader
              className={`
                w-1/2 flex flex-col items-start justify-center px-0
              `}
            >
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
          </Card>
        )
      })}
    </PrimitiveArticle>
  )
}
export default About