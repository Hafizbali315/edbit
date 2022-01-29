import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Signup from './pages/Signup'
import VerifyEmail from './pages/VerifyEmail'
import ConfirmEmail from './pages/ConfirmEmail'
import Login from './pages/Login'
import SetupOrganization from './pages/SetupOrganization'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/verify-email" element={<VerifyEmail />} />
					<Route path="/confirm-email" element={<ConfirmEmail />} />
					<Route path="/setup-organization" element={<SetupOrganization />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
