import React from "react";
import { PrimitiveMain as Main, Section } from "@/components/templates";
import { CallToAction } from "@/components/core/semantics";

export default function Page() {
  return (
    <>
    <CallToAction />
    <Main
      className={`
        flex flex-col items-center justify-center gap-4 px-14 my-5
      `}
    >
      <PageSections />
    </Main>
    </>
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
      id: "about",
      content: About,
    },
    {
      id: "faq",
      content: FAQ,
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
      {SectionsList.sections.map((section: {
        id: string;
        content: React.FC; }) => {
        const Sections = section.content;
        return (
          <Section
            key={section.id}
            id={section.id}
          >
            <Sections />
          </Section>
        );
      })}
    </>
  )
}