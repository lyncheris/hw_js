
let message = function(type, msg) {
	let parentElement = document.createElement('div'),
		element = document.createElement('div');

	parentElement.classList.add('alert_list');
	document.body.insertBefore(parentElement, document.querySelector('.contacts'));

	element.classList.add(type);
	element.innerHTML = msg;
	parentElement.appendChild(element);

	setTimeout(() => {element.remove()}, 2000);
}
