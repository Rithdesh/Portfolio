import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "rithdesh2004@gmail.com",
      href: "mailto:rithdesh2004@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Tamil Nadu, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rithdesh-s-k-119383290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/Rithdesh",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center transition-all duration-700 py-20 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
      id="contact"
    >
      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Ready to collaborate or have questions? Here's how you can reach me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div
              className={`p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-slate-800/20 border border-slate-700/50"
                  : "bg-white/80 border border-white/50 shadow-lg"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 hover:scale-105 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`p-4 rounded-xl ${
                        isDarkMode ? "bg-slate-700/50" : "bg-slate-100/50"
                      }`}
                    >
                      <item.icon
                        className={`h-6 w-6 ${
                          isDarkMode ? "text-blue-400" : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium mb-1 ${
                          isDarkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`text-lg leading-relaxed hover:underline transition-all duration-300 ${
                            isDarkMode
                              ? "text-slate-300 hover:text-white"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className={`text-lg leading-relaxed ${
                            isDarkMode ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 z-10"
          >
            {/* Social Links */}
            <div
              className={`p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-slate-800/20 border border-slate-700/50"
                  : "bg-white/80 border border-white/50 shadow-lg"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Connect With Me
              </h3>

              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-slate-700/30 border-slate-600/50 text-slate-300 hover:bg-slate-600/50 hover:border-slate-500"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
                    } ${social.color}`}
                    whileHover={{ rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>

              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Follow me for updates on my latest projects and insights into
                web development.
              </p>
            </div>

            {/* Quick Response Badge */}
            <motion.div
              className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50"
                  : "bg-gradient-to-br from-blue-100/80 to-purple-100/80 border border-blue-200/50"
              }`}
              whileHover={{ y: -5 }}
            >
              <div
                className={`inline-block px-3 py-1 rounded-xl text-sm font-medium mb-3 ${
                  isDarkMode
                    ? "bg-green-900/50 text-green-300"
                    : "bg-green-100 text-green-800"
                }`}
              >
                Quick Response
              </div>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-blue-200" : "text-blue-800"
                }`}
              >
                I typically respond within 24 hours. For urgent matters, feel
                free to reach out via LinkedIn.
              </p>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-800/50"
                  : "bg-gradient-to-br from-purple-100/80 to-pink-100/80 border border-purple-200/50"
              }`}
              whileHover={{ y: -5 }}
            >
              <div
                className={`inline-block px-3 py-1 rounded-xl text-sm font-medium mb-3 ${
                  isDarkMode
                    ? "bg-purple-900/50 text-purple-300"
                    : "bg-purple-100 text-purple-800"
                }`}
              >
                Currently Available
              </div>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-purple-200" : "text-purple-800"
                }`}
              >
                Open to new opportunities and exciting projects. Let's discuss
                how we can work together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
