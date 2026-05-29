import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-8 w-full">

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">

          {/* Left Side */}
          <div>

            <p className="text-blue-400 font-medium mb-4">
              Software Developer & AI Enthusiast
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
                Norman Jeremy
                <br />
                <span className="block text-center">
                    Legaspi
                </span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-xl mb-8">
              Building AI-powered applications,
              OCR systems, and modern web solutions.
            </p>

            <div className="flex gap-4">

              <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-all duration-300">
                View Projects
              </button>

              <button className="px-6 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300">
                Download CV
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-end">

            <div className="relative">

              <img
                src={heroImage}
                alt="Jeremy"
                className="w-[420px] h-[520px] object-cover rounded-3xl border border-white/10"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}