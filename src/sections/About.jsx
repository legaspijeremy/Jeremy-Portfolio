import FadeInSection from "../components/FadeInSection";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8"
    >
    <FadeInSection>
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
                    I am a third-year Bachelor of Science in Computer Science student at De La Salle University–Dasmariñas with a specialization in Intelligent Systems. I am interested in software development, artificial intelligence, machine learning, and web technologies. I enjoy building practical applications that combine modern software engineering with AI-driven solutions to solve real-world problems.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-4">
                    Education
                </h3>

                <ul className="text-zinc-400 leading-relaxed space-y-6">

                    <li>
                        <span className="text-white font-medium">
                            Bachelor of Science in Computer Science
                        </span>
                        <br />
                            Specialization in Intelligent Systems
                        <br />
                            De La Salle University–Dasmariñas
                        <br />
                            2023 – Present
                    </li>

                    <li>
                        <span className="text-white font-medium">
                            Senior High School Diploma
                        </span>
                        <br />
                            ICT Strand (Technical High-School)
                        <br />
                            San Beda College Alabang
                        <br />
                            2021 – 2023
                    </li>

</ul>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">

        <div>
            <h3 className="text-2xl font-semibold mb-4">
                Current Focus
            </h3>

            <p className="text-zinc-400 leading-relaxed">
                Currently developing projects involving OCR, AI-powered learning systems, and modern web applications using React and Tailwind CSS. My current research focuses on adaptive educational technology, intelligent tutoring systems, and privacy-friendly student behavior analysis.
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
    </ FadeInSection>
    </section>

  );
}