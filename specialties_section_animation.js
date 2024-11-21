document.addEventListener("DOMContentLoaded", () => {
    const specialtiesTitle = document.querySelector("#specialties-title"); // Select the title in the specialties section
    const specialtiesText = document.querySelector(".specialties-list p"); // Select the "Proficient in:" text

    // Intersection Observer to detect when the "Specialties" section title is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    specialtiesTitle.classList.add("active"); // Add the active class when in view
                    specialtiesText.classList.add("active"); // Add the active class to the "Proficient in:" text
                } else {
                    specialtiesTitle.classList.remove("active"); // Remove the class when out of view
                    specialtiesText.classList.remove("active"); // Remove the class from the "Proficient in:" text
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe both the title and the "Proficient in:" text
    observer.observe(specialtiesTitle);
    observer.observe(specialtiesText);
});
