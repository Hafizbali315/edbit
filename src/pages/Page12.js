import { BsCheckCircleFill } from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import Header2 from './../components/Header2'

const Page12 = () => {
	return (
		<div className="page_12">
			<Header2 />
			<div className="page_12_container">
				<div className="page_12_content">
					<BsCheckCircleFill className="icon" />

					<h2>Success!</h2>
					<p>We certified your documents and triggered the download of the certified documents for you.</p>

					<div className="buttons_row">
						<button className="btn btn-outline">Download Again</button>
						<button className="btn btn-primary">Back to Overview</button>
					</div>

					<div className="powered_button">
						<button>
							Powered by <img src={Logo} alt="loog" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page12
