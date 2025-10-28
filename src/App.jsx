import { useEffect, useState } from 'react';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactCTA from './components/ContactCTA';

function App() {
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    // Track active section on scroll for simple highlight
    const sectionIds = ['#hero', '#about', '#projects', '#contact'];
    const sections = sectionIds
      .map((id) => ({ id, el: document.querySelector(id) }))
      .filter((s) => s.el);

    const onScroll = () => {
      const offset = window.innerHeight * 0.35; // trigger a bit before center
      let current = '#hero';
      for (const s of sections) {
        const rect = s.el.getBoundingClientRect();
        if (rect.top - offset <= 0) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, label }) => {
    const isActive = active === href;
    return (
      <a
        href={href}
        onClick={() => setActive(href)}
        className={`group relative rounded-md px-3 py-1.5 text-sm transition-colors ${
          isActive ? 'text-white' : 'text-white/80 hover:text-white'
        }`}
      >
        <span className="relative z-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.45)]">
          {label}
        </span>
        <span
          className={`pointer-events-none absolute inset-x-2 -bottom-0.5 h-px origin-left rounded-full bg-gradient-to-r from-fuchsia-400 via-sky-400 to-violet-400 transition-transform duration-300 ${
            isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-60 group-hover:scale-x-100'
          }`}
        />
      </a>
    );
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top nav with glowing underline */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-b-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur">
          <a href="#hero" className="font-semibold tracking-wide" onClick={() => setActive('#hero')}>
            <span className="bg-gradient-to-r from-fuchsia-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">Dev•Futures</span>
          </a>
          <div className="hidden items-center gap-1.5 sm:flex">
            <NavLink href="#about" label="About" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
          </div>
        </nav>
      </header>

      <main className="w-full">
        <Hero3D />
        <AboutSection />
        <ProjectsShowcase />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;
