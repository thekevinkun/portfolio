import { projects } from "./data";

// Navigation items
export const navItems = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
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
