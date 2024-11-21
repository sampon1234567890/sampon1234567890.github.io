document.addEventListener("DOMContentLoaded", () => {
    const contactTitle = document.querySelector("#contact-title"); // Select the "Contact Me" title
    const contactForm = document.querySelector(".contact-form"); // Select the contact form

    // Intersection Observer to detect when the "Contact Me" title is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contactTitle.classList.add("active"); // Add the active class when in view
                    contactForm.classList.add("active"); // Add the active class to the contact form
                } else {
                    contactTitle.classList.remove("active"); // Remove the class when out of view
                    contactForm.classList.remove("active"); // Remove the class from the contact form
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe the contact title and contact form
    observer.observe(contactTitle);
    observer.observe(contactForm);
});
