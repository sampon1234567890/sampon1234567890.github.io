document.addEventListener("DOMContentLoaded", () => {
    const dynamicWord = document.getElementById("dynamic-word");
    const cursor = document.getElementById("cursor");
    const words = ["Student", "Developer", "Designer","Programmer", "Tester"]; // List of words to type
    let currentWordIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[currentWordIndex];
        const visibleText = isDeleting
            ? currentWord.substring(0, currentLetterIndex--)
            : currentWord.substring(0, currentLetterIndex++);

        dynamicWord.textContent = visibleText; // Update text

        if (!isDeleting && currentLetterIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
        } else if (isDeleting && currentLetterIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle words
        }

        const speed = isDeleting ? 50 : 150; // Typing and deleting speeds
        setTimeout(type, speed);
    }

    type();
});
