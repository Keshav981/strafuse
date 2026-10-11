/**
 * Strafuse Website Interactions & Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMockupTabs();
});

function scrollToConsultation() {
    const target = document.getElementById('consultation');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function initNavigation() {
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('mobile-open');
        });

        // Close mobile nav when clicking any link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
                navLinks.classList.remove('mobile-open');
            }
        });
    }
}

function initMockupTabs() {
    const tabs = document.querySelectorAll('.sidebar-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = 'Submitted Successfully! ✓';
    btn.style.background = '#16A34A';
    setTimeout(() => {
        form.reset();
        btn.innerHTML = 'Find My AI Opportunities <span>→</span>';
        btn.style.background = '';
    }, 4000);
}
