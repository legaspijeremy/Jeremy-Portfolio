import { useState } from "react";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyFooterEmail = () => {
  navigator.clipboard.writeText(
    "legaspi.normanjeremy10@gmail.com"
  );

  setEmailCopied(true);

  setTimeout(() => {
    setEmailCopied(false);
  }, 2000);
};
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

<div className="flex flex-col">

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

    <button
      onClick={copyFooterEmail}
      className="hover:text-white transition-colors"
    >
      Email
    </button>

  </div>

  {emailCopied && (
    <p className="text-xs text-green-400 mt-2 pl-15">
      Email copied to clipboard
    </p>
  )}

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