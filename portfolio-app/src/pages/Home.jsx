import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Code,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { ThemeContext } from "../App";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTech, setCurrentTech] = useState(0);
  const { isDarkMode } = useContext(ThemeContext);

  const techStack = ["React", "Node.js", "MongoDB", "Express", "JavaScript"];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`h-screen w-full flex overflow-hidden transition-all duration-700 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div
          className={`absolute w-72 h-72 rounded-full blur-3xl opacity-20 transition-all duration-1000 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-10 transition-all duration-1000 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
          style={{
            right: `${-mousePosition.x * 0.01}px`,
            bottom: `${-mousePosition.y * 0.01}px`,
          }}
        />

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 opacity-5 ${
            isDarkMode ? "bg-white" : "bg-slate-900"
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20">
                <GraduationCap className="w-4 h-4 text-green-400" />
                <span
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-white" : "text-slate-700"
                  }`}
                >
                  Fresh Graduate - Ready to Learn
                </span>
              </div>

              {/* Name with Gradient */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span
                    className={`block ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Rithdesh
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                    SK
                  </span>
                </h1>

                {/* Animated Title */}
                <div className="flex items-center gap-3">
                  <Code
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <h2
                    className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Aspiring Full Stack Developer
                  </h2>
                </div>
              </div>

              {/* Animated Tech Stack */}
              <div className="flex items-center gap-3">
                <span
                  className={`text-lg ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Passionate about
                </span>
                <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {techStack[currentTech]}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl leading-relaxed max-w-xl ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Recent graduate with a passion for creating innovative web
                applications. Eager to contribute fresh ideas and learn from
                experienced developers while building meaningful digital
                solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    View My Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 " />
                </Link>

                <Link
                  to="/contact"
                  className={`px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-300 ${
                    isDarkMode
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Get In Touch
                </Link>
              </div>

              {/* Fresh Graduate Stats */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
                {[
                  { number: "5", label: "Projects Built", icon: "💻" },
                  { number: "100%", label: "Dedication", icon: "🔥" },
                  { number: "∞", label: "Learning Mode", icon: "🚀" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl font-bold ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
