document.addEventListener('DOMContentLoaded', () => {
	const revealItems = document.querySelectorAll('.reveal__item');
	const revealSection = document.querySelector('.reveal__section');

	const revealOnScroll = () => {
			const triggerBottom = window.innerHeight * 0.8;

			revealItems.forEach(item => {
					const itemTop = item.getBoundingClientRect().top;

					if (itemTop < triggerBottom) {
							item.classList.add('active');
					}
			});
	};

	window.addEventListener('scroll', revealOnScroll);
	revealOnScroll();

	const cookieBanner = document.getElementById('cookie__banner');
	const acceptButton = document.getElementById('accept__cookies');
	const declineButton = document.getElementById('decline__cookies');

	const getCookie = (name) => {
			const cookies = document.cookie.split(';');
			for (let cookie of cookies) {
					const [cookieName, cookieValue] = cookie.split('=');
					if (cookieName.trim() === name) {
							return cookieValue;
					}
			}
			return null;
	};

	if (!getCookie('cookieAccepted')) {
			setTimeout(() => {
					cookieBanner.classList.add('show');
			}, 1000);
	}

	acceptButton.addEventListener('click', () => {
			cookieBanner.classList.remove('show');
			document.cookie = 'cookieAccepted=true; max-age=31536000; path=/';
	});

	declineButton.addEventListener('click', () => {
			cookieBanner.classList.remove('show');
			document.cookie = 'cookieAccepted=false; max-age=31536000; path=/';
	});

	const backToTop = document.getElementById('backToTop');
	
	window.addEventListener('scroll', () => {
			if (window.scrollY > 300) {
					backToTop.classList.add('show');
			} else {
					backToTop.classList.remove('show');
			}
	});

	backToTop.addEventListener('click', () => {
			window.scrollTo({
					top: 0,
					behavior: 'smooth'
			});
	});

	const header = document.querySelector('.glass__header');
	let lastScroll = 0;

	window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset;
	
			if (currentScroll > 50) {
					header.classList.add('scrolled');
			} else {
					header.classList.remove('scrolled');
			}

			if (currentScroll > lastScroll && currentScroll > 100) {
					header.style.transform = 'translateY(-100%)';
			} else {
					header.style.transform = 'translateY(0)';
			}
			
			lastScroll = currentScroll;
	});

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
					e.preventDefault();
					const target = document.querySelector(this.getAttribute('href'));
					if (target) {
							target.scrollIntoView({
									behavior: 'smooth',
									block: 'start'
							});
					}
			});
	});

	const animateOnScroll = () => {
			const elements = document.querySelectorAll('.animated__text, .contact__image, .info__item');
			
			elements.forEach(element => {
					const elementTop = element.getBoundingClientRect().top;
					const elementBottom = element.getBoundingClientRect().bottom;
					
					if (elementTop < window.innerHeight * 0.8 && elementBottom > 0) {
							element.style.opacity = '1';
							element.style.transform = 'translateY(0)';
					}
			});
	};

	window.addEventListener('scroll', animateOnScroll);
	animateOnScroll(); 
});