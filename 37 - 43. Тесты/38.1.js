let inputs = document.querySelectorAll('input');
let p = document.querySelectorAll('p');
let test = document.querySelector('#test');
let button = document.querySelector('#button');

let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];

button.addEventListener('click', () => {
	for (let i = 0; i < inputs.length; i++) {

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