let test = document.querySelector('#test');
let button = document.querySelector('#button');
let inputs = document.querySelectorAll('input[type]');
let labels = document.querySelectorAll('label');

let answers = [0, 1, 2];


button.addEventListener('click', () => {

	for (let i = 0; i < inputs.length; i++) {
		for (let j = 0; j < answers.length; j++) {
			if ((inputs[i].dataset.right == '') && (inputs[i].checked) && labels[answers[j]]) {
				labels[i].textContent = 'Правильный ответ!';
				labels[i].style.border = '2px solid green';
			}
			if ((inputs[i].dataset.right != '') && (inputs[i].checked)) {
				labels[i].style.border = '2px solid red';
			}
		}
	}

})
