import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {!imageError ? (
          <img 
            src={`${image}?auto=format&q=80&w=800`} 
            alt={title} 
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
            <p className="text-gray-600">Image unavailable</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">
          A comprehensive project showcasing our expertise in {category.toLowerCase()} with innovative solutions and exceptional results.
        </p>
        <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-300">
          View Project <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;