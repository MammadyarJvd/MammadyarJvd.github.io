document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Year Update
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Simple Typewriter Effect for the Bio
    // This looks for the element with class 'bio' and types it out.
    const bioElement = document.querySelector('.bio');
    const originalText = bioElement.textContent.trim();
    bioElement.textContent = ''; // Clear it initially
    
    let i = 0;
    const speed = 20; // Typing speed in ms

    function typeWriter() {
        if (i < originalText.length) {
            bioElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Delay start slightly for visual effect
    setTimeout(typeWriter, 500);

    // 3. Smooth scroll offset (optional adjustment for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
