// Optional motion only: markup and CSS remain usable if this script fails.
(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;

    const animations = new Set();
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            observer.unobserve(entry.target);
            if (preference.matches) continue;
            const animation = entry.target.animate(
                [{ opacity: 0.5, transform: 'translateY(12px)' },
                 { opacity: 1, transform: 'translateY(0)' }],
                { duration: 350, easing: 'ease-out' }
            );
            animations.add(animation);
            animation.onfinish = animation.oncancel = () => animations.delete(animation);
        }
    }, { threshold: 0.1 });

    document.querySelectorAll('header, main > section, footer')
        .forEach((element) => observer.observe(element));

    // Respect preference changes without reloading the page.
    preference.addEventListener('change', () => {
        if (preference.matches) {
            for (const animation of animations) animation.cancel();
            animations.clear();
        }
    });
})();
