import React from 'react';
import BlogCard from '../molecules/BlogCard';

const blogs = [
  {
    name: '8888 Blog',
    link: 'https://8888.gov.ph',
    imgSrc: 'dev.png',
  },
  {
    name: 'Medium',
    link: 'https://8888.medium.com/',
    imgSrc: 'medium.webp',
  },
];

function BlogCards({ isDetailed }) {
  return (
    <>
      {blogs.map(({ name, link, imgSrc }, idx) => {
        return (
          <BlogCard
            name={name}
            link={link}
            imgSrc={imgSrc}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default BlogCards;
