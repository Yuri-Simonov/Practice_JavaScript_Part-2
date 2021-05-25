let test = document.querySelector('#test');
let button = document.querySelector('#button');

let questions = {
	'Вопрос 1?': 'ответ 1',
	'Вопрос 2?': 'ответ 2',
	'Вопрос 3?': 'ответ 3',
}

for (let key in questions) {
	let wrap = document.createElement('div');
	let paragrath = document.createElement('p');
	paragrath.textContent = key;
	let input = document.createElement('input');
	test.append(wrap);
	wrap.append(paragrath);
	wrap.append(input);

}

button.addEventListener('click', () => {
	let inputs = document.querySelectorAll('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].style.border = 'none';
		if (inputs[i].value == questions[`Вопрос ${i + 1}?`]) {
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


