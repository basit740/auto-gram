import React from 'react';

const Index = ({ selected }) => {
	return (
		<aside
			className={`bg-slate-50 shadow-md absolute h-full w-48 top-0 transition-all p-4 ${
				selected ? 'right-0' : '-right-48'
			}`}
		>
			<h1 className='text-2xl'>Custom</h1>
		</aside>
	);
};

export default Index;
