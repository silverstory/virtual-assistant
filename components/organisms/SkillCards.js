import React from 'react';
import SkillCard from '../molecules/SkillCard';

const skills = [
  {
    name: 'Event1',
    skills: [
      ['Breakfast', 95],
      ['Lunch', 90],
      ['Dinner', 85],
    ],
  },
  {
    name: 'Event2',
    skills: [
      ['Breakfast', 55],
      ['Lunch', 70],
      ['Dinner', 65],
    ],
  },
];

function SkillCards({ isDetailed }) {
  return (
    <>
      {skills.map(({ name, skills }, idx) => {
        return (
          <SkillCard
            name={name}
            skills={skills}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default SkillCards;
