import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';


function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" exact element = {
						<Homepage />
					} 
					/>

					<Route path="*" element = {
						<Navigate to="/" replace />
					} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
