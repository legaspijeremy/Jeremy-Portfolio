import { useState } from "react";
import emailjs from "@emailjs/browser";
import FadeInSection from "../components/FadeInSection";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formError, setFormError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(
      "legaspi.normanjeremy10@gmail.com"
    );

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  
  const sendEmail = async (e) => {
  e.preventDefault();

    if (isSending) return;
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError("Please fill in all fields.");
    return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address.");
    return;
    }

    setFormError("");
    
    try {
      setIsSending(true);

      await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name,
        email,
        message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

      setSuccessMessage(
      "Message sent successfully. I'll get back to you as soon as possible."
    );

      setErrorMessage("");

        setName("");
        setEmail("");
        setMessage("");


      } catch (error) {
        console.error(error);
        setErrorMessage(
          "Unable to send your message right now. Please try again later."
        );

      setSuccessMessage("");

      } finally {
      setIsSending(false);
    }
    };

  return (
    <section
      id="contact"
      className="py-24 px-8"
    >
    <FadeInSection>
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
                    <button
                      onClick={copyEmail}
                      className="
                      text-lg
                      hover:text-blue-400
                      transition-colors
                      break-all
                      text-left
                      "
                    >
                      legaspi.normanjeremy10@gmail.com
                    </button>

                  {copied && (
                    <p className="text-sm text-green-400 mt-2">
                      ✓ Email copied to clipboard
                    </p>
                )}
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

              <button
                onClick={() => {
                  setShowModal(true);
                  setSuccessMessage("");
                  setErrorMessage("");
                }}
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
                Contact Me
              </button>

                <a
                  href={`${import.meta.env.BASE_URL}Legaspi_NormanJeremy_Resume.pdf`}
                  download
                  className="
                  px-6 py-3
                  border border-white/10
                  rounded-full
                  hover:bg-white/5
                  transition-all
                  duration-300
                  inline-flex
                  items-center
                  justify-center
                  "
                >
                  Download Resume
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
      </FadeInSection>

    {showModal && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-zinc-900 p-8 rounded-3xl w-full max-w-lg border border-white/10">

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">
              Contact Me
            </h3>

            <button
              onClick={() => setShowModal(false)}
              className="text-zinc-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <form
            onSubmit={sendEmail}
            className="space-y-4"
          >

          {formError && (
            <p className="text-red-400 text-sm">
              {formError}
            </p>
          )}

          {successMessage && (
            <div className="
            bg-green-500/10
            border border-green-500/20
            text-green-400
            rounded-xl
            p-3
            text-sm
            ">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="
              bg-red-500/10
              border border-red-500/20
              text-red-400
              rounded-xl
              p-3
              text-sm
            ">
              {errorMessage}
            </div>
          )}
          
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-xl p-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-xl p-3"
          />

          <textarea
            placeholder="Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-xl p-3"
          />

          <button
            type="submit"
            disabled={isSending}
            className="
            w-full
            bg-white
            text-black
            py-3
            rounded-xl
            font-medium
            disabled:opacity-50
            disabled:cursor-not-allowed
            "
          >
          {isSending ? "Sending..." : "Send Message"}
          </button>

          </form>

        </div>
      </div>
    )}
    </section>
  );
}