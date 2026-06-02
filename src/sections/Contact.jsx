export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Let's work together.
        </h2>

        <div
          className="
          border border-white/10
          rounded-3xl
          p-6 md:p-10
          bg-white/[0.02]
          "
        >

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left Side */}
            <div>

              <h3 className="text-2xl font-semibold mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-zinc-500 text-sm mb-1">
                    Email
                  </p>
                    <a
                    href="mailto:legaspi.normanjeremy10@gmail.com"
                    className="text-lg hover:text-blue-400 transition-colors break-all"
                    >
                        legaspi.normanjeremy10@gmail.com
                    </a>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm mb-1">
                    Location
                  </p>
                  <p className="text-lg">
                    Dasmarinas, Cavite, Philippines
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm mb-1">
                    Education
                  </p>
                  <p className="text-lg">
                    Bachelor of Science in Computer Science
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div>

              <h3 className="text-2xl font-semibold mb-8">
                Availability
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-zinc-500 text-sm mb-1">
                    Current Status
                  </p>
                  <p>
                    Open for internships and Freelance work.
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm mb-1">
                    Response Time
                  </p>
                  <p>
                    Usually within 24 hours.
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="mailto:your@email.com"
                  className="
                  px-6 py-3
                  bg-white
                  text-black
                  rounded-full
                  font-medium
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >
                  Send Email
                </a>

                <button
                  className="
                  px-6 py-3
                  border border-white/10
                  rounded-full
                  hover:bg-white/5
                  transition-all
                  duration-300
                  "
                >
                  Download Resume
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}