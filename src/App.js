import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Signup from './pages/Signup'
import VerifyEmail from './pages/VerifyEmail'
import ConfirmEmail from './pages/ConfirmEmail'
import Login from './pages/Login'
import SetupOrganization from './pages/SetupOrganization'
import CertifyDocument from './pages/CertifyDocument'
import CreditsLeftCard from './components/CreditsLeftCard'
import SettingsMenu from './components/SettingsMenu'
import VerificationsTools from './pages/VerificationsTools'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/signup" element={<Signup />} /> {/* Page 1 */}
					<Route path="/verify-email" element={<VerifyEmail />} /> {/* Page 2 */}
					<Route path="/login" element={<Login />} /> {/* Page 3 */}
					<Route path="/confirm-email" element={<ConfirmEmail />} /> {/* Page 4 */}
					<Route path="/setup-organization" element={<SetupOrganization />} /> {/* Page 5 */}
					<Route path="/certify-document" element={<CertifyDocument />} /> {/* Page 6 */}
					<Route path="/credits-left" element={<CreditsLeftCard />} /> {/* page 7 */}
					<Route path="/settings-menu" element={<SettingsMenu />} /> {/* page 8 */}
					<Route path="/verification-tools" element={<VerificationsTools />} /> {/* page 9 */}
				</Routes>
			</Router>
		</div>
	)
}

export default App
