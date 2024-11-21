document.addEventListener("DOMContentLoaded", () => {
    const extrasTitle = document.querySelector("#extras h2"); // Select the h2 inside the extras section

    // Intersection Observer to detect when the "Extras" section is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    extrasTitle.classList.add("active"); // Add the active class when in view
                } else {
                    extrasTitle.classList.remove("active"); // Remove the class when out of view
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the title is visible
    );

    observer.observe(extrasTitle);
});
