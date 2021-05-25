let test = document.querySelector('#test');
let button = document.querySelector('#button');

let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];

let questions = [
	'вопрос 1?',
	'вопрос 2?',
	'вопрос 3?'
];


for (let i = 0; i < questions.length; i++) {
	let wrap = document.createElement('div');
	let paragrath = document.createElement('p');
	paragrath.textContent = questions[i];
	let input = document.createElement('input');
	test.append(wrap);
	wrap.append(paragrath);
	wrap.append(input);

}


button.addEventListener('click', () => {
	let inputs = document.querySelectorAll('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].style.border = 'none';
		if (inputs[i].value == answers[i]) {
			inputs[i].style.border = '2px solid green';
			console.log(1);
		} else if (inputs[i].value == '') {
			inputs[i].style.border = '2px solid red';
			console.log(2);
		} else {
			inputs[i].style.border = '2px solid red';
			console.log(3);
		}

	}
})