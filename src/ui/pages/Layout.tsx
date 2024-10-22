import { ReactNode } from "react";
import Header from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
