// =============================
// PROGRAM CARD HOVER
// =============================
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-6px)';
        card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.6)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
    });
});

// =============================
// COMPARISON PANELS HOVER
// =============================
document.querySelectorAll('.compare-panel').forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        panel.style.transform = 'translateY(-4px)';
        panel.style.boxShadow = '0 25px 50px rgba(0,0,0,0.55)';
    });
    panel.addEventListener('mouseleave', () => {
        panel.style.transform = 'translateY(0)';
        panel.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
    });
});

// =============================
// SMALL PANELS INSIDE COMPARISON (DO/AFTER) HOVER
// =============================
document.querySelectorAll('.panel-small').forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        panel.style.transform = 'translateY(-2px)';
        panel.style.boxShadow = '0 12px 28px rgba(0,0,0,0.5)';
    });
    panel.addEventListener('mouseleave', () => {
        panel.style.transform = 'translateY(0)';
        panel.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.15), 0 18px 40px rgba(0,0,0,0.55)';
    });
});

// =============================
// AFTER / BONUS / FORMAT CARDS HOVER
// =============================
document.querySelectorAll('.after-bonus-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 15px 40px rgba(255,255,255,0.25)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 30px rgba(255,255,255,0.2)';
    });
});

// =============================
// SMOOTH SCROLL FOR LINKS WITH HASH
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
