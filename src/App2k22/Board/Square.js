


export default function Square ({value}) {

	return (
		<div className="Square p-1">
			<div className="w-16 h-16 bg-slate-300">{value ? value : ''}</div>
		</div>
	);
}
