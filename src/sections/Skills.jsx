import FadeInSection from "../components/FadeInSection";

export default function Skills() {
  return (
    <FadeInSection>
    <section
      id="skills"
      className="pt-12 pb-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-4">
          Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Technologies and tools I work with.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
    
            <div className="
            border border-white/10
            rounded-2xl
            p-6
            bg-white/[0.02]
            hover:bg-white/[0.04]
            hover:border-blue-500/30
            hover:-translate-y-1
            transition-all
            duration-300
            ">
                
                <h3 className="text-xl font-semibold mb-4">
                    Frontend Development
                </h3>

                <p className="text-zinc-400">
                    React, JavaScript, Tailwind CSS
                </p>
            </div>

            <div className="
            border border-white/10
            rounded-2xl
            p-6
            bg-white/[0.02]
            hover:bg-white/[0.04]
            hover:border-blue-500/30
            hover:-translate-y-1
            transition-all
            duration-300
            ">
                
                <h3 className="text-xl font-semibold mb-4">
                    AI & Machine Learning
                </h3>

                <p className="text-zinc-400">
                    Python, OCR, LLM Integration,
                    Computer Vision
                </p>
            </div>

            <div className="
            border border-white/10
            rounded-2xl
            p-6
            bg-white/[0.02]
            hover:bg-white/[0.04]
            hover:border-blue-500/30
            hover:-translate-y-1
            transition-all
            duration-300
            ">
                
                <h3 className="text-xl font-semibold mb-4">
                    Tools & Platforms
                </h3>

                <p className="text-zinc-400">
                    GitHub, VS Code,
                    Agile Development
                </p>
            </div>

        </div>

      </div>
    </section>
    </FadeInSection>
  );
}