import './App.css';
import Rightbar from 'components/Righbar';
import Leftbar from 'components/Leftbar';
import Main from 'components/Main';

function App() {
	return (
		<div className='app min-h-screen w-full justify-between'>
			<Leftbar />
			<Main />

			<Rightbar />
		</div>
	);
}

export default App;
