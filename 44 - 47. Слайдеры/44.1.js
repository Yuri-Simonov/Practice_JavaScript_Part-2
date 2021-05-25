let slider = document.querySelector('#slider');
let count = 0;
let texts = ['text1', 'text2', 'text3'];

setInterval(func, 1000);

function func() {
	slider.textContent = texts[count];
	count++;
	if (count > 2) {
		count = 0;
	}
}