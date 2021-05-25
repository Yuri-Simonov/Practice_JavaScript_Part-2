let inputs = document.querySelectorAll('input[data-right]');
let p = document.querySelectorAll('p');
let test = document.querySelector('#test');
let button = document.querySelector('#button');


for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keypress', (event) => {
		console.log(event.key);
		if (event.key == 'Enter') {
			if (event.target.value == inputs[i].dataset.right) {
				inputs[i].style.border = '2px solid green';
				console.log(1);
			} else if (event.target.value == '') {
				inputs[i].style.border = '2px solid red';
				console.log(2);
			} else {
				inputs[i].style.border = '2px solid red';
				console.log(3);
			}
		}
	})
}