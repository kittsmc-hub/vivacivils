import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, position }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative">
      <Quote className="h-10 w-10 text-blue-100 absolute top-6 right-6" />
      <p className="text-gray-600 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 font-bold">{author.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{author}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;