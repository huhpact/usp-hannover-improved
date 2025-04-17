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