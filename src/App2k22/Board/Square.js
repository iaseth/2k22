


export default function Square ({value}) {

	return (
		<div className="Square p-1">
			<div className="w-16 h-16 text-xl font-bold bg-slate-300 rounded flex justify-center">
				<span className="my-auto">{value ? value : ''}</span>
			</div>
		</div>
	);
}
