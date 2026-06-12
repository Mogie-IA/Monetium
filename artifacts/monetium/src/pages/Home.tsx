import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Brands } from "@/components/home/Brands";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyUs } from "@/components/home/WhyUs";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Brands />
      <Portfolio />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
