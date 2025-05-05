type Job = {
    period: string
    title: string
    company: string
    description: string
    technologies: string[]
  }
  
  const jobs: Job[] = [
    {
      period: "2020 - Present",
      title: "Freelance Frontend Developer",
      company: "Self-employed",
      description:
        "Working with clients worldwide to design and develop responsive websites and web applications. I've completed numerous projects focusing on user-centered design principles, performance, and usability.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    },
    {
      period: "2018 - 2020",
      title: "Senior Frontend Developer",
      company: "Tech Startup Inc.",
      description:
        "Led frontend development for the company's main web application. Responsible for improving user interfaces, optimizing performance, and implementing new features. Mentored junior developers as a team lead.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "GraphQL"],
    },
    {
      period: "2016 - 2018",
      title: "Web Developer",
      company: "Digital Agency Co.",
      description:
        "Developed websites and web applications for various client projects. Implemented responsive designs, ensured cross-browser compatibility, and optimized performance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"],
    },
  ]
  
  export function ExperienceTab() {
    return (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-rose-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-rose-500" />
              <div className="space-y-2">
                <div className="text-sm text-rose-500">{job.period}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <div className="text-gray-600 font-medium">{job.company}</div>
                <p className="text-gray-600">{job.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  