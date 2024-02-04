"use client"
import React, { useEffect, useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Article } from '@/components/templates/index'
import { OptionsObject } from '@/constants'

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
    <Article
      className={`
        flex flex-row items-center justify-center gap-4
      `}
    >
      <Card
        className={`
          active flex flex-row
        `}
      >
        <CardHeader
          className={`

          `}
        >
          <CardTitle
            className={`

            `}
          >
            {currentOption.title}
          </CardTitle>
          <CardDescription
            className={`

            `}
          >
            {currentOption.description}
          </CardDescription>
        </CardHeader>
        {currentOption.suboptions && (
          <ScrollArea
            className={`
              
            `}
          >
            {currentOption.suboptions[0].options.map((suboption, subIndex) => (
              <Card
                key={subIndex}
                className={`

                `}
              >
                <CardHeader
                  className={`

                  `}
                >
                  <CardTitle
                    className={`

                    `}
                  >
                    {suboption.title}
                  </CardTitle>
                  <CardDescription
                    className={`

                    `}
                  >
                    {suboption.description}
                  </CardDescription>
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