"use client";

import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { personalInfo } from "@/lib/data";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const Contact = () => {
  return (
    <motion.section
      id="contact"  
      className="cv-section cta-section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Main CTA Heading */}
      <motion.div className="cta-content" variants={staggerItem}>
        <h2 className="cta-heading">Ready to Ship Quality Code</h2>
        <p className="cta-subheading">
          Let's build something great together. I'm available for full-time
          opportunities where I can contribute to meaningful projects and grow
          with a forward-thinking team.
        </p>
      </motion.div>

      {/* Primary CTA - Email Button */}
      <motion.div className="cta-actions" variants={staggerItem}>
        <a href={`mailto:${personalInfo.email}`} className="cta-button-primary">
          <HiMail className="cta-icon" />
          <span>Get in Touch</span>
        </a>

        {/* Social Links */}
        <div className="cta-social">
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-social-link"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-social-link"
            aria-label="GitHub Profile"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div className="cta-footer" variants={fadeIn}>
        <p className="cta-footer-text">
          Based in Samarinda, Indonesia • Open to Remote Opportunities
        </p>
        <p className="cta-copyright">
          © {new Date().getFullYear()} {personalInfo.firstName}{" "}
          {personalInfo.lastName}. All rights reserved.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
