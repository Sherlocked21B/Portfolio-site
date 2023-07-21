import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Row } from "react-bootstrap";

import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiGit,
	DiPython,
} from "react-icons/di";
import { SiMui, SiFlutter, SiFigma, SiDocker } from "react-icons/si";
import {
	SiGraphql,
	SiSolidity,
	SiRedux,
	SiMongodb,
	SiHtml5,
	SiPostman,
	SiVisualstudiocode,
	SiHeroku,
	SiNetlify,
	SiTypescript,
	SiPostgresql,
	SiExpress,
} from "react-icons/si";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							{/* <Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							> */}
							<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										{/* <img src={meter1} alt="Image" /> */}
										<DiReact size={100} />
										<h5 style={{ marginTop: "20px" }}>React</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiRedux size={80} />
										<h5 style={{ marginTop: "20px" }}>Redux</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiMongodb size={80} />
										<h5 style={{ marginTop: "20px" }}>MongoDb</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiPostgresql size={80} />
										<h5 style={{ marginTop: "20px" }}>PostgresSql</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<DiNodejs size={80} />
										<h5 style={{ marginTop: "20px" }}>Node js</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiExpress size={80} />
										<h5 style={{ marginTop: "20px" }}>Express js</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<DiJavascript1 size={80} />
										<h5 style={{ marginTop: "20px" }}>javascript</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiTypescript size={80} />
										<h5 style={{ marginTop: "20px" }}>Typescript</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiMui size={80} />
										<h5 style={{ marginTop: "20px" }}>Material Ui</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiFlutter size={80} />
										<h5 style={{ marginTop: "20px" }}>Flutter</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiFigma size={80} />
										<h5 style={{ marginTop: "20px" }}>Figma</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<DiPython size={80} />
										<h5 style={{ marginTop: "20px" }}>Python</h5>
									</div>
								</Col>
							</Row>
							{/* </Carousel> */}
							<h2>Tools</h2>
							<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										{/* <img src={meter1} alt="Image" /> */}
										<DiGit size={80} />
										<h5 style={{ marginTop: "20px" }}>Git</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiPostman size={80} />
										<h5 style={{ marginTop: "20px" }}>Postman</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiVisualstudiocode size={80} />
										<h5 style={{ marginTop: "20px" }}>Vscode</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiHeroku size={80} />
										<h5 style={{ marginTop: "20px" }}>Heroku</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiNetlify size={80} />
										<h5 style={{ marginTop: "20px" }}>Netlify</h5>
									</div>
								</Col>
								<Col xs={4} md={2} className="tech-icons">
									<div className="item">
										<SiDocker size={80} />
										<h5 style={{ marginTop: "20px" }}>Docker</h5>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="Image" />
		</section>
	);
};
