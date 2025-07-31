import { 
  Code2, 
  Database, 
  Globe, 
  Wrench, 
  Brain,
  Coffee,
  Cpu,
  Terminal,
  Cloud,
  BarChart3,
  Palette,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: 'Java', icon: <Coffee className="h-4 w-4" /> },
        { name: 'JavaScript', icon: <Terminal className="h-4 w-4" /> },
        { name: 'Python', icon: <Cpu className="h-4 w-4" /> },
        { name: 'HTML', icon: <Globe className="h-4 w-4" /> },
        { name: 'CSS', icon: <Palette className="h-4 w-4" /> },
        { name: 'SQL', icon: <Database className="h-4 w-4" /> },
      ]
    },
    {
      title: 'Frameworks',
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: 'ReactJS', icon: <Code2 className="h-4 w-4" /> },
        { name: 'Node.js', icon: <Terminal className="h-4 w-4" /> },
        { name: 'Express.js', icon: <Globe className="h-4 w-4" /> },
        { name: 'Spring Boot', icon: <Coffee className="h-4 w-4" /> },
        { name: 'Bootstrap', icon: <Palette className="h-4 w-4" /> },
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'MongoDB', icon: <Database className="h-4 w-4" /> },
        { name: 'MySQL', icon: <Database className="h-4 w-4" /> },
      ]
    },
    {
      title: 'Tools & Cloud',
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: 'GitHub', icon: <GitBranch className="h-4 w-4" /> },
        { name: 'GitLab', icon: <GitBranch className="h-4 w-4" /> },
        { name: 'AWS S3', icon: <Cloud className="h-4 w-4" /> },
        { name: 'Netlify', icon: <Globe className="h-4 w-4" /> },
        { name: 'Vercel', icon: <Globe className="h-4 w-4" /> },
        { name: 'Tableau', icon: <BarChart3 className="h-4 w-4" /> },
        { name: 'Power BI', icon: <BarChart3 className="h-4 w-4" /> },
        { name: 'Canva', icon: <Palette className="h-4 w-4" /> },
      ]
    },
    {
      title: 'Expertise',
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: 'Full Stack Development', icon: <Code2 className="h-4 w-4" /> },
        { name: 'DSA', icon: <Cpu className="h-4 w-4" /> },
        { name: 'Responsive Design', icon: <Globe className="h-4 w-4" /> },
        { name: 'API Integration', icon: <Terminal className="h-4 w-4" /> },
        { name: 'Prompt Engineering', icon: <Brain className="h-4 w-4" /> },
        { name: 'Machine Learning', icon: <Brain className="h-4 w-4" /> },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-tech p-6 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="skill-badge"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="text-primary">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="card-tech p-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm passionate about staying up-to-date with the latest technologies and best practices. 
              Whether it's mastering new frameworks, diving deep into data structures and algorithms, 
              or exploring emerging trends in web development, I'm always eager to expand my skillset 
              and take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;