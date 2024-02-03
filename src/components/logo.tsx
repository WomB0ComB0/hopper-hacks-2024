import Link from "next/link";
import Image from "next/image";
import { PrimitiveDiv as Div } from "./templates";
import { cn } from "@/lib/utils";

export const Logo: React.FC<LogoProps> = ({ name, ContainerClassName, height = 10, width, ImageClassName }) => {
  return (
    <Link href="/">
      <Div className={cn('hover:opacity-75 transition items-center gap-x-2 hidden md:flex', ContainerClassName)}>
        <Image
          src="/assets/svgs/logo.svg"
          alt="Logo"
          height={height || 30}
          width={width || 30}
          className={cn('rounded-full object-cover', ImageClassName)}
        />
        {name ? (
          <p className={cn(
            "text-lg text-neutral-700 pb-1",
            'font-semibold'
          )}>
            {name}
          </p>
        ) : null}
      </Div>
    </Link>
  );
};