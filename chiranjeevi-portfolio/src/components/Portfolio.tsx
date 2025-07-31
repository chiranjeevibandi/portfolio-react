import { ExternalLink, Github, Globe, Bot, Shield, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing personal branding and technical skills with clean design and smooth animations.',
      technologies: ['AI', 'Gemini API', 'Prompt Engineering','Assistant UI'],
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'SEO Friendly'],
      icon: <Globe className="h-6 w-6" />,
      liveUrl: '#',
      githubUrl: '',
      status: 'Live on Netlify',
      gradient: 'from-primary to-primary-glow'
    },
    {
      title: 'AI Chatbot Using Gemini API',
      description: 'Intelligent chatbot powered by Google Gemini API with advanced prompt engineering for natural conversations and high accuracy responses.',
      technologies: ['Gemini API', 'Prompt Engineering', 'JavaScript'],
      features: ['90% Response Accuracy', 'Natural Language Processing', 'Context Awareness', 'Real-time Responses'],
      icon: <Bot className="h-6 w-6" />,
      liveUrl: 'https://my-chat-gpt-se8m.vercel.app/',
      githubUrl: '',
      status: 'Live on Vercel',
      gradient: 'from-secondary to-accent'
    },
    {
      title: 'Software Vulnerability Detection Tool',
      description: 'Machine learning-powered security tool that detects vulnerabilities in software systems using trained ML models and comprehensive analysis.',
      technologies: ['Python', 'Machine Learning', 'MySQL'],
      features: ['ML-based Detection', 'Security Analysis', 'Database Integration', 'Automated Scanning'],
      icon: <Shield className="h-6 w-6" />,
      liveUrl: '#',
      githubUrl: '',
      status: 'Backend Complete',
      gradient: 'from-accent to-primary'
    },
    {
      title: 'To-Do List App (Open Source)',
      description: 'Feature-rich task management application with community support, built with modern React patterns and responsive design.',
      technologies: ['ReactJS', 'CSS', 'Local Storage'],
      features: ['Task Management', 'Local Storage', 'Responsive Design', 'Open Source'],
      icon: <CheckSquare className="h-6 w-6" />,
      liveUrl: 'https://to-do-list-app-sigma-rouge.vercel.app/',
      githubUrl: '',
      status: 'Open Source',
      gradient: 'from-secondary to-primary'
    },
    {
      title: 'Weather Forecasting Web App',
      description: 'This is dynamic weather forcasting web application , which is developed using HTML, CSS,JavaScript and media queries.It shows the current weather of the city including temperature, atmosphere and wind speed.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['Responsive','Real-time','Interactive','Informative'],
      icon: <CheckSquare className="h-6 w-6" />,
      liveUrl: 'https://weatherforcastingwebapplication.netlify.app/',
      githubUrl: '',
      status: 'Weather Forecasting',
      gradient: 'from-secondary to-primary'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-project group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <div className="card-tech p-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in More Projects?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more open-source contributions and experimental projects.
            </p>
            <Button 
              className="btn-hero"
              onClick={() => window.open('https://github.com/chiranjeevibandi', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
