// Subtle fade-in for skill groups as they scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const groups = document.querySelectorAll('.skill-group');
 
  groups.forEach(group => {
    group.style.opacity = '0';
    group.style.transform = 'translateY(8px)';
  });
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
 
  groups.forEach(group => observer.observe(group));
});
