let field = document.querySelector('#field');
let title = document.querySelector('.title');
let total = document.querySelector('.total');
let result = document.querySelector('.result');
let rows = 3;
let cols = 3;
let num = 0;
let colors = ['red', 'green', 'blue'];

function allColors(arr) {
	let color = arr[Math.ceil(Math.random() * 3 - 1)];
	return color;
}

for (let i = 0; i < rows; i++) {
	let tr = document.createElement('tr');
	field.append(tr);
	for (let i = 0; i < cols; i++) {
		let td = document.createElement('td');
		td.classList.add(allColors(colors));
		tr.append(td);
	}
}

let tds = document.querySelectorAll('td');
let count;
for (let elem of tds) {
	elem.addEventListener('click', () => {
		count = colors.indexOf(elem.className);
		count++;

		if (count >= 3) {
			count = 0;
			elem.classList.remove(colors[2]);
			elem.classList.add(colors[count]);
		} else {
			elem.classList.remove(colors[count - 1]);
			elem.classList.add(colors[count]);
		}
		win();
		total.textContent = 'Сделано ховод: ' + ++num;
	})
}

function win() {
	let tds = document.querySelectorAll('td');
	let redArr = [];
	let blueArr = [];
	let greenArr = [];

	for (let i = 0; i < tds.length; i++) {
		if (tds[i].className == colors[0]) {
			redArr.push(i);

		}
		if (tds[i].className == colors[1]) {
			blueArr.push(i);

		}
		if (tds[i].className == colors[2]) {
			greenArr.push(i);

		}
	}
	console.log(redArr.length + ' red');
	console.log(blueArr.length + ' green');
	console.log(greenArr.length + ' blue');

	if (redArr.length == 9 || blueArr.length == 9 || greenArr.length == 9) {
		result.textContent = 'Вы справились!'
	}
}
