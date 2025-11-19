"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, getProjectCategories } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = getProjectCategories();

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <motion.section
      id="projects"
      className="cv-section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 className="content-title" variants={staggerItem}>
        PROJECTS
      </motion.h2>

      {/* Tabs */}
      <motion.div className="project-tabs" variants={staggerItem}>
        {Object.entries(categories).map(([category, count]) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`project-tab ${
              activeTab === category ? "project-tab-active" : ""
            }`}
          >
            {category}
            <span className="project-tab-count">({count})</span>
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="projects-grid-two-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card-new"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="project-featured-badge">
                  <span>★</span> Featured
                </div>
              )}

              {/* Project Image */}
              <div className="project-image-container">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={450}
                  className="project-image-new"
                />
                <div className="project-image-overlay">
                  <span className="project-type-badge">{project.type}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-card-content">
                {/* Title */}
                <h3 className="project-card-title">{project.name}</h3>

                {/* Description */}
                <p className="project-card-description">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="project-tech-stack">
                  {project.tech.slice(0, 6).map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="tech-badge tech-badge-more">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="project-card-links">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-primary"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-secondary"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="project-empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No projects found in this category.</p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
