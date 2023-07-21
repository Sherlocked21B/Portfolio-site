import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
	return (
		<Card className="project-card-view">
			<Card.Img variant="top" src={props.imgPath} alt="card-img" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: "justify", fontColor: "Black" }}>
					{props.description}
				</Card.Text>
				{props.ghLink && (
					<Button variant="primary" href={props.ghLink} target="_blank">
						<BsGithub /> Github &nbsp;
					</Button>
				)}

				{"\n"}
				{"\n"}
				{props.isBlog && props.demoLink && (
					<Button
						variant="primary"
						href={props.demoLink}
						target="_blank"
						style={{ marginLeft: "10px" }}
					>
						<CgWebsite /> &nbsp;
						{"Demo"}
					</Button>
				)}
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
