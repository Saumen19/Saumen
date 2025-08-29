document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        backToTop.classList.toggle('active', window.scrollY > 300);
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Projects data and filtering
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'A fully responsive e-commerce website with shopping cart and payment integration.',
            image: 'https://via.placeholder.com/600x400?text=E-commerce',
            tags: ['frontend', 'react'],
            demo: '#',
            code: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A productivity app for managing tasks with drag and drop functionality.',
            image: 'https://via.placeholder.com/600x400?text=Task+App',
            tags: ['fullstack', 'react', 'node'],
            demo: '#',
            code: '#'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Real-time weather information with 5-day forecast for any location.',
            image: 'https://i0.wp.com/innovationyourself.com/wp-content/uploads/2020/08/weather.jpg?fit=715%2C402&ssl=1',
            tags: ['frontend', 'javascript'],
            demo: 'http://127.0.0.1:5501/index.html',
            code: 'https://github.com/Saumen19/weather-app'
        },
        {
            id: 4,
            title: 'RESTful API Service',
            description: 'A backend service with authentication and CRUD operations.',
            image: 'https://via.placeholder.com/600x400?text=API+Service',
            tags: ['backend', 'node'],
            demo: '#',
            code: '#'
        },
        {
            id: 5,
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media metrics and insights.',
            image: 'https://via.placeholder.com/600x400?text=Social+Dashboard',
            tags: ['fullstack', 'react', 'node'],
            demo: '#',
            code: '#'
        },
        {
            id: 6,
            title: 'Portfolio Website',
            description: 'A responsive portfolio website to showcase work and skills.',
            image: 'https://via.placeholder.com/600x400?text=Portfolio',
            tags: ['frontend', 'html', 'css'],
            demo: '#',
            code: '#'
        }
    ];
    
    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Display all projects initially
    displayProjects(projects);
    
    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            if (filter === 'all') {
                displayProjects(projects);
            } else {
                const filteredProjects = projects.filter(project => 
                    project.tags.includes(filter)
                );
                displayProjects(filteredProjects);
            }
        });
    });
    
    function displayProjects(projectsToDisplay) {
        projectsGrid.innerHTML = '';
        
        projectsToDisplay.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demo}" target="_blank">Live Demo</a>
                        <a href="${project.code}" target="_blank">View Code</a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        formMessage.textContent = 'Your message has been sent successfully!';
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = '#d4edda';
        formMessage.style.color = '#155724';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
    
    // Download CV button
    document.getElementById('download-cv').addEventListener('click', function(e) {
    window.open('assets/BWUBCA23721_SAUMENMONDAL.pdf', '_blank');
});
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Intersection Observer for skill bars animation
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
});