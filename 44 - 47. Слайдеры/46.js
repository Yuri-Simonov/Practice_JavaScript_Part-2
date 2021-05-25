let slider = document.querySelector('#slider');
let right = document.querySelector('#right');
let left = document.querySelector('#left');




let texts = ['text1', 'text2', 'text3'];


let i = 1;
slider.textContent = texts[i];
setInterval(func, 1000);

function func() {
	left.style.color = 'blue';
	right.style.color = 'blue';
	i++;
	slider.textContent = texts[i];
	if (i >= 2) {
		i = -1;
		right.style.color = 'red';
	}

}

left.addEventListener('click', function (event) {
	left.style.color = 'blue';
	right.style.color = 'blue';
	event.preventDefault();
	i--;
	console.log(i);
	slider.textContent = texts[i];
	if (i <= 0) {
		i = 3;
		left.style.color = 'red';
	}

});
right.addEventListener('click', function (event) {
	event.preventDefault();
	func();
});
