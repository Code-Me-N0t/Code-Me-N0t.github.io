import React, { useRef } from 'react';
import useIsVisible from './useIsVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faExclamationTriangle, faNetworkWired, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt, faJira } from '@fortawesome/free-brands-svg-icons';
import '../assets/skills.css'

const Skills = () => {
    const toolSets = [
        { id: 1, icon: faJira, label: 'Basic knowledge of using bug tracking tool like JIRA' },
        { id: 2, icon: faGitAlt, label: 'Exposure to using GIT commands' },
        { id: 3, icon: faNetworkWired, label: 'Experience with API testing using POSTMAN' },
        { id: 4, icon: faTachometerAlt, label: 'Familiarity in performance testing tools like JMETER and LOCUST' },
        { id: 5, icon: faClipboardList, label: 'Proficient in writing and executing Test Cases' },
        { id: 6, icon: faExclamationTriangle, label: 'Familiarity in using some automation tools used in daily work routines' },
    ];
    const skillSets = [
        {
            id: 1,
            skills: [
                { name: 'CSS',          id: 'CSS',          level: 90 },
                { name: 'Javascript',   id: 'Javascript',   level: 80 },
                { name: 'HTML',         id: 'HTML',         level: 85 },
                { name: 'PHP',          id: 'PHP',          level: 70 },
                { name: 'PYTHON',       id: 'PYTHON',       level: 75 }
            ]
        },
        {
            id: 2,
            skills: [
                { name: 'Selenium',         id: 'selenium', level: 80 },
                { name: 'Robot Framework',  id: 'robot',    level: 65 },
                { name: 'Python | Pytest',  id: 'pytest',   level: 70 },
                { name: 'JS | Cypress',     id: 'cypress',  level: 60 },
                { name: 'Java | Groovy',    id: 'groovy',   level: 40 }
            ]
        }
    ];

    const skillsRef = useRef();
    const isVisible = useIsVisible(skillsRef, { threshold: 0.3 });

    return (
        <div id="skills" className="items-center" ref={skillsRef}>
        <h2 className={`md:text-4xl text-xl w-full text-center ${isVisible ? 'visible' : 'invisible'}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                transitionDelay: isVisible ? '0.5s' : '0s'
            }}
        >
            SKILLS
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center overflow-hidden">
            <div className='skills-con-1 w-full'>
                <div className="sets flex flex-wrap justify-center">
                    {skillSets.map((set) => (
                        <SkillSet key={set.id} skills={set.skills} isVisible={isVisible} />
                    ))}
                </div>
            </div>
            <div className='skills-con-2 md:w-full w-full'>
                <div className="tools-set-con">
                    {toolSets.map((tool) => (
                        <div key={tool.id} className={`tools-set space-x-10 md:m-5 m-3 ${isVisible ? 'fade-in' : 'fade-out'}`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out',
                                transitionDelay: isVisible ? '0.5s' : '0s'
                            }}
                        >
                            <label>{tool.label}</label>
                            <FontAwesomeIcon className="tool-icon" icon={tool.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};

const SkillSet = ({ skills, isVisible }) => {
    return (
        <div
            className={`set m-2 sm:w-40 md:w-56 lg:w-5/12 xl:w-5/12  lg:space-y-10 ${isVisible ? 'fade-in' : 'fade-out'}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                transitionDelay: isVisible ? '0.5s' : '0s'
            }}
        >
            {skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                    <label htmlFor={skill.id} className="block mb-1">{skill.name}</label>
                    <div className="skills lg:w-full" id={skill.id}>
                        <div
                            className="skill-bar"
                            style={{
                                maxWidth: `${isVisible ? skill.level : 0}%`,
                                animation: isVisible ? `grow ${skill.level / 20}s ease-in-out forwards` : 'none'
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;