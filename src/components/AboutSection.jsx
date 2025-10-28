import { Code2, Cpu } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Hi, I’m a developer obsessed with immersive web
            </h2>
            <p className="mt-4 text-white/70">
              I engineer performant frontends, scalable backends, and 3D/real‑time interactions.
              My work blends design and systems thinking to deliver experiences that feel like the future.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">React</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">TypeScript</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Three.js</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Node</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">FastAPI</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">PostgreSQL</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 backdrop-blur transition-transform hover:-translate-y-1">
              <Code2 className="h-6 w-6 text-fuchsia-300" />
              <h3 className="mt-3 font-semibold">Creative Engineering</h3>
              <p className="mt-2 text-sm text-white/70">
                Crafting delightful UIs, micro‑interactions, and spatial interfaces.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 backdrop-blur transition-transform hover:-translate-y-1">
              <Cpu className="h-6 w-6 text-sky-300" />
              <h3 className="mt-3 font-semibold">Systems & Scale</h3>
              <p className="mt-2 text-sm text-white/70">
                Robust APIs, data pipelines, and cloud architectures that grow with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
