let slider = document.querySelector('#slider');
let images = document.querySelectorAll('p');
let i = 0;


function func() {
	for (let elem of images) {
		if (elem.textContent == i) {
			elem.classList.add('active');
		} else {
			elem.classList.remove('active');
		}
	}
	if (i >= 3) {
		i = 0;
	}
	i++
}
setInterval(func, 500);