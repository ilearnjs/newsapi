import '../styles/index.scss';

const getDiv = () => {
	const div = document.createElement('div');
	div.classList.add('show');
	div.innerHTML = 'Show news';

	div.onclick = e => {
		div.remove();
		import(/* webpackChunkName: "app" */ './app').then(module => {
			const showNews = module.default;
			showNews();
		});
	}

	return div;
}

document.body.appendChild(getDiv());