import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Toast from "@/core/components/Toast";
import ScrollIndicator from "@/core/components/ScrollIndicator";
import styles from "./page.module.css";

export default function App() {
  return (
    <>
      <ScrollIndicator />
      {/* @ts-ignore */}
      <Header />
      <main className={styles.main}>
        <Hero />
        <Experience />
        <Technologies />
        <Contact />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
