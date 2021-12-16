import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-logos/linkedin-icon';
import gmailIcon from '@iconify/icons-logos/google-gmail';
import flagForSpain from '@iconify/icons-emojione/flag-for-spain';
import flagForUnitedKingdom from '@iconify/icons-emojione/flag-for-united-kingdom';

class About extends Component {
	render() {
		if (this.props.sharedBasicInfo) {
			var profilepic = 'images/' + this.props.sharedBasicInfo.image;
		}
		if (this.props.resumeBasicInfo) {
			var sectionName = this.props.resumeBasicInfo.section_name.about;
			var hello = this.props.resumeBasicInfo.description_header;
			var about1 = this.props.resumeBasicInfo.description1;
			var about2 = this.props.resumeBasicInfo.description2;
			var about3 = this.props.resumeBasicInfo.description3;
		}

		return (
			<section id="about">
				<div className="col-md-12">
					<h1 style={{ color: '#264de4' }}>
						<span>{sectionName}</span>
					</h1>
					<div className="row center mx-auto mb-5">
						<div className="col-md-4 mb-5 center">
							<div className="polaroid">
								<span style={{ cursor: 'auto' }}>
									<img
										height="auto"
										src={profilepic}
										alt="Avatar placeholder"
									/>
									<a
										href="https://www.linkedin.com/in/paloma-arevalo-gonzalez/"
										target="_blank"
										rel="noopener noreferrer"
										className="link-href">
										<Icon
											icon={linkedinIcon}
											style={{
												fontSize: '200%',
												margin: '9% 5% 0 5%',
											}}
										/>
									</a>
									<a href="mailto:paloma.arevalog@gmail.com">
										<Icon
											icon={gmailIcon}
											style={{
												fontSize: '200%',
												margin: '9% 5% 0 5%',
											}}
										/>
									</a>
									<a
										href="https://drive.google.com/file/d/1_VdD3cvVYsH-rqYc0kjJXYb_CPqUfMni/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
										className="link-href">
										<Icon
											icon={flagForSpain}
											style={{
												fontSize: '200%',
												margin: '9% 5% 0 5%',
											}}
										/>
									</a>
									<a
										href="https://drive.google.com/file/d/18e3q7poTBpq1cS6OynhxYItr0nXHrJyJ/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
										className="link-href">
										<Icon
											icon={flagForUnitedKingdom}
											style={{
												fontSize: '200%',
												margin: '9% 5% 0 5%',
											}}
										/>
									</a>
								</span>
							</div>
						</div>

						<div className="col-md-8 center">
							<div className="col-md-10">
								<div className="card">
									<div className="card-header">
										<span
											className="iconify"
											data-icon="emojione:red-circle"
											data-inline="false"></span>{' '}
										&nbsp;{' '}
										<span
											className="iconify"
											data-icon="twemoji:yellow-circle"
											data-inline="false"></span>{' '}
										&nbsp;{' '}
										<span
											className="iconify"
											data-icon="twemoji:green-circle"
											data-inline="false"></span>
									</div>
									<div
										className="card-body font-trebuchet text-justify ml-3 mr-3"
										style={{
											height: 'auto',
											fontSize: '132%',
											lineHeight: '200%',
										}}>
										<br />
										<span className="wave">{hello} :)</span>
										<br />
										<br />
										<span className="aboutme">
											{about1}
										</span>
										<br />
										<br />
										<span className="aboutme">
											{about2}
										</span>
										<br />
										<br />
										<span className="aboutme">
											{about3}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
