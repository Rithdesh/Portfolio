import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/rithdesh-s-k-119383290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      ariaLabel: "LinkedIn",
    },
    {
      icon: <FaGithub className="h-6 w-6" />,
      href: "https://github.com/Rithdesh",
      ariaLabel: "GitHub",
    },
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      href: "mailto:rithdesh2004@gmail.com",
      ariaLabel: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;