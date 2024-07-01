import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Description from "./components/Description";
import FieverrPro from "./components/FieverrPro";

export default function Home() {
  return (
    <>
      <main className="px-10">
        <Hero />
        <Services />
        <Description />
        <FieverrPro />
      </main>
    </>
  );
}
