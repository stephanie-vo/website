//import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { Globe, Code, Database, FileCode } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Skills = () => {
  const skillsData = [
    { category: "Programming Languages", skills: ["Python", "Java", "C++"], className: "programming-languages", icon: <Code size={20} /> },
    { category: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React"], className: "web-development", icon: <Globe size={20} /> },
    { category: "Database", skills: ["SQL", "MongoDB"], className: "database", icon: <Database size={20} /> },
    { category: "Version Control", skills: ["Git"], className: "version-control", icon: <FileCode size={20} /> },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div key={index} className={`skill-category ${category.className}`}>
              <h3 className="category-title">{category.category}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill">
                    {category.icon}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="skills-photo" alt="skills photo">
        <img src={headerImg} />
      </div> */}

    </section>
  );
};