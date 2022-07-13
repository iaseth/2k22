import TopPanel from './TopPanel';
import MiddlePanel from './MiddlePanel';
import BottomPanel from './BottomPanel';


export default function Board ({
	n
}) {

	return (
		<div className="Board bg-slate-300 w-96 mx-auto my-auto space-y-2 p-2 text-black">
			<TopPanel n={n} />
			<MiddlePanel n={n} />
			<BottomPanel n={n} />
		</div>
	);
}
