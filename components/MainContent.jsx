"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { personalInfo, projects, education } from "@/lib/data";
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
          <p className="text-body mb-3">
            {personalInfo.summary}
          </p>
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
        <motion.div className="cv-card" variants={staggerItem}>
          <div className="cv-card-header">
            <div>
              <h3 className="heading-job">Web Developer</h3>
              <p className="heading-company">Personal Projects on GITHUB</p>
            </div>
            <p className="text-date">Jan 2019 - Present</p>
          </div>
          <p className="text-body">
            Self-taught Full Stack Developer building real-world web
            applications. Focus on modern technologies including Next.js, React,
            TypeScript, and full-stack development.
          </p>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="cv-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="content-title" variants={staggerItem}>
          PROJECTS
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="cv-card"
            variants={staggerItem}
          >
            {/* Project Header */}
            <div className="cv-card-header">
              <div>
                <h3 className="heading-job">{project.name}</h3>
                <p className="text-secondary">{project.type}</p>
              </div>
              {project.featured && (
                <span className="text-date font-bold">★ Featured</span>
              )}
            </div>

            {/* Project Image */}
            {project.image && (
              <div className="my-4 overflow-hidden rounded border border-[--color-border]">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            {/* Project Description */}
            <p className="text-body mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-[--color-text-secondary] mb-2">
                Tech Stack:
              </p>
              <div className="tag-group">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cv inline-flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cv inline-flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.section>

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
          <p className="text-secondary mb-3">{education.fieldOfStudy}</p>
          {education.description.map((paragraph, index) => (
            <p key={index} className="text-body mb-3">
              {paragraph}
            </p>
          ))}
          {education.activities && (
            <p className="text-secondary italic">{education.activities}</p>
          )}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default MainContent;
