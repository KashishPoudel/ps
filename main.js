// Update time
function updateTime() {
  const timeElement = document.getElementById('current-time');
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.5
});

timelineItems.forEach(item => {
  observer.observe(item);
});

// Animate skill bars
const skillBars = document.querySelectorAll('.progress-line span');
const skillsSection = document.querySelector('#skills');

const animateSkills = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
      });
    }
  });
};

const skillsObserver = new IntersectionObserver(animateSkills, {
  threshold: 0.5
});

skillsObserver.observe(skillsSection);

// Add scroll-based navbar background
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
  } else {
    nav.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
  }
});

// Handle contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
  });
}