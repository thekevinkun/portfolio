"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { personalInfo, skills } from "@/lib/data";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const Sidebar = () => {
  return (
    <motion.aside
      className="cv-sidebar"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Photo */}
      <motion.div
        className="profile-image-wrapper"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/profile-1.png"
          alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
          width={160}
          height={160}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>

      {/* Contact Section */}
      <motion.section
        className="cv-section-sm"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="sidebar-title" variants={staggerItem}>
          CONTACT
        </motion.h2>

        <motion.div variants={staggerItem}>
          <div className="contact-item">
            <HiMail className="contact-icon" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:underline break-all"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="contact-item">
            <HiPhone className="contact-icon" />
            <span>{personalInfo.phone}</span>
          </div>

          <div className="contact-item">
            <HiLocationMarker className="contact-icon" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              linkedin.com/in/kevin-mahendra
            </a>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/thekevinkun
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="cv-section-sm"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="sidebar-title" variants={staggerItem}>
          SKILLS
        </motion.h2>

        <motion.div variants={staggerItem}>
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <motion.div
                  className="skill-level"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Languages Section */}
      <motion.section
        className="cv-section-sm"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="sidebar-title" variants={staggerItem}>
          LANGUAGES
        </motion.h2>

        <motion.div variants={staggerItem}>
          {personalInfo.languages.map((lang) => (
            <div key={lang.name} className="language-item">
              <span>{lang.name}</span>
              <div className="language-stars">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`star ${
                      index < lang.level ? "star-filled" : "star-empty"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </motion.aside>
  );
};

export default Sidebar;
