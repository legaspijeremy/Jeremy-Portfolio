import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import ProjectCard from "../components/ProjectCard";
import FadeInSection from "../components/FadeInSection";

export default function Projects() {
  const [projects, setProjects] = useState([]);

    useEffect(() => {
      client
        .fetch(
          `*[_type == "project"]{
          _id,
          title,
          category,
          description,
          technologies,
          github,
          live,
          image
        }`
      )
      .then((data) => {
        console.log("SANITY DATA:", data);
        setProjects(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section
      id="projects"
      className="pt-12 pb-24 px-8 scroll-mt-12"
    >
    <FadeInSection>
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 font-medium mb-4">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Selected work and research.
        </h2>

      <div className="grid md:grid-cols-2 gap-8">
        
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </div>
    </FadeInSection>
    </section>
  );
}