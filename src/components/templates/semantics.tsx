import * as MotionElement from '@/constants/Motion'
import { SemanticProps } from '@/types/semantic-props'
import { cn } from '@/lib/utils'

export const Article: React.FC<SemanticProps<'article'>> = ({ framer, children, className, attributes, style, framerProps, key }) => {
  type SectionMotionProps = typeof MotionElement.MotionArticle extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionElement.MotionArticle {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionElement.MotionArticle>
      ) : (
        <article {...attributes} className={cn('', className)} style={style}>
          {children}
        </article>
      )}
    </>
  );
}

export const Footer: React.FC<SemanticProps<'footer'>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionElement.MotionFooter extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionElement.MotionFooter {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionElement.MotionFooter>
      ) : (
        <footer {...attributes} className={cn('', className)} style={style}>
          {children}
        </footer>
      )}
    </>
  );
}

export const Header: React.FC<SemanticProps<'header'>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionElement.MotionHeader extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionElement.MotionHeader {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionElement.MotionHeader>
      ) : (
        <header {...attributes} className={cn('', className)} style={style}>
          {children}
        </header>
      )}
    </>
  );
}

export const Main: React.FC<SemanticProps<'main'>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionElement.MotionMain extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionElement.MotionMain {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionElement.MotionMain>
      ) : (
        <main {...attributes} className={cn('', className)} style={style}>
          {children}
        </main>
      )}
    </>
  );
}

export const Nav: React.FC<SemanticProps<'nav'>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionElement.MotionNav extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionElement.MotionNav {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionElement.MotionNav>
      ) : (
        <nav {...attributes} className={cn('', className)} style={style}>
          {children}
        </nav>
      )}
    </>
  );
}

export const Picture: React.FC<SemanticProps<'picture'>> = ({ framer, framerProps, attributes, key, style, className, children }) => {
  type SectionMotionProps = typeof MotionElement.MotionPicture extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionElement.MotionPicture {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionElement.MotionPicture>
      ) : (
        <picture {...attributes} className={cn('', className)} style={style}>
          {children}
        </picture>
      )}
    </>
  );
}

export const Section: React.FC<SemanticProps<'section'>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionElement.MotionSection extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionElement.MotionSection
          {...(framerProps as SectionMotionProps)}
          className={cn('', className)}
          style={style}
          key={key}
        ></MotionElement.MotionSection>
      ) : (
        <section {...attributes} className={cn('', className)} style={style}>
          {children}
        </section>
      )}
    </>
  );
}
