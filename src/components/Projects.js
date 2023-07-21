import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/img/project-img1.png";
import project from "../assets/img/project-img2.png";
import lift from "../assets/img/project-img3.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/facemask.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Particle from "./Particle";

export const Projects = () => {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Recent Top <strong className="yellow">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={project1}
							isBlog={false}
							title="LIMS"
							description="I developed a powerful Laboratory Information Management System (LIMS) web application using the MERN stack. This comprehensive application allows users to efficiently manage every aspect of a laboratory, including equipment, customers, tests, animals, and records. Leveraging the capabilities of the MERN stack, which consists of MongoDB, Express.js, React.js, and Node.js, I was able to create a robust and scalable solution."
							ghLink="https://github.com/Sherlocked21B/lims"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={project2}
							isBlog={true}
							title="Thames Khabar"
							description="Thames Khabar stands out as an exceptional online news portal, leveraging the power of WordPress to provide a seamless and engaging news experience for its Nepali audience.Thames Khabar's WordPress-based platform boasts a user-friendly interface, ensuring easy navigation and a delightful reading experience for visitors.Built on the robust foundation of WordPress, Thames Khabar offers unparalleled customization options."
							demoLink="http://thameskhabar.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={project3}
							isBlog={false}
							title="Face mask detection System"
							description="Face Mask Detection model as an embedded vision system. The pretrained models such as the MobileNet, ResNet Classifier, and VGG are used in our context. People violating social distancing or not wearing masks were detected. After implementing and deploying the models, the selected one achieved a confidence score of 100%. This embedded vision-based application can be used in any working environment."
							ghLink="https://github.com/Sherlocked21B/Face_Mask_Detection"
						/>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</Container>
	);
};
