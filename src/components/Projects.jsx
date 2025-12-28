const Projects = () => {
  // Add your GitHub projects here - organized by date (newest first)
  const projects = [
    {
      id: 1,
      title: "Debate Intelligence System",
      date: "December 2025",
      description:
        "Full-stack debate analysis pipeline with n8n orchestration, Flask API, and 93k+ Reddit comment dataset across 216 structured debates. Automated workflow processing and RESTful data access.",
      tech: ["n8n", "Flask", "SQLite", "Python", "Docker"],
      github: "https://github.com/mochienterprises/n8n-debate-intelligence",
    },
    {
      id: 2,
      title: "JudgeUI",
      date: "December 2025",
      description:
        "AI-powered debate judging system using LLMs to analyze arguments, detect logical fallacies, and provide structured scoring with evidence attribution.",
      tech: ["React", "Claude API", "Argument Analysis"],
      github: "https://github.com/mochienterprises/judgeui",
    },
    {
      id: 3,
      title: "Portfolio Website",
      date: "December 2025",
      description:
        "Personal portfolio built with React, Tailwind, and Vite. Features responsive design, dark mode toggle, and WebGL shader effects.",
      tech: ["React", "Tailwind", "Vite", "WebGL"],
      github: "https://github.com/mochienterprises/portfolio",
      live: "https://port-folio-beige-theta.vercel.app/",
    },
  ];

  return (
    <div className="space-y-1">
      {projects.map((project, index) => (
        <div key={project.id}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-6 group"
          >
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <h3 className="text-base font-medium group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-neutral-400 dark:text-neutral-600">
                  {project.date}
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-neutral-500 dark:text-neutral-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.live && (
                <div className="text-xs text-neutral-400 dark:text-neutral-500">
                  Live: {project.live}
                </div>
              )}
            </div>
          </a>
          {index < projects.length - 1 && (
            <hr className="border-neutral-200 dark:border-neutral-800" />
          )}
        </div>
      ))}

      <div className="pt-12">
        <a
          href="https://github.com/mochienterprises"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
        >
          View all on GitHub →
        </a>
      </div>
    </div>
  );
};

export default Projects;
