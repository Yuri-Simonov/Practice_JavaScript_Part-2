let test = document.querySelector('#test');
let button = document.querySelector('#button');
let inputs = document.querySelectorAll('input[type]');
let labels = document.querySelectorAll('label');
let inputsRights = document.querySelectorAll('input[data-right]');


button.addEventListener('click', () => {

	for (let i = 0; i < inputs.length; i++) {
		for (let j = 0; j < inputsRights.length; j++) {
			if ((inputs[i].dataset.right == '') && (inputs[i].checked)) {
				labels[i].textContent = 'Правильный ответ!';
				labels[i].style.border = '2px solid green';
			}
			if ((inputs[i].dataset.right != '') && (inputs[i].checked)) {
				labels[i].style.border = '2px solid red';
			}
		}
	}

})
