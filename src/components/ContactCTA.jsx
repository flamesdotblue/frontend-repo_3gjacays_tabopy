import { Github, Mail } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-t from-black via-zinc-950 to-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-sky-500/10 to-violet-500/10" />
          <div className="relative">
            <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build something otherworldly</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Have a bold idea? I bring concepts to life with code, 3D, and meticulous engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-black transition-colors hover:bg-fuchsia-200"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white backdrop-blur transition-colors hover:border-fuchsia-400/60"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} — Crafted with passion and pixels.
        </p>
      </div>
    </section>
  );
}
