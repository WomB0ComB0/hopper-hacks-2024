import React from "react";
import { Header, Article, Picture, PrimitiveMain as Main, Section } from "@/components/templates";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CallToAction } from "@/components/core/semantics";

export default function Page() {
  return (
    <Main>
      <CallToAction />
      <PageSections />
    </Main>
  );
}


import Options from "./_sections/Options/Options";
import FAQ from "./_sections/FAQ/FAQ";
import About from "./_sections/About/About";
import Contact from "./_sections/Contact/Contact";

interface SectionsListProps {
  sections: {
    id: string;
    content: React.FC;
  }[];
}

const SectionsList: SectionsListProps = {
  sections: [
    {
      id: "options",
      content: Options,
    },
    {
      id: "faq",
      content: FAQ,
    },
    {
      id: "about",
      content: About,
    },
    {
      id: "contact",
      content: Contact,
    },
  ],
};

const PageSections = () => {
  return (
    <>
      {SectionsList.sections.map((section, index) => {
        const Sections = section.content;
        return (
          <Section
            key={index}
            id={section.id}
          >
            <Sections />
          </Section>
        );
      })}
    </>
  )
}