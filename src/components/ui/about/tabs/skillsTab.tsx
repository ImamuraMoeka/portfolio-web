import { FC } from "react"
import { Progress } from "@/components/ui/elements/progress"

export const SkillsTab: FC = () => {
  const technicalSkills: { name: string; level: number }[] = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ]

  const languages: { name: string; level: number }[] = [
    { name: "English", level: 10 },
    { name: "Japanese", level: 100 },
    { name: "Spanish", level: 40 },
  ]

  const tools: string[] = [
    "VS Code",
    "Figma",
    "Adobe XD",
    "Git/GitHub",
    "Docker",
    "Jira",
    "Slack",
    "Notion",
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Skill Set</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Technical Skills</h3>
          <div className="space-y-4">
            {technicalSkills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Tools */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Languages</h3>
          <div className="space-y-4">
            {languages.map((lang, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{lang.name}</span>
                  <span>{lang.level}%</span>
                </div>
                <Progress value={lang.level} className="h-2" />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-8">Tools</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
