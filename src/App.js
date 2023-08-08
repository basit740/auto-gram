import './App.css';
import { useState } from 'react';

import Rightbar from 'components/Rightbar';
import Leftbar from 'components/Leftbar';
import Main from 'components/Main';

function App() {
	const [optionSelected, setOptionSelected] = useState('');

	const handleOptionSelected = (e, option) => {
		e.stopPropagation();
		setOptionSelected(option);
	};
	return (
		<div className='app min-h-screen w-full justify-between'>
			<Leftbar selected={optionSelected === 'themes' ? true : false} />
			<Main
				onOptionSelected={handleOptionSelected}
				onCloseBoth={(e) => setOptionSelected('')}
			/>
			<Rightbar selected={optionSelected === 'custom' ? true : false} />
		</div>
	);
}

export default App;
