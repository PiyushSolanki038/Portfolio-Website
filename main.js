// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌓';
    themeToggle.classList.add('theme-toggle');
    document.querySelector('nav').appendChild(themeToggle);

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme + '-theme');

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        
        document.body.classList.remove('dark-theme', 'light-theme');
        document.body.classList.add(currentTheme + '-theme');
        
        localStorage.setItem('theme', currentTheme);
    });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.classList.remove('error');
    });
    
    let isValid = true;
    
    if (nameInput.value.trim().length < 2) {
        nameInput.classList.add('error');
        isValid = false;
    }
    
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        isValid = false;
    }
    
    if (subjectInput.value.trim().length < 3) {
        subjectInput.classList.add('error');
        isValid = false;
    }
    
    if (messageInput.value.trim().length < 10) {
        messageInput.classList.add('error');
        isValid = false;
    }
    
    if (isValid) {
        // Simulated form submission
        // Simulated form submission
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim()
    };
    
    // Simulated API call (replace with actual backend endpoint)
    fetch('https://your-backend-endpoint.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        this.reset();
    })
    .catch(error => {
        alert('Failed to send message. Please try again.');
    });
}
});

// Project Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'WebGL Visualization',
            description: 'Immersive WebGL experience with interactive 3D animations',
            technologies: ['Three.js', 'WebGL', 'GSAP'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            title: 'Interactive Dashboard',
            description: 'Full-stack web app with real-time data visualization',
            technologies: ['React', 'Node.js', 'WebGL'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            title: '3D Shader Experience',
            description: 'Advanced 3D animations and shader programming',
            technologies: ['Three.js', 'GLSL', 'WebGL'],
            githubLink: '#',
            liveLink: '#'
        }
    ];

    const createProjectModal = (project) => {
        const modal = document.createElement('div');
        modal.classList.add('project-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-modal-links">
                    <a href="${project.githubLink}" target="_blank">GitHub</a>
                    <a href="${project.liveLink}" target="_blank">Live Demo</a>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    };

    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', () => createProjectModal(projects[index]));
    });
});

// Smooth Scroll Implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Glitch Text Effect
const setupGlitchEffect = () => {
    const glitchText = document.querySelector('.glitch-text');
    if (!glitchText) return;

    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    let glitchInterval;

    const startGlitch = () => {
        const originalText = glitchText.textContent;
        let iterations = 0;
        
        clearInterval(glitchInterval);
        
        glitchInterval = setInterval(() => {
            glitchText.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) return originalText[index];
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');
            
            iterations += 1 / 3;
            
            if (iterations >= originalText.length) {
                clearInterval(glitchInterval);
            }
        }, 30);
    };

    glitchText.addEventListener('mouseover', startGlitch);
};

// Initialize Glitch Effect
document.addEventListener('DOMContentLoaded', setupGlitchEffect);5

const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Active link highlighting
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
