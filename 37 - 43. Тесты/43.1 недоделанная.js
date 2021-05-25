let test = document.querySelector('#test');
let button = document.querySelector('#button');

let questions = [
	{
		text: 'вопрос 1?',
		right: 'вариант 1',
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 'вариант 2',
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 'вариант 3',
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];

for (let i = 0; i < questions.length; i++) {

	let wrap = document.createElement('div');
	wrap.classList.add('flex');
	let paragrath = document.createElement('p');
	paragrath.classList.add('block');
	paragrath.textContent = questions[i].text;
	test.append(wrap);
	wrap.append(paragrath);

	for (let j = 0; j < questions.length; j++) {
		let label = document.createElement('label');
		let input = document.createElement('input');
		let p = document.createElement('p');
		input.setAttribute('type', 'radio');
		input.setAttribute('name', (i + 1));
		p.textContent = 'ответ ' + (j + 1);
		wrap.append(label);
		label.append(input);
		wrap.append(p);
	}
}


button.addEventListener('click', () => {
	let inputs = document.querySelectorAll('input[type]');
	let labels = document.querySelectorAll('label');
	let p = document.querySelectorAll('p');

	for (let i = 0; i < inputs.length; i++) {
		if ((inputs[i].checked)) {
			for (let j = 0, k = 0; j < 3, k < 3; j++, k++) {
				if ((questions[j].variants[k] == questions[k].right)) {
					console.log(k);
					labels[i].style.border = '2px solid green';
				}
			}
		}
	}
})
