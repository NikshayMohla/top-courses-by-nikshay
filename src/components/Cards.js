import React from 'react';
import Card from './Card';


const Cards = ({ courses }) => {
  let allCourses = [];
  const getCourse = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      })
    })
    return allCourses;
  }

  return (
    <div>
      {!courses ? (<div><p>NoDATA</p></div>) : (getCourse().map((course) => {
        return <Card key={course.id} course={course} />
      }))
      }
    </div>
  );
};

export default Cards;
