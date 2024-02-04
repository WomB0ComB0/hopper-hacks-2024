import React from 'react'
import { Article, PrimitiveArticle } from '@/components/templates/index'
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@/components/ui/card'
import { AboutList } from '@/constants'

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
              <span
                className={``}
              >
                <>
                  {value.icon}
                </>
              </span>
            </CardContent>
          </Card>
        )
      })}
    </PrimitiveArticle>
  )
}
export default About