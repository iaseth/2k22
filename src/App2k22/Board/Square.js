


function getBgClass (value) {
	switch (value) {
		case 0: return "bg-slate-300";
		case 2: return "bg-red-400";
		case 4: return "bg-green-400";
		case 8: return "bg-blue-400";
		case 16: return "bg-purple-400";
		default: break;
	}
	return "";
}

function getTextClass (value) {
	let length = (value + "").length;

	switch (length) {
		case 1: return "text-2xl";
		case 2: return "text-xl";
		case 3: return "text-xl";
		case 4: return "text-xl";
		default: break;
	}
	return "";
}

function getSquareClasses (value) {
	return getBgClass(value) + " " + getTextClass(value);
}

export default function Square ({value}) {

	return (
		<div className="Square p-1">
			<div className={"w-16 h-16 text-xl text-white font-bold rounded flex justify-center " + getSquareClasses(value)}>
				<span className="my-auto">{value ? value : ''}</span>
			</div>
		</div>
	);
}


