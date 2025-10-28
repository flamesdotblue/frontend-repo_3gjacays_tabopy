import { Code2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { label: 'React', hue: 'from-fuchsia-500/20 to-transparent', delay: 0 },
  { label: 'TypeScript', hue: 'from-sky-500/20 to-transparent', delay: 0.2 },
  { label: 'Three.js', hue: 'from-violet-500/20 to-transparent', delay: 0.4 },
  { label: 'Node', hue: 'from-emerald-500/20 to-transparent', delay: 0.1 },
  { label: 'FastAPI', hue: 'from-cyan-500/20 to-transparent', delay: 0.3 },
  { label: 'PostgreSQL', hue: 'from-pink-500/20 to-transparent', delay: 0.5 },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Hi, I’m a developer obsessed with immersive web
            </h2>
            <p className="mt-4 text-white/70">
              I engineer performant frontends, scalable backends, and 3D/real‑time interactions.
              My work blends design and systems thinking to deliver experiences that feel like the future.
            </p>

            {/* Floating skills cloud */}
            <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((s, i) => (
                <motion.span
                  key={s.label}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.2 + s.delay, repeat: Infinity, ease: 'easeInOut' }}
                  className={`relative rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 shadow-[0_0_30px_rgba(255,255,255,0.04)]`}
                >
                  <span className={`pointer-events-none absolute inset-0 -z-[0] rounded-full bg-gradient-to-b ${s.hue} blur-xl`} />
                  <span className="relative">{s.label}</span>
                </motion.span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 backdrop-blur"
            >
              <Code2 className="h-6 w-6 text-fuchsia-300" />
              <h3 className="mt-3 font-semibold">Creative Engineering</h3>
              <p className="mt-2 text-sm text-white/70">
                Crafting delightful UIs, micro‑interactions, and spatial interfaces.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 backdrop-blur"
            >
              <Cpu className="h-6 w-6 text-sky-300" />
              <h3 className="mt-3 font-semibold">Systems & Scale</h3>
              <p className="mt-2 text-sm text-white/70">
                Robust APIs, data pipelines, and cloud architectures that grow with you.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
