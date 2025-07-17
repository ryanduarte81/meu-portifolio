// Rolagem suave para os links do menu
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Efeito de deslizar para as seções
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplicar efeito de deslizar a todas as seções
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  sectionObserver.observe(section);
});

// Efeito de deslizar para o hero-section
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
  heroSection.style.opacity = '0';
  heroSection.style.transform = 'translateY(30px)';
  heroSection.style.transition = 'opacity 1s ease, transform 1s ease';
  
  setTimeout(() => {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
  }, 300);
}

// Efeito de deslizar para cards de habilidades e projetos
const cards = document.querySelectorAll('.skill-card, .project-card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
      }, index * 100); // Delay escalonado para cada card
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px) scale(0.95)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  cardObserver.observe(card);
}); 