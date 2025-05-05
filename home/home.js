document.querySelectorAll('.center-menu a').forEach(link => {
  link.addEventListener('click', (event) => {
    console.log('Link clicado:', link.href); // Apenas registra o link clicado
  });
});
// Animação ao passar o mouse sobre os blocos
document.querySelectorAll('.bg-[#4569AD], .bg-[#1A3C7D]').forEach(block => {
  block.addEventListener('mouseenter', () => {
    block.style.transform = 'scale(1.05)';
    block.style.transition = 'transform 0.3s ease';
  });
  block.addEventListener('mouseleave', () => {
    block.style.transform = 'scale(1)';
  });
});

// Botão "Voltar ao topo"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#001D3F';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

