import '../../theme/style/theme.scss';

window.onload = () => {
	const path = location.pathname.split('/')[1];
	const $navItem = document.querySelector(`main-nav a[href^="/${path}"]`);
	$navItem && $navItem.classList.add('active');

	document.querySelector(`side-nav.${path}`).style.display = "block";
	document.body.classList.add(`page-${path}`);
}