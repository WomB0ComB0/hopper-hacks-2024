import { HTMLMotionProps } from 'framer-motion';

type Semantics =
  | 'article'
  | 'footer'
  | 'header'
  | 'main'
  | 'nav'
  | 'picture'
  | 'section'
  | 'div';


export interface SemanticProps<T extends Semantics> extends React.PropsWithChildren<React.HTMLProps<HTMLElement>> {
  ref?: React.Ref<HTMLElement>;
  framer?: boolean;
  element?: T;
  framerProps?: HTMLMotionProps<T>;
  attributes?: JSX.IntrinsicElements[T];
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
}
