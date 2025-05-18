import React from 'react';
import navIcon1 from '../assets/img/ericsson.png';
import navIcon2 from '../assets/img/metso.svg';

export const Experience = () => {

    const experiences = [
        {
            company: 'Ericsson',
            logo: navIcon1,
            position: 'FPGA Developer Intern',
            location: 'Kanata, ON',
            startDate: 'May 2023',
            endDate: 'August 2024',
            achievements: [
                'Automated FPGA build processes using Python, creating a Quartus build script to streamline development workflows.',
                'Contributed to migrating FPGA project codebase from ClearCase to Git by updating scripts, restructuring repositories, and supporting team onboarding to Git workflows.',
                'Developed UVM-based tests and sequences in SystemVerilog for Xilinx FPGA, including the implementation of scoreboards, monitors, and functional coverage to ensure comprehensive verification of the design.',
                'Managed regression test suites with Jenkins to continuously verify FPGA functionality throughout the project.',
                'Collaborated with designers to implement code coverage analysis, assessing the effectiveness of test cases.',
            ],
        },
        {
            company: 'Metso Outotec',
            logo: navIcon2,
            position: 'Project Engineer Intern',
            location: 'Burlington, ON',
            startDate: 'May 2022',
            endDate: 'September 2022',
            achievements: [
                'Supported project managers with 3 engineering, procurement and construction (EPC) projects valued over $80M USD.',
                'Assisted with project execution by coordinating with teams, contractors, and stakeholders to meet project timelines.',
                'Coordinated timely distribution of transmittals to clients in Aconex and ensured the accuracy and completeness of project documentation by reviewing drawings, specifications, and requisitions for consistency with project contract.',
            ],
        },
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <div className="experience-list">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className={`experience-item ${index % 2 === 0 ? 'even-experience' : 'odd-experience'}`}
                        >
                            <div className="company-logo">
                                <img src={experience.logo} alt={`${experience.company} Logo`} />
                            </div>
                            <div className="experience-details">
                                <div className="experience-info">
                                    <h3>{experience.position} @ {experience.company} </h3>
                                    <p className="company-info">
                                        {experience.location}
                                    </p>

                                </div>
                                <div className="achievements">
                                    <h4>Achievements:</h4>
                                    <ul className="achievements-list">
                                        {experience.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="company-info">
                                    {experience.startDate} to {experience.endDate}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
