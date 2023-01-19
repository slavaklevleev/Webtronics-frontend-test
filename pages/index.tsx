import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Header } from "./components/Header";
import { WelcomeBlock } from "./components/WelcomeBlock";
import { About } from "./components/About";
import { ProgrammingTechnologies } from "./components/ProgrammingTechnologesBlock";
import { StepsBlock } from "./components/StepsBlock";
import { FAQBlock } from "./components/FAQBlock";
import { Review } from "./components/ReviewBlock";
import { GalleryBlock } from "./components/Gallery";
import { ContactUsBlock } from "./components/ContactUsBlock";
import { Footer } from "./components/Footer";
import { Stars } from "./components/Stars";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Stars/>
      <div className={styles.wrapper}>
        <Header />
        <WelcomeBlock />
        <About />
        <ProgrammingTechnologies />
        <StepsBlock />
        <FAQBlock />
        <Review />
        <GalleryBlock />
        <ContactUsBlock />
      </div>
      <Footer />
    </>
  );
}
