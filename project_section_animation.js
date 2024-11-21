// projects_title.js
document.addEventListener("DOMContentLoaded", () => {
    const projectsTitle = document.querySelector(".projects-container h2"); // Select the h2 inside the projects section
  
    // Intersection Observer to detect when the "Projects" section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsTitle.classList.add("active"); // Add the active class when in view
          } else {
            projectsTitle.classList.remove("active"); // Remove the class when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the title is visible
    );
  
    observer.observe(projectsTitle);
});
