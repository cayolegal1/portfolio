import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Toast from "@/core/components/Toast";
import styles from "./page.module.css";

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Experience />
        <Contact />
      </main>
      <Toast />
    </>
  );
} 