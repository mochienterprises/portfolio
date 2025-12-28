const Info = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-normal mb-2">About</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-base font-normal mb-3 text-neutral-700 dark:text-neutral-300">
            Background
          </h3>
          <p className="text-sm font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
            Currently pursuing a B.A. in Enterprise Technology Integration with
            a Cybersecurity focus at Penn State University. I work at the
            intersection of cloud infrastructure, automation, and creative
            content production.
          </p>
        </div>

        <div>
          <h3 className="text-base font-normal mb-3 text-neutral-700 dark:text-neutral-300">
            Technical Skills
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-normal mb-2 text-neutral-700 dark:text-neutral-300">
                Cloud & DevOps
              </p>
              <p className="text-xs font-light text-neutral-500 dark:text-neutral-500">
                Microsoft Azure, Google Cloud Platform, CI/CD Pipelines (GitHub
                Actions), Infrastructure Automation
              </p>
            </div>
            <div>
              <p className="text-sm font-normal mb-2 text-neutral-700 dark:text-neutral-300">
                Cloud & DevOps
              </p>
              <p className="text-xs font-light text-neutral-500 dark:text-neutral-500">
                Azure, Google Cloud Platform, Docker, CI/CD Pipelines (GitHub
                Actions) Infrastructure Automation
              </p>
            </div>
            <div>
              <p className="text-sm font-normal mb-2 text-neutral-700 dark:text-neutral-300">
                Programming
              </p>
              <p className="text-xs font-light text-neutral-500 dark:text-neutral-500">
                Python, Java, SQL, JavaScript, HTML/CSS
              </p>
            </div>
            <div>
              <p className="text-sm font-normal mb-2 text-neutral-700 dark:text-neutral-300">
                Frameworks & Tools
              </p>
              <p className="text-xs font-light text-neutral-500 dark:text-neutral-500">
                React, Flask, n8n, Tailwind CSS, ServiceNow, Vite
              </p>
            </div>
            <div>
              <p className="text-sm font-normal mb-2 text-neutral-700 dark:text-neutral-300">
                Specialties
              </p>
              <p className="text-xs font-light text-neutral-500 dark:text-neutral-500">
                Workflow Automation, API Development, AI Integration, Cloud
                Infrastructure, DevOps
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-normal mb-3 text-neutral-700 dark:text-neutral-300">
            Experience Highlights
          </h3>
          <div className="space-y-3 text-sm font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
            <p>
              Student IT Support Specialist at Penn State, handling 100+ support
              requests per semester with 95% satisfaction rating.
            </p>
            <p>
              Product & Software Intern at Transformed Vision, designing
              wireframes and optimizing internal business applications through
              user research.
            </p>
            <p>
              Built and deployed cloud applications on Azure and GCP using CI/CD
              pipelines, and designed AI workflow automation reducing manual
              processing time by 50%.
            </p>
            <p>
              Built a testing framework to do comparative analysis of AI models
              for qualitative judgement or arguments.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-normal mb-3 text-neutral-700 dark:text-neutral-300">
            Certifications
          </h3>
          <p className="text-sm font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
            Currently pursuing CompTIA Security+ and Microsoft Azure
            Fundamentals (AZ-900)
          </p>
        </div>

        <div>
          <h3 className="text-base font-normal mb-3 text-neutral-700 dark:text-neutral-300">
            Currently
          </h3>
          <p className="text-sm font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
            Studying at Penn State while working on cloud infrastructure
            projects, AI automation workflows, and creating video content.
            Available for freelance consulting in cloud architecture, enterprise
            technology integration, and DevOps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
