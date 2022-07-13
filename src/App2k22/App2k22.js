import React from 'react';

import Board from './Board';


export default function App2k22 () {
	const [n, setN] = React.useState(4);

	return (
		<div className="App2k22 min-h-screen flex bg-red-400 px-4 py-12">
			<Board n={n} />
		</div>
	);
}
