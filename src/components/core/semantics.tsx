"use client"
import { Nav, PrimitiveFooter as Footer } from "../templates";
import Image from "next/image";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { PrimitiveHeader as Header, PrimitiveSection as Section, Article, Picture } from '@/components/templates'
import { CustomButton as Button } from '@/components/custom'
import { ThemeButton } from "@/components/custom";
import Link from "next/link";

export const NavBar = () => {
  return (
    <Nav
      className={`
        w-full bg-foreground text-white p-4 flex justify-between items-center flex-row h-[80px] text-accent-foreground font-semibold top-0 sticky z-50
      `}
    >
      <p>
        HelpLine
      </p>
      <ul
        className={`
          flex justify-between items-center flex-row list-none gap-3
        `}
      >
        {["About", "Options", "FAQ", "Contact"].map((value) => {
          return (
            <li key={value}>
              <Link href={`${value}`}>
                {value}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='flex items-center gap-2'>
        <ThemeButton />
        <UserButton afterSignOutUrl="/" />
      </div>
    </Nav>
  );
}

export const FooterBar = () => {
  return (
    <Footer
      className={`
        w-full bottom-0 flex flex-row items-center justify-between 
      `}
    >

    </Footer>
  );
}

export const CallToAction = () => {
  return (
    <Header
      className={`
        w-full h-[80vh] flex justify-center items-center
      `}
      style={{
        backgroundImage: "url('/assets/images/header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Section
        className={`
          flex w-full justify-start items-center
        `}
      >
        <Article
          className={`
            text-accent-foreground
          `}
        >
          <h1
            className={`
              text-4xl font-bold
            `}
          >
            There&apos;s no one face to mental health conditions
          </h1>
          <p
            className={`
              text-lg              
            `}
          >
            Empower yourself to break free from the grips of mental health challenges. Take the first step towards a brighter future with our support. Reach out today for personalized guidance and start your journey to healing.
          </p>
          <menu
            className={`
              flex flex-row gap-4
            `}
          >
            {["Sign In", "Call now"].map((value, index) => {
              const paths = ["/sign-in", "tel:9342187852"]
              return (
                <li
                  key={value}
                  className={`

                  `}
                >
                  <Link
                    className={`

                    `}
                    href={paths[index]}
                    rel={`noopener noreferrer`}
                    target={`_blank`}
                    role={`button`}
                  >
                    {value}
                  </Link>
                </li>
              )
            })}
          </menu>
        </Article>
      </Section>
    </Header>
  )
}