import React from 'react';
import styles from './CourseSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CourseSection = () => {
  const courses = [
    { title: 'Curso 1', description: 'Economía Circular', image: '/homeImages/1.svg' },
    { title: 'Curso 2', description: 'Residuos y Reciclaje', image: '/homeImages/2.svg' },
    { title: 'Curso 3', description: 'Producción Sostenible', image: '/homeImages/3.svg' },
  ];

  return (
    <div className={styles.courseSection}>
      {courses.map((course, index) => (
        <Link href="/searchs" key={index}>
          <div className={styles.card}>
            <img src={course.image} alt={course.title} className={styles.image} />
            <div className={styles.cardContent}>
              <p className={styles.description}>{course.description}</p>
            </div>
          </div>
        </Link>

      ))}
    </div>
  );
};

export default CourseSection;
