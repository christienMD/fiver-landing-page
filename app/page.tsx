import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Description from "./components/Description";
import FieverrPro from "./components/FieverrPro";
import Testimonials from "./components/Testimonials";
import FiverrLogoMaker from "./components/FiverrLogoMaker";
import FiverrMade from "./components/FiverrMade";
import GetHelp from "./components/GetHelp";
import JoinFiverr from "./components/JoinFiverr";

export default function Home() {
  return (
    <>
      <main className="px-10">
        <Hero />
        <Services />
        <Description />
        <FieverrPro />
        <Testimonials />
        <FiverrLogoMaker />
        <FiverrMade />
        <GetHelp />
        <JoinFiverr />
      </main>
    </>
  );
}
