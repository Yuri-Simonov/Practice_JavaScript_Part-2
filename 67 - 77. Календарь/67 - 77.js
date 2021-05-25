let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');
let info = calendar.querySelector('.info');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


//functions==============================================================
function range(count) {
	let arrCount = [];
	for (let i = 1; i <= count; i++) {
		arrCount.push(i);
	}
	return arrCount;
}

function getLastDay(year, month) {
	let lastDayOfMonth = new Date(year, month + 1, 0);
	return lastDayOfMonth.getDate();
}

function getFirstWeekDay(year, month) {
	let firstDay = new Date(year, month, 1);
	return firstDay.getDay();
}

function getLastWeekDay(year, month) {
	let lastDay = new Date(year, month + 1, 0);
	return lastDay.getDay();
}


function normalize(arr, left, right) {
	let normalizeArr = [];
	if (left > 0) {
		for (let i = 1; i < left; i++) {
			normalizeArr.push('');
		}
	} else { --right }
	let normalizeArrNew = normalizeArr.concat(arr);
	if (6 - right > 0) {
		for (let i = 0; i <= right; i++) {
			normalizeArrNew.push('');
		}
	}
	return normalizeArrNew;
}

function chunk(arr, n) {
	let subarray = [];
	for (let i = 0; i < Math.ceil(arr.length / n); i++) {
		subarray[i] = arr.slice((i * n), (i * n) + n);
	}
	return subarray;
}

function createTable(parent, arr) {
	for (let i = 0; i < arr.length; i++) {
		let tr = document.createElement('tr');
		for (let j = 0; j < arr[i].length; j++) {
			let td = document.createElement('td');
			td.textContent = arr[i][j];
			tr.append(td);
		}
		parent.append(tr);
	}
}
function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay = getLastWeekDay(year, month);
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums)
}

//Вызов итоговой функции==================================================
draw(body, year, month);


//Переключатели календаря=================================================
next.addEventListener('click', function (event) {
	event.preventDefault();
	body.textContent = '';
	if (month == 11) {
		month = 0;
		draw(body, ++year, month);
		info.textContent = months[month] + ' ' + year;
	} else {
		draw(body, year, ++month);
		info.textContent = months[month] + ' ' + year;
	}

});
prev.addEventListener('click', function (event) {
	event.preventDefault();
	body.textContent = '';
	if (month == 0) {
		month = 11;
		console.log(month);
		draw(body, --year, month);
		info.textContent = months[month] + ' ' + year;
	} else {
		draw(body, year, --month);
		info.textContent = months[month] + ' ' + year;
	}
});
