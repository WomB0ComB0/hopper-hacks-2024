"use client";

import React, { useEffect } from "react";
import { PrimitiveMain as Main, PrimitiveSection as Section } from "@/components/templates";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Main>
      <Section>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Try again</button>
      </Section>
    </Main>
  );
}
