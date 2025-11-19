"use client";

import { motion } from "framer-motion";
import Projects from "./Projects";
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
        className="cv-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="content-title" variants={staggerItem}>
          SUMMARY
        </motion.h2>
        <motion.div variants={staggerItem}>
          <p className="text-body mb-3">{personalInfo.summary}</p>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
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
            <p className="text-body mb-4">{exp.description}</p>

            {/* Highlights as Bullet Points */}
            {exp.highlights && exp.highlights.length > 0 && (
              <div className="experience-highlights">
                <p className="highlights-title">Key Achievements:</p>
                <ul className="highlights-list">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </motion.section>

      {/* Projects Section - NEW TABBED VERSION */}
      <Projects />

      {/* Education Section */}
      <motion.section
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
              <p className="heading-company">{education.school}</p>
            </div>
            <p className="text-date">
              {education.startDate} - {education.endDate}
            </p>
          </div>
          <p className="text-secondary mb-2">{education.field}</p>
          {education.activities && (
            <p className="text-secondary italic mb-3">{education.activities}</p>
          )}
          {education.description.map((paragraph, index) => (
            <p key={index} className="text-body">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default MainContent;
