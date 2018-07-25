//import '_redirects';
import '../../theme/style/theme.scss';

const init = () => {

	var path = location.pathname.split('/');
	if(!path[1]) path = 'guides';
	
	document.querySelector(`main-nav a[href^="/${path[1]}"]`).classList.add('active');
	document.querySelector(`side-nav.${path[1]}`).style.display = 'block';
	document.querySelector(`side-nav a[href^="/${path[1]}/${path[2]}"]`).classList.add('active');
	document.body.classList.add(`page-${path[1]}`);

	const html_page = path.join('_').substr(1);
	const page = document.getElementById(`page-${html_page}`);

	if(page) {
		const content = page.import.querySelector('page-content');
	    document.querySelector('content').appendChild(document.importNode(content, true));	
	}

	hljs.initHighlightingOnLoad();
}

window.onload = () => init();