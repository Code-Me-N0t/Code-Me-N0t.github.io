import React, { useRef } from 'react';
import useIsVisible from './useIsVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faExclamationTriangle, faNetworkWired, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt, faJira } from '@fortawesome/free-brands-svg-icons';
// import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";

const Skills = () => {
    const toolSets = [
        { id: 1, icon: faJira, label: 'Proficient in using bug tracking tool like JIRA' },
        { id: 1, icon: faGitAlt, label: 'Proficient in using GIT commands' },
        { id: 1, icon: faNetworkWired, label: 'Familiarity in using API testing using POSTMAN' },
        { id: 1, icon: faTachometerAlt, label: 'Familiarity in performance testing tools like JMETER and LOCUST' },
        { id: 1, icon: faClipboardList, label: 'Proficient in using bug tracking tool like JIRA' },
        { id: 1, icon: faExclamationTriangle, label: 'Proficient in using bug tracking tool like JIRA' },
    ];
    const skillSets = [
        {
            id: 1,
            skills: [
                { name: 'CSS', id: 'CSS', level: 90 },
                { name: 'Javascript', id: 'Javascript', level: 80 },
                { name: 'HTML', id: 'HTML', level: 85 },
                { name: 'PHP', id: 'PHP', level: 70 },
                { name: 'PYTHON', id: 'PYTHON', level: 75 }
            ]
        },
        {
            id: 2,
            skills: [
                { name: 'Selenium', id: 'selenium', level: 80 },
                { name: 'Robot Framework', id: 'robot', level: 65 },
                { name: 'Python | Pytest', id: 'pytest', level: 70 },
                { name: 'JS | Cypress', id: 'cypress', level: 60 },
                { name: 'Java | Groovy', id: 'groovy', level: 40 }
            ]
        }
    ];

    const skillsRef = useRef();
    const isVisible = useIsVisible(skillsRef, { threshold: 0.3 });

    return (
        <div id="skills" className="sm:flex sm:flex-center sm:items-center" ref={skillsRef}>
            <div className='skills-con-1'>
                <h2 className={`md:text-4xl text-xl m-4 ${isVisible ? 'visible' : 'invisible'}`}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                        transitionDelay: isVisible ? '0.5s' : '0s'
                    }}
                >SKILLS</h2>
                <div className="sets flex flex-wrap justify-center">
                    {skillSets.map((set) => (
                        <SkillSet key={set.id} skills={set.skills} isVisible={isVisible} />
                    ))}
                </div>
            </div>
            <div className='skills-con-2'>
                {/* <h2 className={`md:text-4xl text-xl m-4 ${isVisible ? 'visible' : 'invisible'}`}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                        transitionDelay: isVisible ? '0.5s' : '0s'
                    }}
                >TOOLS</h2> */}
                <div className="tools-set-con">
                    {toolSets.map((tool) => (
                        <div key={tool.id} className={`tools-set md:m-5 ${isVisible ? 'fade-in' : 'fade-out'}`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out',
                            }}
                        >
                            <label>{tool.label}</label>
                            <FontAwesomeIcon className="tool-icon" icon={tool.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SkillSet = ({ skills, isVisible }) => {
    return (
        <div
            className={`set m-2 ${isVisible ? 'fade-in' : 'fade-out'}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                transitionDelay: isVisible ? '0.5s' : '0s'
            }}
        >
            {skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                    <label htmlFor={skill.id} className="block mb-1">{skill.name}</label>
                    <div className="skills" id={skill.id}>
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