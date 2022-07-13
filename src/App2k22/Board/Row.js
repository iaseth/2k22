import Square from './Square';



export default function Row ({
	n, values, rowIndex
}) {

	const startIndex = n * rowIndex;
	const rowValues = values.slice(startIndex, startIndex + n);
	const squares = rowValues.map((v, i) => <Square value={v} key={i} />);

	return (<div className="Row flex">{squares}</div>);
}
