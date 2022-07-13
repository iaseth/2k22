
function Slot () {
	return <div className="Slot bg-slate-300 w-12 h-12 m-1" />;
}

function Row ({n}) {
	const slots = [...Array(n)].map((v, i) => <Slot key={i} />);
	return <div className="Row flex">{slots}</div>;
}

export default function ShadowGrid ({n}) {
	const rows = [...Array(n)].map((v, i) => <Row n={n} key={i} />);
	return rows;
}
