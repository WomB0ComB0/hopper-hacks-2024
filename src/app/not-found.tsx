import React from 'react'
import { PrimitiveMain as Main, PrimitiveSection as Section,PrimitivePicture as Picture, PrimitiveArticle as Article } from '@/components/templates'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

const NotFound = () => {
  return (
    <Main>
      <Section>
        <Article>
          <h1>
            404 - Page Not Found
          </h1>
          <p>
            The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
          </p>
        </Article>
        <Picture>
          <Image src="/404.svg" alt="404" width={500} height={500} />
        </Picture>
        <Button onClick={redirect('/')}>
          Go back home
        </Button>
      </Section>
    </Main>
  )
}
export default NotFound