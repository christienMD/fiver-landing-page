import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
