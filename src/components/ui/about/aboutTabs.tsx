"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../elements";
import { ExperienceTab } from "./tabs/experienceTab";
import { SkillsTab } from "./tabs/skillsTab";
import { EducationTab } from "./tabs/EducationTab";
import { PersonalTab } from "./tabs/PersonalTab";

export function AboutTabs() {
  return (
    <section className="container mx-auto px-4 py-12">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>

        <TabsContent value="experience">
          <ExperienceTab />
        </TabsContent>
        <TabsContent value="skills">
          <SkillsTab />
        </TabsContent>
        <TabsContent value="education">{<EducationTab />}</TabsContent>
        <TabsContent value="personal">{<PersonalTab />}</TabsContent>
      </Tabs>
    </section>
  );
}
