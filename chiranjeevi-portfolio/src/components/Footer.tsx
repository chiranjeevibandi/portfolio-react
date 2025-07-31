import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gradient">Chiranjeevi</span>
            <span className="text-muted-foreground">Full Stack Java Developer</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Code2 className="h-4 w-4 text-primary" />
            <span>by Bandi Chiranjeevi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;