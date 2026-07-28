import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Toast from "@/core/components/Toast";
import ScrollIndicator from "@/core/components/ScrollIndicator";
import CursorSpotlight from "@/core/components/CursorSpotlight";
import CommandPalette from "@/core/components/CommandPalette";
import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";

export default async function App() {
  const translate = await getTranslations("Header");
  return (
    <>
      <a className={styles.skip_link} href="#main-content">
        {translate("skip_to_content")}
      </a>
      <CursorSpotlight />
      <CommandPalette />
      <ScrollIndicator />
      <Header />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <Services />
        <Experience />
        <Technologies />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
