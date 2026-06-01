export default function ProjectCard({ project }) {
  return (
    <div
      className="
      border border-white/10
      rounded-3xl
      overflow-hidden
      bg-white/[0.02]
      hover:bg-white/[0.04]
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
    <div className="overflow-hidden">
        <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-56
            object-cover
            hover:scale-105
            transition-transform
            duration-500
            "/>
        </div>

      <div className="p-6">

        <p className="text-blue-400 text-sm mb-3">
          {project.category}
        </p>

        <h3 className="text-2xl font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-zinc-400 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
            <span
                key={tech}
                    className="
                    px-3 py-1
                    rounded-full
                    border border-white/10
                    text-sm
                    ">
                {tech}
            </span>
            ))}
        </div>

        <div className="flex gap-3 mt-4">
            <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            px-4 py-2
            rounded-full
            border border-white/10
            hover:bg-white/5
            transition
            ">
            GitHub
            </a>

            <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            px-4 py-2
            bg-white
            text-black
            rounded-full
            font-medium
            hover:scale-105
            transition
            ">
            Live Demo
            </a>
        </div>
      </div>
    </div>
  );
}