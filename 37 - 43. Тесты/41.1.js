let test = document.querySelector('#test');
let button = document.querySelector('#button');
let inputs = document.querySelectorAll('input[type]');
let labels = document.querySelectorAll('label');
let inputsRights = document.querySelectorAll('input[data-right]');



for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('change', (event) => {
		for (let j = 0; j < inputsRights.length; j++) {
			if ((inputs[i].dataset.right == '')) {
				labels[i].textContent = 'Правильный ответ!';
				labels[i].style.border = '2px solid green';
				console.log(1);
			}
			if ((inputs[i].dataset.right != '')) {
				labels[i].style.border = '2px solid red';
				console.log(3);
			}
		}
	})
}

