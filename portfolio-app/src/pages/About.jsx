import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../App";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const experiences = [
    {
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications with modern technologies",
      icon: "🚀",
    },
    {
      title: "Frontend Architecture",
      description: "Creating scalable and maintainable user interfaces",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description: "Designing robust APIs and database architectures",
      icon: "⚙️",
    },
    {
      title: "DevOps & Deployment",
      description: "Streamlining development workflows and deployments",
      icon: "☁️",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full transition-all duration-700 px-4 sm:px-6 lg:px-8 py-16 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
      id="about"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center space-y-6 lg:space-y-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Passionate developer crafting digital experiences with modern
              technologies
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:space-y-8"
            >
              <div
                className={`backdrop-blur-sm rounded-2xl p-6 lg:p-8 ${
                  isDarkMode
                    ? "bg-slate-800/40 border border-slate-700/50"
                    : "bg-white/70 border border-white/50"
                }`}
              >
                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-6 ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  My Journey
                </h3>
                <div className="space-y-4">
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    I'm a passionate Full Stack Developer with a keen interest
                    in building modern, scalable, and user-friendly web
                    applications. With several years of experience in both
                    frontend and backend development, I've worked on a variety
                    of projects across different domains.
                  </p>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    My development philosophy is centered around writing clean,
                    maintainable code while delivering exceptional user
                    experiences. I'm constantly learning and staying up-to-date
                    with the latest web technologies and best practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-300 ${
                    isDarkMode
                      ? "bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50"
                      : "bg-white/60 border border-white/40 hover:bg-white/80"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">{exp.icon}</span>
                    <div>
                      <h4
                        className={`text-lg font-semibold mb-2 ${
                          isDarkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {exp.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
