"use client";

import { motion } from "framer-motion";

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import OptimizedImage from "@/components/OptimizedImage";

import { personalInfo, experience, education } from "@/lib/data";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const MainContent = () => {
  return (
    <motion.div
      className="cv-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Name and Role Header */}
      <motion.header
        className="cv-section"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="heading-name">
          {personalInfo.firstName.toUpperCase()}{" "}
          {personalInfo.lastName.toUpperCase()}
        </h1>
        <p className="heading-role">{personalInfo.role.toUpperCase()}</p>
      </motion.header>

      {/* Summary Section */}
      <motion.section
        id="summary"
        className="cv-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="content-title" variants={staggerItem}>
          SUMMARY
        </motion.h2>
        <motion.div variants={staggerItem} className="space-y-3">
          {personalInfo.summary.map((paragraph, index) => (
            <p key={index} className="max-w-[985px] text-body">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Section - NEW TABBED VERSION */}
      <Projects />

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="cv-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="content-title" variants={staggerItem}>
          EXPERIENCE
        </motion.h2>
        {experience.map((exp) => (
          <motion.div key={exp.id} className="cv-card" variants={staggerItem}>
            <div className="cv-card-header">
              <div>
                <h3 className="heading-job">{exp.title}</h3>
                <p className="heading-company">{exp.company}</p>
              </div>
              <p className="text-date">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>

            {/* Description Paragraph */}
            {exp.description && exp.description.length > 0 && (
              exp.description.map((paragraph, index) => (
                <p key={index} className="max-w-[985px] text-body mb-1">
                  {paragraph}
                </p>
              ))
            )}
            

            {/* Highlights as Bullet Points */}
            {exp.highlights && exp.highlights.length > 0 && (
              <div className="experience-highlights">
                <p className="highlights-title">Key Achievements:</p>
                <ul className="highlights-list">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="max-w-[985px] highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="cv-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="content-title" variants={staggerItem}>
          EDUCATION
        </motion.h2>
        <motion.div className="cv-card" variants={staggerItem}>
          <div className="cv-card-header">
            <div>
              <h3 className="heading-job">{education.degree}</h3>
            </div>

            <p className="text-date">
              {education.startDate} - {education.endDate}
            </p>
          </div>

          {/* Description Paragraphs */}
          {education.description.map((paragraph, index) => (
            <p key={index} className="max-w-[860px] !font-medium text-body">
              {paragraph}
            </p>
          ))}
          
          {/* Course `Badge`s */}
          <div className="education-badges">
            {education.courses.map((course, index) => (
              <div
                key={index}
                className={`education-badge education-badge-${course.color}`}
              >
                <div className="badge-image-wrapper">
                  <OptimizedImage
                    src={course.image}
                    alt={course.name}
                    width={32}
                    height={32}
                    className="badge-image"
                    noWrapper={true}
                  />
                </div>
                <span className="badge-text">{course.name}</span>
              </div>
            ))}
          </div>

          {/* Relevant Learning Achievements */}
          <div className="education-achievements">
            <h3 className="highlights-title !text-lg">Relevant Learning</h3>
            <ul className="highlights-list">
              {education.relevantLearning.map((achievement, index) => (
                <li key={index} className="highlight-item">
                  <p className="font-semibold">{achievement.title}</p>
                  <p className="text-sm text-muted">{achievement.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Applied Learning Achievements */}
          <div className="education-achievements">
            <h3 className="highlights-title !text-lg">Applied Learning</h3>
            <p className="max-w-2xl !font-normal !text-base mb-[0.875rem]">
              Applied all learning through building and deploying production-style applications, focusing on:
            </p>
            <ul className="highlights-list">
              {education.appliedLearning.map((achievement, index) => (
                <li key={index} className="highlight-item">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA / Contact Section */}
      <Contact />
    </motion.div>
  );
};

export default MainContent;
