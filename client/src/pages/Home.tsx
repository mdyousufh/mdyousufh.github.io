import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Database, Zap, Award, BookOpen } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Academic Elegance
 * - Clean white background with academic blue accents
 * - Gold highlights for achievements
 * - Professional serif typography (Crimson Text)
 * - Minimal, scholarly aesthetic
 * - Print-friendly design
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const skills = {
    backend: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
    tools: ["Git & GitHub", "Linux", "Docker", "Maven"],
  };

  const projects = [
    {
      title: "Android-Based Tenant Information Management System",
      description: "Final year academic project for managing tenant data, rent records, and maintenance requests.",
      tech: ["Java", "Firebase", "Android"],
      link: "https://github.com/mdyousufh/TIMS",
      image: "owner.jpg",
    },
    {
      title: "Wireless Current Transmission System",
      description: "Course project demonstrating contactless power transmission using electromagnetic induction.",
      tech: ["Electronics", "Embedded Systems", "Circuit Design"],
      image: "wire.jpg",
    },
  ];


  const experience = [
    {
      role: "Junior Software Engineer",
      company: "OROCUBE TECH",
      period: "February 2023 – Present",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Developed and maintained backend applications using Java and Spring Boot",
        "Designed and implemented RESTful APIs for web applications",
        "Worked with PostgreSQL databases including schema design and query optimization",
        "Collaborated with cross-functional teams following Agile methodology",
      ],
    },
    {
      role: "Intern Software Engineer",
      company: "OROCUBE TECH",
      period: "August 2022 – January 2023",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Assisted in developing and testing software applications",
        "Supported senior developers in coding, debugging, and documentation",
        "Learned version control using Git and basic software development practices",
      ],
    },
    {
      role: "Academic Tutor - Private Tutor (Part-Time)",
      company: "Self-Employed",
      period: "January 2016 – July 2022",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Provided home-based tutoring to secondary-level students (Grades 8–10)",
        "Taught Mathematics and Science and assisted with exam preparation",
        "Supported students through regular assessments and personalized guidance",
      ],
    },
  ];

  const achievements = [
    {
      title: "ICPC Asia Dhaka Regional Preliminary Contest",
      description: "Participant",
      icon: "🏆",
    },
    {
      title: "Intra-University Coding Contest",
      description: "Participant",
      icon: "💻",
    },
    {
      title: "University Mathematics Olympiad",
      description: "Participant",
      icon: "📐",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science (BSc) in Computer Science & Engineering",
      school: "City University, Dhaka, Bangladesh",
      year: "2017 – 2021",
      details: "CGPA: 3.01/4.0",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Government Bangla College, Dhaka, Bangladesh",
      year: "2014 – 2016",
      details: "CGPA: 3.92/5.0",
    },
    ,
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Mirpur Bangla High school, Dhaka, Bangladesh",
      year: "2012 – 2014",
      details: "CGPA: 4.56/5.0",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header/Navigation */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg font-serif">
                YH
              </div>
              <h1 className="text-xl font-serif font-bold text-primary">Md Yousuf Hossan</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#education" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Education</a>
              <a href="#achievements" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Achievements</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-xl border border-white/60 bg-white p-2">
                <img
                  src="me.png"
                  alt="Md Yousuf Hossan"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>


            {/* Right: Introduction */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-serif text-lg mb-2">Hello, I'm</p>
                <h1 className="text-5xl font-serif font-bold text-foreground mb-2">Md Yousuf</h1>
                <h2 className="text-4xl font-serif font-bold text-primary mb-4">Hossan</h2>
                <p className="text-xl text-secondary font-medium">Junior Software Engineer</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A backend-focused software engineer passionate about building scalable systems with Java, Spring Boot, and PostgreSQL. Currently working at OROCUBE TECH while preparing for graduate studies.
              </p>

   <div className="flex gap-4">
  {/* Scroll to Contact Section */}
  <a
    href="#contact"
    className="academic-button"
  >
    Get in Touch
  </a>

  {/* Open GitHub in New Tab */}
  <a
    href="https://github.com/mdyousufh/"
    target="_blank"
    rel="noopener noreferrer"
    className="academic-button-outline"
  >
    View GitHub
  </a>
</div>


              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/mdyousufh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/70 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mdyousufh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/70 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href="mailto:yousuf.hossan.cs@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/70 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="academic-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="academic-card">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-serif font-bold text-foreground">Backend Focus</h3>
              </div>
              <p className="text-muted-foreground">
                Specialized in building scalable backend systems with Java, Spring Boot, and RESTful APIs. Strong foundation in database design and optimization.
              </p>
            </div>

            <div className="academic-card">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-serif font-bold text-foreground">Data-Centric</h3>
              </div>
              <p className="text-muted-foreground">
                Experienced with PostgreSQL, schema design, and query optimization. Understanding of data structures and algorithms for efficient solutions.
              </p>
            </div>

            <div className="academic-card">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-serif font-bold text-foreground">MSc Aspirant</h3>
              </div>
              <p className="text-muted-foreground">
                Pursuing Master's in Computer Science to deepen expertise in software engineering, distributed systems, and modern computing technologies.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif font-bold text-primary mb-3">Backend Technologies</h4>
                <ul className="space-y-2">
                  {skills.backend.map((skill, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">•</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold text-primary mb-3">Tools & Concepts</h4>
                <ul className="space-y-2">
                  {skills.tools.map((tool, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">•</span> {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="academic-section bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Professional Experience</h2>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="academic-card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      {/* Projects Section */}
      <section id="projects" className="academic-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="academic-card overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                {project.image && (
                  <div className="w-full overflow-hidden rounded-md mb-4 bg-gray-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                )}

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block px-3 py-1 bg-blue-100 text-primary text-sm rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/70 font-medium flex items-center gap-2 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Education Section */}
      <section id="education" className="academic-section bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Education</h2>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="academic-card">
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-primary font-medium mb-1">{edu.school}</p>
                <div className="flex justify-between items-center">
                  <p className="text-muted-foreground">{edu.details}</p>
                  <p className="text-sm text-muted-foreground font-medium">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="academic-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Achievements & Awards</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="academic-card text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="academic-section bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8 opacity-90">
            Feel free to contact me for academic or professional opportunities.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:your-email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>

            <a
              href="https://github.com/mdyousufh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/mdyousufh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/mdyousufh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:yousuf.hossan.cs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-50 border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Md Yousuf Hossan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
