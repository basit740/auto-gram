import React from 'react';

const Index = ({ selected }) => {
	return (
		<aside
			className={`bg-slate-50 shadow-md absolute h-full w-48 top-0 transition-all duration-300 p-4 ${
				selected ? 'left-0' : '-left-48'
			}`}
		>
			<h1 className='text-2xl'>Themes</h1>
		</aside>
	);
};

export default Index;
