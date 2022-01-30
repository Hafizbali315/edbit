import Header2 from './../components/Header2'
import Sidebar from './../components/Sidebar'
const AppConfiguration = () => {
	return (
		<div className="app_page">
			<Header2 />

			<div className="row">
				<div className="col-lg-3 col">
					<Sidebar />
				</div>
				<div className="col-lg-9 col">
					<div className="page_content">
						<h3>App Configurations</h3>
						<p>
							The configuration will be set for all users of your organization. Disabled features will be hidden throught <br /> the
							application.
						</p>

						<div className="big_card">
							<div className="first_card">
								<div className="left">
									<div class="form-check form-switch">
										<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
									</div>
								</div>
								<div className="right">
									<h4>Digital twin feature is enabled</h4>
									<p>
										if activated, we add a QR code to your documents and make them verifiable even when they are printed out or combined
										with other PDF’s
									</p>

									<div class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
										<label class="form-check-label" for="inlineCheckbox1">
											Activated by default
										</label>
									</div>
								</div>
							</div>

							<div className="second_card my-5">
								<div className="left">
									<div class="form-check form-switch">
										<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
									</div>
								</div>
								<div className="right">
									<h4>Signing is enabled</h4>

									<p>Enable the members of your organization to sign documents with their personal signature</p>
								</div>
							</div>

							<div className="third_section">
								<h4 className="mb-4">Signing Modes</h4>

								<div className="content my-3">
									<div className="left">
										<div className="toggler">
											<div class="form-check form-switch">
												<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
											</div>
										</div>

										<div className="text">
											<h5>Single siging is Enabled</h5>
											<p>inh the node, the user is the only signer</p>
										</div>
									</div>

									<div className="right">
										<div class="form-check form-check-inline">
											<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
											<label class="form-check-label" for="inlineCheckbox1">
												Default
											</label>
										</div>
									</div>
								</div>

								<div className="content  my-3">
									<div className="left">
										<div className="toggler">
											<div class="form-check form-switch">
												<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
											</div>
										</div>

										<div className="text">
											<h5>Single siging is Enabled</h5>
											<p>inh the node, the user is the only signer</p>
										</div>
									</div>

									<div className="right">
										<div class="form-check form-check-inline">
											<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
											<label class="form-check-label" for="inlineCheckbox1">
												Default
											</label>
										</div>
									</div>
								</div>

								<div className="content  my-3">
									<div className="left">
										<div className="toggler">
											<div class="form-check form-switch">
												<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
											</div>
										</div>

										<div className="text">
											<h5>Initiating without signing yourself is enabled</h5>
											<p>Users can invite others to sign without signing themeselves</p>
										</div>
									</div>

									<div className="right">
										<div class="form-check form-check-inline">
											<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
											<label class="form-check-label" for="inlineCheckbox1">
												Default
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppConfiguration
