import React from "react";

export default function Section({ children,styleSection}) {
  return <section className={styleSection}>
    {children}
  </section>;
}
