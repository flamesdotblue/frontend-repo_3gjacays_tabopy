import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-b-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur">
          <a href="#hero" className="font-semibold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">Dev•Futures</span>
          </a>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#about" className="rounded-md px-3 py-1.5 text-sm text-white/80 hover:text-white">About</a>
            <a href="#projects" className="rounded-md px-3 py-1.5 text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#contact" className="rounded-md px-3 py-1.5 text-sm text-white/80 hover:text-white">Contact</a>
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
