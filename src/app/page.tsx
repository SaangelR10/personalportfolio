import { MobileNav } from '@/components/ui/mobile-nav';
import DesktopNav from '@/components/ui/desktop-nav';
import SmoothScroll from '@/components/ui/smooth-scroll';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <DesktopNav />
      <MobileNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
