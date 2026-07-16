import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      glow: 'rgba(59, 130, 246, 0.15)', // blue glow
      skills: [
        { name: 'React', level: 'Advanced' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'HTML5', level: 'Expert' },
        { name: 'CSS3 / SCSS', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
      ],
    },
    {
      title: 'Backend & Databases',
      glow: 'rgba(168, 85, 247, 0.15)', // purple glow
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'REST APIs', level: 'Expert' },
        { name: 'SQL / MySQL', level: 'Intermediate' },
      ],
    },
    {
      title: 'Core Programming',
      glow: 'rgba(59, 130, 246, 0.15)', // blue glow
      skills: [
        { name: 'Java', level: 'Advanced' },
        { name: 'C++', level: 'Advanced' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'OOPs Concepts', level: 'Advanced' },
      ],
    },
    {
      title: 'Tools & DevOps',
      glow: 'rgba(168, 85, 247, 0.15)', // purple glow
      skills: [
        { name: 'Git', level: 'Advanced' },
        { name: 'GitHub', level: 'Advanced' },
        { name: 'Postman', level: 'Expert' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Docker', level: 'Beginner' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section scroll-reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="header-bar"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              className="glass-card skill-category-card"
              key={index}
              style={{ '--category-glow': category.glow }}
            >
              <div className="category-glow-effect"></div>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, sIndex) => (
                  <div className="skill-badge-wrapper" key={sIndex}>
                    <div className="skill-badge">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
