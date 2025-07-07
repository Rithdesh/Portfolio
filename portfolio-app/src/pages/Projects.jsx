import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../App";

const projects = [
  {
    title: "Giga Vault",
    description:
      "A one stops password storage app allowing you to generate passwords and store them",
    tech: ["React", "Hono.js", "Express.js", "Cloudflare"],
    image: "/gigavault.png",
    liveUrl: "https://gvm-2k24.vercel.app/",
    githubUrl: "https://github.com/Giga-Vault",
  },
  {
    title: "Service Connect",
    description:
      "A realtime app tht allows users to connect with service providers and book appointments",
    tech: ["React", "Express.js", "Tailwind CSS", "node.js"],
    image: "/ServiceConnect.png",
    liveUrl: "https://service-connect-rithdeshs-projects.vercel.app/",
    githubUrl: "https://github.com/Rithdesh/Service_Connect",
  },
  {
    title: "Autochad",
    description:
      "A Ridee booking app that doesn't cost any middleman charges and helps the customer to book a ride",
    tech: ["React", "JavaScript", "MongoDB", "Node.js", "Express.js"],
    image: "/Autochad.png",
    liveUrl: "https://auto-chad.vercel.app/",
    githubUrl: "https://github.com/PREDEEP464/AUTO_CHAD",
  },
];

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen w-full transition-all duration-700 px-4 sm:px-6 lg:px-8 py-16 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
      id="projects"
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
              My Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              A showcase of my latest work, featuring innovative solutions and
              cutting-edge technologies
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-slate-800/40 border border-slate-700/50 shadow-xl"
                    : "bg-white/70 border border-white/50 shadow-lg"
                }`}
              >
                {/* Project Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full  transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Floating Tech Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-sm font-medium px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl backdrop-blur-sm">
                      {project.tech.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8 space-y-6">
                  <div className="space-y-4">
                    <h3
                      className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed ${
                        isDarkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4
                      className={`text-sm font-medium uppercase tracking-wider ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          className={`px-3 py-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                            isDarkMode
                              ? "bg-slate-700/70 text-slate-200 hover:bg-slate-600/70"
                              : "bg-slate-100/70 text-slate-700 hover:bg-slate-200/70"
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-6 py-3 border-2 rounded-xl font-semibold text-center transition-all duration-300 ${
                        isDarkMode
                          ? "border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500"
                          : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                      }`}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
