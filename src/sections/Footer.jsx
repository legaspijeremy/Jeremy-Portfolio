export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-8">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Side */}
          <div>

            <h3 className="text-2xl font-bold mb-2">
              NJGL
            </h3>

            <p className="text-zinc-400">
              Computer Science Student & Intelligent Systems Enthusiast
            </p>

          </div>

          {/* Right Side */}
          <div className="flex gap-6 text-zinc-400">

            <a
              href="https://github.com/legaspijeremy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/norman-jeremy-legaspi/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:legaspi.normanjeremy10@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>

          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-white/10">

          <p className="text-zinc-500 text-sm text-center">
            © 2026 Norman Jeremy Legaspi.
          </p>

        </div>

      </div>
    </footer>
  );
}