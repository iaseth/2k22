import React from 'react';
import Row from './Row';


function printGrid (values, n) {
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
	let arr = getRowValues(values, n, rowIndex).filter(v => v != 0);
	return arr;
}

function getColValues (values, n, colIndex) {
	let arr = values.filter((v, i) => (i % n) == colIndex);
	return arr;
}

function getNzColValues (values, n, colIndex) {
	let arr = getColValues(values, n, colIndex).filter(v => v != 0);
	return arr;
}


function moveGridUp (n, values) {
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

function moveGridDown (n, values) {
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

function moveGridLeft (n, values) {
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

function moveGridRight (n, values) {
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

export default function Grid ({
	n
}) {

	const [values, setValues] = React.useState([]);

	React.useEffect(function () {
		const values = Array(n*n).fill(0);
		values[0] = 2;
		setValues(values);
	}, [n]);

	printGrid(values, n);

	const rows = [...Array(n)].map((v, i) => {
		return <Row key={i} n={n} values={values} rowIndex={i} />;
	});

	function keydownEvent (e) {
		const keyCode = e.keyCode;
		if (keyCode < 37 || keyCode > 40) {
			return;
		}

		e.preventDefault();
		let arr = [];

		switch (keyCode) {
			case 37:
				arr = moveGridLeft(n, values);
				break;
			case 38:
				arr = moveGridUp(n, values);
				break;
			case 39:
				arr = moveGridRight(n, values);
				break;
			case 40:
				arr = moveGridDown(n, values);
				break;
		}

		printGrid(arr, n);
		setValues(arr);
		// console.log("Pressed: " + keyCode);
	}

	React.useEffect(() => {
		document.addEventListener('keydown', keydownEvent, false);

		return function cleanUp () {
			document.removeEventListener('keydown', keydownEvent, false);
		}
	}, [keydownEvent]);

	return (
		<div className="Grid">
			<div>{rows}</div>
		</div>
	);
}
