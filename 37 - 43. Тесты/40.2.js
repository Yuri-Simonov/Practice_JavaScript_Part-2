let test = document.querySelector('#test');
let button = document.querySelector('#button');

let questions = [
	{
		text: 'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text: 'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text: 'вопрос 3?',
		right: 'ответ 3',
	},
];

for (let i = 0; i < questions.length; i++) {

	let wrap = document.createElement('div');
	let paragrath = document.createElement('p');
	paragrath.textContent = questions[i].text;
	let input = document.createElement('input');
	test.append(wrap);
	wrap.append(paragrath);
	wrap.append(input);

}

button.addEventListener('click', () => {
	let inputs = document.querySelectorAll('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].style.border = 'none';
		if (inputs[i].value == questions[i].right) {
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


