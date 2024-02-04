"use client"
import React, { useEffect, useState } from 'react'
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

const OptionsList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const N = OptionsObject.options.length;
    const nextIndex = (currentIndex + 1) % N;
    const timeoutId = setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, 3000 * 10);

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const currentOption = OptionsObject.options[currentIndex];

  return (
    <Article>
      <Card className={`active`}>
        <CardHeader>
          <CardTitle>{currentOption.title}</CardTitle>
          <CardDescription>{currentOption.description}</CardDescription>
        </CardHeader>
        {currentOption.suboptions && (
          <ScrollArea>
            {currentOption.suboptions[0].options.map((suboption, subIndex) => (
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
    </Article>
  );
};

export default OptionsList