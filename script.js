// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const skillDisplay = document.getElementById('skill-display');
const skillProgressBar = document.getElementById('skill-progress-bar');
const dynamicText = document.getElementById('dynamic-text');
const currentYear = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const terminalTyping = document.getElementById('terminal-typing');

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Skills Rotation
const skills = ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript'];
let currentSkillIndex = 0;

function rotateSkills() {
    skillDisplay.style.opacity = '0';
    
    setTimeout(() => {
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
        skillDisplay.textContent = skills[currentSkillIndex];
        skillProgressBar.style.width = `${((currentSkillIndex + 1) / skills.length) * 100}%`;
        skillDisplay.style.opacity = '1';
    }, 500);
}

setInterval(rotateSkills, 2000);

// Typing Animation
const phrases = ['a Web Developer', 'a Designer', 'a Creator', 'an Innovator', 'a Problem Solver'];
let phraseIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isTyping) {
        if (charIndex < currentPhrase.length) {
            dynamicText.textContent += currentPhrase.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            isTyping = false;
            setTimeout(typeText, 2000);
        }
    } else {
        if (charIndex > 0) {
            dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, 50);
        } else {
            isTyping = true;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeText, 500);
        }
    }
}

// Start typing animation
setTimeout(typeText, 1000);

// Terminal typing animation
const terminalCommands = [
    'node server.js',
    'git push origin main',
    'npm run build',
    'docker-compose up'
];
let currentCommandIndex = 0;
let terminalCharIndex = 0;
let terminalIsTyping = true;

function typeTerminalText() {
    const currentCommand = terminalCommands[currentCommandIndex];
    
    if (terminalIsTyping) {
        if (terminalCharIndex < currentCommand.length) {
            terminalTyping.textContent += currentCommand.charAt(terminalCharIndex);
            terminalCharIndex++;
            setTimeout(typeTerminalText, Math.random() * 100 + 50);
        } else {
            terminalIsTyping = false;
            setTimeout(typeTerminalText, 2000);
        }
    } else {
        terminalTyping.textContent = '';
        terminalCharIndex = 0;
        terminalIsTyping = true;
        currentCommandIndex = (currentCommandIndex + 1) % terminalCommands.length;
        setTimeout(typeTerminalText, 500);
    }
}

// Start terminal typing animation
setTimeout(typeTerminalText, 2000);

// Create tech circles for background
function createTechCircles() {
    const techCircles = document.getElementById('tech-circles');
    const numberOfCircles = 20;
    
    for (let i = 0; i < numberOfCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('tech-circle');
        
        // Random size between 50px and 250px
        const size = Math.random() * 200 + 50;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        
        // Random position
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay
        circle.style.animationDelay = `${Math.random() * 5}s`;
        
        techCircles.appendChild(circle);
    }
}

// Create matrix code animation
function createMatrixCode() {
    const matrixCode = document.getElementById('matrix-code');
    const numberOfColumns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < numberOfColumns; i++) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        
        // Random position
        column.style.left = `${i * 20}px`;
        
        // Random animation delay
        column.style.animationDelay = `${Math.random() * 5}s`;
        
        // Generate random characters
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/\\|[]{}!@#$%^&*()_+-=';
        let columnContent = '';
        
        for (let j = 0; j < 50; j++) {
            columnContent += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        
        column.innerHTML = columnContent;
        column.style.animation = `fall ${Math.random() * 10 + 10}s infinite linear`;
        
        matrixCode.appendChild(column);
    }
}

// Create code blocks for background
function createCodeBlocks() {
    const codeBlocks = document.getElementById('code-blocks');
    const numberOfBlocks = 10;
    
    const codeSnippets = [
        `function animate() {\n  requestAnimationFrame(animate);\n  renderer.render(scene, camera);\n}`,
        `const app = express();\napp.use(cors());\napp.listen(3000);`,
        `import React from 'react';\nimport { render } from 'react-dom';\nrender(<App />, document.getElementById('root'));`,
        `@keyframes float {\n  0% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n  100% { transform: translateY(0); }\n}`,
        `const data = await fetch('/api/data');\nconst json = await data.json();\nconsole.log(json);`
    ];
    
    for (let i = 0; i < numberOfBlocks; i++) {
        const block = document.createElement('div');
        block.classList.add('code-block');
        
        // Random position
        block.style.top = `${Math.random() * 100}%`;
        block.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay
        block.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random code snippet
        block.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        codeBlocks.appendChild(block);
    }
}

// Initialize animations
createTechCircles();
createMatrixCode();
createCodeBlocks();

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log('Form submitted:', { name, email, subject, message });
    
    // Reset form
    contactForm.reset();
    
    // Show success message (you can enhance this)
    alert('Message sent successfully!');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for nav height
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        }
    });
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress');
let animated = false;

function animateProgressBars() {
    if (animated) return;
    
    const skillsSection = document.getElementById('skills');
    const skillsSectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (skillsSectionTop < windowHeight - 100) {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        animated = true;
    }
}

window.addEventListener('scroll', animateProgressBars);

// Responsive handling
window.addEventListener('resize', () => {
    // Clear and recreate matrix code on window resize
    const matrixCode = document.getElementById('matrix-code');
    matrixCode.innerHTML = '';
    createMatrixCode();
});