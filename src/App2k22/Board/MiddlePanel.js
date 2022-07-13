import ShadowGrid from './ShadowGrid';
import Grid from './Grid';


export default function MiddlePanel ({
	n
}) {

	return (
		<div className="MiddlePanel bg-slate-200 p-2">
			{/*<ShadowGrid n={n} />*/}
			<Grid n={n} />
		</div>
	);
}
