import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import NoiseBackground from "./NoiseBackground";
import Bio from "./Bio";
import Projects from "./Projects";
import Info from "./Info";
import Contact from "./Contact";
import ThemeToggle from "./ThemeToggle";

const Layout = () => {
  const [currentView, setCurrentView] = useState("home");

  useEffect(() => {
    const handleNavigate = (e) => {
      setCurrentView(e.detail);
    };

    window.addEventListener("navigate", handleNavigate);
    return () => window.removeEventListener("navigate", handleNavigate);
  }, []);

  const renderMiddleContent = () => {
    switch (currentView) {
      case "projects":
        return <Projects />;
      case "info":
        return <Info />;
      case "contact":
        return <Contact />;
      default:
        // Updated text color: dark in light mode, light in dark mode
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-neutral-800 dark:text-neutral-300 font-normal max-w-md text-center drop-shadow-lg">
              Creative experiences through cloud engineering and automation
            </p>
          </div>
        );
    }
  };

  const renderRightContent = () => {
    if (currentView === "home") {
      return <Bio />;
    }
    return null;
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Full-screen background - ONLY on home page */}
      {currentView === "home" && (
        <div className="fixed inset-0 z-0">
          <NoiseBackground />
        </div>
      )}

      {/* Content layer - floats on top of background */}
      <div className="relative z-10 grid grid-cols-12 min-h-screen gap-8 px-8 py-16 max-w-[1800px] mx-auto">
        {/* Left Column - Sidebar */}
        <div className="col-span-12 md:col-span-3">
          <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        </div>

        {/* Middle Column - Dynamic Content */}
        <div
          className={`col-span-12 ${currentView === "home" ? "md:col-span-6" : "md:col-span-9"}`}
        >
          {renderMiddleContent()}
        </div>

        {/* Right Column - Bio (only on home) */}
        {currentView === "home" && (
          <div className="col-span-12 md:col-span-3">
            {renderRightContent()}
          </div>
        )}
      </div>

      <ThemeToggle />
    </div>
  );
};

export default Layout;
