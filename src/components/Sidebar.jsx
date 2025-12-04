const Sidebar = ({ currentView, setCurrentView }) => {
  const handleNavigate = (view) => {
    setCurrentView(view);
    window.dispatchEvent(new CustomEvent("navigate", { detail: view }));
  };

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "info", label: "Info" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col justify-between h-full min-h-[400px]">
      <div className="space-y-8">
        <div>
          <button onClick={() => handleNavigate("home")} className="text-left">
            <h1 className="text-3xl font-light tracking-tight mb-2 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">
              Greg Emery
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">
              Cloud Solutions Engineer
            </p>
          </button>
        </div>

        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-sm font-light transition-colors text-left ${
                currentView === item.id
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
              }`}
            >
              {currentView === item.id && "→ "}
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
