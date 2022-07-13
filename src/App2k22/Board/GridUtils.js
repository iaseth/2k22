


export function printGrid (values, n) {
	let s = "";
	for (let x=0; x<n; x++) {
		s += "[";
		for (let y=0; y<n; y++) {
			s += (values[x*n + y] + "").padStart(5);
		}
		s += "]\n";
	}

	console.log(s);
}

function getRowValues (values, n, rowIndex) {
	let startIndex = n * rowIndex;
	let arr = values.slice(startIndex, startIndex+n);
	return arr;
}

function getNzRowValues (values, n, rowIndex) {
	let arr = getRowValues(values, n, rowIndex).filter(v => v !== 0);
	return arr;
}

function getColValues (values, n, colIndex) {
	let arr = values.filter((v, i) => (i % n) === colIndex);
	return arr;
}

function getNzColValues (values, n, colIndex) {
	let arr = getColValues(values, n, colIndex).filter(v => v !== 0);
	return arr;
}


export function moveGridUp (n, values) {
	let arr = [...values];
	for (let colIndex=0; colIndex<n; colIndex++) {
		let colValues = getNzColValues(values, n, colIndex);

		for (let i=0; i<n; i++) {
			if (i < colValues.length) {
				arr[i*n + colIndex] = colValues[i];
			} else {
				arr[i*n + colIndex] = 0;
			}
		}
	}
	return arr;
}

export function moveGridDown (n, values) {
	let arr = [...values];
	for (let colIndex=0; colIndex<n; colIndex++) {
		let colValues = getNzColValues(values, n, colIndex);

		for (let i=0; i<n; i++) {
			let offset = n-i-1;
			if (offset >= colValues.length) {
				arr[i*n + colIndex] = 0;
			} else {
				arr[i*n + colIndex] = colValues[colValues.length - offset - 1];
			}
		}
	}
	return arr;
}

export function moveGridLeft (n, values) {
	let arr = [...values];
	for (let rowIndex=0; rowIndex<n; rowIndex++) {
		let rowValues = getNzRowValues(values, n, rowIndex);

		for (let i=0; i<n; i++) {
			if (i < rowValues.length) {
				arr[rowIndex*n + i] = rowValues[i];
			} else {
				arr[rowIndex*n + i] = 0;
			}
		}
	}
	return arr;
}

export function moveGridRight (n, values) {
	let arr = [...values];
	for (let rowIndex=0; rowIndex<n; rowIndex++) {
		let rowValues = getNzRowValues(values, n, rowIndex);

		for (let i=0; i<n; i++) {
			let offset = n-i-1;
			if (offset >= rowValues.length) {
				arr[rowIndex*n + i] = 0;
			} else {
				arr[rowIndex*n + i] = rowValues[rowValues.length - offset - 1];
			}
		}
	}
	return arr;
}
