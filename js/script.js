// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const menuUl = document.querySelector('#menu ul');
menuToggle.addEventListener('click', () => {
    menuUl.classList.toggle('aberto');
});

// Fechar menu ao clicar num link
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => menuUl.classList.remove('aberto'));
});

// ===== FILTRO GALERIA =====
const filtros = document.querySelectorAll('.filtro');
const fotoCards = document.querySelectorAll('.foto-card');

filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        filtros.forEach(f => f.classList.remove('ativo'));
        filtro.classList.add('ativo');

        const cat = filtro.dataset.filtro;

        fotoCards.forEach(card => {
            if (cat === 'todos' || card.dataset.cat === cat) {
                card.classList.remove('oculto');
                card.style.animation = 'fadeUp 0.4s ease both';
            } else {
                card.classList.add('oculto');
            }
        });
    });
});

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.section, .card-esp, .foto-card, .dep-card');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));