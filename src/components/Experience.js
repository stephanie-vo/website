import React from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Experience = () => {

    const experiences = [
        {
            company: 'Company A',
            logo: navIcon1, // Replace with actual logo path
            position: 'Software Engineer',
            location: 'City A, Country A',
            startDate: 'January 2019',
            endDate: 'December 2021', // 'Present' can be used for ongoing roles
            achievements: [
                'Implemented feature X, resulting in a 20% increase in user engagement.',
                'Collaborated with cross-functional teams to deliver project Y ahead of schedule.',
            ],
        },
        {
            company: 'Company B',
            logo: navIcon2, // Replace with actual logo path
            position: 'Frontend Developer',
            location: 'City B, Country B',
            startDate: 'March 2022',
            endDate: 'Present', // 'Present' can be used for ongoing roles
            achievements: [
                'Designed and implemented responsive user interfaces for web applications.',
                'Optimized website performance, resulting in a 30% reduction in page load times.',
            ],
        },
    ];

    return (
        <section id="experience">
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
