import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App