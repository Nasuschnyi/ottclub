document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('.expandable');

	sections.forEach((section) => {
		const title = section.querySelector('.section__title');
		const content = section.querySelector('.section__content');

		title.addEventListener('click', () => {
			content.classList.toggle('expanded');
		});
	});
});
