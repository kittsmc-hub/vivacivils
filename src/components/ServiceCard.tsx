import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-blue-100">
      <div className="bg-blue-50 p-4 rounded-full inline-block mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-300">
        Learn More <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  );
};

export default ServiceCard;