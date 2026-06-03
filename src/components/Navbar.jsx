export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">

        <a
          href="#home"
          className="text-xl font-semibold tracking-tight"
        >
          NJGL
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#about" className="text-zinc-400 hover:text-white transition-colors duration-300">
            About
          </a>
          
          <a href="#projects" className="text-zinc-400 hover:text-white transition-colors duration-300">
            Projects
          </a>

          <a href="#research" className="text-zinc-400 hover:text-white transition-colors duration-300">
            Research
          </a>

          <a href="#contact" className="text-zinc-400 hover:text-white transition-colors duration-300">
            Contact
          </a>
        </nav>

          <a
            href="/Legaspi_NormanJeremy_Resume.pdf"
            download
            className="
            px-5 py-2
            rounded-full
            bg-white
            text-black
            text-sm
            font-medium
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Resume
          </a>

      </div>
    </header>
  );
}