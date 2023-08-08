import React from 'react';
import MobileNav from 'components/MobileNav';
const Index = ({ onOptionSelected, onCloseBoth }) => {
	const handleClick = (e, option) => {
		onOptionSelected(e, option);
	};
	return (
		<main className='w-full' onClick={onCloseBoth}>
			<aside className='flex items-center justify-center w-full mb-3'>
				<MobileNav onClick={handleClick} />
			</aside>
			<section className='max-w-lg mx-auto min-h-screen'>
				<h1 className='text-6xl text-center'>Autogram</h1>
			</section>
		</main>
	);
};

export default Index;
