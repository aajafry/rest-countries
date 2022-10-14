import React from "react";

import { Footer, Header } from "./index";

export default function Layout({ children }) {
  return (
    <>
      
      {children}
      <Footer />
    </>
  );
}
