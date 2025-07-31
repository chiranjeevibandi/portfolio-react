import { 
  Code2, 
  Palette, 
  Server, 
  BarChart3, 
  Bot,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Full Stack Web Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, Java Spring Boot, and databases like MongoDB and MySQL.',
      features: ['Responsive Design', 'RESTful APIs', 'Database Integration', 'Authentication & Security'],
      gradient: 'from-primary to-primary-glow'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Front-End Development & UI Design',
      description: 'Creating beautiful, responsive, and user-friendly interfaces with modern frameworks and design principles.',
      features: ['React Applications', 'Responsive Layouts', 'UI/UX Design', 'Performance Optimization'],
      gradient: 'from-secondary to-accent'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'API Integration & Backend Development',
      description: 'Building robust backend systems and integrating third-party APIs to power your applications.',
      features: ['RESTful API Design', 'Database Design', 'Server Configuration', 'Third-party Integrations'],
      gradient: 'from-accent to-primary'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Data Analysis & Visualization',
      description: 'Transform your data into actionable insights with powerful visualization tools and analytics.',
      features: ['Tableau Dashboards', 'Power BI Reports', 'Data Processing', 'Statistical Analysis'],
      gradient: 'from-secondary to-primary'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI Chatbot Integration',
      description: 'Implement intelligent chatbots using Google Gemini API with high accuracy and natural conversations.',
      features: ['Gemini API Integration', 'Prompt Engineering', 'Custom Training', '90% Response Accuracy'],
      gradient: 'from-primary to-accent'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-service group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button
                onClick={scrollToContact}
                variant="ghost"
                className="group/btn w-full mt-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-tech p-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Let's collaborate and bring your ideas to life with cutting-edge technology and clean, maintainable code.
            </p>
            <Button 
              onClick={scrollToContact}
              className="btn-hero"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;