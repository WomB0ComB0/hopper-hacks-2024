import { cn } from "@/lib/utils";
export const CenterLayout: React.FC<Readonly<{
  children: React.ReactNode
}> & { 
  className?: string; 
  Element: React.ElementType
}> = ({ children, className, Element}): JSX.Element => {
  return (
    <Element className={cn(`h-full flex items-center justify-center`, className)}>
      {children}
    </Element>
  );
};