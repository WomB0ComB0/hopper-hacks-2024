type PrimitiveSemanticProps<E extends HTMLElement = HTMLElement> = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<E>, E>;

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "link" | "default" | "outline" | "destructive" | "secondary" | "ghost";
};

interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FAQListProps {
  section1: {
    question: string;
    answer: string;
  }[];
  section2: {
    question: string;
    answer: string;
  }[];
}

interface AboutListProps {
  icon: React.SVGAttributes<SVGElement>;
  title: string
  description: string
}

interface AboutListProps {
  icon: React.SVGAttributes<SVGElement>;
  title: string
  description: string
}

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

interface FooterProps {
  title: string;
  socials?: {
    title: string;
    url: string;
    icon: React.SVGAttributes<SVGElement>;
  }[];
  links?: {
    name: string;
    link: string;
  }[];
}

interface CustomButtonProps extends FormSubmitProps {
  onClick?: () => void | Promise<void>;
  type?: "button" | "submit" | "reset";
}

interface LogoProps {
  name?: string;
  ContainerClassName?: string;
  height?: number;
  width?: number;
  ImageClassName?: string;
}

type MetadataProps = {
  noIndex?: boolean
  image?: string
  icons?: string
  title?: string
  description?: string
}

type DeepReadOnly<T extends readonly any[], N extends readonly any[]> = [...T, ...N];

// Omits keys from an object where the value matches a specified type.
type OmitByType<T, U> = T extends object
  ? {
      [K in keyof T as T[K] extends U ? never : K]: T[K]
    }
  : never

// Makes all properties of an object (and its nested objects) optional.
type DeepPartial<T extends object> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

interface CustomCardProps<T = React.ReactNode> extends Record<string, T> {}

type Prettify<T> = {
  [K in keyof T]: T[K];
} & [];