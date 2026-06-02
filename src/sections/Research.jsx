export default function Research() {
  return (
    <section
      id="research"
      className="py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-4">
          Current Research
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Empathic Quiz Generation from Notes of Automata Theory.
        </h2>

        {/* Research Card */}
        <div
            className="
            border border-white/10
            rounded-3xl
            p-8 md: p-10
            bg-white/[0.02]
            max-w-5xl
            "
        >   

        <div className="grid md:grid-cols-2 gap-12">
              {/* Left content */}
            <div>

                <p className="text-blue-400 text-sm mb-3">
                    Undergraduate Thesis
                </p>

                <h3 className="text-3xl font-bold mb-6">
                    Note2Quiz
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                    This study develops a privacy-friendly adaptive learning system
                    that converts handwritten and digital notes into personalized
                    quizzes and flashcards for 3rd year Computer Science students
                    taking Automata Theory. Unlike existing tools, Note2Quiz tracks
                    student behavior (time, skips, answer revisions) to infer
                    cognitive states and provide personalized recommendations
                    without using cameras or sensors. OCR accuracy is measured
                    using CER and WER metrics.
                </p>

            </div>

            <div className="space-y-8">

                    {/* Right Content */}
                <div>

                    <h4 className="text-xl font-semibold mb-3">
                        Status
                    </h4>
                
                    <span 
                        className="
                        inline-flex
                        px-4 py-2
                        rounded-full
                        bg-blue-500/10
                        text-blue-400
                        border border-blue-500/20
                        "
                    >
                        Ongoing Research
                    </span>
                
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-3">
                        Progress
                    </h4>

                <div className="w-full h-2 bg-white/10 rounded-full">
                    <div className="w-[30%] h-2 bg-blue-400 rounded-full"></div>
                </div>

                <p className="text-zinc-400 mt-2 text-sm">
                Thesis Development Phase
                </p>
            </div>
              
              <div>

                <h4 className="text-xl font-semibold mb-3">
                  Focus Areas
                </h4>

                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1 border border-white/10 rounded-full">
                    OCR
                  </span>

                  <span className="px-3 py-1 border border-white/10 rounded-full">
                    Computer Vision
                  </span>

                  <span className="px-3 py-1 border border-white/10 rounded-full">
                    AI
                  </span>

                  <span className="px-3 py-1 border border-white/10 rounded-full">
                    Machine Learning
                  </span>

                </div>

              </div>

              <div>

                <h4 className="text-xl font-semibold mb-3">
                  Expected Outcome
                </h4>

                <p className="text-zinc-400 leading-relaxed">
                  Comparative evaluation of OCR engines for
                  educational document digitization and
                  automated content processing.
                </p>

              </div>

            </div>

          </div>
        </div>
        </div>

    </section>
  );
}