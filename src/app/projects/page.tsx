import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: "PipSticker",
    description:
      "Convert any screen to floating window with PipSticker - A handy Picture in Picture tool.",
    technologies: ["Android", "Kotlin", "Jetpack"],
    link: "https://pip.ikvarxt.me",
    icon: "/icons/pip.png",
  },
  //   {
  //     title: "Project Two",
  //     description: "Description of your second project highlighting key features.",
  //     technologies: ["Node.js", "Express", "MongoDB"],
  //     link: "https://github.com/yourusername/project-two",
  //     icon: "/icons/project-two.png",
  //   },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">My Projects</h1>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src={project.icon}
                    alt={`${project.title} icon`}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold">{project.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors"
              >
                View Project →
              </Link>
            </div>
          ))}
          <div className="text-center p-8 border border-dashed border-black/[.08] dark:border-white/[.145] rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">
              More exciting projects coming soon! Stay tuned... ✨
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
