// Initialize Lucide icons
lucide.createIcons();

// Sticky Header
const header = document.getElementById('header');
const logoText = document.getElementById('logo-text');
const navLinks = document.querySelectorAll('.nav-link');
const navIcons = document.querySelectorAll('.nav-icon');
const mobileBtn = document.getElementById('mobile-menu-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('bg-white/95', 'backdrop-blur-xl', 'shadow-sm', 'border-gray-200', 'py-3');
        header.classList.remove('bg-transparent', 'border-transparent', 'py-5');
        logoText.classList.replace('text-white', 'text-[#121e36]'); 
        
        navLinks.forEach(link => {
            link.classList.replace('text-white/90', 'text-gray-900');
        });
        
        navIcons.forEach(icon => {
            icon.classList.replace('text-white/80', 'text-gray-700');
        });
        
        mobileBtn.classList.replace('text-white', 'text-[#121e36]');
    } else {
        header.classList.add('bg-transparent', 'border-transparent', 'py-5');
        header.classList.remove('bg-white/95', 'backdrop-blur-xl', 'shadow-sm', 'border-gray-200', 'py-3');
        logoText.classList.replace('text-[#121e36]', 'text-white');
        
        navLinks.forEach(link => {
            link.classList.replace('text-gray-900', 'text-white/90');
        });
        
        navIcons.forEach(icon => {
            icon.classList.replace('text-gray-700', 'text-white/80');
        });
        
        mobileBtn.classList.replace('text-[#121e36]', 'text-white');
    }
});

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
    } else {
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    }
});

// Mobile Menu Link Click Handler (closes menu when a link is clicked)
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    });
});

// Modals
window.openModal = function(id) {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.firstElementChild.classList.remove('scale-95');
        }, 10);
    }
}

window.closeModals = function() {
    const modals = document.querySelectorAll('[id^="modal-"]');
    modals.forEach(modal => {
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('opacity-0');
            modal.firstElementChild.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    });
}

// Close modal when clicking outside
document.querySelectorAll('[id^="modal-"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModals();
        }
    });
});

// Fade in animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Initialize Swiper for Testimonials
if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
}
