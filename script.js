const doc = document.querySelector('#container');
const btn = document.querySelector('button');

function reset() {

	while(doc.firstChild) {
		doc.removeChild(doc.firstChild);
	}

}


function createGrid(n) {
	if (n == null) {

		createGrid(prompt('Please enter a number'));
		return;

	}

	if (n >= 100) {

		alert('Too big!');
		createGrid(prompt('Enter another size'));
		return;

	}

	reset();

	doc.setAttribute('style', `grid-template-rows: repeat(${n}, ${1/n*100}%); grid-template-columns: repeat(${n}, ${1/n*100}%);`)

	for(let i = 0; i < n * n; i++) {

		let div = document.createElement('div');
		div.style.borderLeft = '2px solid black';
		div.style.borderTop = '2px solid black';

			if(i == n-1 || i % n == n - 1) {
				div.style.borderRight = '2px solid black';	// gives last square in each row a right border
			}

			if(i > (n * n - n - 1)) {
				div.style.borderBottom = '2px solid black';  // gives last row a bottom border
			}

		div.classList.add('squares');
		div.addEventListener('mouseover', () => {

			if(div.style.backgroundColor){
				let color = tinycolor(div.style.backgroundColor);
				div.style.backgroundColor = color.darken(10);
			}

			else {

				div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

			}
		})

		doc.appendChild(div);


	}

}

btn.addEventListener('click', () => createGrid(prompt('grid size?')));


createGrid(6);