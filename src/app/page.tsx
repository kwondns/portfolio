import Hero from '@/components/Hero';
import About from '@/components/About';
import Project from '@/components/Project';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-40">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
