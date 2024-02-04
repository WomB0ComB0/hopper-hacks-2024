"use client"
import { Nav, PrimitiveFooter as Footer } from "../templates";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { PrimitiveHeader as Header, PrimitiveSection as Section, Article, Picture, PrimitiveDiv as Div } from '@/components/templates'
import { CustomButton as Button } from '@/components/custom'
import { ThemeButton } from "@/components/custom";
import Link from "next/link";
import { FooterList } from "@/constants";

export const NavBar = () => {
  return (
    <Nav
      className={`
        w-full bg-foreground/30 text-white p-4 flex justify-between items-center flex-row h-[80px] text-accent-foreground font-semibold top-0 sticky z-50 shadow-md backdrop-filter backdrop-blur-md 
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

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa";
import { Input } from "../ui/input";

const FooterLeftList: React.FC<{
  links: {
    name: string;
    link: string;
    icon: React.ReactNode;
  }[];
}> = ({ links }) => {
  return (
    <ul
      className={`
        flex flex-row gap-4 items-center justify-center
      `}
    >
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.link}>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

const socialLinks = {
  links: [
    { name: 'Instagram', link: 'https://instagram.com', icon: <FaInstagram size={20} /> },
    { name: 'Facebook', link: 'https://facebook.com', icon: <FaFacebook size={20} /> },
    { name: 'LinkedIn', link: 'https://linkedin.com', icon: <FaLinkedin size={20} /> },
  ],
};

const contactInfo = {
  links: [
    { name: 'Phone', link: 'tel:9342187852', icon: <FaPhone size={20} /> },
    { name: 'Email', link: 'mailto:mikeodnis3242004@gmail.com', icon: <FaEnvelope size={20} /> },
    { name: 'Address', link: 'https://www.google.com/maps?client=firefox-b-1-d&sca_esv=891db70b06f5b3de&output=search&q=stony+brook+university&source=lnms&entry=mc', icon: <FaMapPin size={20} /> },
  ],
};

export const FooterBar = () => {
  return (
    <Footer
      className={`
        w-full bottom-0 flex flex-row items-center justify-between bg-accent-foreground/30 text-white p-4
      `}
    >
      <Div className="max-w-screen-xl px-4 pb-8 mx-auto sm:px-6 lg:px-8">
        <Div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <Div
            className={`
              flex flex-row items-center justify-around gap-2
            `}
          >
            <Image
              src={`/assets/images/logo.png`}
              className={``}
              width={100}
              height={100}
              alt={``}
            />
            <Div
              className={`
                flex flex-col gap-4
              `}
            >
              <FooterLeftList {...contactInfo} />
              <FooterLeftList {...socialLinks} />
            </Div>
          </Div>
          {FooterList.map((section, index) => (
            <Div key={index} className="mb-4">
              <h2 className="text-xl font-bold mb-2">{section.title}</h2>
              <ul>
                {section.links &&
                  section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                {section.socials &&
                  section.socials.map((social, socialIndex) => (
                    <li key={socialIndex}>
                      <a href={social.url}>{social.title}</a>
                    </li>
                  ))}
              </ul>
            </Div>
          ))}
          <Div>
            <h2 className="text-xl font-bold mb-2">Subscribe</h2>
            <p>
              Sign up for our newsletter to stay up to date on the latest news
              and events.
            </p>
            <form className="mt-4 flex">
              <Input
                type="email"
                className="px-4 py-2 w-full rounded-l-md"
                placeholder="Enter your email"
              />
              <Button className="rounded-r-md">Subscribe</Button>
            </form>
          </Div>
        </Div>
      </Div>
    </Footer>
  );
};

export const CallToAction = () => {
  return (
    <Header
      className={`
        w-full h-[60vh] flex justify-center items-center
      `}
    >
      <Picture
        className={`
          w-[100dvw]
          h-full
        `}
      >
        <Link className="w-full h-full" href="https://www.freepik.com/free-vector/flat-background-world-mental-health-day_30828182.htm#page=7&query=mental%20health%20support&position=18&from_view=search&track=ais&uuid=63d33ebb-f48e-45a5-ac38-ebbbf01470d7" aria-label="Freepik" target="_blank" rel="noopener noreferrer">
        <Image
          src={'/assets/images/header.jpg'}
          alt={``}
          className={`
          bg-cover bg-no-repeat bg-center w-full h-full
          `}
          fetchPriority="high"
          quality={100}
          width={1920}
          height={1080}
          />
        </Link>
      </Picture>
      <Section
        className={`
          flex w-full justify-start items-center absolute px-10
        `}
      >
        <Article
          className={`
            text-accent-foreground w-[45%] flex flex-col gap-4
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
            {["Take quiz", "Call now"].map((value, index) => {
              const paths = ["/quiz", "tel:9342187852"]
              return (
                <li
                  key={value}
                  className={`

                  `}
                >
                  <Link
                    className={`
                      bg-accent-foreground text-white px-4 py-2 rounded-lg font-semibold
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