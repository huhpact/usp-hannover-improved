document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
			});
	});
});

const reveal = () => {
	const reveals = document.querySelectorAll('.reveal');
	
	reveals.forEach(element => {
			const windowHeight = window.innerHeight;
			const elementTop = element.getBoundingClientRect().top;
			const elementVisible = 150;
			
			if (elementTop < windowHeight - elementVisible) {
					element.classList.add('active');
			}
	});
};

window.addEventListener('scroll', reveal);
reveal();


