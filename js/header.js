
// header
		        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const mobileCloseBtn = document.getElementById('mobileCloseBtn');
        const body = document.body;

        // Open mobile menu
        function openMobileMenu() {
            mobileMenuBtn.classList.add('active');
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            body.classList.add('menu-open');
        }

        // Close mobile menu
        function closeMobileMenu() {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }

        // Event listeners
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);

        // Close menu when clicking on a link (for better UX)
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });


		const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.classList.remove('leaving');
        void link.offsetWidth;
        link.classList.add('hovering');
      });

      link.addEventListener('mouseleave', () => {
        link.classList.remove('hovering');
        void link.offsetWidth;
        link.classList.add('leaving');
      });
    });

