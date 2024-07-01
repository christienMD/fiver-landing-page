
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Description from "./components/Description";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Description />
      </main>
    </>
  );
}
