
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