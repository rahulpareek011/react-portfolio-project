import React from 'react'

const Skills = () => {
  return (
    <div className="page skills">
      <h2>Skills</h2>
      <div className="skill-group">
        <h3>Frontend</h3>
        <ul style={{display:'flex', justifyContent:'center', gap:40 }}>
          <li className='skill-edit'>HTML</li>
          <li className='skill-edit'>CSS</li>
          <li className='skill-edit'>JavaScript</li>
          <li className='skill-edit'>React</li>
          <li className='skill-edit'>Tailwind CSS</li>
          <li className='skill-edit'>Bootstrap</li>
        </ul>
      </div>
      <div className="skill-group">
        <h3>Backend</h3>
        <ul style={{display:'flex', justifyContent:'center', gap:40}}>
          <li className='skill-edit'>Core Java</li>
          <li className='skill-edit'>Advance Java</li>
          <li className='skill-edit'>Spring Boot</li>
        </ul>
      </div>
      <div className="skill-group">
        <h3>Tools</h3>
        <ul style={{display:'flex', justifyContent:'center', gap:40}}>
          <li className='skill-edit'>Git</li>
          <li className='skill-edit'>Git Hub</li>
          <li className='skill-edit'>Data Structure and Algorithm</li>
          <li className='skill-edit'>Linux</li>
          <li className='skill-edit'>Operating System</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

