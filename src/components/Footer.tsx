import { Linkedin, Github, Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <p className="text-gray-400 text-sm text-center">
          Pedro Almeida — Senior Software Engineer. Based in Rio de Janeiro, Brazil.
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/palmeida-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/PedroMarianoAlmeida"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Github size={20} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="./assets/pedro-almeida-cv.docx"
            download
            className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors duration-200"
          >
            <Download size={20} />
            <span className="text-sm font-medium">Download CV</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
