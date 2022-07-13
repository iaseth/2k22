import React from 'react';
import Row from './Row';


export default function Grid ({
	n
}) {

	const [values, setValues] = React.useState([]);

	React.useEffect(function () {
		const values = Array(n*n).fill(0);
		setValues(values);
	}, [n]);

	console.log(values);

	const rows = [...Array(n)].map((v, i) => {
		return <Row key={i} n={n} values={values} rowIndex={i} />;
	});

	return (
		<div className="Grid">
			<div>{rows}</div>
		</div>
	);
}
