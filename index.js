const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
	document.getElementById('message-show').classList.remove('hide');
	document.getElementById('message-form').classList.add('hide');

	document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	document.getElementById('message-form').classList.add('hide');
	document.getElementById('link-form').classList.remove('hide');

	const input = document.getElementById('message-input');
	const encrypted = btoa(input.value);

	const linkInput = document.getElementById('link-input');
	console.log(`${window.location}`);
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});

//button om kopieren makkeleijker te maken
const linkInput = document.getElementById('link-input');

const btnCopy = document.getElementById('copy-text');

btnCopy.addEventListener('click', function() {
	linkInput.select();
	document.execCommand('copy');
	if (window.getSelection) {
		window.getSelection().removeAllRanges();
	} else if (document.selection) {
		document.selection.empty();
	}
});
