import Header1 from './../components/Header1'
import { BsCheckCircleFill } from 'react-icons/bs'
import Logo from '../assets/Logo.png'

const Page12 = () => {
	return (
		<div className="page_12">
			<Header1 />
			<div className="page_12_container">
				<div className="page_12_content">
					<BsCheckCircleFill className="icon" />

					<h2>Success!</h2>
					<p>We certified your documents and triggered the download of the certified documents for you.</p>

					<div className="buttons_row">
						<button className="btn btn-outline">Download Again</button>
						<button className="btn btn-primary">Back to Overview</button>
					</div>

					<button className="btn btn-outline powered_btn">
						Powered by <img src={Logo} alt="logo" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Page12
