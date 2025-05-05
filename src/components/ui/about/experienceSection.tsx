import { FC } from "react";

export const ExperienceSection: FC = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="font-semibold">Frontend Developer @ GlobalTech</h3>
          <p className="text-gray-600">
            2020–Present — Built scalable UIs for international clients using
            React/Next.js.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Designer @ Freelance</h3>
          <p className="text-gray-600">
            2017–2020 — Delivered design and development for startups and small
            businesses.
          </p>
        </li>
      </ul>
    </section>
  );
};
