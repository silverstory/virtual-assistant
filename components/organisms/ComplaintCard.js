import React, { useState, useEffect } from 'react';
import ExperienceCard from '../molecules/ExperienceCard';

function ComplaintCard({ isDetailed }) {

  let date = new Date().toLocaleDateString();

  const complaintcard = {
    name: 'Firstname: ' + window.$firstname,
    position: 'Lastname: ' + window.$lastname,
    date: 'Date filed: ' + date,
    imgSrc: 'done.png',
    link: 'https://8888.gov.ph',
    works: [
      'Mobile: ' + window.$mobile,
      'Email: ' +  window.$email,
      'Complaint: ' + window.$complaint,
    ],
  };

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   complaintcard =
  //     {
  //       name: window.$firstname,
  //       position: window.$lastname,
  //       date: '',
  //       imgSrc: 'done.png',
  //       link: 'https://8888.gov.ph',
  //       works: [
  //         window.$mobile,
  //         window.$email,
  //         window.$complaint,
  //       ],
  //     };
  // }, []);

  return (
    <>
          <ExperienceCard
            name={complaintcard.name}
            position={complaintcard.position}
            date={complaintcard.date}
            imgSrc={complaintcard.imgSrc}
            works={complaintcard.works}
            link={complaintcard.link}
            key={1}
            isDetailed={true}
          />
    </>
  );
}

export default ComplaintCard;





// import React, { useState, useEffect } from 'react';
// import ExperienceCard from '../molecules/ExperienceCard';

// const complaintcards = [
//   {
//     name: null,
//     position: null,
//     date: null,
//     imgSrc: 'done.png',
//     link: 'https://8888.gov.ph',
//     works: [
//       null,
//       null,
//       null,
//     ],
//   },
// ];

// function ComplaintCard({ isDetailed }) {

//   useEffect(() => {
//     // Update the document title using the browser API
//     const complaintcards = [
//       {
//         name: window.$firstname,
//         position: window.$lastname,
//         date: '',
//         imgSrc: 'done.png',
//         link: 'https://8888.gov.ph',
//         works: [
//           window.$mobile,
//           window.$email,
//           window.$complaint,
//         ],
//       },
//     ];
//   });

//   return (
//     <>
//       {complaintcards.map(({ name, position, date, imgSrc, works, link }, idx) => {
//         return (
//           <ExperienceCard
//             name={name}
//             position={position}
//             date={date}
//             imgSrc={imgSrc}
//             works={works}
//             link={link}
//             key={idx}
//             isDetailed={isDetailed}
//           />
//         );
//       })}
//     </>
//   );
// }

// export default ComplaintCard;
