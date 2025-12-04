const Bio = () => {
  return (
    <div className="flex flex-col justify-start space-y-6">
      <div className="space-y-4">
        <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
          Building cloud-native solutions and enterprise infrastructure with a
          focus on automation and scalability.
        </p>
        <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
          Specializing in Enterprise Technology Integration with expertise in
          Azure, GCP, CI/CD pipelines, and AI-powered workflow automation.
        </p>
      </div>

      <div className="pt-4">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          <span className="font-semibold">
            Currently available for freelance work
          </span>
        </p>
      </div>
    </div>
  );
};

export default Bio;
