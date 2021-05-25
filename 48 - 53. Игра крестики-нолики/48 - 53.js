let cells = document.querySelectorAll('#field td');
let p = document.querySelector('p');
console.log(cells);

let i = 0;

let combs = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];



for (let elem of cells) {
	elem.addEventListener('click', step = (event) => {
		if ((elem == event.target) && (elem.textContent == '')) {
			elem.innerHTML = ['X', 'O'][i % 2];
			elem.removeEventListener('click', step);
			if (p.textContent != '') {
				elem.textContent = '';
			}
		}
		i++;
		console.log(i);
		for (let comb of combs) {
			if (
				cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
				cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
				cells[comb[0]].innerHTML != ''
			) {
				if (p.textContent == '') {
					if (elem.textContent == 'X') {
						p.textContent = 'Победил 1-ый игрок'
					} else {
						p.textContent = 'Победил 2-ой игрок'
					}
				}
			}
		}
		if (i == 9 && p.textContent == '') {
			p.textContent = 'Ничья';
		}
	})
}


