import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-placeholder.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl float-animation" />
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary/20 blur-xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-accent/20 blur-xl float-animation" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileImage}
                alt="Bandi Chiranjeevi"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 shadow-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-md -z-10" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-hero mb-6 animate-slide-up">
            Bandi Chiranjeevi
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Java Developer
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Crafting clean, responsive, and scalable web applications using{' '}
            <span className="text-gradient font-semibold">Java Spring Boot</span> &{' '}
            <span className="text-gradient font-semibold">MERN stack</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToPortfolio}
              className="btn-hero group"
            >
              View Portfolio
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="btn-ghost group"
            >
              <Mail className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;