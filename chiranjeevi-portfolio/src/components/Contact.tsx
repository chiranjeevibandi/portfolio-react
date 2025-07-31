import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_svad0vw';
    const templateId = 'template_udndhia';
    const publicKey = 'gwkIZjZFs2xfrDvir';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: 'Oops!',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'chiranjeevibandi29@gmail.com',
      href: 'mailto:chiranjeevibandi29@gmail.com',
      gradient: 'from-primary to-primary-glow',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      gradient: 'from-accent to-primary',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/chiranjeevibandi',
      href: 'https://linkedin.com/in/chiranjeevibandi',
      gradient: 'from-secondary to-primary',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'github.com/chiranjeevibandi',
      href: 'https://github.com/chiranjeevibandi',
      gradient: 'from-primary to-accent',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm always excited to discuss new opportunities or collaborations. Reach out through any channel below.
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-tech p-4 hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${contact.gradient} text-white group-hover:scale-110 transition-transform`}
                      >
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{contact.label}</h4>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="card-tech p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-hero w-full group"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="card-tech p-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Open to Opportunities
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              I'm currently looking for exciting opportunities. Whether you're a startup or an enterprise, let’s chat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="btn-hero"
                onClick={() => window.open('mailto:chiranjeevibandi29@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="btn-ghost"
                onClick={() => window.open('https://linkedin.com/in/chiranjeevibandi', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
