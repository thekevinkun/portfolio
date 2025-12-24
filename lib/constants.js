import { projects } from "./data";
import {
  HiDocumentText,
  HiBriefcase,
  HiLightningBolt,
  HiAcademicCap,
  HiMail,
} from "react-icons/hi";

// Navigation items
export const navItems = [
  { id: "summary", label: "Summary", icon: HiDocumentText },
  { id: "projects", label: "Projects", icon: HiLightningBolt },
  { id: "experience", label: "Experience", icon: HiBriefcase },
  { id: "education", label: "Education", icon: HiAcademicCap },
  { id: "contact", label: "Contact", icon: HiMail },
];

// Helper function to get project categories with counts
export const getProjectCategories = () => {
  const categories = {
    All: projects.length,
  };

  // Count projects by type
  projects.forEach((project) => {
    if (categories[project.type]) {
      categories[project.type]++;
    } else {
      categories[project.type] = 1;
    }
  });

  return categories;
};

// Helper function to filter projects by category
export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter((project) => project.type === category);
};
