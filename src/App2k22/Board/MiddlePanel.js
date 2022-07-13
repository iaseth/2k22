import ShadowGrid from './ShadowGrid';
import Grid from './Grid';


export default function MiddlePanel ({
	n
}) {

	return (
		<div className="MiddlePanel bg-slate-200 px-2 py-4">
			{/*<ShadowGrid n={n} />*/}
			<Grid n={n} />
		</div>
	);
}
