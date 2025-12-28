const Contact = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-light mb-2">Get in Touch</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">
          Available for freelance cloud/automation projects and junior
          engineering roles
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-light mb-3 text-neutral-700 dark:text-neutral-300">
            Email
          </h3>
          <a
            href="mailto:Ggibson703@gmail.com"
            className="text-sm font-light hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
          >
            Ggibson703@gmail.com
          </a>
        </div>

        <div>
          <h3 className="text-sm font-light mb-3 text-neutral-700 dark:text-neutral-300">
            Social & Professional
          </h3>
          <div className="space-y-2">
            <a
              href="https://github.com/mochienterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-light hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
            >
              GitHub →
            </a>
            <a
              href="https://linkedin.com/in/gregoryemery"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-light hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-light mb-3 text-neutral-700 dark:text-neutral-300">
            Services
          </h3>
          <ul className="space-y-2 text-sm font-light text-neutral-600 dark:text-neutral-400">
            <li>• Enterprise Technology Integration</li>
            <li>• Cloud Architecture & Migration (Azure, GCP)</li>
            <li>• CI/CD Pipeline Development</li>
            <li>• AI/ML Implementation & Automation</li>
            <li>• DevOps & Infrastructure Optimization</li>
          </ul>
        </div>

        <div className="pt-6">
          <p className="text-xs text-neutral-500 dark:text-neutral-500 font-light">
            Typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
