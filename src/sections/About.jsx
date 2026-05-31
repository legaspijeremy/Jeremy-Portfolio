export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Building technology that solves real problems.
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

        {/* Left Column */}
          <div className="space-y-10">

            <div>
                <h3 className="text-2xl font-semibold mb-4">
                    Who I Am
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                    Replace this text with your personal
                    introduction later.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-4">
                    Education
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                    Add your education details later.
                </p>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">

        <div>
            <h3 className="text-2xl font-semibold mb-4">
                Current Focus
            </h3>

            <p className="text-zinc-400 leading-relaxed">
                Replace this text with your current
                interests and specialization later.
            </p>
        </div>

        <div>
            <h3 className="text-2xl font-semibold mb-4">
                Availability
            </h3>

            <p className="text-zinc-400 leading-relaxed">
                Open for internships, freelance projects,
                and collaborative research opportunities.
            </p>
        </div>
        
        </div>
      </div>
    </div>
    </section>
  );
}