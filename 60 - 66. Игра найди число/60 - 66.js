let field = document.querySelector('#field');

function prepare(size) {
	let arr = [];

	arr = range(size * size);
	arr = shuffle(arr);
	arr = chunk(arr, size);

	return arr;
}

function range(count) {
	let arrCount = [];
	for (let i = 1; i <= count; i++) {
		arrCount.push(i);
	}
	return arrCount;
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function chunk(arr, n) {
	let subarray = [];
	for (let i = 0; i < Math.ceil(arr.length / n); i++) {
		subarray[i] = arr.slice((i * n), (i * n) + n);
	}
	return subarray;
}



let newArr = [];
function build(field, arr) {
	field.textContent = '';
	for (let i = 0; i < arr.length; i++) {
		let tr = document.createElement('tr');
		for (let j = 0; j < arr.length; j++) {
			let td = document.createElement('td');
			td.innerHTML = '';
			tr.append(td);
			td.innerHTML = arr[i][j];
			newArr.push(td);
		}
		field.append(tr);
	}
	return newArr;
}

function activate(cells, size) {
	let counter = 1; // счетчик
	for (let elem of cells) {
		elem.addEventListener('click', () => {
			if (elem.textContent == counter) {
				elem.classList.add('active');
				counter++;
				if (size * size == (counter - 1)) {
					start(++size);
				}
			}
		});
	}

}

function start(size) {
	activate(build(field, prepare(size)), size);
}

start(2);