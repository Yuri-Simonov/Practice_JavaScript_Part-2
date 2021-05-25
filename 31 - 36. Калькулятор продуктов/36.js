let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');


function createCell(tr, value, name) {
	let td = tr;

	td = document.createElement('td');
	td.innerHTML = value;
	td.classList.add(name);
	tr.appendChild(td);

	return td
}

function recountTotal() {
	let costs = table.querySelectorAll('.cost');
	if (costs) {
		let arr = [];
		for (let cost of costs) {
			arr.push(+cost.textContent);
		}
		console.log(arr);
		let sum = 0;
		for (let elem of arr) {
			sum += elem;
			console.log(sum);
			total.innerHTML = sum;
		}
		if (arr.length == 0) {
			total.textContent = '0';
		}
	}

}

function allowEdit(td) {
	td.addEventListener('dblclick', function () {
		let inputInner = document.createElement('input');
		inputInner.value = td.innerHTML;
		td.textContent = '';
		td.append(inputInner);

		inputInner.addEventListener('keypress', function (event) {
			if (event.key == 'Enter') {
				td.textContent = this.value;

				if (td.classList.contains('price') || td.classList.contains('amount')) {
					let costs = table.querySelectorAll('.cost');
					let prices = table.querySelectorAll('.price');
					let amountes = table.querySelectorAll('.amount');
					for (let i = 0; i < costs.length; i++) {
						costs[i].textContent = prices[i].textContent * amountes[i].textContent;
					}
					recountTotal();
				}
			}
		})
	});
}



add.addEventListener('click', function () {
	let tr = document.createElement('tr');

	allowEdit(createCell(tr, name.value, 'name'));
	allowEdit(createCell(tr, price.value, 'price'));
	allowEdit(createCell(tr, amount.value, 'amount'));
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove').addEventListener('click', function () {
		tr.remove();
		recountTotal();
	});
	table.appendChild(tr);



	recountTotal();
});
