let menu = document.querySelector('#menu');
let create = document.querySelector('#create');
let text = document.querySelector('#text');
let button = document.querySelector('#button');
let notes = document.querySelector('#notes');
let textarea = document.querySelector('textarea');

let i = 3;


let texts = [
	'text1',
	'text2',
	'text3',
];

create.addEventListener('click', () => {
	let newCreate = document.createElement('li');
	newCreate.setAttribute('data-key', ++i);
	let span1 = document.createElement('span');
	span1.classList.add('open');
	span1.textContent = 'запись ' + i;
	let span2 = document.createElement('span');
	span2.classList.add('remove');
	span2.textContent = ' "X"';
	let newText = 'text' + i;
	notes.append(newCreate);
	newCreate.append(span1);
	newCreate.append(span2);
	texts.push(newText);
})

notes.addEventListener('click', (event) => {
	for (let i = 0; i < texts.length; i++) {
		let dataSet = document.querySelectorAll('li[data-key]')
		let openSpan = document.querySelectorAll('.open')
		let removeSpan = document.querySelectorAll('.remove')
		dataSet[i].classList.remove('active');
		if ((dataSet[i] == event.target) || (openSpan[i] == event.target)) {
			textarea.value = texts[i];
			dataSet[i].classList.add('active');
		}
		if (removeSpan[i] == event.target) {
			textarea.value = '';
			dataSet[i].remove();
			texts.splice(i, 1);
		}

	} return texts
}
)

button.addEventListener('click', () => {
	let dataSet = document.querySelectorAll('li[data-key]');
	for (let i = 0; i < texts.length; i++) {
		if (dataSet[i].classList.contains('active')) {
			texts[i] = textarea.value;
		}
	}
	return texts
})