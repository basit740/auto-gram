import React from 'react';

const Index = ({ onClick }) => {
	return (
		<article className='mobile-nav flex items-center justify-between p-4 gap-4 w-full'>
			<button
				onClick={(e) => onClick(e, 'themes')}
				className='py-2 px-4 rounded-sm sm:text-sm md:text-md font-medium cursor-pointer transition-all duration-300 hover:bg-blue-500 bg-blue-400 text-white'
			>
				Themes
			</button>
			<button
				onClick={(e) => onClick(e, 'custom')}
				className='py-2 px-4 rounded-sm sm:text-sm md:text-md font-medium cursor-pointer transition-all duration-300 hover:bg-blue-500 bg-blue-400 text-white'
			>
				Custom
			</button>
		</article>
	);
};

export default Index;
