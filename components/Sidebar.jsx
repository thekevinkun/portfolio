"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import OptimizedImage from "@/components/OptimizedImage";

import { personalInfo, skills } from "@/lib/data";
import {
  sidebarVariants,
  fadeIn,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const Sidebar = () => {
  return (
    <motion.aside
      className="cv-sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Photo */}
      <motion.div
        className="profile-image-wrapper"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <OptimizedImage
          src="/images/profile-1.png"
          alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
          width={184}
          height={184}
          className="w-full h-full object-cover"
          priority={true}
          noWrapper={true}
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
            <Link
              href={`mailto:${personalInfo.email}`}
              className="hover:underline break-all"
            >
              {personalInfo.email}
            </Link>
          </div>

          <div className="contact-item">
            <IoLogoWhatsapp className="contact-icon" />
            <Link
              href={`https://wa.me/${
                personalInfo.waFormat
              }?text=${encodeURIComponent(`${personalInfo.textMessage}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              {personalInfo.phone}
            </Link>
          </div>

          <div className="contact-item">
            <HiLocationMarker className="contact-icon" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <Link
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              linkedin.com/in/kevin-mahendra
            </Link>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <Link
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/thekevinkun
            </Link>
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
