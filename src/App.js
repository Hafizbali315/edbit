import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Signup from './pages/Signup'
import VerifyEmail from './pages/VerifyEmail'
import ConfirmEmail from './pages/ConfirmEmail'
import Login from './pages/Login'
import SetupOrganization from './pages/SetupOrganization'
import CertifyDocument from './pages/CertifyDocument'
// import CreditsLeftCard from './components/CreditsLeftCard'
// import SettingsMenu from './components/SettingsMenu'
import VerificationsTools from './pages/VerificationsTools'
import Page10 from './pages/Page10'
import Page12 from './pages/Page12'
import Page13 from './pages/Page13'
import Page15 from './pages/Page15'
import Plans from './pages/Plans'
import AppConfiguration from './pages/AppConfiguration'
import ApiKeys from './pages/ApiKeys'

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
					<Route path="/verification-tools" element={<VerificationsTools />} /> {/* page 9 */}
					<Route path="/page-10" element={<Page10 />} /> {/* page 10 */}
					<Route path="/page-12" element={<Page12 />} /> {/* page 12 */}
					<Route path="/page-13" element={<Page13 />} /> {/* page 13 */}
					<Route path="/page-15" element={<Page15 />} /> {/* page 15 */}
					<Route path="/plans" element={<Plans />} /> {/* page 16 */}
					<Route path="/app-configuration" element={<AppConfiguration />} /> {/* page 17 */}
					<Route path="/api-keys" element={<ApiKeys />} /> {/* page 19 */}
				</Routes>
			</Router>
		</div>
	)
}

export default App

{
	/* <Route path="/credits-left" element={<CreditsLeftCard />} /> 
<Route path="/settings-menu" element={<SettingsMenu />} />  */
}
