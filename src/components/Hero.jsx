import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-36 pb-24 lg:pt-24 lg:pb-24"
    >
      <div className="max-w-6xl mx-auto px-8 w-full">

        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-16 items-center">

          <div   className="
          max-w-xl
          mx-auto
          text-center
          lg:text-left
          lg:mx-0
          ">

            <p className="text-blue-400 font-medium mb-4">
              Software Developer & AI Enthusiast
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
               Norman Jeremy
              <br />
              <span className="block lg:ml-48">
                Legaspi
              </span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-xl mb-8">
              Building AI-powered applications,
              OCR systems, and modern web solutions.
            </p>

            <div className= "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-all duration-300">
                View Projects
              </button>

              <button className="px-6 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300">
                Download CV
              </button>

            </div>

          </div>

          <div className="flex justify-center lg:justify-end mb-12 lg:mb-0 lg:pt-12">

            <div className="relative">

              <img
                src={heroImage}
                alt="Jeremy"
                className="
                w-[300px] 
                h-[420px] 
                sm:w-[340px] 
                sm:h-[430px] 
                lg:w-[420px] 
                lg:h-[520px] 
                object-cover 
                rounded-3xl 
                border 
                border-white/10"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}