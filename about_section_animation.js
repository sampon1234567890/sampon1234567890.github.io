document.addEventListener("DOMContentLoaded", () => {
    const aboutTitle = document.querySelector("#about h2"); // Select the h2 inside the about section
  
    // Intersection Observer to detect when the "About Me" section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutTitle.classList.add("active"); // Add the active class when in view
          } else {
            aboutTitle.classList.remove("active"); // Remove the class when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the title is visible
    );
  
    observer.observe(aboutTitle);
});
