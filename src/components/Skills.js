//import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { Code, FileCode, Wrench, Gear, Globe } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

export const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: [
        "SystemVerilog", "Verilog", "Python", "C++", "C", "MATLAB", "TCL", "Perl", "Bash"
      ],
      className: "languages",
      icon: <Code size={20} />
    },
    {
      category: "Design & Verification Tools",
      skills: [
        "UVM", "Quartus", "Vivado", "QuestaSim", "Cadence Xcelium", "Lattice iCEcube2"
      ],
      className: "design-tools",
      icon: <FileCode size={20} />
    },
    {
      category: "Lab Skills",
      skills: [
        "Oscilloscope", "Function Generator", "Logic Analyzer", "Circuit Analysis"
      ],
      className: "lab-skills",
      icon: <Wrench size={20} />
    },
    {
      category: "Tools",
      skills: [
        "Git", "Linux", "Jira", "Jenkins"
      ],
      className: "tools",
      icon: <Gear size={20} />
    },
    {
      category: "Web Development",
      skills: [
        "HTML", "CSS", "JavaScript", "React"
      ],
      className: "web-dev",
      icon: <Globe size={20} />
    },
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