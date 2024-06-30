import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
  <main>
    <Navbar />
    <Hero />
  </main>
  );
}
