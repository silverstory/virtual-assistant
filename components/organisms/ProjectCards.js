import React from 'react';
import ExperienceCard from '../molecules/ExperienceCard';

const experiences = [
  {
    name: 'Medical Mission 2022',
    position: 'Medical Mission 2022',
    date: 'Feb 2022 - Apr 2022',
    imgSrc: 'medchain.jpg',
    link: 'https://gov.ph',
    works: [
      'Dental',
      'Eye Glasses',
      'Consultation',
    ],
  },
  {
    name: 'Inter-government Public Assistance Desks',
    position: 'Inter-government Public Assistance 2022',
    date: 'May 2022 - Jul 2022',
    imgSrc: 'uclacat.png',
    link: 'https://gov.ph',
    works: [
      'Hospistal bills assistance',
      'Legal Assistance',
    ],
  },
];

function ProjectCards({ isDetailed }) {
  return (
    <>
      {experiences.map(({ name, position, date, imgSrc, works, link }, idx) => {
        return (
          <ExperienceCard
            name={name}
            position={position}
            date={date}
            imgSrc={imgSrc}
            works={works}
            link={link}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default ProjectCards;
