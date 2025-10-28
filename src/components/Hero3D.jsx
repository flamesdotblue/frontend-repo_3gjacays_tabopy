import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_20%,rgba(147,51,234,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-fuchsia-300" />
          <span className="text-xs font-medium tracking-wider text-fuchsia-200/90">
            Futuristic • Interactive • 3D
          </span>
        </div>

        <h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl">
          Building surreal, cybernetic experiences
          <span className="block bg-gradient-to-r from-fuchsia-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
            Software Developer Portfolio
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
          I craft advanced web apps with 3D, real-time interactions, and a touch of cosmic flair.
          Step into a space where imagination meets engineering.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-black transition-colors hover:bg-fuchsia-200">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur transition-colors hover:border-fuchsia-400/60">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
