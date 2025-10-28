import { Link } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'HoloBoard',
    description: 'Realtime 3D whiteboard with spatial cursors and multiplayer presence.',
    tags: ['React', 'WebGL', 'WebRTC'],
  },
  {
    title: 'Neon Commerce',
    description: 'Headless storefront with AI search and cinematic motion design.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Orbital Analytics',
    description: 'Streaming dashboards powered by event-driven data pipelines.',
    tags: ['FastAPI', 'Kafka', 'Postgres'],
  },
];

export default function ProjectsShowcase() {
  const { scrollYProgress } = useScroll();
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(40%_60%_at_50%_0%,rgba(236,72,153,0.18),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Featured Work</h2>
            <p className="mt-2 text-white/70">Concept projects that explore the edges of what the web can be.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06, duration: 0.5, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-fuchsia-500/20 blur-3xl transition-opacity group-hover:opacity-70" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-fuchsia-300/90">
                <Link className="h-4 w-4" /> View Case Study
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
