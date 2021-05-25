let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function (event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');

		let task = document.createElement('span');
		task.classList.add('task');
		task.innerHTML = input.value;
		task.addEventListener('dblclick', function () {
			let inputInner = document.createElement('input');
			inputInner.value = task.innerHTML;
			task.textContent = '';
			task.append(inputInner);

			let self = this;
			inputInner.addEventListener('keypress', function (event) {
				if (event.key == 'Enter') {
					self.textContent = this.value;
				}
			})
		})

		li.appendChild(task);

		let remove = document.createElement('span');
		remove.classList.add('remove');
		remove.innerHTML = ' удалить ';
		remove.addEventListener('click', function () {
			li.remove(remove);
		});
		li.appendChild(remove);

		let mark = document.createElement('span');
		mark.classList.add('mark');
		mark.innerHTML = ' сделано ';
		mark.addEventListener('click', function () {
			mark.style.color = 'blue';
			task.style.color = 'blue';
		});
		li.appendChild(mark);

		list.append(li);
		input.value = '';
	}
});



