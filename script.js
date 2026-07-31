// Animate skill bars in once they scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.skill-bar span');

  bars.forEach(bar => {
    bar.dataset.target = bar.style.width;
    bar.style.width = '0%';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.transition = 'width 0.8s ease';
        bar.style.width = bar.dataset.target;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
});
