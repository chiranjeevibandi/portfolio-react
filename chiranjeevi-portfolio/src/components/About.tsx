import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="card-tech p-8 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a full stack developer skilled in Java Spring Boot and the MERN stack, 
                passionate about building responsive and user-friendly web applications. 
                With a strong foundation in Core Java, DSA, and front-end technologies like ReactJS, 
                I enjoy solving real-world problems through code.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Currently pursuing my B.Tech in CSE (Data Science), I actively work on projects 
                and continuously expand my skills through internships and certifications. 
                I believe in writing clean, maintainable code and staying updated with the latest 
                industry trends and best practices.
              </p>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6">
            {/* Education */}
            <div className="card-tech p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Education
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-foreground">
                        B.Tech in Computer Science and Engineering (Data Science)
                      </h5>
                      <p className="text-muted-foreground">
                        Siddhartha Institute of Engineering and Technology, Hyderabad
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          2021 – 2025 | Current Aggregate: 76%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="card-tech p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Experience
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-foreground">
                        Web Development Intern
                      </h5>
                      <p className="text-accent font-medium">Academor</p>
                      <div className="flex items-center gap-2 mt-1 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          Oct 2023 – Dec 2023
                        </span>
                      </div>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Built 3+ responsive web pages</li>
                        <li>• Collaborated on UI components</li>
                        <li>• Gained hands-on experience in real-world workflows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;