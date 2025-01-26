import React from "react";
import {  FaLinkedin, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-48">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre mi</h3>
            <p className="text-gray-400">
              Soy David Verde un programador Full stack con 5 años de experiencia en diferentes tecnologias como React, Angular, React Native, Ruby on Rails, NodeJs testing units y PostgresQl. me enfoco en mejorar siempre para crear aplicaciones atrativas y enfocadas en la comodidad del usuario.
            </p>
          </div>

      
       


          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
 
              <a
                 href="https://portfolio-david-verde.netlify.app"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBriefcase size={24} />
              </a>
      
              <a
                  href="https://www.linkedin.com/in/david-verde-alvarez/"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} David Verde Freelance. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
