
        // Typing animation for the hero section
        const name = "Deiby Chango A."; // Replace with your name
        let i = 0;
        
        function typeWriter() {
            if (i < name.length) {
                document.getElementById("typed-name").innerHTML += name.charAt(i);
                i++;
                setTimeout(typeWriter, 130);
            }
        }
        
        // Intersection Observer for scroll animations
        const fadeElements = document.querySelectorAll('.fade-in-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
        
        // Start animations when page loads
        window.addEventListener('DOMContentLoaded', () => {
            typeWriter();
        });
