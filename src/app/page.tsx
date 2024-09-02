import Hero from "@/components/Hero";
import Header from "@/components/Header";
import styles from "./page.module.css";

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <div className={styles.container}>
        </div>
      </main>
    </>
  );
} 