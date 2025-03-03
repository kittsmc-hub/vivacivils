import React, { useEffect } from 'react';
import { Building2, Users, Briefcase, Phone, Mail, MapPin, ChevronRight, ArrowRight, CheckCircle, Award, Clock, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import ContactForm from './components/ContactForm';

function App() {
  // Preload critical hero image
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Engineering project" 
            className="w-full h-full object-cover"
            fetchPriority="high"
            width="2070"
            height="1380"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Tomorrow's Infrastructure Today
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Vivacivils Engineering Ltd delivers innovative civil engineering solutions with precision, reliability, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center">
                Our Services <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center">
                Contact Us <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75" 
                  alt="Engineering team" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Vivacivils Engineering</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Vivacivils Engineering Ltd has established itself as a leader in the civil engineering industry. 
                We specialize in delivering high-quality infrastructure projects that meet the highest standards of safety, 
                sustainability, and innovation.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced engineers, project managers, and technicians work collaboratively to tackle complex 
                engineering challenges and deliver exceptional results for our clients across various sectors including 
                transportation, water management, commercial development, and public infrastructure.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Expert Team</h3>
                    <p className="text-gray-600 text-sm">Highly qualified professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Award Winning</h3>
                    <p className="text-gray-600 text-sm">Industry recognized excellence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">On-Time Delivery</h3>
                    <p className="text-gray-600 text-sm">Meeting deadlines consistently</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Safety First</h3>
                    <p className="text-gray-600 text-sm">Highest safety standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of civil engineering services tailored to meet the unique needs of each project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Structural Engineering" 
              description="Design and analysis of structures ensuring safety, functionality, and compliance with building codes."
              icon={<Building2 className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard 
              title="Transportation Engineering" 
              description="Planning, design, and maintenance of transportation infrastructure including roads, bridges, and highways."
              icon={<Briefcase className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard 
              title="Water Resource Management" 
              description="Sustainable solutions for water supply, drainage systems, flood control, and wastewater treatment."
              icon={<Users className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard 
              title="Geotechnical Engineering" 
              description="Analysis of earth materials and their impact on construction projects to ensure structural stability."
              icon={<Building2 className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard 
              title="Construction Management" 
              description="Comprehensive oversight of construction projects from planning to completion, ensuring quality and efficiency."
              icon={<Briefcase className="h-8 w-8 text-blue-600" />}
            />
            <ServiceCard 
              title="Environmental Engineering" 
              description="Developing solutions that minimize environmental impact and promote sustainability in civil engineering projects."
              icon={<Users className="h-8 w-8 text-blue-600" />}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that demonstrate our expertise and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Urban Highway Expansion" 
              category="Transportation"
              image="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=75"
            />
            <ProjectCard 
              title="Commercial Complex" 
              category="Structural Engineering"
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=75"
            />
            <ProjectCard 
              title="Municipal Water Treatment" 
              category="Water Resources"
              image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=75"
            />
            <ProjectCard 
              title="Residential Development" 
              category="Construction Management"
              image="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=600&q=75"
            />
            <ProjectCard 
              title="Coastal Protection" 
              category="Environmental Engineering"
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75"
            />
            <ProjectCard 
              title="Bridge Reconstruction" 
              category="Structural Engineering"
              image="https://images.unsplash.com/photo-1513436539083-9d2127e742f1?auto=format&fit=crop&w=600&q=75"
            />
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-300">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Vivacivils Engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Vivacivils Engineering delivered our highway expansion project on time and within budget. Their attention to detail and problem-solving abilities were impressive."
              author="John Anderson"
              position="Director, Metropolitan Transport Authority"
            />
            <TestimonialCard 
              quote="The team at Vivacivils provided innovative solutions to our complex water management challenges. Their expertise made a significant difference to our project."
              author="Sarah Johnson"
              position="Chief Operations Officer, Urban Development Corp"
            />
            <TestimonialCard 
              quote="Working with Vivacivils on our commercial complex was a seamless experience. Their professionalism and technical knowledge are unmatched in the industry."
              author="Michael Zhang"
              position="Project Manager, Global Construction Partners"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to learn more about our services? Get in touch with our team.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Our Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Office Location</h4>
                      <p className="text-gray-600">Corner House, Kisauni RD, Nairobi West. </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email Address</h4>
                      <p className="text-gray-600">info@vivacivils.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone Number</h4>
                      <p className="text-gray-600">+254 (0) 720 303 684</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Business Hours</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;