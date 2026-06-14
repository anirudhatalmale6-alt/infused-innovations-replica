document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('mainNav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    mobileToggle.addEventListener('click', function() {
        mobileToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    var navItems = document.querySelectorAll('.nav__item--has-mega > .nav__link');
    navItems.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 767) {
                e.preventDefault();
                var parent = this.parentElement;
                var wasOpen = parent.classList.contains('open');
                document.querySelectorAll('.nav__item.open').forEach(function(item) {
                    item.classList.remove('open');
                });
                if (!wasOpen) {
                    parent.classList.add('open');
                }
            }
        });
    });

    var fadeElements = document.querySelectorAll('.section, .solution-card, .metric-card, .split-grid, .about-grid');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(function(el) {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
