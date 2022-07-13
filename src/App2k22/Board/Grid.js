import React from 'react';
import Row from './Row';

import {printGrid} from './GridUtils';
import {moveGridUp, moveGridDown, moveGridLeft, moveGridRight} from './GridUtils';


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
			default:
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
