import React, { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Article } from '@/components/templates/index'
interface OptionsListProps {
  options: {
    title: string;
    description: string;
    suboptions: {
      options: {
        title: string
        description: string
      }[]
    }[]
  }[];
}

const OptionsObject: OptionsListProps = {
  options: [
    {
      title: 'Option 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
      suboptions: [
        {
          options: [
            {
              title: 'Suboption 1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
          ]
        }
      ]
    },
    {
      title: 'Option 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
      suboptions: [
        {
          options: [
            {
              title: 'Suboption 1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
          ]
        }
      ]
    },
    {
      title: 'Option 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
      suboptions: [
        {
          options: [
            {
              title: 'Suboption 1',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
            {
              title: 'Suboption 2',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
            },
          ],
        },
      ]
    },
  ]
}

const OptionsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  React.useEffect(() => {
    const N = OptionsObject.options.length
    const nextIndex = (currentIndex + 1) % N
    setTimeout(() => {
      setCurrentIndex(nextIndex)
    } , 3000 * 10)
  }, [currentIndex])
  return (
    <Article>
      {OptionsObject.options.map((option, index) => (
        <Card key={index} className={index === currentIndex ? 'active' : ''}>
          <CardHeader>
            <CardTitle>{option.title}</CardTitle>
            <CardDescription>{option.description}</CardDescription>
          </CardHeader>
          {option.suboptions && (
            <ScrollArea>
              {option.suboptions[0].options.map((suboption, subIndex) => (
                <Card key={subIndex}>
                  <CardHeader>
                    <CardTitle>{suboption.title}</CardTitle>
                    <CardDescription>{suboption.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </ScrollArea>
          )}
        </Card>
      ))}
    </Article>
  )
}

export default OptionsList